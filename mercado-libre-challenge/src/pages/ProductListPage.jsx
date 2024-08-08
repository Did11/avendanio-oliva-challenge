// src/pages/ProductListPage.jsx

import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ProductListPage = ({ products = [] }) => {
  return (
    <div className="product-list-page">
      <h2>Resultados de Búsqueda</h2>
      {products.length === 0 ? (
        <p>No se encontraron productos.</p>
      ) : (
        <div className="product-list">
          {products.map((product) => (
            <div key={product.id} className="product-item">
              <Link to={`/product/${product.id}`}>
                <img src={product.thumbnail} alt={product.title} />
                <h3>{product.title}</h3>
              </Link>
              <p>Precio: $ {product.price}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

ProductListPage.propTypes = {
  products: PropTypes.array,
};

export default ProductListPage;
