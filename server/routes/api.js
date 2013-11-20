module.exports = function(app) {
  app.get("/api", function(req, res) {
    res.send("Scour api is currently up and running");
  });
};
