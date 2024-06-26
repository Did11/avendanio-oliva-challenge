import { useState } from 'react';
import { searchProducts } from '../services/api';
import ProductList from './ProductList';
import SearchBar from '../../shared/components/SearchBar'; 

const ProductSearch = () => {
  // Estado para manejar la consulta de búsqueda
  const [query, setQuery] = useState('');
  // Estado para almacenar los productos encontrados
  const [products, setProducts] = useState([]);
  // Estado para manejar la carga
  const [loading, setLoading] = useState(false);
  // Estado para manejar errores
  const [error, setError] = useState(null);

  // Función que maneja la búsqueda de productos
  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true); // Inicia el estado de carga
    setError(null); // Resetea los errores previos
    try {
      // Llama a la API para buscar productos con la consulta
      const data = await searchProducts(query);
      setProducts(data.results); // Almacena los resultados de la búsqueda
    } catch (error) {
      // Maneja cualquier error que ocurra durante la búsqueda
      setError(error.message);
    } finally {
      // Finaliza el estado de carga
      setLoading(false);
    }
  };

  return (
    <div>
      {/* Componente SearchBar para el formulario de búsqueda */}
      <SearchBar query={query} setQuery={setQuery} handleSearch={handleSearch} />
      {/* Mensaje de carga */}
      {loading && <p>Cargando...</p>}
      {/* Mensaje de error */}
      {error && <p>Error: {error}</p>}
      {/* Lista de productos encontrados */}
      <ProductList products={products} />
    </div>
  );
};

export default ProductSearch;
