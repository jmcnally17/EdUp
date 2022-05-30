let express = require("express");
let router = express.Router();
const User = require('../models/user');

router.post('/', (req, res) => {
  console.log(req.body);
  const email = req.body.email
  const password = req.body.password

  User.findOne({email: email}).then((user) => {
    console.log(`hi ${user.email}`);
    res.json({ user: user.email });
  })

})

module.exports = router;
