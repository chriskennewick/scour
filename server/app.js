/**
 * Module dependencies.
 */

var express = require("express");
//var routes = require('./routes');
//var user = require('./routes/user');
var http = require("http");
var path = require("path");
var mongoose = require("mongoose");
var restify = require("express-restify-mongoose");
var Hunt = require("./models/hunt.js");

var app = express();

mongoose.connect("mongodb://localhost/scour");

// all environments
app.set("port", process.env.PORT || 3000);

app.use(express.logger("dev"));
app.use(express.static(path.join(__dirname, "../public")));
app.use(express.static(path.join(__dirname, "../static_mockups/")));
app.use(express.bodyParser());
app.use(express.methodOverride());
restify.serve(app, Hunt);
app.use(app.router);

// development only
if ("development" === app.get("env")) {
  app.use(express.errorHandler());
}

//routes
//require("./routes/api")(app);
//require("./routes/user")(app);
//require("./routes/hunt")(app);
//require("./routes/company")(app);

http.createServer(app).listen(app.get('port'), function() {
  console.log('Express server listening on port ' + app.get('port'));
});
