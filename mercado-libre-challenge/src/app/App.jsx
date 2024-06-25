import { BrowserRouter as Router } from 'react-router-dom';
import Header from '../components/Header';
import AppRouter from './Router';
import './styles/App.css';

const App = () => (
  <Router>
    {/* Header común en todas las páginas */}
    <Header />
    {/* Componente de enrutador que maneja las rutas */}
    <AppRouter />
  </Router>
);

export default App;
