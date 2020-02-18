import axios from 'axios';

const api = axios.create({
  baseURL: 'http://www.api.intregra.com:3333',
  // baseURL: 'http://localhost:3333',
});

export default api;
