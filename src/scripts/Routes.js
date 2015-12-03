// imports
import React from 'react'
import { render } from 'react-dom'
import Create from './components/Create/Create'
import Search from './components/Search/Search'
import Join from './components/Search/Join/Join'
import Pickups from './components/Pickups/Pickups'
import Profile from './components/Profile/Profile'
import Edit from './components/Create/Edit/Edit'
import Error from './components/Error/Error'
import Backbone from 'backbone'

const main = document.querySelector('main')

const Router = Backbone.Router.extend({
  routes:{
    'pickups(/)': 'index',
    'pickups/search(/)': 'searchGames',
    'pickups/search/join/:id(/)': 'joinGame',
    'pickups/create(/)': 'createGame',
    'pickups/profile/:id(/)': 'playerProfile',
    'pickups/create/:id/edit(/)': 'editGame'
  },

  index() {
    render(<Pickups />, main)
  },

  searchGames() {
    render(<Search />, main)
  },

  createGame()  {
    render(<Create />, main)
  },

  joinGame(id) {
    render(<Join gameId = {id} />, main)
  },

  playerProfile(id) {
    render(<Profile userId = {id} />, main)
  },

  editGame(id) {
    render(<Edit gameId = {id} />, main)
  }
})

const router = new Router

Backbone.history.start();