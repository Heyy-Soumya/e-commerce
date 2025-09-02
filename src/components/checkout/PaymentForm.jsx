import React from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { useDispatch, useSelector } from 'react-redux';
import { setLoader, addToast } from '../../features/ui/uiSlice';
import { clearCart } from '../../features/cart/cartSlice';
import { resetOrder } from '../../features/orders/orderSlice';
import { useNavigate } from 'react-router-dom';


const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const clientSecret = useSelector((s) => s.orders.clientSecret);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) return;

    dispatch(setLoader(true));
    const card = elements.getElement(CardElement);
    const { paymentIntent, error } = await stripe.confirmCardPayment(clientSecret, {
      payment_method: { card },
    });

    dispatch(setLoader(false));

    if (error) {
      dispatch(addToast({ type: 'error', message: error.message }));
    } else if (paymentIntent.status === 'succeeded') {
      dispatch(clearCart());
      dispatch(resetOrder());
      navigate(`/order-success/${paymentIntent.id}`);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <h2 className="text-xl font-semibold">Payment</h2>

      <div className="p-4 border border-gray-300 rounded-lg">
        <CardElement
          options={{
            style: {
              base: { fontSize: '16px', color: '#424770', '::placeholder': { color: '#aab7c4' } },
            },
          }}
        />
      </div>

      <button
        type="submit"
        disabled={!stripe}
        className="w-full bg-primary text-white py-3 rounded-lg hover:bg-blue-600 disabled:opacity-50"
      >
        Pay Now
      </button>
    </form>
  );
};
export default PaymentForm;
