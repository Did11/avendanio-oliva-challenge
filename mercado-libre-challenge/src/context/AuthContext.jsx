// src/context/AuthContext.js

import { createContext, useReducer, useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import AuthReducer from './AuthReducer';

const INITIAL_STATE = {
  user: JSON.parse(localStorage.getItem('user')) || null,
  isAuthenticated: !!localStorage.getItem('user'),
  error: null,
};

export const AuthContext = createContext(INITIAL_STATE);

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

  useEffect(() => {
    // Actualizar el localStorage cuando cambia el estado del usuario
    if (state.user) {
      localStorage.setItem('user', JSON.stringify(state.user));
    } else {
      localStorage.removeItem('user');
    }
  }, [state.user]);

  const login = (userData) => {
    dispatch({ type: 'LOGIN', payload: userData });
  };

  const logout = () => {
    dispatch({ type: 'LOGOUT' });
  };

  return (
    <AuthContext.Provider value={{ ...state, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useAuth = () => useContext(AuthContext);
