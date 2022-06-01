var express = require('express');
var router = express.Router();
const CalendarController = require("../controllers/calendarEvents");

router.get("/index", CalendarController.Index);
router.post('/', CalendarController.Create);
router.delete('/delete/:id', CalendarController.Delete)

module.exports = router;