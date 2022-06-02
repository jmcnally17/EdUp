var express = require('express');
var router = express.Router();
const PaymentsController = require('../controllers/payments')

router.get("/payments", PaymentsController.Index);
router.post('/checkout/:id/:title/:price', PaymentsController.Create);
router.post('/createInvoice', PaymentsController.CreateInvoice);

module.exports = router;
