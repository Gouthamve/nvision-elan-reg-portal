'use strict';

let mongoose = require('mongoose');
let schema = mongoose.Schema;

let userSchema = schema({
  name: String,
  email: {
    type: String,
    unique: true
  },
  college: String,
  phone: String,
  iithId: String,
  gender: String
});

module.exports = mongoose.model('User', userSchema);

