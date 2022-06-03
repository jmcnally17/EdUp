const Payments = require("../../models/payments");
require("../mongodb_helper");
const mongoose = require("mongoose")

describe(Payments, () => {
  beforeEach((done) => {
    mongoose.connection.collections.payments.drop(() => {
      done();
    });
  });

  it("has a title, price and paid", () => {
    const payment = new Payments({
      title: "School fair",
      price: 200,
      paid: false
    });

    expect(payment.title).toBe("School fair");
    expect(payment.price).toBe(200);
    expect(payment.paid).toBe(false)
  });
});