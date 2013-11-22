var Backbone = require("backbone"),
  Marionette = require("backbone.marionette"),
  jquery = require("jquery"),
  HuntView = require("../views/hunt"),
  template = require("../templates/hunts.hbs");

var HuntsCompositeView = Marionette.CompositeView.extend({
  template: template,
  itemView: HuntView,
  appendHtml: function(compositeView,itemView){
    console.log("appending to view");
    compositeView.$("#hunts").append(itemView.el);
  }
});

module.exports = HuntsCompositeView;
