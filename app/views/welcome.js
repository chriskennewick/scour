var Backbone = require("backbone"),
  Marionette = require("backbone.marionette"),
  template = require("../templates/welcome.hbs");
  
var WelcomeView = Backbone.Marionette.ItemView.extend({
  template: template
});

module.exports = WelcomeView;