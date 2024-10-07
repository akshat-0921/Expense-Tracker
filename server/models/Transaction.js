const mongoose = require('mongoose');

// Define the Transaction schema
const transactionSchema = new mongoose.Schema({
    title: { type: String, required: true },
    amount: { type: Number, required: true },
    type: { type: String, enum: ['income', 'expense'], required: true },
    category: { type: String, required: true },
    date: { type: Date, default: Date.now },
});

// Create and export the Transaction model
const Transaction = mongoose.model('Transaction', transactionSchema);

// Optionally add methods for custom logic here (if needed in the future)
// Example: transactionSchema.methods.calculateTax = function() { ... };

module.exports = Transaction;
