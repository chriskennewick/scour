/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
  Schema = mongoose.Schema;


/**
 * Hunt Schema
 * hunt = {

  id : ObjectId("52898e49537e8fe31dc143d1"),
  date : ISODate("2013-11-18T03:49:57.699Z"),
  location : {
    city : "seattle",
    state : "washington"
  },
  sponsors : [],
  registration_cost : "",
  prizes : [{
    prize : "ps4",
    clues : [{
      type : "audio|video|image",      
    }],
    rank : 1
  }]
  registrants : [
  ]
  registrant_limit : 100,
  registration_begin_time : ISODate("2013-11-18T03:49:57.699Z")
  status : ""

}
 */
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
  registrants : Array,
  registrant_limit : Number,
  registration_start_time : Date,
  status : String
});

/**
 * Validations
 */
HuntSchema.path('name').validate(function(name) {
  return title.length;
}, 'Name cannot be blank');

/**
 * Statics
*/
HuntSchema.statics = {
  load: function(id, cb) {
    this.findOne({
      _id: id
    }).exec(cb);
  }
};
 

mongoose.model('Hunt', HuntSchema);
