let express = require("express");
let router = express.Router();
const User = require('../models/user');

router.post('/', (req, res) => {
  const email = req.body.email
  const password = req.body.password

  User.findOne({email: email}).then((user) => {
    if (user && (password === user.password)) {
      console.log(`${user.id}`);
      res.json({
        user: {
          id: user.id, 
          email: user.email
        }
      })
    } else {
      console.log('test2');
    }
  })

})

module.exports = router;
