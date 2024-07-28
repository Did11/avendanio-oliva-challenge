// src/context/AuthContext.js
import { createContext, useReducer } from 'react';
import PropTypes from 'prop-types';
import AuthReducer from '../features/auth/AuthReducer';

const INITIAL_STATE = {
  user: null,
  isAuthenticated: false,
};

export const AuthContext = createContext(INITIAL_STATE);

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
