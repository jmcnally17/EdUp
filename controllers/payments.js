const Payments = require('../models/payments')
require('dotenv').config()
const stripe = require('stripe')(process.env.API_KEY);

const PaymentsController = {

  Index: (req, res) => {
    Payments.find().exec((err, payments) => {
      if (err) {
        throw err;
      }
      res.json({
        payments: payments
      })
    });
  },
  Create: async (req, res) => {
    
    const sessions = await stripe.checkout.sessions.create({
      line_items: [
        {
          price_data: {
            currency: "gbp",
            product_data: {
              name: "test",
            },
            unit_amount: 100,
          },
          quantity: 2,
        }
      ],
      mode: 'payment',
      success_url: 'http://localhost:3000',
      cancel_url: 'http://localhost:3000/noticeboard',
    });
    console.log(sessions.url);
    res.redirect(303, sessions.url)
  }
}

module.exports = PaymentsController