const BASE_URL = 'https://api.mercadolibre.com';

export const fetchCategories = async () => {
  const response = await fetch(`${BASE_URL}/sites/MLA/categories`);
  if (!response.ok) {
    throw new Error('Error al cargar las categorías');
  }
  return response.json();
};

export const fetchCategoryProducts = async (categoryId) => {
  const response = await fetch(`${BASE_URL}/sites/MLA/search?category=${categoryId}`);
  if (!response.ok) {
    throw new Error('Error al cargar los productos de la categoría');
  }
  return response.json();
};

export const searchProducts = async (query) => {
  const response = await fetch(`${BASE_URL}/sites/MLA/search?q=${query}`);
  if (!response.ok) {
    throw new Error('Error al buscar productos');
  }
  return response.json();
};

export const fetchProductDetails = async (productId) => {
  const response = await fetch(`${BASE_URL}/items/${productId}`);
  if (!response.ok) {
    throw new Error('Error al cargar los detalles del producto');
  }
  return response.json();
};
