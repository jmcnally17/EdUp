let express = require("express");
let router = express.Router();

const SessionsController = require("../controllers/sessions");

router.post("/login", (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    if (err) throw err;
    if (!user) res.send("No User Exists");
    else {
      req.logIn(user, (err) => {
        if (err) throw err;
        res.send("Successfully Authenticated");
        console.log(req.user);
      });
    }
  })(req, res, next);
});

router.get("/user", (req, res) => {
  res.send(req.user);
});

module.exports = router;
