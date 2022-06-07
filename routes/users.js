var express = require("express");
var router = express.Router();
const passport = require("passport");

const UsersController = require("../controllers/users");

router.get("/", UsersController.Index);
router.post("/", UsersController.Create);
router.get("/parents", UsersController.Parents);
router.post("/updatePassword", UsersController.UpdatePassword);
router.post("/logout", function (req, res) {
  console.log("1");
  console.log(req.session);
  req.logOut();
  req.session.destroy();
  console.log("2");
  console.log(req.session);
});

module.exports = router;
