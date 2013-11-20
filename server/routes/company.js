module.exports = function(app) {
  app.get("/api/companies", function(req, res) {
    res.send("Hit api/companies");
  });
};
