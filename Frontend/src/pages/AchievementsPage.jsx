import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Container from '../components/ui/Container';
import SectionHeading from '../components/ui/SectionHeading';
import Button from '../components/ui/Button';
import StatisticCard from '../components/ui/StatisticCard';
import { 
  MILESTONE_TIMELINE, 
  ACHIEVEMENT_CATEGORIES, 
  RECOGNITION_ITEMS, 
  STATS_ITEMS 
} from '../constants/achievementsData';

// Image import
import childrenImg from '../assets/images/Children.jpeg';

/**
 * Premium Achievements Page (Placeholder Version).
 * Renders vertical milestones timeline, categories placeholders, and future vision.
 */
const AchievementsPage = () => {
  return (
    <div className="bg-white">
      
      {/* Hero Section */}
      <section className="relative h-[100svh] w-full overflow-hidden flex items-center justify-center bg-black">
        <img
          src={childrenImg}
          alt="Salience Achievements and Milestones"
          className="absolute inset-0 w-full h-full object-cover opacity-50 scale-105 animate-subtle-zoom"
        />
        {/* Dark overlay to match Home Page hero */}
        <div className="absolute inset-0 bg-black/60 z-[1]" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center flex flex-col items-center justify-center h-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center"
          >
            <span className="inline-block px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-brand-yellow border border-brand-yellow/30 bg-brand-yellow/10 rounded-full mb-6">
              Our Impact
            </span>

            <h1 className="text-4xl md:text-6xl font-extrabold text-white font-heading tracking-tight leading-none">
              Achievements & <span className="text-brand-yellow">Milestones</span>
            </h1>

            <p className="mt-6 text-base md:text-lg text-white/80 font-light max-w-2xl leading-relaxed">
              Every milestone represents the dedication of young athletes, volunteers, coaches, and communities working together to create meaningful opportunities through sport.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center items-center w-full sm:w-auto">
              <Link to="/programs">
                <Button variant="primary">Explore Programs</Button>
              </Link>
              <Link to="/partner">
                <Button variant="secondaryWhite">Partner With Us</Button>
              </Link>
            </div>
          </motion.div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 z-10">
            <span className="text-white/40 text-[10px] font-semibold uppercase tracking-[0.25em] font-heading">Scroll Down</span>
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              className="w-0.5 h-5 bg-brand-yellow rounded-full"
            />
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-24 border-b border-gray-50 bg-white">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <SectionHeading
              badge="Milestone Index"
              title="Measuring success through opportunities created"
              align="center"
            />
            <p className="text-brand-dark font-light text-base md:text-lg leading-relaxed mt-4">
              At Salience Foundation, we measure our milestones not simply through trophies won, but through children placed in secondary schools, digital literacy scores, and parents aligned to gender equality goals.
            </p>
          </div>
        </Container>
      </section>

      {/* Milestone Timeline */}
      <section className="py-24 bg-gray-50 border-b border-gray-100">
        <Container>
          <SectionHeading
            badge="Timeline"
            title="Development lifecycle milestones"
            subtitle="Explore our structural growth path. Detailed coordinates will be populated upon validation."
            align="center"
          />

          <div className="relative max-w-2xl mx-auto mt-16 pl-6 border-l border-brand-yellow/30 space-y-12">
            {MILESTONE_TIMELINE.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative"
              >
                {/* Timeline node */}
                <div className="absolute left-[-31px] top-1.5 w-4 h-4 rounded-full bg-brand-yellow border-2 border-white shadow-sm" />

                <div className="bg-white border border-gray-100 p-6 rounded-2xl shadow-sm">
                  <span className="text-xs font-bold text-yellow-600 uppercase tracking-widest block mb-1">
                    {item.year}
                  </span>
                  <h4 className="font-heading font-bold text-brand-black text-base md:text-lg mb-2">
                    {item.title}
                  </h4>
                  <p className="text-xs text-brand-dark italic font-light leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Achievement Categories */}
      <section className="py-24 border-b border-gray-50 bg-white">
        <Container>
          <SectionHeading
            badge="Categories"
            title="Sectors of recognition"
            subtitle="Our programs focus on building multiple life assets alongside athletic performance."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {ACHIEVEMENT_CATEGORIES.map((cat, idx) => (
              <div key={idx} className="bg-white border border-gray-100 p-8 rounded-2xl flex flex-col shadow-sm">
                <div className="w-12 h-12 rounded-xl bg-brand-yellow/15 flex items-center justify-center mb-6">
                  {cat.icon}
                </div>
                <h3 className="text-lg md:text-xl font-bold text-brand-black mb-3 font-heading">
                  {cat.title}
                </h3>
                <p className="text-brand-dark font-light text-xs md:text-sm leading-relaxed">
                  {cat.desc}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Recognition Section */}
      <section className="py-24 bg-gray-50 border-b border-gray-100">
        <Container>
          <SectionHeading
            badge="Transparency"
            title="Awards & partnerships logs"
            subtitle="Verified listings will be added upon formal audit completion."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {RECOGNITION_ITEMS.map((item, idx) => (
              <div key={idx} className="bg-white border border-gray-100 p-8 rounded-2xl flex flex-col justify-between shadow-sm">
                <h4 className="font-heading font-extrabold text-brand-black text-base md:text-lg mb-4">
                  {item.title}
                </h4>
                <p className="text-xs text-brand-dark italic font-light">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Impact Highlights */}
      <section className="py-24 border-b border-gray-50 bg-white">
        <Container>
          <SectionHeading
            badge="Live Statistics"
            title="Impact statistics indicators"
            subtitle="Centralized counter variables displaying current program targets. Updated soon."
            align="center"
          />

          <div className="grid grid-cols-2 lg:grid-cols-5 gap-6 mt-12">
            {STATS_ITEMS.map((stat, idx) => (
              <StatisticCard
                key={idx}
                value={stat.value}
                suffix={stat.suffix}
                label={stat.label}
              />
            ))}
          </div>
        </Container>
      </section>

      {/* Future Vision */}
      <section className="py-24 bg-gray-50 border-b border-gray-100">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <SectionHeading
              badge="Vision"
              title="Continuous expansion designs"
              align="center"
            />
            <p className="text-brand-dark font-light text-base md:text-lg leading-relaxed mt-4">
              Salience Foundation continues to scale local digital labs and sports academies into isolated block coordinates. We aim to construct additional football academies, supply boots, and extend academic tuitions to empower more rural scholars.
            </p>
          </div>
        </Container>
      </section>

      {/* Final CTA */}
      <section className="py-24 text-center bg-white">
        <Container>
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-extrabold font-heading text-brand-black mb-4">
              Become Part of Our Journey
            </h2>
            <p className="text-brand-dark font-light text-base md:text-lg mb-8">
              Join hands with the foundation as a partner, sponsor, or volunteer to co-create opportunities where they are needed most.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/partner">
                <Button variant="primary">Partner With Us</Button>
              </Link>
              <Link to="/contact">
                <Button variant="secondary">Contact Us</Button>
              </Link>
            </div>
          </div>
        </Container>
      </section>

      <style>{`
        @keyframes subtle-zoom {
          0% { transform: scale(1); }
          100% { transform: scale(1.04); }
        }
        .animate-subtle-zoom {
          animation: subtle-zoom 25s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default AchievementsPage;
