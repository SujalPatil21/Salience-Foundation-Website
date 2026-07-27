import React from 'react';
import { motion } from 'framer-motion';

/**
 * Standardized Section Heading component with pre-title badges and subtitles.
 */
const SectionHeading = ({
  badge,
  title,
  subtitle,
  light = false,
  align = 'center',
  className = '',
}) => {
  const alignClasses = {
    left: 'text-left items-start',
    center: 'text-center items-center mx-auto',
    right: 'text-right items-end',
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6 }}
      className={`flex flex-col mb-12 md:mb-16 max-w-3xl ${alignClasses[align]} ${className}`}
    >
      {badge && (
        <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-widest text-brand-dark bg-yellow-400/20 rounded-full mb-3">
          {badge}
        </span>
      )}
      
      <h2 className={`text-3xl md:text-5xl font-extrabold font-heading tracking-tight ${light ? 'text-white' : 'text-brand-black'}`}>
        {title}
      </h2>
      
      {subtitle && (
        <p className={`mt-4 text-base md:text-lg font-light leading-relaxed max-w-2xl ${light ? 'text-white/70' : 'text-brand-dark'}`}>
          {subtitle}
        </p>
      )}
    </motion.div>
  );
};

export default SectionHeading;
