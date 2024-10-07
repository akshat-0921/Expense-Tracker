// client/src/components/TransactionForm.js
import React, { useState } from 'react';
import axios from 'axios';

const TransactionForm = () => {
  const [type, setType] = useState('Income');
  const [amount, setAmount] = useState(0);
  const [category, setCategory] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    if (!category || amount <= 0) {
      alert('Please fill in all fields correctly.');
      return;
    }

    try {
      await axios.post('http://localhost:5001/api/transactions', { type, amount: Number(amount), category });
      alert('Transaction Added');
      // Optionally, clear the form fields after submission
      setAmount(0);
      setCategory('');
    } catch (error) {
      alert('Error Adding Transaction');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="transaction-form">
      <label>Type:</label>
      <select value={type} onChange={(e) => setType(e.target.value)}>
        <option value="Income">Income</option>
        <option value="Expense">Expense</option>
      </select>

      <label>Amount:</label>
      <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} />

      <label>Category:</label>
      <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} />

      <button type="submit">Add Transaction</button>
    </form>
  );
};

export default TransactionForm;
