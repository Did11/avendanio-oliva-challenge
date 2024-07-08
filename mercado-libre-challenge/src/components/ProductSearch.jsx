// src/components/ProductSearch.jsx
import PropTypes from 'prop-types';
import ProductList from './ProductList';
import './styles/ProductSearch.css';

const ProductSearch = ({ products, loading, error }) => {
  return (
    <div>
      {loading && <p>Cargando...</p>}
      {error && <p>Error: {error}</p>}
      <ProductList products={products} />
    </div>
  );
};

ProductSearch.propTypes = {
  products: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
};

export default ProductSearch;
