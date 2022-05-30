var express = require('express');
var router = express.Router();
let NoticesController = require("../controllers/notices");

router.post('/notice', NoticesController.Create);

module.exports = router;
