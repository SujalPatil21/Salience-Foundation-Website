import React from 'react';
import { motion } from 'framer-motion';
import video from '../../assets/videos/Score_Football.mp4';
import Button from '../ui/Button';
import { CONTAINER, Z_INDEX } from '../../constants/design';

/**
 * Hero Section - Cinematic landing section.
 * Features: Full screen 100vh height, video background, overlay, heading, paragraph, 2 CTAs, and scroll indicator.
 * No stats cards are embedded here to keep the design clean and spacious.
 */
const Hero = () => {
  const fadeInSlideUp = {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 },
  };

  return (
    <section className="relative h-[100svh] min-h-[100svh] w-full overflow-hidden flex items-center justify-center bg-black">


      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className={`absolute inset-0 w-full h-full object-cover ${Z_INDEX.videoBg} opacity-60 scale-105 animate-subtle-zoom`}
      >
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

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
            Opportunity <span className="text-brand-yellow">does not.</span>
          </motion.h1>

          <motion.p
            variants={fadeInSlideUp}
            transition={{ duration: 0.7 }}
            className="mt-6 text-base md:text-lg text-white/85 font-light max-w-2xl leading-relaxed"
          >
            We bridge the gap for rural youth across India by providing the resources, training, and platforms required to turn grit into greatness.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={fadeInSlideUp}
            transition={{ duration: 0.6 }}
            className="mt-8 flex flex-col sm:flex-row gap-4 justify-center items-center w-full sm:w-auto"
          >
            <Button variant="primary">
              Join as Athlete
            </Button>
            <Button variant="secondaryWhite">
              Support Us
            </Button>
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
