var Backbone = require("backbone"),
  Marionette = require("backbone.marionette"),
  template = require("../templates/signup.hbs");
  
var LoginView = Backbone.Marionette.ItemView.extend({
  template: template
});

module.exports = LoginView;