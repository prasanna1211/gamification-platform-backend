'use strict'

const mongoose = require('mongoose');
const boom = require('boom')
const httpStatus = require('http-status')
const logger = require('../utils/logger')
const User = require("../../models/user")

const registerUser = async function (request, response) {
  const user = new User({
    firstName: request.payload.firstName,
    lastName: request.payload.lastName,
    email: request.payload.email,
    phoneNumber: request.payload.phoneNumber,
  });

  user.save(function(error, user) {
    if (error) {
        console.error(error);
    }

    response(user);
  });
}

module.exports = {
  registerUser
}
