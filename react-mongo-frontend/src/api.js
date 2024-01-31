// src/api.js
import axios from 'axios';

const API_BASE_URL = 'http://localhost:8000';

const api = axios.create({
    baseURL: API_BASE_URL,
});

export const getProducts = async () => {
    try {
        const response = await api.get('/products/');
        return response.data;
    } catch (error) {
        console.error('Error fetching products:', error);
        throw error;
    }
};

export const createProduct = async (productData) => {
    try {
        const response = await api.post('/products/', productData);
        return response.data;
    } catch (error) {
        console.error('Error creating product:', error);
        throw error;
    }
};
