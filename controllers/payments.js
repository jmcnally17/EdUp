const Payments = require('../models/payments')
const stripe = require('stripe')('sk_test_51L6A0RJdrsld1vEeAAJJDzd7MwohVMLgR3bKo5dwiKW8Pg34GaUhvDXxTu6zx56IY3rRVIOBkvncftha7G7oFsd1008nbBnjm9');

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
          price: '20',
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: 'https:localhost:9000/?success=true',
      cancel_url: 'https:localhost:9000/?canceled=true',
    });
    res.redirect(303, sessions.url)
  }
}

module.exports = PaymentsController