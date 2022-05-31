var express = require('express');
var router = express.Router();
const CalendarController = require("../controllers/calendarEvents");

router.get("/index", CalendarController.Index);
router.post('/', CalendarController.Create);

module.exports = router;