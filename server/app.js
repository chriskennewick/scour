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

var connectionString = "mongodb://localhost/scour";
if (process.env.NODE_ENV == "production") {
  connectionString = "mongodb://heroku:cc7fe78c70e476c8d9f29cfd2f1420e9@linus.mongohq.com:10082/app19650718"
}

mongoose.connect(connectionString);

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
