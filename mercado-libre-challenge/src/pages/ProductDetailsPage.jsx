// src/pages/ProductDetailsPage.jsx

import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { fetchProductDetails } from '../services/api';
import ProductDetails from '../components/ProductDetails';

const ProductDetailsPage = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { addItem } = useCart();

  useEffect(() => {
    const loadProduct = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await fetchProductDetails(productId);
        setProduct(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    loadProduct();
  }, [productId]);

  if (loading) return <p>Cargando detalles del producto...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="product-details-page">
      <ProductDetails product={product} onAddToCart={addItem} />
    </div>
  );
};

export default ProductDetailsPage;
