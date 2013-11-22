var Backbone = require("backbone"),
  Marionette = require("backbone.marionette"),
  template = require("../templates/signup.hbs");
  
var SignUpView = Backbone.Marionette.ItemView.extend({
  template: template
});

module.exports = SignUpView;