// src/pages/ProductDetailsPage.jsx
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchProductDetails } from '../services/api';
import useCart from '../context/useCart'; // Importa el hook desde el nuevo archivo useCart.js

const ProductDetailsPage = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { addItem } = useCart(); // Utiliza el contexto del carrito

  useEffect(() => {
    const loadProductDetails = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await fetchProductDetails(productId);
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

  const handleAddToCart = () => {
    addItem({ ...product, id: productId, quantity: 1 }); // Asegúrate de pasar todos los datos necesarios
  };

  return (
    <div className="product-details-page">
      {loading && <p>Cargando...</p>}
      {error && <p>{error}</p>}
      {product && (
        <div>
          <h2>{product.title}</h2>
          <img src={product.thumbnail} alt={product.title} />
          <p>Precio: ${product.price}</p>
          <p>{product.description}</p>
          <button onClick={handleAddToCart}>Agregar al Carrito</button>
        </div>
      )}
    </div>
  );
};

export default ProductDetailsPage;
