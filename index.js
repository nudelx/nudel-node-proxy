var express = require('express')
var app = express()

app.get('/', function(req, res) {
  res.send('Hello SamNext  from  bla')
})

var server = app.listen(process.env.PORT || 5000, function() {
  var host = server.address().address
  var port = server.address().port

  console.log('The app listening at http://%s:%s', host, port)
  console.log('HELLO SamNext !!!!')
})
