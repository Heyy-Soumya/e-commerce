import React, { useState } from 'react';
import AddressForm from './AddressForm';
import ReviewOrder from './ReviewOrder';
import PaymentForm from './PaymentForm';

const CheckoutForm = () => {
  const [step, setStep] = useState('address'); // address → review → pay

  if (step === 'address') return <AddressForm onNext={() => setStep('review')} />;
  if (step === 'review')   return <ReviewOrder onNext={() => setStep('pay')} />;
  return <PaymentForm />;
};

export default CheckoutForm;