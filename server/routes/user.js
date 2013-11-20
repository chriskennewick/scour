/*
 * GET users listing.
 */

module.exports = function(app) {
  app.get("/api/users", function(req, res) {
    res.send("Hit api/users");
  });
};
