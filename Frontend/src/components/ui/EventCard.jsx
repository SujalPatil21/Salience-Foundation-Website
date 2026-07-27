import React from 'react';
import { motion } from 'framer-motion';
import { BORDER_RADIUS, SHADOWS, TRANSITIONS } from '../../constants/design';

/**
 * Reusable card to showcase upcoming/recent Events.
 * Refined to remove emoji indicators and actions for a cleaner profile.
 */
const EventCard = ({ image, date, title, location, description }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      whileHover={{ y: -6 }}
      className={`bg-white border border-gray-100 flex flex-col h-full overflow-hidden ${BORDER_RADIUS.card} ${SHADOWS.card}`}
    >
      <div className="relative h-48 md:h-52 w-full overflow-hidden group">
        <img
          src={image}
          alt={title}
          className={`w-full h-full object-cover group-hover:scale-105 ${TRANSITIONS.slow}`}
        />
        <div className="absolute top-4 left-4 bg-brand-yellow text-brand-black text-xs font-bold px-3 py-1.5 rounded-md shadow-md uppercase tracking-wider">
          {date}
        </div>
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <span className="text-yellow-600 text-xs font-semibold uppercase tracking-wider mb-1 block">
          Location: {location}
        </span>
        <h3 className="text-lg md:text-xl font-bold text-brand-black mb-2 font-heading">
          {title}
        </h3>
        <p className="text-brand-dark font-light text-sm leading-relaxed flex-grow">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

export default EventCard;
