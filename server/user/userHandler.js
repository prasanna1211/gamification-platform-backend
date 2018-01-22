'use strict'

const mongoose = require('mongoose');
const boom = require('boom')
const httpStatus = require('http-status')
const logger = require('../utils/logger')
const User = require("../../models/user")
const bcrypt = require('bcrypt')

function hashPassword(password, callback) {
  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(password, salt, (err, hash) => {
      return callback(err, hash);
    });
  });
}

const registerUser = async function (request, response) {
  const user = new User({
    firstName: request.payload.firstName,
    lastName: request.payload.lastName,
    email: request.payload.email,
    phoneNumber: request.payload.phoneNumber,
  });

  hashPassword(request.payload.password, (err, hash) => {
    if (err) {
      throw boom.badRequest(err);
    }

    user.password = hash;

    // TODO: Response errors should customized and in readable format.
    user.save((err, user) => {
      if (err) {
        response({error: 'Invalid details'});
      } else {
        response({ id: user.id, email: user.email, phoneNumber: user.phoneNumber });
      }

    });
  });
}

module.exports = {
  registerUser
}
