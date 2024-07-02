// src/app/routes.jsx
import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import CategoryPage from '../pages/CategoryPage';
import ProductDetailsPage from '../pages/ProductDetailsPage';
import CartPage from '../pages/CartPage';
import CheckoutPage from '../pages/CheckoutPage';
import OrderConfirmationPage from '../pages/OrderConfirmationPage';
import MyPurchasesPage from '../pages/MyPurchasesPage';
import AccountPage from '../pages/AccountPage';

// Configuración de rutas de la aplicación
const AppRouter = () => (
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/login" element={<LoginPage />} />
    <Route path="/category/:categoryId" element={<CategoryPage />} />
    <Route path="/product/:productId" element={<ProductDetailsPage />} />
    <Route path="/cart" element={<CartPage />} />
    <Route path="/checkout" element={<CheckoutPage />} />
    <Route path="/order-confirmation" element={<OrderConfirmationPage />} />
    <Route path="/my-purchases" element={<MyPurchasesPage />} />
    <Route path="/account" element={<AccountPage />} />
  </Routes>
);

export default AppRouter;
