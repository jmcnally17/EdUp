var express = require("express");
var router = express.Router();
const NoticesController = require("../controllers/notices");

router.get("/index", NoticesController.Index);
router.post("/", NoticesController.Create);

module.exports = router;
