const Payments = require('../models/payments')
require('dotenv').config()
const stripe = require('stripe')(process.env.API_KEY);

const PaymentsController = {

  Index: (req, res) => {
    Payments.find({ paid: false }).exec((err, payments) => {
      if (err) {
        throw err;
      }
      res.json({
        payments: payments
      })
    });
  },

  Create: async (req, res) => {
    let successUrl;
    if (process.env.REACT_APP_HEROKU_TEST_URL) {
      successUrl = `${process.env.REACT_APP_HEROKU_TEST_URL}`; // change to cancel url when made
    } else {
      successUrl = "http://localhost:3000"; // change to success url when made
    }

    let cancelUrl;
    if (process.env.REACT_APP_HEROKU_TEST_URL) {
      cancelUrl = `${process.env.REACT_APP_HEROKU_TEST_URL}`; // change to cancel url when made
    } else {
      cancelUrl = "http://localhost:3000/noticeboard"; // change to cancel url when made
    }

    const sessions = await stripe.checkout.sessions.create({
      line_items: [
        {
          price_data: {
            currency: "gbp",
            product_data: {
              name: req.params.title,
            },
            unit_amount: req.params.price,
          },
          quantity: 1,
        }
      ],
      mode: 'payment',
      success_url: `${successUrl}`,
      cancel_url: cancelUrl,
    });
    Payments.updateOne(
      { _id: req.params.id },
      { paid: true },
      {},
      (err, payment) => {
        if (err) {
          throw err;
        }
        res.redirect(303, sessions.url)
      }
    )
  },

  CreateInvoice: (req, res) => {
    const item = {
      title: req.body.title,
      price: req.body.price,
      paid: true
    };
    const payment = new Payments(item)
    payment.save((err) => {
      if (err) {
        throw err;
      }
      res.status(200)
    })
  }
}

module.exports = PaymentsController