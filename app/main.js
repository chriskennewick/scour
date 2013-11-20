var Scour = require("./scour"),
  jquery = require("jquery"),
  Backbone = require("backbone"),
  Router = require("./routers/router");

Scour.router = new Router();

Backbone.history.start({
  pushState: true,
  root: "/"
});
