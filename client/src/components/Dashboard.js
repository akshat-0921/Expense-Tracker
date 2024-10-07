// client/src/components/Dashboard.js
import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js'; // Import Chart and registerables
import axios from '../axios'; 
import './Dashboard.css'; // Import the CSS file

// Register all necessary components
Chart.register(...registerables);

const Dashboard = () => {
  const [totalIncome, setTotalIncome] = useState(0);
  const [totalExpenses, setTotalExpenses] = useState(0);

  useEffect(() => {
    const fetchAnalyticsData = async () => {
      try {
        const response = await axios.get('/transactions'); 
        const transactions = response.data;

        const income = transactions
          .filter(transaction => transaction.type === 'income')
          .reduce((acc, transaction) => acc + transaction.amount, 0);

        const expenses = transactions
          .filter(transaction => transaction.type === 'expense')
          .reduce((acc, transaction) => acc + transaction.amount, 0);

        setTotalIncome(income);
        setTotalExpenses(expenses);
      } catch (error) {
        console.error('Error fetching analytics data:', error);
      }
    };

    fetchAnalyticsData();
  }, []);

  const data = {
    labels: ['Income', 'Expenses'],
    datasets: [
      {
        label: 'Amount',
        data: [totalIncome, totalExpenses],
        backgroundColor: ['rgba(75, 192, 192, 0.6)', 'rgba(255, 99, 132, 0.6)'],
        borderColor: ['rgba(75, 192, 192, 1)', 'rgba(255, 99, 132, 1)'],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="dashboard">
      <h2>Financial Dashboard</h2>
      <p>Total Income: ${totalIncome}</p>
      <p>Total Expenses: ${totalExpenses}</p>
      <Bar data={data} options={options} />
      <p>Overview of your finances will go here (analytics and charts).</p>
    </div>
  );
};

export default Dashboard;
