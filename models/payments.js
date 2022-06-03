const mongoose = require("mongoose");

const PaymentsSchema = new mongoose.Schema({
  title: String,
  price: Number,
  payee: String,
  paid: Boolean,
});

const Payments = mongoose.model("Payments", PaymentsSchema);

module.exports = Payments;