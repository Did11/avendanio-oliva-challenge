// src/pages/HomePage.jsx
import ProductSearch from '../components/ProductSearch';

const HomePage = () => {
  return (
    <div className="home-page">
      <header className="welcome-header">
        <h1>Bienvenido a nuestra tienda</h1>
        <p>Explora una amplia gama de productos y encuentra lo que necesitas.</p>
      </header>
      <ProductSearch />
    </div>
  );
};

export default HomePage;
