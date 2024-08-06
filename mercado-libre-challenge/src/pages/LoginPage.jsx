// src/pages/LoginPage.jsx

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from '../context/AuthContext';
import UsernameInput from '../components/UsernameInput';
import PasswordInput from '../components/PasswordInput';
import './styles/LoginPage.css';

const LoginPage = () => {
  const [input, setInput] = useState('');
  const [error, setError] = useState('');
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleUsernameSubmit = async (event) => {
    event.preventDefault();
    setError('');

    try {
      const response = await axios.get('https://fakestoreapi.com/users');
      const users = response.data;

      const foundUser = users.find(
        (user) =>
          user.email === input ||
          user.phone === input ||
          user.username === input
      );

      if (foundUser) {
        setUser(foundUser); // Guarda el usuario encontrado para el siguiente paso
      } else {
        setError('No se encontró ningún usuario con los datos ingresados.');
      }
    } catch (err) {
      setError('Error al conectar con la API.');
      console.error('Error:', err);
    }
  };

  return (
    <div className="login-container">
      {user ? (
        <PasswordInput user={user} login={login} navigate={navigate} />
      ) : (
        <UsernameInput
          input={input}
          setInput={setInput}
          error={error}
          handleSubmit={handleUsernameSubmit}
        />
      )}
    </div>
  );
};

export default LoginPage;
