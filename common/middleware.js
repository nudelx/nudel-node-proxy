var chalk = require('chalk')

module.exports = {
  cors: function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*')
    res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept'
    )
    next()
  },

  log: function(req, res, next) {
    console.log(
      chalk.green('NUDEL-PROXY:'),
      chalk.cyan(new Date().toString()),
      chalk.cyan(req.method),
      chalk.cyan(req.url)
    )
    next()
  },

  error: function(err, req, res, next) {
    console.error(err.stack)
    res.status(500).send('Something broke!')
  }
}
