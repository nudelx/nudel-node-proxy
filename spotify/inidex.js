var express = require('express')
var colors = require('colors')

module.exports = function(app) {
  app.get('/spotify/login', function(req, res, next) {
    console.log(`spotify req.params`.red)
    res.send('here')
  })
}
