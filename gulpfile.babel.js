'use strict';
const gutil = require('gulp-util');
const gulp = require('gulp');
const del = require('del');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const browserify = require('browserify');
const babelify = require('babelify');
const uglify = require('gulp-uglify');
const source = require('vinyl-source-stream');

const pub = './public/';
const css = './public/css';
const scripts = './public/scripts';

gulp.task('clean', function () {
  return del([ scripts])
});

gulp.task('uglify', function() {
  return gulp.src('./src/scripts')
    .pipe(uglify())
    .pipe(gulp.dest(scripts));
});

gulp.task('lint', function() {
  return gulp.src(scripts)
    .pipe(jshint({
      node: true
    }))
    .pipe(jshint.reporter('default'));
});

gulp.task('autoprefix', function () {
  return gulp.src(css)
  .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
  }))
  .pipe(gulp.dest(css));
});

gulp.task('sass', function () {
  gulp.src('./src/sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(css));
});

const bundler = browserify({
  entries: ['./src/scripts'],
  debug: true,
  sourceType: 'module'
});

bundler.transform('babelify', {presets: ['es2015', 'react']});

bundler.on('log', gutil.log);

gulp.task('build', ['clean', 'sass'], function () {
  return bundler.bundle()
    // log errors if they happen
    .on('error', gutil.log.bind(gutil, 'Browserify Error'))
    // set output filename
    .pipe(source('bundle.js'))
    .pipe(gulp.dest(scripts));
});

gulp.task('watch', function() {
  gulp.watch(['./src/**/**/*.js', './src/**/*.scss'], ['build'])
});