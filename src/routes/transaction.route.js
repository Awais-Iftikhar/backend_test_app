const express = require('express');
const transaction_controller = require('../controllers/transaction.controller');

const router = express.Router();

router.post('/add', transaction_controller.saveTransaction);

module.exports = router;
