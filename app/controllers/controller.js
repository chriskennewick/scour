var IndexView = require("../views/index");
var WelcomeView = require("../views/welcome");
var HuntView = require("../views/hunt");
var $ = require("jquery"),
  Backbone = require("backbone"),
  Marionette = require("backbone.marionette");

var Controller = {

  index: function() {
    console.log("/ hit");
    var index = new IndexView();
    Scour.content.show(index);
  },
  showHunts: function() {
    console.log("/hunts hit");
  },
  showHunt: function(id) {
    console.log("/hunts/:id hit");
  },
  showWelcome: function() {
    console.log("/welcome hit");
    var welcome = new WelcomeView();
    Scour.content.show(welcome);
  },
  showSignUp: function() {
    console.log("/signup hit");
  },
  showLogin: function() {
    console.log("/login hit");
  }
};


module.exports = Controller;
