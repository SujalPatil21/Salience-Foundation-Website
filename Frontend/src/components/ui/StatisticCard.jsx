import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { BORDER_RADIUS, SHADOWS } from '../../constants/design';

/**
 * Animated Statistic Card that counts up when it enters the viewport.
 */
const StatisticCard = ({ value, suffix = '', label, icon }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const end = parseInt(value, 10);
    if (isNaN(end)) {
      setCount(value);
      return;
    }
    if (start === end) return;

    // Determine duration based on size
    const duration = 2000; // 2 seconds
    const incrementTime = Math.max(Math.floor(duration / end), 15);
    
    const timer = setInterval(() => {
      start += Math.ceil(end / (duration / incrementTime));
      if (start >= end) {
        clearInterval(timer);
        setCount(end);
      } else {
        setCount(start);
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`bg-white border border-gray-100 p-6 md:p-8 text-center flex flex-col items-center justify-center ${BORDER_RADIUS.card} ${SHADOWS.card}`}
    >
      {icon && (
        <div className="w-12 h-12 rounded-full bg-brand-yellow/10 flex items-center justify-center text-brand-dark mb-4 text-2xl font-bold">
          {icon}
        </div>
      )}
      
      <div className="text-4xl md:text-5xl font-extrabold font-heading text-brand-black flex items-baseline justify-center">
        <span>{count.toLocaleString()}</span>
        <span className="text-yellow-500 ml-0.5">{suffix}</span>
      </div>
      
      <p className="mt-2 text-sm md:text-base font-semibold uppercase tracking-wider text-brand-dark">
        {label}
      </p>
    </motion.div>
  );
};

export default StatisticCard;
