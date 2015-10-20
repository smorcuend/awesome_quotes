/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /things              ->  index
 * GET     /things/:id          ->  show
 */

'use strict';

var _ = require('lodash');

var fs = require('fs');
var Thing = JSON.parse(fs.readFileSync('./server/api/thing/thing.seed.json', 'utf8'));

// var Thing = require('./thing.model');

// Get list of things
exports.index = function(req, res) {
  // Thing.find(function(err, things) {
  //   if (err) {
  //     return handleError(res, err);
  //   }
  //   return res.status(200).json(things);
  // });
  return res.status(200).json(Thing);
};

exports.random = function(req, res) {
  // Thing.find(function(err, things) {
  //   if (err) {
  //     return handleError(res, err);
  //   }
  //   var thing = things[Math.floor(0 + Math.random() * things.length)];
  //   return res.status(200).json(thing);
  // });
  var randomThing = Thing[Math.floor(0 + Math.random() * Thing.length)];
  return res.status(200).json(randomThing);
};

// Get a single thing
exports.show = function(req, res) {
  // Thing.findById(req.params.id, function(err, thing) {
  //   if (err) {
  //     return handleError(res, err);
  //   }
  //   if (!thing) {
  //     return res.status(404).send('Not Found');
  //   }
  //   return res.json(thing);
  // });
};

function handleError(res, err) {
  return res.status(500).send(err);
}