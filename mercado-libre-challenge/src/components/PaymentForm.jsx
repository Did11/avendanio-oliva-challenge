import { useState } from 'react';
import PropTypes from 'prop-types';
import './styles/PaymentForm.css';

const PaymentForm = ({ nextStep, prevStep, setPaymentDetails }) => {
  const [cardName, setCardName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiryMonth, setExpiryMonth] = useState('');
  const [expiryYear, setExpiryYear] = useState('');
  const [cvv, setCvv] = useState('');
  const [errors, setErrors] = useState({});

  const validate = () => {
    let errors = {};
    if (!cardName.trim()) {
      errors.cardName = 'El nombre en la tarjeta es requerido';
    }
    if (!/^\d{16}$/.test(cardNumber)) {
      errors.cardNumber = 'El número de tarjeta debe tener 16 dígitos';
    }
    if (!/^\d{2}$/.test(expiryMonth) || parseInt(expiryMonth) < 1 || parseInt(expiryMonth) > 12) {
      errors.expiryMonth = 'El mes debe estar entre 01 y 12';
    }
    if (!/^\d{2}$/.test(expiryYear)) {
      errors.expiryYear = 'El año debe estar en formato YY';
    }
    if (!/^\d{3,4}$/.test(cvv)) {
      errors.cvv = 'El CVV debe tener 3 o 4 dígitos';
    }
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setPaymentDetails({ cardName, cardNumber, expiryMonth, expiryYear, cvv });
      nextStep(); // Avanza al siguiente paso si no hay errores
    }
  };

  return (
    <div className="payment-form">
      <h2>Detalles del Pago</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nombre en la tarjeta</label>
          <input
            type="text"
            value={cardName}
            onChange={(e) => setCardName(e.target.value)}
            required
          />
          {errors.cardName && <p className="error">{errors.cardName}</p>}
        </div>
        <div>
          <label>Número de tarjeta</label>
          <input
            type="text"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
            required
          />
          {errors.cardNumber && <p className="error">{errors.cardNumber}</p>}
        </div>
        <div className="expiry-date">
          <div>
            <label>Mes de expiración (MM)</label>
            <input
              type="text"
              value={expiryMonth}
              onChange={(e) => setExpiryMonth(e.target.value)}
              placeholder="MM"
              maxLength="2"
              required
            />
            {errors.expiryMonth && <p className="error">{errors.expiryMonth}</p>}
          </div>
          <div>
            <label>Año de expiración (YY)</label>
            <input
              type="text"
              value={expiryYear}
              onChange={(e) => setExpiryYear(e.target.value)}
              placeholder="YY"
              maxLength="2"
              required
            />
            {errors.expiryYear && <p className="error">{errors.expiryYear}</p>}
          </div>
        </div>
        <div>
          <label>CVV</label>
          <input
            type="text"
            value={cvv}
            onChange={(e) => setCvv(e.target.value)}
            required
          />
          {errors.cvv && <p className="error">{errors.cvv}</p>}
        </div>
        <div className="buttons">
          <button type="button" onClick={prevStep} className="prev-button">Volver</button>
          <button type="submit" className="next-button">Continuar</button>
        </div>
      </form>
    </div>
  );
};

PaymentForm.propTypes = {
  nextStep: PropTypes.func.isRequired,
  prevStep: PropTypes.func.isRequired,
  setPaymentDetails: PropTypes.func.isRequired,
};

export default PaymentForm;
