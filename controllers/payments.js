const Payments = require("../models/payments");
require("dotenv").config();
const stripe = require("stripe")(process.env.API_KEY);

const PaymentsController = {
  Index: (req, res) => {
    Payments.find({ paid: false }).exec((err, payments) => {
      if (err) {
        throw err;
      }
      res.json({
        payments: payments,
      });
    });
  },

  CreateInvoice: (req, res) => {
    const item = {
      title: req.body.title,
      price: req.body.price,
      payee: req.body.payee,
      paid: false,
    };
    const payment = new Payments(item);
    payment.save((err) => {
      if (err) {
        throw err;
      }
      res.status(200);
    });
  },

  Pay: async (req, res) => {
    let successUrl;
    if (process.env.REACT_APP_URL) {
      successUrl = `${process.env.REACT_APP_URL}/backend/payments/update`;
    } else {
      successUrl = "http://localhost:9000/backend/payments/update";
    }

    let cancelUrl;
    if (process.env.REACT_APP_URL) {
      cancelUrl = `${process.env.REACT_APP_URL}/payments`;
    } else {
      cancelUrl = "http://localhost:3000/payments";
    }

    let priceInPounds = req.params.price * 100;

    const sessions = await stripe.checkout.sessions.create({
      line_items: [
        {
          price_data: {
            currency: "gbp",
            product_data: {
              name: req.params.title,
            },
            unit_amount: priceInPounds,
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: `${successUrl}/${req.params.id}/${req.params.phone}`,
      cancel_url: cancelUrl,
    });
    res.redirect(303, sessions.url);
  },

  PayAll: async (req, res) => {
    let successUrl;
    if (process.env.REACT_APP_URL) {
      successUrl = `${process.env.REACT_APP_URL}/backend/payments/updatemany`;
    } else {
      successUrl = "http://localhost:9000/backend/payments/updatemany";
    }

    let cancelUrl;
    if (process.env.REACT_APP_URL) {
      cancelUrl = `${process.env.REACT_APP_URL}/payments`;
    } else {
      cancelUrl = "http://localhost:3000/payments";
    }

    let AllPriceInPounds = req.params.price * 100;

    const sessions = await stripe.checkout.sessions.create({
      line_items: [
        {
          price_data: {
            currency: "gbp",
            product_data: {
              name: "All",
            },
            unit_amount: AllPriceInPounds,
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: `${successUrl}/${req.params.payee}/${req.params.phone}`,
      cancel_url: cancelUrl,
    });
    res.redirect(303, sessions.url);
  },

  Update: (req, res) => {
    let redirectUrl;
    if (process.env.REACT_APP_URL) {
      redirectUrl = `${process.env.REACT_APP_URL}/success`;
    } else {
      redirectUrl = "http://localhost:3000/success";
    }

    Payments.updateOne(
      { _id: req.params.id },
      { paid: true },
      {},
      (err, payment) => {
        if (err) {
          throw err;
        }
        if (err) throw err;
        const accountSid = process.env.ACC_SID;
        const authToken = process.env.AUTH_TOKEN;
        const client = require("twilio")(accountSid, authToken);

        client.messages
          .create({
            body: "Thank you for your payment to EdUp! ",
            from: process.env.TWILIO_WHATSAPP,
            to: process.env.WHATSAPP,
          })
          .done();
        res.redirect(303, redirectUrl);
      }
    );
  },

  UpdateMany: (req, res) => {
    let redirectUrl;
    if (process.env.REACT_APP_URL) {
      redirectUrl = `${process.env.REACT_APP_URL}/success`;
    } else {
      redirectUrl = "http://localhost:3000/success/";
    }
    Payments.updateMany(
      { payee: req.params.payee },
      { $set: { paid: true } },
      {},
      (err, payment) => {
        if (err) {
          throw err;
        }
        const accountSid = process.env.ACC_SID;
        const authToken = process.env.AUTH_TOKEN;
        const client = require("twilio")(accountSid, authToken);

        client.messages
          .create({
            body: "Thank you for your payment to EdUp! ",
            from: process.env.TWILIO_WHATSAPP,
            to: process.env.WHATSAPP,
          })
          .done();
        res.redirect(303, redirectUrl);
      }
    );
  },
};

module.exports = PaymentsController;
