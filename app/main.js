//var Scour = require("./scour"),
var $ = require("jquery"),
  HuntItemView = require("./views/hunt.js"),
  Router = require("./routers/router"),
  _ = require("underscore"),
  template = require("./templates/hello.hbs");

var Scour = new Backbone.Marionette.Application();
Scour.addRegions({
  content: "#content"
});

Scour.on("start",function(){
  Backbone.history.start();
});

Scour.router = new Router();

var HuntView = Backbone.Marionette.ItemView.extend({
  template: template({name: "World"})
});

Scour.addInitializer(function(options){
  var hunt = new HuntView();  
  console.log(hunt);
  console.log(Scour.content);
  Scour.content.show(hunt);
});

$(document).ready(function(){
  Scour.start();
});
