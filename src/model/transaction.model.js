const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const transactionSchema = new Schema({
  wallet_address: { type: String, required: true },
  tx_hash: { type: String, required: true },
  amount: { type: Number, required: true },
});

const TransactionModal = mongoose.model('Transaction', transactionSchema);

module.exports = TransactionModal;
