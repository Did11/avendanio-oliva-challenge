// src/context/CartContext.jsx

import { createContext, useReducer, useEffect } from 'react';
import PropTypes from 'prop-types';
import CartReducer from './CartReducer';
import { useAuth } from './AuthContext';
import { toast } from 'react-toastify';

const INITIAL_STATE = {
  items: JSON.parse(localStorage.getItem('cartItems')) || [],
  totalAmount: JSON.parse(localStorage.getItem('cartItems'))?.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  ) || 0,
};

export const CartContext = createContext(INITIAL_STATE);

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(CartReducer, INITIAL_STATE);
  const { isAuthenticated } = useAuth();

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(state.items));
  }, [state.items]);

  const addItem = (item) => {
    if (!isAuthenticated) {
      toast.warn('Debe iniciar sesión para agregar productos al carrito', {
        position: "top-center",
        autoClose: 1200,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        style: {
          top: '200px', 
          backgroundColor: '#3483fa',
          color: 'white',
        },
      });
      return;
    }
    dispatch({ type: 'ADD_ITEM', payload: item });
  };

  const removeItem = (id) => {
    dispatch({ type: 'REMOVE_ITEM', payload: id });
  };

  const updateQuantity = (id, quantity) => {
    dispatch({ type: 'UPDATE_QUANTITY', payload: { id, quantity } });
  };

  // Nueva función para vaciar el carrito
  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };

  return (
    <CartContext.Provider value={{ ...state, addItem, removeItem, updateQuantity, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

CartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
