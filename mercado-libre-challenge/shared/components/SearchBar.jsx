// src/shared/components/SearchBar.jsx
import PropTypes from 'prop-types';
import './styles/SearchBar.css';

const SearchBar = ({ query, setQuery, handleSearch }) => {
  return (
    <form className="search-bar" onSubmit={handleSearch}>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Buscar productos, marcas y más..."
      />
      <button type="submit">Buscar</button>
    </form>
  );
};

SearchBar.propTypes = {
  query: PropTypes.string.isRequired,
  setQuery: PropTypes.func.isRequired,
  handleSearch: PropTypes.func.isRequired,
};

export default SearchBar;
