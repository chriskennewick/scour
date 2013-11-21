var Backbone = require("backbone"),
  Marionette = require("backbone.marionette"),
  template = require("../templates/welcome.hbs");
  
var IndexView = Backbone.Marionette.ItemView.extend({
  template: template
});

module.exports = IndexView;