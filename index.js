var express = require('express')
var colors = require('colors')
var app = express()
var axios = require('axios')
// var links = require('./common/links')
var middleware = require('./common/middleware')
var output = require('./common/outputFormater')
var spotify = require('./spotify/inidex')

app.use(middleware.cors)
app.use(middleware.log)
spotify(app)

var server = app.listen(process.env.PORT || 5000, function() {
  var host = server.address().address
  var port = server.address().port
  console.log(`Go to => ${host || 'localhost'}:${port}`.green)
})
