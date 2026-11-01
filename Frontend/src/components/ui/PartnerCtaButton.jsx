import React, { useRef } from 'react';
import { motion } from 'framer-motion';

/**
 * Highly interactive, premium CTA button designed specifically for the Navbar's "Partner With Us".
 * Features: Continuous breathing, light sweep, hover lighting, pointer-aware micro-parallax, and reduced motion support.
 */
const PartnerCtaButton = ({ children, className = '', ...props }) => {
  const buttonRef = useRef(null);

  // Calculate subtle pointer offset for CSS variables (-1 to 1 range)
  const handleMouseMove = (e) => {
    if (!buttonRef.current) return;
    const rect = buttonRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // Normalize to -1 to 1
    const normalizedX = (x / rect.width) * 2 - 1;
    const normalizedY = (y / rect.height) * 2 - 1;

    // Apply to CSS variables for pure CSS transform
    buttonRef.current.style.setProperty('--mouse-x', normalizedX);
    buttonRef.current.style.setProperty('--mouse-y', normalizedY);
  };

  const handleMouseLeave = () => {
    if (!buttonRef.current) return;
    buttonRef.current.style.setProperty('--mouse-x', 0);
    buttonRef.current.style.setProperty('--mouse-y', 0);
  };

  return (
    <motion.button
      ref={buttonRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileTap={{ scale: 0.97 }} // Click feedback (scale 0.97)
      className={`partner-enhanced-cta relative overflow-hidden inline-flex items-center justify-center font-semibold rounded-xl text-[#111111] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-yellow ${className}`}
      style={{
        // Define base variables so they always exist
        '--mouse-x': 0,
        '--mouse-y': 0,
        padding: '0.5rem 1.5rem', // Navbar button padding
        minHeight: '2.5rem',
      }}
      {...props}
    >
      {/* Light Sweep Pseudo-element */}
      <span className="partner-light-sweep absolute inset-0 pointer-events-none" />

      {/* Button Text */}
      <span className="relative z-10">{children}</span>

      {/* Injecting specific CSS animations for this button */}
      <style>{`
        /* 1. CONTINUOUS BREATHING & 4. SUBTLE FLOAT */
        /* Sync scale, glow, and float in a 3.5s loop */
        @keyframes partner-breathe {
          0%, 100% {
            transform: scale(1) translateY(0);
            box-shadow: 0 4px 12px -4px rgba(243, 234, 0, 0);
            filter: brightness(1);
          }
          50% {
            transform: scale(1.02) translateY(-1px);
            box-shadow: 0 6px 16px -2px rgba(243, 234, 0, 0.45);
            filter: brightness(1.05);
          }
        }

        /* 2. MOVING LIGHT SWEEP */
        @keyframes partner-sweep {
          0% {
            transform: translateX(-150%) skewX(-20deg);
            opacity: 0;
          }
          20% {
            opacity: 1;
          }
          80% {
            opacity: 1;
          }
          100% {
            transform: translateX(150%) skewX(-20deg);
            opacity: 0;
          }
        }

        /* Base Button Styles */
        .partner-enhanced-cta {
          background: #F3EA00;
          box-shadow: 0 4px 12px -4px rgba(243, 234, 0, 0);
          /* Transition for leaving hover */
          transition: transform 0.4s ease-out, box-shadow 0.4s ease-out, background 0.4s ease-out, filter 0.4s ease-out;
        }

        /* Breathing applies only when not hovered/active and prefers-reduced-motion is false */
        @media (prefers-reduced-motion: no-preference) {
          .partner-enhanced-cta:not(:hover):not(:active) {
            animation: partner-breathe 3.5s ease-in-out infinite;
          }
        }

        /* 5. HOVER STATE & 6. HOVER LIGHTING & 7. MICRO-REACTION */
        /* Use CSS variables for pointer tilt */
        @media (hover: hover) and (pointer: fine) {
          .partner-enhanced-cta:hover {
            /* 1.05 scale + subtle vertical lift + parallax rotation (max 2deg) */
            transform: perspective(400px) rotateX(calc(var(--mouse-y) * -2deg)) rotateY(calc(var(--mouse-x) * 2deg)) scale(1.05) translateY(-1.5px) !important;
            
            /* Stronger shadow and brighter background */
            box-shadow: 0 8px 24px -4px rgba(243, 234, 0, 0.6), 0 4px 12px -2px rgba(243, 234, 0, 0.3) !important;
            background: linear-gradient(135deg, #FFFA4D 0%, #F3EA00 50%, #D4CC00 100%) !important;
            
            /* Fast transition entering hover, parallax moves with 0.1s for responsiveness */
            transition: transform 0.15s ease-out, box-shadow 0.25s ease-out, background 0.25s ease-out !important;
            animation: none !important; /* Cancel breathing on hover */
          }
        }

        /* Light sweep styling */
        .partner-light-sweep {
          background: linear-gradient(
            90deg,
            rgba(255, 255, 255, 0) 0%,
            rgba(255, 255, 255, 0.4) 50%,
            rgba(255, 255, 255, 0) 100%
          );
          width: 50%;
          transform: translateX(-150%) skewX(-20deg);
        }

        /* Light sweep animation loop */
        @media (prefers-reduced-motion: no-preference) {
          .partner-light-sweep {
            animation: partner-sweep 4s ease-in-out infinite;
          }
          
          /* When hovered, sweep is faster and slightly more prominent */
          .partner-enhanced-cta:hover .partner-light-sweep {
            animation: partner-sweep 2.5s ease-in-out infinite;
            background: linear-gradient(
              90deg,
              rgba(255, 255, 255, 0) 0%,
              rgba(255, 255, 255, 0.6) 50%,
              rgba(255, 255, 255, 0) 100%
            );
          }
        }
      `}</style>
    </motion.button>
  );
};

export default PartnerCtaButton;
