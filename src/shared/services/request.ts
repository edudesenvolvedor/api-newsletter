import axios from 'axios';

export default axios.create({
  baseURL: 'http://localhost:3000/v1',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});
