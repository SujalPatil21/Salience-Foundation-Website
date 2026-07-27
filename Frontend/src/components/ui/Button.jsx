import React from 'react';
import { motion } from 'framer-motion';

/**
 * Reusable motion button supporting primary, secondary, and secondaryWhite styling variants.
 * Ensures consistent layout attributes (padding, height, radius, font-weight).
 */
const Button = ({
  children,
  variant = 'primary',
  onClick,
  className = '',
  ...props
}) => {
  // Base styling with identical vertical/horizontal padding, border-radius, and font-weight
  const baseStyle = `px-8 py-3.5 font-semibold rounded-xl text-center transition-all duration-300 ease-in-out w-full sm:w-auto text-sm md:text-base flex items-center justify-center h-12 md:h-14`;
  
  const variants = {
    primary: 'bg-[#F3EA00] text-[#111111] shadow-md hover:shadow-lg hover:bg-[#E5D900] hover:-translate-y-0.5 border border-transparent',
    secondary: 'border border-[#111111] text-[#111111] hover:bg-[#111111] hover:text-white hover:-translate-y-0.5 shadow-sm hover:shadow-md bg-transparent',
    secondaryWhite: 'border border-white text-white bg-black/25 hover:bg-white hover:text-[#111111] hover:-translate-y-0.5 shadow-md hover:shadow-lg',
  };

  const selectedVariantStyle = variants[variant] || variants.primary;

  return (
    <motion.button
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={`${baseStyle} ${selectedVariantStyle} ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
};

export default Button;
