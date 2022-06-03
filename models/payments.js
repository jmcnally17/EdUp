const mongoose = require("mongoose");

const PaymentsSchema = new mongoose.Schema({
  title: String,
  price: Number,
  paid: Boolean
});

const Payments = mongoose.model("Payments", PaymentsSchema);

module.exports = Payments;