import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Button from '../ui/Button';
import { CONTAINER, Z_INDEX } from '../../constants/design';

/**
 * Hero Section - Cinematic landing section.
 * Features: Full screen 100vh height, video background, overlay, heading, paragraph, 2 CTAs, and scroll indicator.
 * No stats cards are embedded here to keep the design clean and spacious.
 */
const Hero = () => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const listener = (event) => {
      setPrefersReducedMotion(event.matches);
    };
    
    // Some older browsers might not support addEventListener on media query lists
    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', listener);
      return () => mediaQuery.removeEventListener('change', listener);
    } else if (mediaQuery.addListener) {
      mediaQuery.addListener(listener);
      return () => mediaQuery.removeListener(listener);
    }
  }, []);

  const fadeInSlideUp = {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 },
  };

  return (
    <section className="relative h-[100svh] min-h-[100svh] w-full overflow-hidden flex items-center justify-center bg-black">

      {/* Poster Image (Always loads immediately) */}
      <div 
        className={`absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat ${Z_INDEX.videoBg} scale-105 transition-opacity duration-1000 ${isVideoLoaded && !prefersReducedMotion ? 'opacity-0' : 'opacity-60'}`}
        style={{ backgroundImage: 'url("/images/hero-poster.jpg")' }}
      />

      {/* Background Video */}
      {!prefersReducedMotion && (
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="none"
          poster="/images/hero-poster.jpg"
          onCanPlay={() => setIsVideoLoaded(true)}
          className={`absolute inset-0 w-full h-full object-cover ${Z_INDEX.videoBg} scale-105 animate-subtle-zoom transition-opacity duration-1000 ${isVideoLoaded ? 'opacity-60' : 'opacity-0'}`}
        >
          <source src="/videos/Score_Football.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}

      {/* Dark Overlay */}
      <div className={`absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/85 ${Z_INDEX.overlay}`} />

      {/* Content Container */}
      <div className={`relative ${Z_INDEX.content} w-full ${CONTAINER.maxWidthHero} ${CONTAINER.padding} text-center flex flex-col items-center justify-center h-full pt-16`}>
        <motion.div
          initial="initial"
          animate="animate"
          transition={{ staggerChildren: 0.15 }}
          className="w-full flex flex-col items-center"
        >
          {/* Badge */}
          <motion.span
            variants={fadeInSlideUp}
            transition={{ duration: 0.6 }}
            className="inline-block px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-brand-yellow border border-brand-yellow/30 bg-brand-yellow/10 rounded-full mb-6"
          >
            Empowering Through Sport & Education
          </motion.span>

          {/* Headlines */}
          <motion.h1
            variants={fadeInSlideUp}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white font-heading tracking-tight leading-none max-w-4xl"
          >
            Talent exists everywhere.<br />
            Opportunity <span className="text-brand-yellow">should too.</span>
          </motion.h1>

          <motion.p
            variants={fadeInSlideUp}
            transition={{ duration: 0.7 }}
            className="mt-6 text-base md:text-lg text-white/85 font-light max-w-2xl leading-relaxed"
          >
            Salience Foundation works with rural communities across India to create opportunities in sports, arts and culture helping talent discover its potential and communities grow stronger.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={fadeInSlideUp}
            transition={{ duration: 0.6 }}
            className="mt-8 flex flex-col sm:flex-row gap-4 justify-center items-center w-full sm:w-auto"
          >
            <Link to="/join-us">
              <Button variant="primary">
                Join Us
              </Button>
            </Link>
            <Link to="/join-us#donate">
              <Button variant="secondaryWhite">
                Support Us
              </Button>
            </Link>
          </motion.div>

        </motion.div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5"
        >
          <span className="text-white/40 text-[10px] font-semibold uppercase tracking-[0.25em] font-heading">Scroll Down</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="w-0.5 h-5 bg-gradient-to-b from-brand-yellow to-transparent rounded-full"
          />
        </motion.div>
      </div>

      <style>{`
        @keyframes subtle-zoom {
          0% { transform: scale(1); }
          100% { transform: scale(1.04); }
        }
        .animate-subtle-zoom {
          animation: subtle-zoom 25s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default Hero;
