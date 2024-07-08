import axios from 'axios';

const BASE_URL = 'https://api.mercadolibre.com';

export const fetchCategories = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/sites/MLA/categories`);
    return response.data;
  } catch (error) {
    throw new Error('Error al cargar las categorías');
  }
};

export const fetchCategoryProducts = async (categoryId) => {
  try {
    const response = await axios.get(`${BASE_URL}/sites/MLA/search`, {
      params: { category: categoryId },
    });
    return response.data;
  } catch (error) {
    throw new Error('Error al cargar los productos de la categoría');
  }
};

export const searchProducts = async (query) => {
  try {
    const response = await axios.get(`${BASE_URL}/sites/MLA/search`, {
      params: { q: query },
    });
    return response.data;
  } catch (error) {
    throw new Error('Error al buscar productos');
  }
};

export const fetchProductDetails = async (productId) => {
  try {
    const response = await axios.get(`${BASE_URL}/items/${productId}`);
    return response.data;
  } catch (error) {
    throw new Error('Error al cargar los detalles del producto');
  }
};
