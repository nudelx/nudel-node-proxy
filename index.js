var express = require('express')
var app = express()
var axios = require('axios')
var links = require('./common/links')
var middleware = require('./common/middleware')
var output = require('./common/outputFormater')

app.use(middleware.cors)

app.get(links.SSP.BLOCK_BUGS_URL, function(req, res) {
  axios
    .get(links.SSP.BLOCK_BUGS_LINK)
    .then(data => output.jsonOut(data)(res))
    .catch(err => console.log(err))
})

app.get(links.SSF.BLOCK_BUGS_URL, function(req, res) {
  axios
    .get(links.SSF.BLOCK_BUGS_LINK)
    .then(data => output.jsonOut(data)(res))
    .catch(err => console.log(err))
})

app.get(links.SSF.ALL_BUGS_URL, function(req, res) {
  axios
    .get(links.SSF.ALL_BUGS_LINK)
    .then(data => output.jsonOut(data)(res))
    .catch(err => console.log(err))
})

app.get(links.SSP.ALL_BUGS_URL, function(req, res) {
  axios
    .get(links.SSP.ALL_BUGS_LINK)
    .then(data => output.jsonOut(data)(res))
    .catch(err => console.log(err))
})

var server = app.listen(process.env.PORT || 5000, function() {
  var host = server.address().address
  var port = server.address().port

  // console.log('The app listening at http://%s:%s', host, port)
  // console.log('HELLO SamNext !!!!')
})
