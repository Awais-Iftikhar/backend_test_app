const TransactionModal = require('../model/transaction.model');

const saveTransaction = async (req, res) => {
  try {

    const { wallet_address, tx_hash, amount } = req.body;
    const transaction = await TransactionModal.create({
      wallet_address,
      tx_hash,
      amount,
    });

    await transaction.save();
    return res.status(200).send({
      message: 'Transaction saved successfully!',
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      message: "An unexpected error occured at server!",
    });
  }
};



module.exports = {
  saveTransaction,
};
