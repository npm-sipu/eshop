import axios from 'axios';
import { Item } from './useTypes';

let URL = "eshop-backend-three.vercel.app/";

if (process.env.NODE_ENV !== "production") {
  URL = "http://localhost:5000/";
}

export const fetchProducts = async (): Promise<Item[]> => {
  const response = await axios.get(`${URL}api/products`);
  return response.data;
};

export const fetchProductById = async (id: string): Promise<Item> => {
  const response = await axios.get(`${URL}api/products/${id}`);
  return response.data;
};