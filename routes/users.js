var express = require('express');
var router = express.Router();

const UsersController = require("../controllers/users");

/* GET users listing. */
router.get('/', UsersController.Index);
router.post("/", UsersController.Create);

module.exports = router;
