import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './styles/ShippingDetails.css';

const ShippingDetails = ({ nextStep, setShippingDetails }) => {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [province, setProvince] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [provinces, setProvinces] = useState([]);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    // Cargar provincias desde el archivo provinces.json
    fetch('src/data/provinces.json')
      .then(response => response.json())
      .then(data => setProvinces(data))
      .catch(error => console.error('Error cargando provincias:', error));
  }, []);

  const validate = () => {
    let errors = {};
    if (!name.trim()) {
      errors.name = 'El nombre es requerido';
    }
    if (!address.trim()) {
      errors.address = 'La dirección es requerida';
    }
    if (!province.trim()) {
      errors.province = 'La provincia es requerida';
    }
    if (!postalCode.trim() || !/^\d{4,8}$/.test(postalCode)) {
      errors.postalCode = 'El código postal es inválido';
    }
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setShippingDetails({ name, address, province, postalCode });
      nextStep(); // Avanza al siguiente paso si no hay errores
    }
  };

  return (
    <div className="shipping-details">
      <h2>Detalles de Envío</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nombre</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          {errors.name && <p className="error">{errors.name}</p>}
        </div>
        <div>
          <label>Dirección</label>
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
          {errors.address && <p className="error">{errors.address}</p>}
        </div>
        <div>
          <label>Provincia</label>
          <select
            value={province}
            onChange={(e) => setProvince(e.target.value)}
            required
          >
            <option value="">Selecciona una provincia</option>
            {provinces.map((prov) => (
              <option key={prov} value={prov}>
                {prov}
              </option>
            ))}
          </select>
          {errors.province && <p className="error">{errors.province}</p>}
        </div>
        <div>
          <label>Código Postal</label>
          <input
            type="text"
            value={postalCode}
            onChange={(e) => setPostalCode(e.target.value)}
            required
          />
          {errors.postalCode && <p className="error">{errors.postalCode}</p>}
        </div>
        <button type="submit" className="next-button">Continuar</button>
      </form>
    </div>
  );
};

ShippingDetails.propTypes = {
  nextStep: PropTypes.func.isRequired,
  setShippingDetails: PropTypes.func.isRequired,
};

export default ShippingDetails;
