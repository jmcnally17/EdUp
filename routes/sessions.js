let express = require("express");
let router = express.Router();

const SessionsController = require("../controllers/sessions");

router.post("/", SessionsController.Create);

module.exports = router;
