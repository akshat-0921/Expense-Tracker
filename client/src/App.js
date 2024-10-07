// client/src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import Routes instead of Switch
import HomePage from './pages/HomePage';
import AddTransactionPage from './pages/AddTransactionPage';
import AnalyticsPage from './pages/AnalyticsPage';


const App = () => {
  return (
    <Router>
      <Routes> {/* Use Routes instead of Switch */}
        <Route path="/" element={<HomePage />} /> {/* Update to use 'element' prop */}
        <Route path="/add-transaction" element={<AddTransactionPage />} /> {/* Update to use 'element' prop */}
        <Route path="/analytics" element={<AnalyticsPage />} /> {/* Update to use 'element' prop */}
      </Routes>
    </Router>
  );
};

export default App;
