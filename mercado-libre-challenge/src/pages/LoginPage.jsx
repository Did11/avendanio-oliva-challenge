import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from '../context/AuthContext';
import './styles/LoginPage.css';

const LoginPage = () => {
    const [input, setInput] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const { login } = useAuth();

    const handleSubmit = async (event) => {
        event.preventDefault();
        setError('');

        try {
            const response = await axios.get('https://fakestoreapi.com/users');
            const users = response.data;

            // Buscar el usuario por email, teléfono o nombre de usuario
            const user = users.find((user) =>
                user.email === input ||
                user.phone === input ||
                user.username === input
            );

            if (user) {
                login(user); // Actualizar el estado de autenticación usando el contexto
                navigate('/home'); // Navegar a la página principal tras login exitoso
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
            <form onSubmit={handleSubmit} className="login-form">
                <label htmlFor="input">Ingresa tu e-mail, teléfono o usuario</label>
                <input
                    type="text"
                    id="input"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="E-mail, teléfono o usuario"
                    required
                />
                {error && <div className="error-message">{error}</div>}
                <button type="submit" className="continue-button">Continuar</button>
                <button type="button" className="create-account-button" onClick={() => navigate('/register')}>
                    Crear cuenta
                </button>
            </form>
        </div>
    );
};

export default LoginPage;
