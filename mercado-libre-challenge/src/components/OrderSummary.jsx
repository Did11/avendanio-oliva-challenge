import PropTypes from 'prop-types';
import useCart from '../context/useCart';
import './styles/OrderSummary.css';

const OrderSummary = ({ shippingDetails, paymentDetails, prevStep, handlePurchaseComplete }) => {
  const { totalAmount } = useCart();

  return (
    <div className="order-summary">
      <h2>Resumen de la Compra</h2>
      <div>
        <h3>Detalles de Envío</h3>
        <p><strong>Nombre:</strong> {shippingDetails.name}</p>
        <p><strong>Dirección:</strong> {shippingDetails.address}</p>
        <p><strong>Provincia:</strong> {shippingDetails.province}</p>
        <p><strong>Código Postal:</strong> {shippingDetails.postalCode}</p>
      </div>
      <div>
        <h3>Detalles del Pago</h3>
        <p><strong>Nombre en la tarjeta:</strong> {paymentDetails.cardName}</p>
        <p><strong>Número de tarjeta:</strong> {paymentDetails.cardNumber.replace(/\d{12}(\d{4})/, '**** **** **** $1')}</p>
        <p><strong>Fecha de expiración:</strong> {paymentDetails.expiryMonth}/{paymentDetails.expiryYear}</p>
      </div>
      <div>
        <h3>Total del Pedido</h3>
        <p>${totalAmount.toFixed(2)}</p>
      </div>
      <div className="buttons">
        <button type="button" onClick={prevStep} className="prev-button">Volver</button>
        <button type="button" onClick={handlePurchaseComplete} className="complete-button">Completar Compra</button>
      </div>
    </div>
  );
};

OrderSummary.propTypes = {
  shippingDetails: PropTypes.shape({
    name: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    province: PropTypes.string.isRequired,
    postalCode: PropTypes.string.isRequired,
  }).isRequired,
  paymentDetails: PropTypes.shape({
    cardName: PropTypes.string.isRequired,
    cardNumber: PropTypes.string.isRequired,
    expiryMonth: PropTypes.string.isRequired,
    expiryYear: PropTypes.string.isRequired,
    cvv: PropTypes.string.isRequired,
  }).isRequired,
  prevStep: PropTypes.func.isRequired,
  handlePurchaseComplete: PropTypes.func.isRequired,
};

export default OrderSummary;
