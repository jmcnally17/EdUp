var express = require('express');
var router = express.Router();
const PaymentsController = require('../controllers/payments')

router.get("/payments", PaymentsController.Index);
router.get("/update/:id", PaymentsController.Update);
router.get("/updatemany/:payee", PaymentsController.UpdateMany);
router.post('/checkout/:id/:title/:price', PaymentsController.Pay);
router.post('/createInvoice', PaymentsController.CreateInvoice);
router.post('/checkoutmany/:payee/:price', PaymentsController.PayAll);
router.post('/success', PaymentsController.Twilio)
module.exports = router;
