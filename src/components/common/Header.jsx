import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCartIcon } from '@heroicons/react/24/outline';
import { useSelector } from 'react-redux';

const Header = () => {
  const totalQty = useSelector((state) => state.cart.totalQty);

  return (
    <header className="bg-white shadow">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold text-primary">
          MyShop
        </Link>

        <nav className="space-x-6">
          <Link to="/" className="hover:text-primary">
            Home
          </Link>
          <Link to="/products" className="hover:text-primary">
            Products
          </Link>
        </nav>

        <Link
          to="/cart"
          className="relative flex items-center space-x-1 text-gray-700 hover:text-primary"
        >
          <ShoppingCartIcon className="h-6 w-6" />
          {totalQty > 0 && (
            <span className="absolute -top-2 -right-2 bg-danger text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
              {totalQty}
            </span>
          )}
        </Link>
      </div>
    </header>
  );
};

export default Header;