// src/app/App.jsx
import { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from '../components/Header';
import ProductSearch from '../components/ProductSearch';
import AppRouter from './routes';
import { CartProvider } from '../context/CartContext';
import { AuthProvider } from '../context/AuthContext';
import './styles/App.css';

const App = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  return (
    <div className="App">
      <AuthProvider>
        <CartProvider>
          <Router>
            <Header setProducts={setProducts} setLoading={setLoading} setError={setError} />
            <ProductSearch products={products} loading={loading} error={error} />
            <AppRouter />
          </Router>
        </CartProvider>
      </AuthProvider>
    </div>
  );
};

export default App;
