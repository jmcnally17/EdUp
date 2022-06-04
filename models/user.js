const mongoose = require("mongoose");
const user = new mongoose.Schema({
  username: String,
  password: String,
  admin: Boolean,
  phoneNumber: Number,
});

module.exports = mongoose.model("User", user);
