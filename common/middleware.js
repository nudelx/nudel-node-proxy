const chalk = require('chalk')
const colors = require('colors')

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
    console.log('\n=============== LOG ==============='.cyan)
    console.log(
      chalk.cyan('NUDEL-PROXY:'),
      chalk.cyan(new Date().toString()),
      chalk.cyan(req.method),
      chalk.cyan(req.url)
    )
    console.log(`req.url params ${JSON.stringify(req.params)}`.magenta)
    console.log(`query ${JSON.stringify(req.query)}`.magenta)
    console.log('\n')
    next()
  },

  error: function(err, req, res, next) {
    console.error(err.stack)
    res.status(500).send('Something broke!')
  }
}
