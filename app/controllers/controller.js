
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
    console.log("/ hit");
    var index = new IndexView();
    Scour.content.show(index);
  },
  showHunts: function() {
    console.log("/hunts hit");
    var hunts = new Hunts();
    hunts.fetch({
      success: function(collection){
        console.log("COLLECTION:");
        console.dir(collection);
        var huntsCompositeView = new HuntsCompositeView({collection:collection});
        Scour.content.show(huntsCompositeView);    
      }
    });
    //hunts.render().done(function(){
      //Scour.content.show(this);
    //});
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
    var signup = new SignupView();
    Scour.content.show(signup);
  },
  showLogin: function() {
    console.log("/login hit");
    var login = new LoginView();
    Scour.content.show(login);
  }
};


module.exports = Controller;
