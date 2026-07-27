import React from 'react';
import { motion } from 'framer-motion';
import { BORDER_RADIUS, SHADOWS, TRANSITIONS } from '../../constants/design';

/**
 * Premium card layout for displaying Foundation Initiatives.
 * Refined to end naturally after the description with balanced padding.
 */
const InitiativeCard = ({ image, title, description, badge }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      whileHover={{ y: -8 }}
      className={`bg-white overflow-hidden border border-gray-100 flex flex-col h-full ${BORDER_RADIUS.card} ${SHADOWS.card}`}
    >
      {/* Initiative Image */}
      <div className="relative h-60 w-full overflow-hidden group">
        <img
          src={image}
          alt={title}
          className={`w-full h-full object-cover group-hover:scale-105 ${TRANSITIONS.slow}`}
        />
        {badge && (
          <span className="absolute top-4 left-4 bg-brand-black text-brand-yellow text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full">
            {badge}
          </span>
        )}
      </div>

      {/* Details content */}
      <div className="p-6 md:p-8 flex flex-col flex-grow">
        <h3 className="text-xl md:text-2xl font-bold text-brand-black mb-3 font-heading">
          {title}
        </h3>
        <p className="text-brand-dark font-light text-sm md:text-base leading-relaxed flex-grow">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

export default InitiativeCard;
