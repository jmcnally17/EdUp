const mongoose = require("mongoose");

const CalendarSchema = new mongoose.Schema({
  title: String,
  description: String,
  date: String,
});

const Calendar = mongoose.model("Calendar", CalendarSchema);

module.exports = Calendar;