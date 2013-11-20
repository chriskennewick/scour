var Backbone = require("backbone");

var Router = Backbone.Router.extend({
  routes: {
    "": "index",
    "hunts": "hunts"
  },

  index: function() {
    console.log("INDEX WAS HIT");
  },

  hunts: function(){
    console.log("HUNTS WAS HIT");
  }
});

module.exports = Router;
