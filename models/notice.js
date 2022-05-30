const mongoose = require("mongoose");

const NoticeSchema = new mongoose.Schema({
  title: String,
  subTitle: String,
  description: String,
});

const Notice = mongoose.model("Notice", NoticeSchema);

module.exports = Notice;