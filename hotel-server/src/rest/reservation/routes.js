/*jshint esversion: 6 */
var express = require('express');
var router = express.Router();

const reservationController = require('./controller')

// custom searches
router.get('/reservations', reservationController.findAll);
router.get('/reservation/:id', reservationController.findById);

// add and update record
router.post('/reservation', reservationController.save);
module.exports = router;