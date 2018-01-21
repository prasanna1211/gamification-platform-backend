'use strict'

const config = require('config')

const userHandler = require('./userHandler')
const userValidations = require('./userValidations')

const API_PATH = '/' + config.get('app.name') + '/api/1.0'

const routes = []

routes.push({
  path: API_PATH + '/users/registration',
  method: 'POST',
  handler: userHandler.registerUser,
  config: {
    tags: ['api'],
    validate: userValidations.registerUser
  }
})

module.exports = routes