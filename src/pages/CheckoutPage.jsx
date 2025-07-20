import React, { useEffect } from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { useDispatch, useSelector } from 'react-redux';
import CheckoutForm from '../components/checkout/CheckoutForm';
import { createPaymentIntent } from '../features/orders/orderSlice';
import Loader from '../components/common/Loader';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY);

const CheckoutPage = () => {
  const dispatch = useDispatch();
  const { clientSecret, status } = useSelector((s) => s.orders);
  const totalPrice = useSelector((s) => s.cart.totalPrice);

  useEffect(() => {
    if (totalPrice > 0 && !clientSecret) {
      dispatch(createPaymentIntent({ amount: Math.round(totalPrice * 100) }));
    }
  }, [dispatch, totalPrice, clientSecret]);

  if (status === 'loading' || !clientSecret) return <Loader />;

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Checkout</h1>
      <Elements stripe={stripePromise} options={{ clientSecret }}>
        <CheckoutForm />
      </Elements>
    </div>
  );
};

export default CheckoutPage;