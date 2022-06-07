const passport = require("passport");

const SessionsController = {
  Create: (req, res, next) => {
    passport.authenticate("local", (err, user, info) => {
      if (err) {
        throw err;
      }
      if (!user) res.status(400).send("No user exists")
      else {
        req.logIn(user, (err) => {
          if (err) {
            throw err;
          };
          res.send("Successfully Authenticated");
          console.log(req.user);
        });
      }
    })(req, res, next);
  },

  Destroy: (req, res) => {
    res.clearCookie("connect.sid");
    res.clearCookie("rack.session");
    req.session.destroy();
    res.json({ msg: "You have logged out successfully!", type: "success" });
  },
};

module.exports = SessionsController;
