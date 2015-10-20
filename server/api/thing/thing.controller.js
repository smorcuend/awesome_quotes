/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /things              ->  index
 * GET     /things/:id          ->  show
 */

'use strict';

var _ = require('lodash');
var Thing = require('./thing.model');

// Get list of things
exports.index = function(req, res) {
  Thing.find(function(err, things) {
    if (err) {
      return handleError(res, err);
    }
    return res.status(200).json(things);
  });
};

exports.random = function(req, res) {
  Thing.find(function(err, things) {
    if (err) {
      return handleError(res, err);
    }
    var thing = things[Math.floor(0 + Math.random() * things.length)];
    return res.status(200).json(thing);
  });
};

// Get a single thing
exports.show = function(req, res) {
  Thing.findById(req.params.id, function(err, thing) {
    if (err) {
      return handleError(res, err);
    }
    if (!thing) {
      return res.status(404).send('Not Found');
    }
    return res.json(thing);
  });
};

function handleError(res, err) {
  return res.status(500).send(err);
}