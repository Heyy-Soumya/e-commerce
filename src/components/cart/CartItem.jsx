import React from 'react';
import { useDispatch } from 'react-redux';
import { changeQty, removeFromCart } from '../../features/cart/cartSlice';
import { addToast } from '../../features/ui/uiSlice';
import { formatPrice } from '../../utils/price';
import { TrashIcon } from '@heroicons/react/24/outline';

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  const handleQty = (newQty) => {
    if (newQty < 1) return;
    dispatch(changeQty({ id: item.id, quantity: newQty }));
  };

  const handleRemove = () => {
    dispatch(removeFromCart(item.id));
    dispatch(addToast({ type: 'error', message: `${item.title} removed` }));
  };

  return (
    <div className="flex items-center gap-4 p-4 bg-white rounded shadow">
      <img
        src={item.image}
        alt={item.title}
        className="w-20 h-20 object-contain bg-gray-100 rounded"
      />

      <div className="flex-1">
        <h3 className="font-semibold text-sm line-clamp-2">{item.title}</h3>
        <p className="text-xs text-gray-500 mt-1">{formatPrice(item.price)} each</p>
      </div>

      <div className="flex items-center gap-2">
        <button
          onClick={() => handleQty(item.quantity - 1)}
          className="border px-2 py-1 rounded"
        >
          −
        </button>
        <span className="w-8 text-center">{item.quantity}</span>
        <button
          onClick={() => handleQty(item.quantity + 1)}
          className="border px-2 py-1 rounded"
        >
          +
        </button>
      </div>

      <div className="font-bold w-24 text-right">
        {formatPrice(item.price * item.quantity)}
      </div>

      <button
        onClick={handleRemove}
        className="text-danger hover:text-red-700"
        title="Remove"
      >
        <TrashIcon className="h-5 w-5" />
      </button>
    </div>
  );
};

export default CartItem;