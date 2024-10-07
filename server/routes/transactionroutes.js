const express = require('express');
const router = express.Router();
const {
    getAllTransactions,
    addTransaction,
    deleteTransaction
} = require('../controllers/transactionController'); // Import controller functions

// Create a new transaction
router.post('/', addTransaction); // Use the addTransaction controller

// Get all transactions
router.get('/', getAllTransactions); // Use the getAllTransactions controller

// Delete a transaction by ID
router.delete('/:id', deleteTransaction); // Route to delete a transaction

// Export the router
module.exports = router;
