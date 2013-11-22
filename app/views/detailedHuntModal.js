var Backbone = require("backbone"),
  Marionette = require("backbone.marionette"),
  template = require("../templates/detailedHuntModal.hbs");
  
var DetailedHuntModalView = Backbone.Marionette.ItemView.extend({
  template: template
});

module.exports = DetailedHuntModalView;