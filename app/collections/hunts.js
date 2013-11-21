var Backbone = require("backbone"),
Hunt = require("../models/hunt");
    
var Hunts = Backbone.Collection.extend({
  model: Hunt
});

