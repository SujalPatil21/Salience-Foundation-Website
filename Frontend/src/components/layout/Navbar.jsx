import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { NAV_ITEMS } from '../../constants/navigation';
import Button from '../ui/Button';
import logoImg from '../../assets/images/salience logo.png';

/**
 * Rebuilt Scroll-Linked Responsive Navbar.
 * Interpolates color, opacity, shadow, border, and backdrop blur 
 * based on homepage scroll position (0 to 150px) at 60 FPS.
 */
const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { scrollY } = useScroll();

  // Close mobile menu on path changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const isScrollLinkedPage = location.pathname === '/' || location.pathname === '/programs' || location.pathname === '/partner' || location.pathname === '/contact' || location.pathname === '/gallery' || location.pathname === '/policies' || location.pathname === '/achievements' || location.pathname === '/students' || location.pathname === '/events';

  // Smooth scroll transformations for the homepage, fallback to solid white on sub-pages
  const backgroundOpacity = useTransform(scrollY, [0, 150], [0, 0.95]);
  const backgroundColor = useTransform(
    backgroundOpacity,
    (opacity) => isScrollLinkedPage ? `rgba(255, 255, 255, ${opacity})` : 'rgba(255, 255, 255, 0.95)'
  );

  const backdropBlur = useTransform(
    scrollY,
    [0, 150],
    isScrollLinkedPage ? ['blur(0px)', 'blur(12px)'] : ['blur(12px)', 'blur(12px)']
  );

  const borderOpacity = useTransform(scrollY, [0, 150], [0, 1]);
  const borderBottom = useTransform(
    borderOpacity,
    (opacity) => isScrollLinkedPage ? `1px solid rgba(234, 234, 234, ${opacity})` : '1px solid rgba(234, 234, 234, 1)'
  );

  const shadowOpacity = useTransform(scrollY, [0, 150], [0, 0.05]);
  const boxShadow = useTransform(
    shadowOpacity,
    (opacity) => isScrollLinkedPage ? `0 1px 3px 0 rgba(0, 0, 0, ${opacity})` : '0 1px 3px 0 rgba(0, 0, 0, 0.05)'
  );

  const textColor = useTransform(
    scrollY,
    [0, 150],
    isScrollLinkedPage ? ['rgb(255, 255, 255)', 'rgb(87, 87, 87)'] : ['rgb(87, 87, 87)', 'rgb(87, 87, 87)']
  );


  return (
    <motion.nav 
      className="fixed top-0 left-0 right-0 z-50 h-20 flex items-center"
      style={{
        backgroundColor,
        backdropFilter: backdropBlur,
        WebkitBackdropFilter: backdropBlur,
        borderBottom,
        boxShadow,
        color: textColor
      }}
    >
      {/* Centered container with 1400px limit and responsive padding */}
      <div className="max-w-[1400px] w-full mx-auto px-5 md:px-8 lg:px-10 flex items-center justify-between lg:grid lg:grid-cols-[1fr_auto_1fr]">
        
        {/* Left Column: Logo (anchored to left, flex-shrink-0) */}
        <div className="flex justify-start items-center flex-shrink-0">
          <Link to="/" className="flex items-center hover:opacity-90 transition-opacity duration-300">
            <img
              src={logoImg}
              alt="Salience Foundation Logo"
              className="h-9 md:h-[44px] lg:h-[50px] w-auto object-contain flex-shrink-0"
            />
          </Link>
        </div>

        {/* Center Column: Navigation links (visually centered on grid, hidden on mobile/tablet) */}
        <div className="hidden lg:flex justify-self-center items-center">
          <ul className="flex items-center gap-[38px]">
            {NAV_ITEMS.map((item, idx) => (
              <li key={idx} className="relative flex items-center h-20">
                <NavLink
                  to={item.path}
                  className={({ isActive }) => 
                    `relative group py-1.5 text-[16.5px] tracking-wide transition-colors duration-300 ease-in-out ${
                      isActive 
                        ? 'font-semibold' 
                        : 'font-medium hover:text-[#F3EA00]'
                    }`
                  }
                  style={({ isActive }) => 
                    isActive ? { color: '#F3EA00' } : {}
                  }
                >
                  {({ isActive }) => (
                    <>
                      {item.label}
                      <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] bg-[#F3EA00] transition-all duration-300 ease-in-out ${
                        isActive ? 'w-full' : 'w-0 group-hover:w-full'
                      }`} />
                    </>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Column: CTA button (Desktop) / Hamburger (Mobile) */}
        <div className="flex justify-end items-center flex-shrink-0 gap-4">
          <div className="hidden lg:block">
            <Link to="/partner">
              <Button 
                variant="primary" 
                className="text-xs md:text-sm px-6 py-2 shadow-sm"
              >
                Partner With Us
              </Button>
            </Link>
          </div>

          {/* Hamburger Menu (Mobile) */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-md focus:outline-none transition-colors duration-300"
            aria-label="Toggle menu"
          >
            <motion.svg
              className="w-6 h-6"
              style={{ stroke: textColor }}
              fill="none"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </motion.svg>
          </button>
        </div>

      </div>

      {/* Mobile Drawer Overlay */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-20 bottom-0 bg-white z-40 border-t border-gray-100 flex flex-col p-6 animate-fade-in">
          <ul className="flex flex-col gap-6 font-heading font-semibold text-lg text-brand-black">
            {NAV_ITEMS.map((item, idx) => (
              <li key={idx}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) => 
                    `block py-2 ${isActive ? 'text-[#F3EA00] border-l-4 border-brand-yellow pl-3' : 'text-brand-black/80'}`
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
          <div className="mt-auto pt-6 border-t border-gray-100">
            <Link to="/partner" className="block w-full">
              <Button variant="primary" className="w-full bg-[#F3EA00] text-[#111111] hover:bg-[#E5D900] py-3.5 shadow-lg">
                Partner With Us
              </Button>
            </Link>
          </div>
        </div>
      )}
    </motion.nav>
  );
};

export default Navbar;
