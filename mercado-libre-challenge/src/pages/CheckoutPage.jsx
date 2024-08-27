import { useState } from 'react';
import ShippingDetails from '../components/ShippingDetails';
import OrderSummary from '../components/OrderSummary';
import PaymentForm from '../components/PaymentForm';
import './styles/CheckoutPage.css';

const CheckoutPage = () => {
  const [step, setStep] = useState(1);

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  return (
    <div className="checkout-page">
      <h1>Finalizar Compra</h1>
      {step === 1 && <ShippingDetails nextStep={nextStep} />}
      {step === 2 && <OrderSummary nextStep={nextStep} prevStep={prevStep} />}
      {step === 3 && <PaymentForm prevStep={prevStep} />}
    </div>
  );
};

export default CheckoutPage;
