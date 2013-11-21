var Backbone = require("backbone"),
  Marionette = require("backbone.marionette");

var HuntView = Backbone.Marionette.ItemView.extend({
  template: "<h1>The name is</h1>"
});

module.exports = HuntView;