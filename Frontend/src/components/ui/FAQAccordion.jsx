import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

/**
 * Animated FAQ Accordion item.
 */
const FAQItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="border-b border-gray-100 last:border-0 py-5">
      <button
        onClick={onClick}
        className="flex justify-between items-center w-full text-left font-heading font-bold text-base md:text-lg text-brand-black hover:text-brand-dark/95 transition-colors duration-200 py-2 focus:outline-none"
      >
        <span>{question}</span>
        <span className="ml-4 flex-shrink-0">
          <svg
            className={`w-5 h-5 text-yellow-600 transition-transform duration-300 ${
              isOpen ? 'rotate-180' : ''
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </span>
      </button>
      
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <p className="pt-2 pb-4 text-sm md:text-base text-brand-dark font-light leading-relaxed">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

/**
 * FAQ Accordion wrapper managing expand/collapse states.
 */
const FAQAccordion = ({ items }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full bg-white border border-gray-100 rounded-2xl p-6 md:p-8 shadow-sm">
      {items.map((item, idx) => (
        <FAQItem
          key={idx}
          question={item.question}
          answer={item.answer}
          isOpen={openIndex === idx}
          onClick={() => handleToggle(idx)}
        />
      ))}
    </div>
  );
};

export default FAQAccordion;
