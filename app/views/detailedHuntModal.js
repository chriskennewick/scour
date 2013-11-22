var Backbone = require("backbone"),
  Marionette = require("backbone.marionette"),
  template = require("../templates/detailedHuntModal.hbs");
  
var DetailedHuntModalView = Backbone.Marionette.ItemView.extend({
  template: template,
  events : {
    "click button.close" : "showHunts"
  },
  showHunts: function(){
    Scour.router.navigate("/hunts");
  }

});

module.exports = DetailedHuntModalView;