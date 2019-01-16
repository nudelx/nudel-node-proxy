const request = require('request')
const querystring = require('querystring')
const secret = require('../token.json')

module.exports = function(app) {
  app.get('/spotify/login', function(req, res, next) {
    res.redirect(
      'https://accounts.spotify.com/authorize?' +
        querystring.stringify({
          response_type: 'code',
          client_id: secret.client_id,
          scope: 'user-read-private user-read-email',
          redirect_uri: secret.redirect_uri
        })
    )
  })

  app.get('/spotify/callback', function(req, res, next) {
    let code = req.query.code || null
    let authOptions = {
      url: 'https://accounts.spotify.com/api/token',
      form: {
        code,
        redirect_uri: secret.redirect_uri,
        grant_type: 'authorization_code'
      },
      headers: {
        Authorization: `Basic ${new Buffer(
          `${secret.client_id}:${secret.client_secret}`
        ).toString('base64')}`
      },
      json: true
    }
    request.post(authOptions, function(error, response, body) {
      const access_token = body.access_token
      res.send(`access_token ==> ${access_token}`)

      // let uri = 'http://localhost:5000'
      // res.redirect(uri + '?access_token=' + access_token)
    })
  })
}
