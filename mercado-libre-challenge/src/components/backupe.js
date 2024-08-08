// src/components/Header.jsx

import { Link, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useAuth } from '../context/AuthContext';
import ProductSearch from './ProductSearch';
import './styles/Header.css';
import logo from '../assets/logo.png';

const Header = ({ onSearch }) => { // Asegúrate de recibir onSearch
  const { isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <header className="header">
      <div className="container">
        <Link to="/">
          <img src={logo} alt="Logo" className="logo" style={{ cursor: 'pointer' }} />
        </Link>
        <nav className="header-nav">
          {isAuthenticated ? (
            <>
              <Link to="/account" className="nav-link">Mi Cuenta</Link>
              <Link to="/cart" className="nav-link">Carrito</Link>
              <button onClick={handleLogout} className="nav-link">Cerrar Sesión</button>
            </>
          ) : (
            <Link to="/login" className="login-link">Ingresa</Link>
          )}
        </nav>
        <ProductSearch onSearch={onSearch} /> {/* Pasar onSearch a ProductSearch */}
      </div>
    </header>
  );
};

Header.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default Header;
