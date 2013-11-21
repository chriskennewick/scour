
module.exports = function($,Backbone,Marionette,Router){
  var scour = new Backbone.Marionette.Application();

  scour.addRegions({
    content: "#content"
  });

  scour.on("start", function() {
    Backbone.history.start();
  });

  scour.router = new Router();

  return scour;
};
