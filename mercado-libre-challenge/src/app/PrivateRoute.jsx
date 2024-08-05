// src/app/PrivateRoute.jsx
import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types'; // Importa PropTypes
import { AuthContext } from '../context/AuthContext';

const PrivateRoute = ({ children }) => {
  const { isAuthenticated } = useContext(AuthContext);

  // Redirige a la página de inicio de sesión si no está autenticado
  return isAuthenticated ? children : <Navigate to="/login" replace />;
};

// Define los PropTypes para PrivateRoute
PrivateRoute.propTypes = {
  children: PropTypes.node.isRequired
};

export default PrivateRoute;
