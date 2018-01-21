'use strict'

const joi = require('joi')

const userValidations = {
  // GET /getuserByCityName
  registerUser: {
    headers: {},
    payload: {
      firstName: joi.string().trim().required(),
      lastName: joi.string().trim().required(),
      email: joi.string().trim().required(),
      phoneNumber: joi.string().trim().required()
    },
    failAction: function (request, reply, source, error) {
      return reply({error: error.output.payload.message}).code(400);
    },
    options: {
      allowUnknown: true
    }
  }
}

module.exports = userValidations
