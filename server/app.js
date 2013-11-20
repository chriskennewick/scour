/**
 * Module dependencies.
 */

var express = require("express");
//var routes = require('./routes');
//var user = require('./routes/user');
var http = require("http");
var path = require("path");

var app = express();

// all environments
app.set("port", process.env.PORT || 3000);

app.use(express.logger("dev"));
app.use(express.static(path.join(__dirname, "../public")));
  
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);

console.log(__dirname);

// development only
if ("development" === app.get("env")) {
  app.use(express.errorHandler());
}

//routes
app.get("/hello", function(req, res) {
  console.log("hello");
  res.send("hello");
});
//require("./route/user")(app);
//require("./route/hunt")(app);
//require("./route/company")(app);

http.createServer(app).listen(app.get('port'), function() {
  console.log('Express server listening on port ' + app.get('port'));
});
