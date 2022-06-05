const mongoose = require("mongoose");
const user = new mongoose.Schema({
  username: String,
  password: String,
  admin: Boolean,
  phone: String,
});

module.exports = mongoose.model("User", user);
