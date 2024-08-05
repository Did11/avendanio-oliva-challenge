/* src/pages/LoginPage.css */
.login-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #fff; /* fondo blanco */
}

.login-form {
    width: 300px; /* Ancho fijo similar al ejemplo */
    padding: 20px;
    border: 1px solid #ccc; /* Borde sutil */
    background: white;
    box-shadow: 0 4px 8px rgba(0,0,0,0.1); /* Sombra suave para el formulario */
}

.login-form label {
    display: block;
    margin-bottom: 10px;
    font-size: 16px; /* Tamaño de fuente adecuado */
}

.login-form input {
    width: 100%;
    padding: 8px;
    margin-bottom: 20px;
    border: 1px solid #ccc;
    border-radius: 4px;
}

.continue-button, .create-account-button {
    width: 100%;
    padding: 10px;
    border: none;
    border-radius: 4px;
    margin-bottom: 10px; /* Espaciado entre botones */
    cursor: pointer;
}

.continue-button {
    background-color: #3483fa; /* Color de fondo para el botón continuar */
    color: white;
}

.create-account-button {
    background-color: #eff0f1; /* Color de fondo para el botón crear cuenta */
    color: black;
}
