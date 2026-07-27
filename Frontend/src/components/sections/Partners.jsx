import React from 'react';
import { motion } from 'framer-motion';
import Container from '../ui/Container';
import SectionHeading from '../ui/SectionHeading';
import { BORDER_RADIUS, SHADOWS } from '../../constants/design';

/**
 * Partnership Section - displays mock/placeholder corporate partners
 * inside an elegant, uniformly spaced grid.
 */
const Partners = () => {
  const partners = [
    { name: 'Global Sports Trust', type: 'Funding Partner' },
    { name: 'Bihar Youth Council', type: 'Local Alliance' },
    { name: 'Grit Ventures', type: 'Equipment Sponsor' },
    { name: 'Rural India Alliance', type: 'Educational NGO' },
    { name: 'Niti Sports Lab', type: 'Scientific Training' },
    { name: 'Empower Girls Fund', type: 'Gender Equity' }
  ];

  return (
    <section className="bg-gray-50 py-24 border-b border-gray-100">
      <Container>
        <SectionHeading
          badge="Our Network"
          title="Partners who believe in rural potential"
          subtitle="We collaborate with corporate sponsors, local bodies, and educational institutions to construct sustainable support loops."
          align="center"
        />

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mt-12">
          {partners.map((partner, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className={`bg-white border border-gray-100 p-6 flex flex-col items-center justify-center text-center h-28 ${BORDER_RADIUS.card} ${SHADOWS.card}`}
            >
              <div className="text-sm md:text-base font-extrabold text-brand-black font-heading leading-tight mb-1">
                {partner.name}
              </div>
              <div className="text-[10px] text-yellow-600 font-bold uppercase tracking-wider">
                {partner.type}
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Partners;
