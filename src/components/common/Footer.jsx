import React from 'react';

const Footer = () => (
  <footer className="bg-gray-800 text-gray-200">
    <div className="container mx-auto px-4 py-6 text-center text-sm">
      © {new Date().getFullYear()} MyShop. Built with ❤️ & React.
    </div>
  </footer>
);

export default Footer;