// src/components/ProductDetails.jsx

import PropTypes from 'prop-types';
import './styles/ProductDetails.css';

const ProductDetails = ({ product, onAddToCart }) => {
  if (!product) {
    return <p>Producto no encontrado.</p>;
  }

  return (
    <div className="product-detail">
      <h2>{product.title}</h2>
      <img src={product.image || product.thumbnail} alt={product.title} />
      <p>Precio: ${product.price}</p>
      <p>Descripción: {product.description}</p>
      <button onClick={() => onAddToCart(product)}>Agregar al Carrito</button>
    </div>
  );
};

ProductDetails.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string,
    thumbnail: PropTypes.string,
    description: PropTypes.string.isRequired,
  }),
  onAddToCart: PropTypes.func.isRequired,
};

export default ProductDetails;
