import axios from 'axios';

const api = axios.create({
  baseURL: 'http://api.intregra.com:3333',
});

export default api;
