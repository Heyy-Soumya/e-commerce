import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../features/products/productsSlice';
import ProductList from '../components/product/ProductList';
import ProductGrid from '../components/product/ProductGrid';
import SearchBar from '../components/product/SearchBar';
import ViewToggle from '../components/product/ViewToggle';
import Loader from '../components/common/Loader';

const ProductsPage = () => {
  const dispatch = useDispatch();
  const { filteredItems, viewMode, status, error } = useSelector((s) => s.products);

  useEffect(() => {
    if (status === 'idle') dispatch(fetchProducts());
  }, [dispatch, status]);

  if (status === 'loading') return <Loader />;
  if (status === 'failed') return <p className="text-center py-10 text-red-600">{error}</p>;

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
        <SearchBar />
        <ViewToggle />
      </div>

      {viewMode === 'list' ? (
        <ProductList products={filteredItems} />
      ) : (
        <ProductGrid products={filteredItems} />
      )}
    </div>
  );
};

export default ProductsPage;