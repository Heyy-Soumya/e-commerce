import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../features/products/productsSlice';
import { addToCart } from '../features/cart/cartSlice';
import { addToast } from '../features/ui/uiSlice';
import { formatPrice } from '../utils/price';
import Loader from '../components/common/Loader';

const ProductDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const product = useSelector((s) =>
    s.products.items.find((p) => p.id === Number(id))
  );
  const status = useSelector((s) => s.products.status);

  useEffect(() => {
    if (!product && status === 'idle') dispatch(fetchProducts());
  }, [dispatch, product, status]);

  if (status === 'loading') return <Loader />;
  if (!product) return <p className="text-center py-10">Product not found.</p>;

  const handleAdd = () => {
    dispatch(addToCart(product));
    dispatch(addToast({ type: 'success', message: `${product.title} added to cart` }));
  };

  return (
    <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 items-start">
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-96 object-contain bg-gray-100 rounded-lg"
      />

      <div className="space-y-4">
        <h1 className="text-3xl font-bold text-gray-900">{product.title}</h1>
        <p className="text-sm text-gray-500">{product.category?.toUpperCase()}</p>

        <p className="text-gray-700 leading-relaxed">{product.description}</p>

        <div className="text-3xl font-bold text-primary">
          {formatPrice(product.price)}
        </div>

        <button
          onClick={handleAdd}
          className="w-full bg-primary text-white py-3 rounded-lg hover:bg-blue-600 transition"
        >
          Add to Cart
        </button>

        <button
          onClick={() => navigate(-1)}
          className="w-full border border-gray-300 py-3 rounded-lg hover:bg-gray-100 transition"
        >
          Go Back
        </button>
      </div>
    </div>
  );
};

export default ProductDetailPage;