// Debugging
var bug = require('debug')
var debug = bug('rockit-express:api:user_game')

// Database
var db = require('../../lib/db')

// Router
var express = require('express')
var router = express.Router()

var changeCase = require('../../lib/change-case')

router.post('/', function(req, res) {
  //debug('POST' +  req.path + ',' + req.body)
  var values = changeCase(req.body)

  db.insert('user_game', values, function(error, id) {
    if (error) {
      debug('DB Error', error)
      if(error.code === "ER_DUP_ENTRY") {
        return res.status(403).send({ error })
      }
      return res.status(500).send({ error })
    }

    // Make a URL string
    var uri = req.originalUrl + '/' + id;

    // Redirect
    res.redirect('/index.html')

  })
})
  
//get = req.params post = req.body

export default router