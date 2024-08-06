// src/components/PasswordInput.jsx

import { useState } from 'react';
import PropTypes from 'prop-types';

const PasswordInput = ({ user, login, navigate }) => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handlePasswordSubmit = (event) => {
    event.preventDefault();
    setError('');

    if (user.password === password) {
      login(user);
      navigate('/home');
    } else {
      setError('Contraseña incorrecta. Por favor, inténtalo de nuevo.');
    }
  };

  return (
    <form onSubmit={handlePasswordSubmit} className="login-form">
      <label htmlFor="password-input">Ingresa tu contraseña</label>
      <input
        type="password"
        id="password-input"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Contraseña"
        required
      />
      {error && <div className="error-message">{error}</div>}
      <button type="submit" className="continue-button">Iniciar Sesión</button>
    </form>
  );
};

PasswordInput.propTypes = {
  user: PropTypes.object.isRequired,
  login: PropTypes.func.isRequired,
  navigate: PropTypes.func.isRequired,
};

export default PasswordInput; 