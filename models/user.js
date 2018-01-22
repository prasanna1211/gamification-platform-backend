const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var UserSchema = new Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, index: { unique: true } },
    phoneNumber: { type: Number, required: true },
    password: { type: String, required: true }
},{
    versionKey: false
});

module.exports = mongoose.model('User', UserSchema);