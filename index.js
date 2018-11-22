var express = require('express')
var app = express()
var axios = require('axios')
var token = require('./token.json')

var SSP_LINK =
  'https://samanage.tpondemand.com/api/v1/Bugs?where=(Tags%20contains%20%27*block*%27%20)and(EntityState.Name%20not%20contains%20%20%27Code%27)and(EntityState.Id%20ne%20%27174%27)and(EntityState.Id%20ne%20%20%27225%27)and(EntityState.Name%20not%20contains%20%20%27*Deploy*%27)and(EntityState.Name%20not%20contains%20%20%27*Design*%27)and(EntityState.Name%20not%20contains%20%20%27*Live*%27)and(Project.Name%20contains%20%27SSP%27)&take=100&access_token=' +
  token.key
var SSF_LINK =
  'https://samanage.tpondemand.com/api/v1/Bugs?where=(Tags%20contains%20%27*block*%27%20)and(EntityState.Name%20not%20contains%20%20%27Code%27)and(EntityState.Id%20ne%20%27174%27)and(EntityState.Id%20ne%20%20%27225%27)and(EntityState.Name%20not%20contains%20%20%27*Deploy*%27)and(EntityState.Name%20not%20contains%20%20%27*Design*%27)and(EntityState.Name%20not%20contains%20%20%27*Live*%27)and(Project.Name%20contains%20%27SSF%27)&take=100&access_token=' +
  token.key

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  )
  next()
})
app.get('/SSP', function(req, res) {
  axios.get(SSP_LINK).then(data => {
    // console.log(data.data)
    res.setHeader('Content-Type', 'application/json')
    res.send(JSON.stringify(data.data))
  })
})

app.get('/SSF', function(req, res) {
  axios.get(SSF_LINK).then(data => {
    // console.log(data.data)
    res.setHeader('Content-Type', 'application/json')
    res.send(JSON.stringify(data.data))
  })
})

var server = app.listen(process.env.PORT || 5000, function() {
  var host = server.address().address
  var port = server.address().port

  console.log('The app listening at http://%s:%s', host, port)
  console.log('HELLO SamNext !!!!')
})
