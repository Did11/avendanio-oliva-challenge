// src/app/App.jsx
import { BrowserRouter as Router } from 'react-router-dom';
import Header from '../components/Header';
import AppRouter from './routes';
import './styles/App.css';

const App = () => (
  <div className="App">
    <Router>
      <Header />
      <div className="container">
        <AppRouter />
      </div>
    </Router>
  </div>
);

export default App;
