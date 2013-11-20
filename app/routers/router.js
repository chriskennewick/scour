var Backbone = require("backbone");

var Router = Backbone.Router.extend({
  routes: {
    "": "index",
  },

  index: function() {
    console.log("INDEX WAS HIT");
  }
});

module.exports = Router;
