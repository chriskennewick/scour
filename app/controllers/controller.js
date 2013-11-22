
var $ = require("jquery"),
  Backbone = require("backbone"),
  Marionette = require("backbone.marionette");

//views
var IndexView = require("../views/index"),
    WelcomeView = require("../views/welcome"),
    HuntView = require("../views/hunt"),
    SignupView = require("../views/signup"),
    LoginView = require("../views/login"),
    HuntsCompositeView = require("../views/hunts");

var Hunts = require("../collections/hunts");

var Controller = {

  index: function() {
    var index = new IndexView();
    Scour.content.show(index);
  },
  showHunts: function() {
    var hunts = new Hunts();
    hunts.fetch({
      success: function(collection){
        var huntsCompositeView = new HuntsCompositeView({collection:collection});
        Scour.content.show(huntsCompositeView);    
      }
      //TODO ERROR CASE
    });
  },
  showHunt: function(id) {
  },
  showWelcome: function() {
    var welcome = new WelcomeView();
    Scour.content.show(welcome);
  },
  showSignUp: function() {
    var signup = new SignupView();
    Scour.content.show(signup);
  },
  showLogin: function() {
    var login = new LoginView();
    Scour.content.show(login);
  }
};


module.exports = Controller;
