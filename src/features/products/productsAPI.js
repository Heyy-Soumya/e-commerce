import axios from 'axios';

export const fetchProductsAPI = async () => {
  // FakeStore demo endpoint
  const { data } = await axios.get('https://fakestoreapi.com/products');
  return data;
};