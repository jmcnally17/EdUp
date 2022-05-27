var express = require('express');
var router = express.Router();

const SessionsController = require('../controllers/sessions');

router.get('/', SessionsController.New)

module.exports = router;