// shared/components/SearchBar.jsx
import PropTypes from 'prop-types';

// Componente de barra de búsqueda reutilizable
const SearchBar = ({ query, setQuery, handleSearch }) => (
  <form onSubmit={handleSearch}>
    <input
      type="text"
      value={query} // Valor actual de la consulta
      onChange={(e) => setQuery(e.target.value)} // Actualiza la consulta
      placeholder="Buscar productos..."
    />
    <button type="submit">Buscar</button>
  </form>
);

SearchBar.propTypes = {
  query: PropTypes.string.isRequired,
  setQuery: PropTypes.func.isRequired,
  handleSearch: PropTypes.func.isRequired,
};

export default SearchBar;
