import React from 'react';
import { motion } from 'framer-motion';
import { BORDER_RADIUS, SHADOWS, TRANSITIONS } from '../../constants/design';

/**
 * Reusable Image component that renders an image with a responsive background gradient glow on hover.
 */
const GlowImage = ({
  src,
  alt,
  glowDirection = 'r',
  className = '',
  imageClassName = '',
}) => {
  const gradientClass = glowDirection === 'l'
    ? 'bg-gradient-to-l from-orange-500/20 to-transparent'
    : 'bg-gradient-to-r from-orange-500/20 to-transparent';

  return (
    <div className={`relative group ${className}`}>
      {/* Glow Overlay */}
      <div className={`absolute -inset-1 ${gradientClass} ${BORDER_RADIUS.card} blur opacity-75 group-hover:opacity-100 ${TRANSITIONS.glow}`} />
      
      {/* The Image */}
      <img
        src={src}
        alt={alt}
        className={`relative ${BORDER_RADIUS.card} w-full h-[400px] object-cover ${SHADOWS.card} grayscale-[20%] hover:grayscale-0 ${TRANSITIONS.slow} ${imageClassName}`}
      />
    </div>
  );
};

export default GlowImage;
