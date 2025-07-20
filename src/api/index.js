import axios from 'axios';

const api = axios.create({
  baseURL: 'https://fakestoreapi.com',   // demo products
  timeout: 10000,
});

// Generic GET helper
export const get = async (endpoint) => {
  const { data } = await api.get(endpoint);
  return data;
};

// Generic POST helper
export const post = async (endpoint, payload) => {
  const { data } = await api.post(endpoint, payload);
  return data;
};
