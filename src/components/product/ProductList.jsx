import React from 'react';
import ProductCard from './ProductCard';

const ProductList = ({ products }) => {
  if (!products.length) {
    return <p className="text-center text-gray-500 py-10">No products found.</p>;
  }

  return (
    <div className="space-y-4">
      {products.map((p) => (
        <ProductCard key={p.id} product={p} viewMode="list" />
      ))}
    </div>
  );
};

export default ProductList;