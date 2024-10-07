// client/src/components/TransactionList.js

import React, { useState, useEffect } from 'react';
import axios from '../axios'; // Import your axios instance
import './TransactionList.css'; // Import CSS for styling

const TransactionList = () => {
    const [transactions, setTransactions] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchTransactions = async () => {
            try {
                const res = await axios.get('/transactions'); // Use the axios instance
                setTransactions(res.data);
            } catch (error) {
                console.error('Error fetching transactions:', error);
                setError('Failed to fetch transactions.');
            } finally {
                setLoading(false);
            }
        };
        fetchTransactions();
    }, []);

    const handleDelete = async (id) => {
        if (window.confirm('Are you sure you want to delete this transaction?')) {
            try {
                await axios.delete(`/transactions/${id}`); // Make sure this matches your API route
                setTransactions(transactions.filter((transaction) => transaction._id !== id));
                alert('Transaction deleted successfully.');
            } catch (error) {
                console.error('Error deleting transaction:', error);
                alert('Failed to delete transaction.');
            }
        }
    };

    if (loading) return <p>Loading transactions...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div className="transaction-list">
            <h2>Transactions</h2>
            <div className="transaction-cards">
                {transactions.map((transaction) => (
                    <div className="transaction-card" key={transaction._id}>
                        <h3>{transaction.title}</h3>
                        <p>Amount: ${transaction.amount}</p>
                        <p>Type: {transaction.type}</p>
                        <p>Category: {transaction.category}</p>
                        <button className="delete-button" onClick={() => handleDelete(transaction._id)}>
                            Delete
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TransactionList;
