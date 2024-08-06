// src/context/AuthReducer.js

const AuthReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        user: action.payload,
        isAuthenticated: true,
        error: null, // Limpia cualquier error anterior
      };
    case 'LOGOUT':
      return {
        ...state,
        user: null,
        isAuthenticated: false,
        error: null, // Limpia cualquier error al cerrar sesión
      };
    case 'SET_ERROR':
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default AuthReducer;
