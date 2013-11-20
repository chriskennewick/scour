module.exports = function(app) {
  app.get("/api/hunts", function(req, res) {
    res.send("Hit api/hunts");
  });
};
