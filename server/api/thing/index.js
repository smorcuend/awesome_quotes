'use strict';

var express = require('express');
var controller = require('./thing.controller');

var router = express.Router();

router.get('/', controller.index);
router.get('/random/', controller.random);
router.get('/:id', controller.show);

module.exports = router;