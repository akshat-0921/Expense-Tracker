import React from 'react';
import Dashboard from '../components/Dashboard';
import './AnalyticsPage.css'; // Import the CSS file

const AnalyticsPage = () => {
  return (
    <div className="analytics-page"> {/* Add the class here */}
      <h1>Analytics</h1>
      <Dashboard />
    </div>
  );
};

export default AnalyticsPage;
