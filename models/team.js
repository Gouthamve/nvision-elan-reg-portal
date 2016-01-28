'use strict';

let mongoose = require('mongoose');
let schema = mongoose.Schema;

let teamSchema = schema({
  id1: String,
  id2: String,
  id3: String,
  id4: String,
  id5: String,
  id6: String,
  id7: String,
  teamId: String,
  event: String
});

module.exports = mongoose.model('Team', teamSchema);

