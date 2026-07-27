import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Container from './Container';

/**
 * Reusable Hero Header Banner for sub-pages.
 * Features: Dark background, breadcrumb navigation, and centered heading.
 */
const PageHero = ({ badge, title, subtitle }) => {
  return (
    <section className="relative bg-brand-black text-white py-24 md:py-28 overflow-hidden border-b border-gray-900 mt-20">
      {/* Background Subtle Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-brand-black via-[#1a1a1a] to-brand-black opacity-90" />

      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl flex flex-col items-start"
        >
          {/* Breadcrumb trail */}
          <nav className="flex items-center gap-2 text-xs md:text-sm text-white/55 font-medium uppercase tracking-wider mb-6">
            <Link to="/" className="hover:text-brand-yellow transition-colors duration-200">
              Home
            </Link>
            <span>/</span>
            <span className="text-brand-yellow font-semibold">
              {badge}
            </span>
          </nav>

          {/* Title */}
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold font-heading tracking-tight leading-tight">
            {title}
          </h1>

          {/* Subtitle */}
          {subtitle && (
            <p className="mt-4 text-base md:text-lg text-white/70 font-light leading-relaxed max-w-2xl">
              {subtitle}
            </p>
          )}
        </motion.div>
      </Container>
    </section>
  );
};

export default PageHero;
