const mongoose = require("mongoose");

const NoticeSchema = new mongoose.Schema({
  title: String,
  description: String,
}, {timestamps: true});

const Notice = mongoose.model("Notice", NoticeSchema);

module.exports = Notice;
