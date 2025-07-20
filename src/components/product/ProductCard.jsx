import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../features/cart/cartSlice';
import { addToast } from '../../features/ui/uiSlice';
import { formatPrice } from '../../utils/price';

const ProductCard = ({ product, viewMode }) => {
  const dispatch = useDispatch();

  const handleAdd = () => {
    dispatch(addToCart(product));
    dispatch(addToast({ type: 'success', message: `${product.title} added to cart` }));
  };

  const isList = viewMode === 'list';

  return (
    <div
      className={`bg-white rounded-lg shadow hover:shadow-lg transition flex flex-col ${
        isList ? 'md:flex-row items-center' : ''
      }`}
    >
      <Link
        to={`/products/${product.id}`}
        className={isList ? 'md:w-1/3' : ''}
      >
        <img
          src={product.image}
          alt={product.title}
          className={`object-contain bg-gray-100 rounded-t-lg ${
            isList ? 'rounded-l-lg rounded-r-none h-32 w-full' : 'h-48 w-full'
          }`}
        />
      </Link>

      <div className="p-4 flex flex-col flex-1">
        <Link
          to={`/products/${product.id}`}
          className="font-semibold text-gray-800 line-clamp-2 hover:text-primary"
        >
          {product.title}
        </Link>
        <p className="text-sm text-gray-600 mt-1">
          {product.category?.toUpperCase()}
        </p>

        <div className="mt-auto pt-2 flex justify-between items-center">
          <span className="text-lg font-bold text-primary">
            {formatPrice(product.price)}
          </span>

          <button
            onClick={handleAdd}
            className="bg-primary text-white text-sm px-4 py-2 rounded hover:bg-blue-600 transition"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;