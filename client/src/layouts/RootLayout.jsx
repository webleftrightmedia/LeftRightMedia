import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';
import usePageTracking from '../hooks/usePageTracking';

export default function RootLayout({ children }) {
  usePageTracking();
  return (
    <div className="min-h-screen bg-concrete flex flex-col">
      <ScrollToTop />
      <Navbar />
      <main className="flex-1">
        {children || <Outlet />}
      </main>
      <Footer />
    </div>
  );
}
