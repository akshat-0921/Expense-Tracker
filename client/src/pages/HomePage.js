// client/src/pages/HomePage.js

import React, { useEffect, useState } from 'react';
import axios from '../axios'; // Import the axios instance you created
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import TransactionList from '../components/TransactionList'; // Adjust the path as necessary
import './HomePage.css'; // Import the CSS file for styling

const HomePage = () => {
    const [transactions, setTransactions] = useState([]);

    useEffect(() => {
        const fetchTransactions = async () => {
            try {
                const response = await axios.get('/transactions'); // Use the axios instance
                setTransactions(response.data);
            } catch (error) {
                console.error('Error fetching transactions:', error);
            }
        };

        fetchTransactions();
    }, []);

    return (
        <div className="homepage">
            <h1>Welcome to the Expense Tracker</h1>
            <h2>Your Transactions</h2>
            <TransactionList transactions={transactions} />
            {/* Navigation Buttons */}
            <div className="navigation-buttons">
                <Link to="/analytics">
                    <button className="nav-button">Go to Analytics</button>
                </Link>
                <Link to="/add-transaction">
                    <button className="nav-button">Add Transaction</button>
                </Link>
            </div>
        </div>
    );
};

export default HomePage;
