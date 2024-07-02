// src/components/ProductSearch.jsx
import { useState } from 'react';
import { searchProducts } from '../services/api';
import ProductList from './ProductList';
import SearchBar from '../../shared/components/SearchBar'; // Asegúrate de importar SearchBar
import './styles/ProductSearch.css';

const ProductSearch = () => {
  const [query, setQuery] = useState('');
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const data = await searchProducts(query);
      setProducts(data.results);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <SearchBar query={query} setQuery={setQuery} handleSearch={handleSearch} />
      {loading && <p>Cargando...</p>}
      {error && <p>Error: {error}</p>}
      <ProductList products={products} />
    </div>
  );
};

export default ProductSearch;
