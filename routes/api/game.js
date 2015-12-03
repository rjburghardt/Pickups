// Debugging
var bug = require('debug')
var debug = bug('rockit-express:api:game')

// Database
var db = require('../../lib/db')

// Router
var express = require('express')
var router = express.Router()

var changeCase = require('../../lib/change-case')

// Create a game
router.post('/', function(req, res) {
  //debug('POST' +  req.path + ',' + req.body)
  var values = changeCase(req.body)

  db.insert('game', values, function(error, id) {
    console.log(error);
    if (error) {
      debug('DB Error', error)
      // if(error.code === "ER_DUP_ENTRY") {
      //   return res.status(403).send({ error })
      // }
      return res.status(500).send({ error })
    }

    // Make a URL string
    var uri = req.originalUrl + '/' + id;

    // Redirect
    res.redirect('http://localhost:3000/#/pickups/search')

  })
})
  
//get = req.params post = req.body

export default router