import axios from 'axios';

const api = axios.create({
  baseURL: 'https://www.api.intregra.com:3333',
  // baseURL: 'http://localhost:3333',
});

export default api;
