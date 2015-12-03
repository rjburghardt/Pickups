// Debugging
var bug = require('debug')
var debug = bug('rockit-express:api:user')

// Database
var db = require('../../lib/db')

// Router
var express = require('express')
var router = express.Router()

// Utility for changing case
var changeCase = require('../../lib/change-case')

// Get games owned by ID
router.get('/by-user/:id', function(req, res) {
  //debug('GET' + req.path)
  var id = req.params.id

  db.selectFile('get-games-by-user', {id: id}, function(error, rows) {
    if (error) {
      debug('DB Error', error)
      return res.status(500).send({ error })
    }

    res.json(rows.map(changeCase))
  })
})

router.get('/by-game/:id', function(req, res) {
  //debug('GET' + req.path)
  var id = req.params.id

  db.selectFile('get-games-by-game-id', {id: id}, function(error, rows) {
    if (error) {
      debug('DB Error', error)
      return res.status(500).send({ error })
    }

    res.json(rows.map(changeCase))
  })
})

module.exports = router