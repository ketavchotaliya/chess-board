'use strict'

global.express = require('express')
global.expressValidator = require('express-validator')
global.helmet = require('helmet') // security package
global.BASE_PATH = __dirname
global.moment = require('moment')
// configuration file
global.config = require('./configuration/config')
global.constants = require('./utils/constants')

console.info(`Application is runnign at port :${config.get('server.port')}`)

console.info(`Swagger Doc is running at :${config.get('server.host')}:${config.get('server.port')}/api-docs/#/`)

global.helpers = require('./utils/helper')
global.messages = require('./utils/messages')

const app = express() // create an instance of an express

// create an instance of swagger-ui for api-doc
require('./lib/swaggerApiDoc')(app)

app.use(express.json({ limit: '1000mb' }))
// app.use(express.urlencoded({ limit: '1000mb' }))

app.use(helmet())

app.disable('x-powered-by')
app.disable('etag') // this will disable etag to restrict 304 status

app.use('/api/v1/', require('./routes/index'))

// catch 404 and forward to error handler
app.use((req, res, next) => {
  var err = new Error('Bad Request')
  err.status = constants.NOT_FOUND
  next(err)
})

function exitHandler () {
  console.error(__filename, '', 'Exit handler')
  process.exit(1)
}

// Node JS event signal for exception handling
[ 'exit', 'SIGINT', 'SIGUSR1', 'SIGUSR2', 'uncaughtException',
  'SIGTERM' ].forEach((eventType) => {
  process.on(eventType, exitHandler.bind())
})


// any missed exception handle will handle here
app.use((err, req, res, next) => {
  console.error(__filename, '', 'last error handled', err.stack)
  console.debug(__filename, 'server error handle', req.method, req.url)
  var statusCode = err.status || constants.SERVER_ERROR

  helpers.createResponse(res, statusCode,
    messages.INTERNAL_SERVER_ERROR,
    {
      error: messages.INTERNAL_SERVER_ERROR
    }
  )
})

module.exports = app
