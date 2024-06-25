import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from '../components/Header';
import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import CategoryPage from '../pages/CategoryPage';
import ProductDetailsPage from '../pages/ProductDetailsPage';
import './styles/App.css';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/category/:categoryId" component={CategoryPage} />
        <Route path="/product/:productId" component={ProductDetailsPage} />
      </Switch>
    </Router>
  );
}

export default App;
