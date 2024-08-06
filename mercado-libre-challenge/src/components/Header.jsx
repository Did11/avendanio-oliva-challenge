import { useState } from 'react';
import PropTypes from 'prop-types';
import SearchBar from '../../shared/components/SearchBar';
import { searchProducts } from '../services/api';
import './styles/Header.css';
import logo from '../assets/logo.png';
import newImage from '../assets/disney.webp';

const Header = ({ setProducts, setLoading, setError }) => {
  const [query, setQuery] = useState('');

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

  return (
    <header className="header">
      <div className="container">
        <img src={logo} alt="Logo" className="logo" />
        <nav className="header-nav">
          {/* Cambio en el texto y posible ajuste de estilos */}
          <a href="/login" className="login-link">Ingresa</a>
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
