import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/',
  // baseURL: process.env.API_BASE_URL,
  headers: {
    accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

export default instance;
