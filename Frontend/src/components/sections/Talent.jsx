import React from 'react';
import { motion } from 'framer-motion';
import talentImage from '../../assets/images/Village_People.jpeg';

/**
 * Talent Component - Transitions the story from the problem to the possibility.
 * Features: Image on the left, text on the right (desktop), scroll animations.
 */
const Talent = () => {
  return (
    <section className="bg-black py-20 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        
        {/* Image Content - Left Side */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="order-2 md:order-1 relative group"
        >
          <div className="absolute -inset-1 bg-gradient-to-l from-orange-500/20 to-transparent rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
          <img
            src={talentImage}
            alt="Local people representing latent talent"
            className="relative rounded-2xl w-full h-[400px] object-cover shadow-2xl grayscale-[20%] hover:grayscale-0 transition-all duration-500"
          />
        </motion.div>

        {/* Text Content - Right Side */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="order-1 md:order-2 space-y-4 text-center md:text-left"
        >
          <h2 className="text-white text-3xl md:text-5xl font-bold leading-tight">
            Talent doesn’t need <br />
            <span className="text-white/80">infrastructure.</span>
          </h2>
          <h2 className="text-orange-500 text-3xl md:text-5xl font-bold leading-tight">
            It needs a chance.
          </h2>
          <p className="text-white/60 text-lg md:text-xl max-w-lg pt-4 font-light leading-relaxed mx-auto md:mx-0">
            Greatness isn't built in stadiums; it's born in grit. We provide the platform for that grit to shine.
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default Talent;
