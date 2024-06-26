// src/components/ProductList.jsx
import PropTypes from 'prop-types';

// Componente para listar productos
const ProductList = ({ products }) => {
  if (products.length === 0) {
    return <p>No se encontraron productos.</p>;
  }

  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          <p>Precio: {product.price}</p>
        </li>
      ))}
    </ul>
  );
};

ProductList.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default ProductList;
