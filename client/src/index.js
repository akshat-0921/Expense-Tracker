// client/src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client'; // Import createRoot from 'react-dom/client'
import './styles/main.css';
import App from './App';

// Create a root.
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the App component using the new root API.
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
