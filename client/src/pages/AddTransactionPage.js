// client/src/pages/AddTransactionPage.js

import React, { useState } from 'react';
import axios from '../axios'; // Import the custom axios instance
import './AddTransactionPage.css'; // Import the CSS file

const AddTransactionPage = () => {
    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState('');
    const [category, setCategory] = useState('');
    const [type, setType] = useState('');
    const [date, setDate] = useState(''); // Add state for date

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        // Ensure to convert the amount to a number
        const transactionData = {
            title,
            amount: Number(amount), // Convert to number
            category,
            type,
            date: date || new Date().toISOString(), // Use provided date or current date
        };
    
        try {
            const response = await axios.post('http://localhost:5001/api/transactions', transactionData);
            console.log('Transaction added:', response.data);
            // Clear the form after submission
            setTitle('');
            setAmount('');
            setCategory('');
            setType('');
            setDate(''); // Clear date field
        } catch (error) {
            // Log the error response for debugging
            console.error('Error adding transaction:', error.response ? error.response.data : error.message);
        }
    };

    return (
        <div className="add-transaction-page">
            <h1>Add Transaction</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />
                <input
                    type="number"
                    placeholder="Amount"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    required
                />
                <input
                    type="text"
                    placeholder="Type (e.g., Expense, Income)"
                    value={type}
                    onChange={(e) => setType(e.target.value)}
                    required
                />
                <input
                    type="text"
                    placeholder="Category"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    required
                />
                <input
                    type="date" // Added input for date
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    required
                />
                <button type="submit">Add Transaction</button>
            </form>
        </div>
    );
};

export default AddTransactionPage;
