/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var HuntSchema = new Schema({
  name: String,
  date: Date,
  location: {
    city: String,
    state: String,
  },
  sponsors: Array,
  registration_cost: Number,
  prizes: [{
    prize: String,
    clues: [{
      type: String,
      content: String
    }],
    rank : Number
  }],
  registrant_count : Number,
  registrant_limit : Number,
  registration_start_time : Date,
  status : String
});

module.exports = mongoose.model('Hunt', HuntSchema);
