var Backbone = require("backbone");

var Router = Backbone.Router.extend({
  routes: {
    "": "index",
    "hunts": "showHunts"
  },

  index: function() {
    console.log("INDEX WAS HIT");
  },

  showHunts: function(){
    console.log("HUNTS WAS HIT");
  }
});

module.exports = Router;
