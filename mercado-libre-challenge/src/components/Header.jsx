// src/components/Header.jsx
import './styles/Header.css';
import logo from '../assets/logo.png'; // Importa el logo existente
import newImage from '../assets/disney.webp'; // Importa la nueva imagen

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <img src={logo} alt="Logo" className="logo" />
        <nav className="header-nav">
          <a href="/login" className="login-link">Iniciar Sesión</a>
        </nav>
        <img src={newImage} alt="New Image" className="new-image" /> {/* Nueva imagen */}
      </div>
    </header>
  );
};

export default Header;
