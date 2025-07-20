import React from 'react';
import { Link, useParams } from 'react-router-dom';

const OrderSuccessPage = () => {
  const { orderId } = useParams();

  return (
    <div className="max-w-md mx-auto text-center py-20">
      <div className="mb-6">
        <svg
          className="w-20 h-20 text-success mx-auto"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </div>

      <h1 className="text-3xl font-bold text-gray-800 mb-2">Thank you!</h1>
      <p className="text-gray-600 mb-6">
        Your order <strong>{orderId}</strong> has been placed successfully.
      </p>

      <Link
        to="/products"
        className="bg-primary text-white px-6 py-2 rounded hover:bg-blue-600"
      >
        Continue Shopping
      </Link>
    </div>
  );
};

export default OrderSuccessPage;