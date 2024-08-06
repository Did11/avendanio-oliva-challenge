// src/components/ProductList.jsx

import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './styles/ProductList.css';

const ProductList = ({ products }) => {
  if (!products || products.length === 0) {
    return <div>No hay productos disponibles.</div>;
  }

  return (
    <ul className="product-list">
      {products.map((product) => (
        <li key={product.id} className="product-item">
          <Link to={`/product/${product.id}`} className="product-link">
            <img src={product.thumbnail} alt={product.title} />
            <h3>{product.title}</h3>
            <p>Precio: $ {product.price}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
};

ProductList.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      title: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      thumbnail: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default ProductList;
