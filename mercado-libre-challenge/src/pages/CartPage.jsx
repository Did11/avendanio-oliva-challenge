// src/pages/CartPage.jsx

import { useCart } from '../context/CartContext';
import CartItem from '../components/CartItem';
import './styles/CartPage.css';

const CartPage = () => {
  const { items, totalAmount, updateQuantity, removeItem } = useCart();

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
            <button>Proceder al Checkout</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
