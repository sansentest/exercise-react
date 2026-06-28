import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Sidebar from './Sidebar';

export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Sidebar />
      {/* On large screens, add left padding to avoid hiding content under the fixed sidebar */}
      <div className="flex-1 lg:pl-64">
        <Outlet />
      </div>
      {/* Ensure Footer is also shifted so it doesn't overlap */}
      <div className="lg:pl-64">
        <Footer />
      </div>
    </div>
  );
}
