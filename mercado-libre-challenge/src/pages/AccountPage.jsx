// src/pages/AccountPage.jsx

import { useAuth } from '../context/AuthContext';
import './styles/AccountPage.css';

const AccountPage = () => {
  const { user } = useAuth();

  if (!user) {
    return <p>No se encontró información de usuario.</p>;
  }

  const { email, username, name, phone, address } = user;
  const { firstname, lastname } = name;
  const { city, street, number, zipcode } = address;

  return (
    <div className="account-page">
      <h1>Mi Cuenta</h1>
      <div className="account-info">
        <p><strong>Nombre:</strong> {firstname} {lastname}</p>
        <p><strong>Email:</strong> {email}</p>
        <p><strong>Usuario:</strong> {username}</p>
        <p><strong>Teléfono:</strong> {phone}</p>
        <div className="address">
          <h2>Dirección</h2>
          <p><strong>Calle:</strong> {street} {number}</p>
          <p><strong>Ciudad:</strong> {city}</p>
          <p><strong>Código Postal:</strong> {zipcode}</p>
        </div>
      </div>
    </div>
  );
};

export default AccountPage;
