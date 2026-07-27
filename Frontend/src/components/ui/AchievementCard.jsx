import React from 'react';
import { motion } from 'framer-motion';
import { BORDER_RADIUS, SHADOWS, TRANSITIONS } from '../../constants/design';

/**
 * Reusable card to present foundation achievements with image and details.
 */
const AchievementCard = ({ image, title, description, date }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      whileHover={{ y: -6 }}
      className={`bg-white border border-gray-100 flex flex-col md:flex-row gap-6 p-6 items-center ${BORDER_RADIUS.card} ${SHADOWS.card}`}
    >
      {image && (
        <div className="w-full md:w-32 h-32 rounded-xl overflow-hidden flex-shrink-0">
          <img
            src={image}
            alt={title}
            className={`w-full h-full object-cover grayscale-[15%] hover:grayscale-0 ${TRANSITIONS.slow}`}
          />
        </div>
      )}

      <div className="flex flex-col text-center md:text-left flex-grow">
        {date && (
          <span className="text-yellow-600 text-xs font-bold uppercase tracking-wider mb-1 block">
            {date}
          </span>
        )}
        <h3 className="text-lg md:text-xl font-bold text-brand-black mb-2 font-heading">
          {title}
        </h3>
        <p className="text-brand-dark font-light text-sm leading-relaxed">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

export default AchievementCard;
