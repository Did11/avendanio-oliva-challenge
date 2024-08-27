// src/pages/CartPage.jsx

import { useNavigate } from 'react-router-dom';
import useCart from '../context/useCart';
import CartItem from '../components/CartItem';
import './styles/CartPage.css';

const CartPage = () => {
  const { items, totalAmount, updateQuantity, removeItem } = useCart();
  const navigate = useNavigate();

  
  const handleCheckout = () => {
    try {
      navigate('/checkout');
    } catch (error) {
      console.error("Error al proceder al checkout:", error);
      
    }
  };

  return (
    <div className="cart-page">
      <h1>Carrito de Compras</h1>
      {items.length === 0 ? (
        <p>El carrito está vacío.</p>
      ) : (
        <div>
          <ul className="cart-items">
            {items.map((item) => (
              <CartItem
                key={item.id}
                item={item}
                onRemove={removeItem}
                onQuantityChange={updateQuantity}
              />
            ))}
          </ul>
          <div className="cart-summary">
            <h2>Total del Carrito: ${totalAmount.toFixed(2)}</h2>
            <button className="checkout-button" onClick={handleCheckout}>
              Proceder al Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
