import { Switch, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import CategoryPage from '../pages/CategoryPage';
import ProductDetailsPage from '../pages/ProductDetailsPage';
import CartPage from '../pages/CartPage';
import CheckoutPage from '../pages/CheckoutPage';
import OrderConfirmationPage from '../pages/OrderConfirmationPage';
import MyPurchasesPage from '../pages/MyPurchasesPage';
import AccountPage from '../pages/AccountPage';

const AppRouter = () => (
  <Switch>
    {/* Rutas principales de la aplicación */}
    <Route exact path="/" component={HomePage} />
    <Route path="/login" component={LoginPage} />
    <Route path="/category/:categoryId" component={CategoryPage} />
    <Route path="/product/:productId" component={ProductDetailsPage} />
    <Route path="/cart" component={CartPage} />
    <Route path="/checkout" component={CheckoutPage} />
    <Route path="/order-confirmation" component={OrderConfirmationPage} />
    <Route path="/my-purchases" component={MyPurchasesPage} />
    <Route path="/account" component={AccountPage} />
  </Switch>
);

export default AppRouter;
