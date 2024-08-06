// src/components/CartItem.jsx

import PropTypes from 'prop-types';
import './styles/CartItem.css';

const CartItem = ({ item, onRemove, onQuantityChange }) => {
  return (
    <li className="cart-item">
      <img src={item.image || item.thumbnail} alt={item.title} className="cart-item-image" />
      <div className="cart-item-details">
        <h3>{item.title}</h3>
        <p>Precio: ${item.price.toFixed(2)}</p>
        <p>Total: ${(item.price * item.quantity).toFixed(2)}</p>
        <div className="cart-item-actions">
          <button onClick={() => onQuantityChange(item.id, item.quantity - 1)}>-</button>
          <span>{item.quantity}</span>
          <button onClick={() => onQuantityChange(item.id, item.quantity + 1)}>+</button>
          <button onClick={() => onRemove(item.id)}>Eliminar</button>
        </div>
      </div>
    </li>
  );
};

CartItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired,
    image: PropTypes.string,
    thumbnail: PropTypes.string,
  }).isRequired,
  onRemove: PropTypes.func.isRequired,
  onQuantityChange: PropTypes.func.isRequired,
};

export default CartItem;
