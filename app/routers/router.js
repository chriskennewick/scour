var $ = require("jquery"),
    Backbone = require("backbone"),
    Marionette = require("backbone.marionette"),
    Controller = require("../controllers/controller.js");

var Router = Backbone.Marionette.AppRouter.extend({
  controller: Controller,
  appRoutes: {
    "": "index",
    "hunts": "showHunts",
    "hunts/:id": "showHunt",
    "welcome": "showWelcome",
    "signup" : "showSignUp",
    "login" : "showLogin"
  }
});

module.exports = Router;
