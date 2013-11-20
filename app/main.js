var Scour = require("./scour"),
  jquery = require("jquery"),
  Backbone = require("backbone"),
  Router = require("./routers/router"),
  $ = Backbone.$ = window.$;

Scour.router = new Router();

Backbone.history.start({
  pushState: true,
  root: "/"
});
