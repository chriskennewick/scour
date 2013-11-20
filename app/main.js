var Backbone = require("backbone"),
  Router = require("./routers/router"),
  Scour = require("./scour");

Scour.router = new Router();

Backbone.history.start({
  root: "/"
});
