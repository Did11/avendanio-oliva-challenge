// src/components/ProductSearch.jsx

import PropTypes from 'prop-types';
import { useState } from 'react';

const ProductSearch = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="search-bar">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Buscar productos..."
      />
      <button type="submit">Buscar</button>
    </form>
  );
};

ProductSearch.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default ProductSearch;
