var Backbone = require("backbone"),
Hunt = require("../models/hunt");
    
var Hunts = Backbone.Collection.extend({
  model: Hunt,
  url: "/api/v1/hunts"
});

module.exports = Hunts;