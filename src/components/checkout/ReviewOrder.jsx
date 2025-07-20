import React from 'react';
import { useSelector } from 'react-redux';
import { formatPrice } from '../../utils/price';

const ReviewOrder = ({ onPay }) => {
  const { items, totalPrice } = useSelector((s) => s.cart);
  const { shippingAddress } = useSelector((s) => s.orders);

  return (
    <div className="bg-white p-6 rounded shadow space-y-6">
      <h2 className="text-xl font-semibold">Review Order</h2>

      {/* Items */}
      <section>
        <h3 className="font-medium mb-2">Items</h3>
        <ul className="space-y-2 text-sm">
          {items.map((i) => (
            <li key={i.id} className="flex justify-between">
              <span>
                {i.title} × {i.quantity}
              </span>
              <span>{formatPrice(i.price * i.quantity)}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Shipping Address */}
      <section>
        <h3 className="font-medium mb-2">Shipping Address</h3>
        <p className="text-sm text-gray-700">
          {shippingAddress.fullName}, {shippingAddress.address}, {shippingAddress.city},{' '}
          {shippingAddress.postalCode}, {shippingAddress.country}
        </p>
      </section>

      {/* Total */}
      <section>
        <div className="flex justify-between font-bold text-lg">
          <span>Total</span>
          <span>{formatPrice(totalPrice)}</span>
        </div>
      </section>

      <button
        onClick={onPay}
        className="w-full bg-primary text-white py-2 rounded hover:bg-blue-600"
      >
        Proceed to Payment
      </button>
    </div>
  );
};

export default ReviewOrder;