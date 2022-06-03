var express = require('express');
var router = express.Router();
const PaymentsController = require('../controllers/payments')

router.get("/payments", PaymentsController.Index);
router.get("/update/:id", PaymentsController.Update);
router.post('/checkout/:id/:title/:price', PaymentsController.Pay);
router.post('/createInvoice', PaymentsController.CreateInvoice);
router.post('/checkout/all/:price', PaymentsController.PayAll);

module.exports = router;
