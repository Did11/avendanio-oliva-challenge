import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchProductDetails } from '../services/api';

const ProductDetails = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getProductDetails = async () => {
      try {
        const data = await fetchProductDetails(productId);
        setProduct(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    getProductDetails();
  }, [productId]);

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h2>{product.title}</h2>
      <img src={product.thumbnail} alt={product.title} />
      <p>Precio: {product.price}</p>
      <p>Descripción: {product.description}</p>
      {/* Añadir más detalles del producto según sea necesario */}
    </div>
  );
};

export default ProductDetails;
