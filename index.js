var express = require('express')
var app = express()
var axios = require('axios')
var bodyParser = require('body-parser')
var links = require('./common/links')
var middleware = require('./common/middleware')
var output = require('./common/outputFormater')
var firebase = require('./common/authUsers')

app.use(middleware.cors)
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

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

app.post('/auth', (req, res) => {
  console.log(req.get('host'))
  firebase
    .auth()
    .signInWithEmailAndPassword('alex.nudelman@samanage.com', 'test123dfrs')
    .then(user => res.json({ uid: user.user.uid, status: 42 }))
    .catch(function(error) {
      var errorCode = error.code
      var errorMessage = error.message
      res.json({ errorCode, errorMessage })
    })
})

var server = app.listen(process.env.PORT || 5000, function() {})
