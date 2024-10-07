// src/api.js

import axiosInstance from './axios'; // Import your axios instance

const API_URL = '/transactions'; // No need to include the base URL

export const fetchTransactions = async () => {
    const response = await axiosInstance.get(API_URL);
    return response.data;
};

export const addTransaction = async (transaction) => {
    const response = await axiosInstance.post(API_URL, transaction);
    return response.data;
};

// You can add more API functions as needed
