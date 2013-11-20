var Backbone = require("backbone");

var User = Backbone.Model.extend({
  defaults: {
    name: "",
    email: ""
  }
});

module.exports = User;
