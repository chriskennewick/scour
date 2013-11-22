var Backbone = require("backbone"),
  Marionette = require("backbone.marionette"),
  DetailedHuntModalView = require("../views/detailedHuntModal"),
  template = require("../templates/hunt.hbs");
  
var HuntView = Backbone.Marionette.ItemView.extend({
  template : template,
  tagName: "li",
  className: "col-md-3",
  //
  events : {
    "click img" : "showDetailedHunt"
  },
  
  showDetailedHunt : function(){
    var detailedHuntView = new DetailedHuntModalView({model: this.model});
    Scour.modal.show(detailedHuntView);
  }
});

module.exports = HuntView;