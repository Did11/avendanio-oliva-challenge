// src/context/CartContext.js

import { createContext, useReducer, useContext } from 'react';
import PropTypes from 'prop-types';
import CartReducer from './CartReducer';

const INITIAL_STATE = {
  items: [],
  totalAmount: 0,
};

// Crear el contexto del carrito
export const CartContext = createContext(INITIAL_STATE);

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(CartReducer, INITIAL_STATE);

  const addItem = (item) => {
    dispatch({ type: 'ADD_ITEM', payload: item });
  };

  const removeItem = (id) => {
    dispatch({ type: 'REMOVE_ITEM', payload: id });
  };

  const updateQuantity = (id, quantity) => {
    dispatch({ type: 'UPDATE_QUANTITY', payload: { id, quantity } });
  };

  return (
    <CartContext.Provider value={{ ...state, addItem, removeItem, updateQuantity }}>
      {children}
    </CartContext.Provider>
  );
};

CartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useCart = () => useContext(CartContext);
