const User = require("../models/user");
const bcrypt = require("bcryptjs");

const UsersController = {
  Index: (req, res) => {
    res.send(req.user); // The req.user stores the entire user that has been authenticated inside of it.
  },

  Create: (req, res) => {
    User.findOne({ username: req.body.username }, async (err, doc) => {
      if (err) throw err;
      if (doc) res.send("User Already Exists");
      if (!doc) {
        const hashedPassword = await bcrypt.hash(req.body.password, 10);

        const newUser = new User({
          username: req.body.username,
          password: hashedPassword,
          admin: req.body.admin,
        });
        await newUser.save();
        res.send("User Created");
      }
    });
  },

  Parents: (req, res) => {
    User.find({ admin: false }).exec((err, parents) => {
      if (err) {
        throw err;
      }
      res.json({
        parents: parents
      })
    }
  )}
};

module.exports = UsersController;
