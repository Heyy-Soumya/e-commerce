import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => (
  <div className="text-center py-20">
    <h1 className="text-5xl font-bold text-gray-800 mb-6">
      Welcome to MyShop
    </h1>
    <p className="text-lg text-gray-600 mb-8 max-w-xl mx-auto">
      Discover amazing products at unbeatable prices. Start shopping now!
    </p>
    <Link
      to="/products"
      className="inline-block bg-primary text-white px-8 py-3 rounded-lg shadow hover:bg-blue-600 transition"
    >
      Browse Products
    </Link>
  </div>
);

export default HomePage;