var mongoose = require('mongoose'),
  //async = require('async'),
  Hunt = mongoose.model('Hunt'),
  _ = require('underscore');


/**
 * Find hunt by id
 */
exports.hunt = function(req, res, next, id) {
  Hunt.load(id, function(err, hunt) {
    if (err) {
      return next(err);
    }
    if (!hunt) {
      return next(new Error('Failed to get'));
    }
  });
};



