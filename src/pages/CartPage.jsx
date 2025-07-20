import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import CartItem from '../components/cart/CartItem';
import CartSummary from '../components/cart/CartSummary';
import { clearCart } from '../features/cart/cartSlice';
import { addToast } from '../features/ui/uiSlice';

const CartPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { items, totalQty, totalPrice } = useSelector((s) => s.cart);

  const handleClear = () => {
    dispatch(clearCart());
    dispatch(addToast({ type: 'info', message: 'Cart cleared' }));
  };

  if (!items.length) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-semibold mb-4">Your cart is empty</h2>
        <Link
          to="/products"
          className="bg-primary text-white px-6 py-2 rounded hover:bg-blue-600"
        >
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Shopping Cart ({totalQty})</h1>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2 space-y-4">
          {items.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
        </div>

        <div className="md:col-span-1">
          <CartSummary totalPrice={totalPrice} />
          <button
            onClick={handleClear}
            className="w-full mt-4 border border-danger text-danger py-2 rounded hover:bg-danger hover:text-white transition"
          >
            Clear Cart
          </button>
          <button
            onClick={() => navigate('/checkout')}
            className="w-full mt-2 bg-primary text-white py-2 rounded hover:bg-blue-600 transition"
          >
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;