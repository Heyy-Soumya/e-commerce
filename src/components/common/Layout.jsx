import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const Layout = () => (
  <div className="flex flex-col min-h-screen">
    <Header />
    <main className="flex-1 container mx-auto px-4 py-6">
      <Outlet />
    </main>
    <Footer />
  </div>
);

export default Layout;