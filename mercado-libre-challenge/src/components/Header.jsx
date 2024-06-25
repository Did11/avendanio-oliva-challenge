import { Link } from 'react-router-dom';
import './styles/Header.css';

const Header = () => (
  <header>
    <h1>Mi Aplicación</h1>
    <nav>
      <Link to="/">Inicio</Link>
      <Link to="/login">Iniciar Sesión</Link>
      {/* Añadir más enlaces según sea necesario */}
    </nav>
  </header>
);

export default Header;
