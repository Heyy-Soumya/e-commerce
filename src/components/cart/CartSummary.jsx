import React from 'react';
import { formatPrice } from '../../utils/price';

const CartSummary = ({ totalPrice }) => (
  <div className="bg-white rounded shadow p-4 space-y-2">
    <h2 className="font-bold text-lg mb-2">Order Summary</h2>

    <div className="flex justify-between text-sm">
      <span>Subtotal</span>
      <span>{formatPrice(totalPrice)}</span>
    </div>

    <div className="flex justify-between text-sm">
      <span>Shipping</span>
      <span>Free</span>
    </div>

    <hr className="my-2" />

    <div className="flex justify-between font-bold text-lg">
      <span>Total</span>
      <span>{formatPrice(totalPrice)}</span>
    </div>
  </div>
);

export default CartSummary;