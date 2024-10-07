import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:5001/api', // Change this to your backend URL
});

export default instance;
