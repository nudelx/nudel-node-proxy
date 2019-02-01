var express = require('express')
var app = express()
var middleware = require('./common/middleware')
var spotify = require('./spotify/index')

app.use(middleware.cors)
app.use(middleware.log)
app.use(middleware.error)
spotify(app)

var server = app.listen(process.env.PORT || 5000, function() {
  var host = server.address().address
  var port = server.address().port
  console.log(`Go to => ${host || 'localhost'}:${port}`.green)
})
