import React from 'react';
import { motion } from 'framer-motion';
import { BORDER_RADIUS, SHADOWS } from '../../constants/design';

/**
 * Reusable Student Success Story card component.
 * Refined to end naturally after the story text.
 */
const StudentCard = ({ image, name, village, story, achievement }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`bg-white border border-gray-100 p-6 md:p-8 flex flex-col md:flex-row gap-6 md:gap-8 items-center ${BORDER_RADIUS.card} ${SHADOWS.card}`}
    >
      {/* Student Portrait */}
      <div className="w-full md:w-1/3 aspect-[4/5] rounded-xl overflow-hidden shadow-md flex-shrink-0">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover grayscale-[10%] hover:grayscale-0 transition-all duration-500"
        />
      </div>

      {/* Story Details */}
      <div className="flex flex-col flex-grow text-center md:text-left">
        <span className="text-yellow-600 text-xs font-bold uppercase tracking-widest mb-1">
          {achievement}
        </span>
        
        <h3 className="text-2xl font-bold text-brand-black mb-1 font-heading">
          {name}
        </h3>
        
        <span className="text-brand-dark/70 text-xs font-semibold uppercase tracking-wider mb-4 block">
          Village: {village}
        </span>
        
        <p className="text-brand-dark font-light text-sm md:text-base leading-relaxed italic">
          "{story}"
        </p>
      </div>
    </motion.div>
  );
};

export default StudentCard;
