// shared/components/ProductCard.jsx
import PropTypes from 'prop-types';

// Componente para mostrar información del producto
const ProductCard = ({ product }) => (
  <div className="product-card">
    <img src={product.thumbnail} alt={product.name} />
    <h3>{product.name}</h3>
    <p>{product.price}</p>
  </div>
);

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};

export default ProductCard;
