var express = require("express");
var router = express.Router();
const passport = require("passport");

const UsersController = require("../controllers/users");

router.get("/", UsersController.Index);
router.post("/", UsersController.Create);
router.get("/parents", UsersController.Parents);
router.post("/updatePassword", UsersController.UpdatePassword);

module.exports = router;
