import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.intregra.com',
  // baseURL: 'http://localhost:3333',
});

export default api;
