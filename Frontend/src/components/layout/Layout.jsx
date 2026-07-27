import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

/**
 * Layout component that wraps pages and enforces general layout rules (e.g. background, full width/height).
 * Integrates top Navbar and bottom Footer.
 */
const Layout = ({ children }) => {
  return (
    <div className="min-h-screen w-full bg-white text-brand-black flex flex-col font-sans">
      <Navbar />
      <main className="flex-grow w-full">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;


