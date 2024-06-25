import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchProductDetails } from '../services/api';

const ProductDetails = () => {
  // Obtiene el ID del producto desde la URL
  const { productId } = useParams();
  // Estado para almacenar los detalles del producto
  const [product, setProduct] = useState(null);
  // Estado para manejar la carga
  const [loading, setLoading] = useState(true);
  // Estado para manejar errores
  const [error, setError] = useState(null);

  useEffect(() => {
    // Función para obtener los detalles del producto
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

  // Renderiza un mensaje de carga
  if (loading) return <p>Cargando...</p>;
  // Renderiza un mensaje de error si lo hay
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      {/* Muestra los detalles del producto */}
      <h2>{product.title}</h2>
      <img src={product.thumbnail} alt={product.title} />
      <p>Precio: {product.price}</p>
      <p>Descripción: {product.description}</p>
      {/* Añadir más detalles del producto según sea necesario */}
    </div>
  );
};

export default ProductDetails;
