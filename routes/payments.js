var express = require('express');
var router = express.Router();
const PaymentsController = require('../controllers/payments')

router.get("/payments", PaymentsController.Index);
router.get("/update/:id/:phone", PaymentsController.Update);
router.get("/updatemany/:payee/:phone", PaymentsController.UpdateMany);
router.post('/checkout/:id/:title/:price/:phone', PaymentsController.Pay);
router.post('/createInvoice', PaymentsController.CreateInvoice);
router.post('/checkoutmany/:payee/:price/:phone', PaymentsController.PayAll);
module.exports = router;
