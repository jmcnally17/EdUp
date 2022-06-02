var express = require('express');
var router = express.Router();
const PaymentsController = require('../controllers/payments')

router.get("/payments", PaymentsController.Index);
router.post('/checkout', PaymentsController.Create);
// router.post('/invoice', PaymentsController.Invoice);

module.exports = router;
