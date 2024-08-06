// src/pages/ProductDetailsPage.jsx

import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header'; // Importar Header
import { fetchProductDetails } from '../services/api'; // Importa la función correcta

const ProductDetailsPage = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadProductDetails = async () => {
      setLoading(true);
      setError(null);

      try {
        const data = await fetchProductDetails(productId); // Usa la función importada
        setProduct(data);
      } catch (err) {
        console.error('Error fetching product details:', err);
        setError('Error fetching product details');
      } finally {
        setLoading(false);
      }
    };

    loadProductDetails();
  }, [productId]);

  return (
    <div className="product-details-page">
      <Header />
      {loading && <p>Cargando...</p>}
      {error && <p>{error}</p>}
      {product && (
        <div>
          <h2>{product.title}</h2>
          <img src={product.thumbnail} alt={product.title} />
          <p>Precio: $ {product.price}</p>
          <p>{product.description}</p>
        </div>
      )}
    </div>
  );
};

export default ProductDetailsPage;
