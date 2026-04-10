import React from 'react';
import { motion } from 'framer-motion';
import mudImage from '../../assets/images/Mud.jpeg';

/**
 * Problem Component - Highlights the disparity between talent and opportunity.
 * Features: Scroll-triggered slide-in animations, responsive two-column grid.
 */
const Problem = () => {
  return (
    <section className="bg-black py-20 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        
        {/* Text Content - Left Side */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-4"
        >
          <h2 className="text-white text-3xl md:text-5xl font-bold leading-tight">
            In rural India, <br />
            <span className="text-white/80">talent is everywhere.</span>
          </h2>
          <h2 className="text-orange-500 text-3xl md:text-5xl font-bold leading-tight">
            But opportunity is missing.
          </h2>
          <p className="text-white/60 text-lg md:text-xl max-w-lg pt-4 font-light leading-relaxed">
            The bridge between potential and success is often broken by geography and circumstance. We exist to fix that.
          </p>
        </motion.div>

        {/* Image Content - Right Side */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative group"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-orange-500/20 to-transparent rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
          <img
            src={mudImage}
            alt="Rural scene representing potential"
            className="relative rounded-2xl w-full h-[400px] object-cover shadow-2xl grayscale-[20%] hover:grayscale-0 transition-all duration-500"
          />
        </motion.div>

      </div>
    </section>
  );
};

export default Problem;
