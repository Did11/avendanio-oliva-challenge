// src/app/App.jsx

import { BrowserRouter as Router } from 'react-router-dom';
import AppRouter from './routes';
import { CartProvider } from '../context/CartContext';
import { AuthProvider } from '../context/AuthContext';
import './styles/App.css';

const App = () => {
  return (
    <div className="App">
      <AuthProvider>
        <CartProvider>
          <Router>
            <AppRouter />
          </Router>
        </CartProvider>
      </AuthProvider>
    </div>
  );
};

export default App;
