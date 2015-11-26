// imports
import React from 'react'
import { render } from 'react-dom'
import Create from './components/Create/Create.js'
import Search from './components/Search/Search.js'
import Join from './components/Search/Join/Join.js'
import Pickups from './components/Pickups/Pickups.js'
import Profile from './components/Profile/Profile'
import Backbone from 'backbone'

const main = document.querySelector('main')

const Router = Backbone.Router.extend({
  routes:{
    'pickups(/)': 'index',
    'pickups/search(/)': 'searchGames',
    'pickups/search/join/:id(/)': 'joinGame',
    'pickups/create(/)': 'createGame',
    'pickups/profile/:id(/)': 'playerProfile'
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
    render(<Join gameId={id} />, main)
  },
  playerProfile(id) {
    render(<Profile userId={id} />, main)
  }
})

const router = new Router

Backbone.history.start();