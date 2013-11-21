var $ = require("jquery"),
    Backbone = require("backbone"),
    Marionette = require("backbone.marionette"),
    Router = require("./routers/router");
    

var Scour = window.Scour = require("./scour")($,Backbone,Marionette,Router);

$(document).ready(function(){
  Scour.start();
});
