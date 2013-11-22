var Backbone = require("backbone"),
  Marionette = require("backbone.marionette"),
  _ = require("underscore");

var ModalRegion = Backbone.Marionette.Region.extend({
  el: "#modal",

  constructor: function() {
    _.bindAll.apply(_, [this].concat(_.functions(this)));
    Backbone.Marionette.Region.prototype.constructor.apply(this, arguments);
    this.on("show", this.showModal, this);
  },

  getEl: function(selector) {
    var $el = $(selector);
    $el.on("hidden", this.close);
    return $el;
  },

  showModal: function(view) {
    view.on("close", this.hideModal, this);
    this.$el.modal('show');
  },

  hideModal: function() {
    this.$el.modal('hide');
    Scour.router.navigate("/hunts");
  }
});

module.exports = ModalRegion;
