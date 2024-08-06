// src/components/Header.jsx

import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useAuth } from '../context/AuthContext'; // Importa el contexto de autenticación
import SearchBar from '../../shared/components/SearchBar';
import { searchProducts } from '../services/api';
import './styles/Header.css';
import logo from '../assets/logo.png';
import newImage from '../assets/disney.webp';

const Header = ({ setProducts, setLoading, setError }) => {
  const [query, setQuery] = useState('');
  const { isAuthenticated, logout } = useAuth(); // Usa el contexto para obtener el estado de autenticación
  const navigate = useNavigate();

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const data = await searchProducts(query);
      setProducts(data.results);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

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
        <SearchBar query={query} setQuery={setQuery} handleSearch={handleSearch} />
        <img src={newImage} alt="" className="new-image" />
      </div>
    </header>
  );
};

Header.propTypes = {
  setProducts: PropTypes.func.isRequired,
  setLoading: PropTypes.func.isRequired,
  setError: PropTypes.func.isRequired,
};

export default Header;
