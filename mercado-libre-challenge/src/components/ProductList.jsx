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
          <h3>{product.title}</h3>
          <p>Precio: $ {product.price}</p>
          <img src={product.thumbnail} alt={product.title} />
        </li>
      ))}
    </ul>
  );
};

ProductList.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired, 
      title: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      thumbnail: PropTypes.string.isRequired, 
    })
  ).isRequired,
};

export default ProductList;
