// src/app/App.jsx
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from '../context/CartContext';
import { AuthProvider } from '../context/AuthContext';
import Header from '../components/Header';
import './styles/App.css';
import { searchProducts } from '../services/api';
import ProductListPage from '../pages/ProductListPage';
import HomePage from '../pages/HomePage';
import AppRouter from './routes';
import CartNotification from '../components/CartNotification';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async (query, navigate) => {
    try {
      const results = await searchProducts(query);
      setSearchResults(results.results);
      navigate('/search');
    } catch (error) {
      console.error('Error al buscar productos:', error);
    }
  };

  return (
    <div className="App">
      <AuthProvider>
        <CartProvider>
          <Router>
            <Header onSearch={handleSearch} />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/search" element={<ProductListPage products={searchResults} />} />
              <Route path="*" element={<AppRouter />} />
            </Routes>
            <CartNotification />
            <ToastContainer />
          </Router>
        </CartProvider>
      </AuthProvider>
    </div>
  );
};

export default App;
