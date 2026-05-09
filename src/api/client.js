import axios from 'axios';

const baseURL = process.env.REACT_APP_API_URL || 'http://localhost:8080';

const apiClient = axios.create({
  baseURL,
  timeout: 5000,
  headers: { 'Content-Type': 'application/json' },
});

export const fetchProducts = async () => {
  const response = await apiClient.get('/api/products');
  return response.data;
};

export const submitPayment = async (payload) => {
  const response = await apiClient.post('/api/payments', payload);
  return response.data;
};

export default apiClient;
