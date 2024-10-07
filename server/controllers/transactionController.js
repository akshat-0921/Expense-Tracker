// controllers/transactionController.js

const Transaction = require('../models/Transaction'); // Import your Transaction model

// Get all transactions
const getAllTransactions = async (req, res) => {
    try {
        const transactions = await Transaction.find(); // Fetch all transactions from the database
        res.json(transactions); // Send the transactions as JSON
    } catch (error) {
        console.error('Error fetching transactions:', error); // Log error for debugging
        res.status(500).json({ error: 'Server Error' }); // Return 500 status with error message
    }
};

// Add a transaction
const addTransaction = async (req, res) => {
    const { title, amount, category, type, date } = req.body;

    // Validate the data
    if (!title || !amount || !category || !type || !date) {
        return res.status(400).json({ error: 'Invalid Data' }); // Return 400 status if validation fails
    }

    try {
        // Create a new transaction
        const newTransaction = new Transaction({
            title,
            amount,
            category,
            type,
            date,
        });

        // Save to the database
        await newTransaction.save(); // Save the transaction
        return res.status(201).json(newTransaction); // Send back the created transaction with 201 status
    } catch (error) {
        console.error('Error saving transaction:', error); // Log error for debugging
        return res.status(500).json({ error: 'Server Error' }); // Return 500 status with error message
    }
};

// Delete a transaction
const deleteTransaction = async (req, res) => {
  try {
      const transaction = await Transaction.findById(req.params.id);
      if (!transaction) {
          return res.status(404).json({ msg: 'Transaction not found' });
      }

      await Transaction.deleteOne({ _id: req.params.id }); // Use deleteOne instead of remove
      res.json({ msg: 'Transaction removed' });
  } catch (error) {
      console.error('Error deleting transaction:', error);
      res.status(500).json({ error: 'Server Error' });
  }
};




// Export controller functions
module.exports = {
    getAllTransactions,
    addTransaction,
    deleteTransaction,
};
