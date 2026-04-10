import React from 'react';
import { motion } from 'framer-motion';
import video from '../../assets/videos/Score_Football.mp4';

/**
 * Hero Component - A refined cinematic landing section
 * Features: Gradient overlay, dynamic text hierarchy, scroll indicator, and smooth video zoom.
 */
const Hero = () => {
  // Animation variants for staggered appearance
  const fadeInSlideUp = {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 },
  };

  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background Video - Layer 0 with subtle zoom effect */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0 animate-subtle-zoom"
      >
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Gradient Overlay - Layer 10 */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80 z-10" />

      {/* Content Container - Layer 20 */}
      <div className="relative z-20 container mx-auto px-4 max-w-4xl text-center">
        <motion.div
          initial="initial"
          animate="animate"
          transition={{ staggerChildren: 0.2 }}
        >
          {/* Main Headings */}
          <motion.h2
            variants={fadeInSlideUp}
            transition={{ duration: 0.6 }}
            className="text-white text-3xl md:text-5xl font-bold mb-2 tracking-tight"
          >
            Talent exists everywhere.
          </motion.h2>

          <motion.h2
            variants={fadeInSlideUp}
            transition={{ duration: 0.6 }}
            className="text-white text-3xl md:text-5xl font-bold mb-2 tracking-tight"
          >
            Opportunity does not.
          </motion.h2>

          <motion.h1
            variants={fadeInSlideUp}
            transition={{ duration: 0.6 }}
            className="text-orange-500 text-4xl md:text-6xl font-extrabold mb-10 tracking-wide"
          >
            We bridge the gap.
          </motion.h1>

          {/* CTA Buttons */}
          <motion.div
            variants={fadeInSlideUp}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col md:flex-row gap-4 justify-center items-center"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-orange-500 text-white font-semibold rounded-full hover:bg-orange-600 transition-colors duration-300 w-full md:w-auto shadow-lg"
            >
              Join as Athlete
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 border-2 border-white text-white font-semibold rounded-full hover:bg-white/10 transition-colors duration-300 w-full md:w-auto shadow-lg"
            >
              Support Us
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
      >
        <span className="text-white/60 text-xs font-medium uppercase tracking-[0.2em]">Scroll Down</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="w-1 h-8 bg-gradient-to-b from-orange-500 to-transparent rounded-full"
        />
      </motion.div>

      {/* Inline styles for subtle zoom to avoid external CSS dependency if needed */}
      <style>{`
        @keyframes subtle-zoom {
          0% { transform: scale(1); }
          100% { transform: scale(1.05); }
        }
        .animate-subtle-zoom {
          animation: subtle-zoom 20s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default Hero;
