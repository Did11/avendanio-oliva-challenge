// src/components/UsernameInput.jsx

import PropTypes from 'prop-types';

const UsernameInput = ({ input, setInput, error, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit} className="login-form">
      <label htmlFor="username-input">Ingresa tu e-mail, teléfono o usuario</label>
      <input
        type="text"
        id="username-input"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="E-mail, teléfono o usuario"
        required
      />
      {error && <div className="error-message">{error}</div>}
      <button type="submit" className="continue-button">Continuar</button>
    </form>
  );
};

UsernameInput.propTypes = {
  input: PropTypes.string.isRequired,
  setInput: PropTypes.func.isRequired,
  error: PropTypes.string,
  handleSubmit: PropTypes.func.isRequired,
};

export default UsernameInput; 