import React from 'react';
import Container from '../ui/Container';
import SectionHeading from '../ui/SectionHeading';
import StatisticCard from '../ui/StatisticCard';

/**
 * Dedicated Impact Statistics Section.
 * Renders counter cards with responsive equal-spacing layout and clean vector icons.
 */
const OurImpact = () => {
  const stats = [
    { 
      value: '1200', 
      suffix: '+', 
      label: 'Students Empowered', 
      icon: (
        <svg className="w-6 h-6 text-brand-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
        </svg>
      )
    },
    { 
      value: '45', 
      suffix: '', 
      label: 'Rural Villages', 
      icon: (
        <svg className="w-6 h-6 text-brand-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      )
    },
    { 
      value: '10', 
      suffix: '+', 
      label: 'Years of Impact', 
      icon: (
        <svg className="w-6 h-6 text-brand-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    { 
      value: '18', 
      suffix: '+', 
      label: 'Programs Conducted', 
      icon: (
        <svg className="w-6 h-6 text-brand-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    }
  ];

  return (
    <section className="bg-gray-50 py-24 md:py-32 border-b border-gray-100">
      <Container>
        <SectionHeading
          badge="Our Impact"
          title="Transforming communities at scale"
          subtitle="Real progress, monitored and tracked continuously on the ground. We believe in transparency and measurable youth development."
          align="center"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {stats.map((stat, idx) => (
            <StatisticCard
              key={idx}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
              icon={stat.icon}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default OurImpact;
