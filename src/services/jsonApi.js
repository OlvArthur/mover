import axios from 'axios';

const jsonApi = axios.create({
  baseURL: 'http://localhost:3335',
});

export default jsonApi;
