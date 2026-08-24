import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Container from '../components/ui/Container';
import SectionHeading from '../components/ui/SectionHeading';
import Button from '../components/ui/Button';
import StatisticCard from '../components/ui/StatisticCard';
import GlowImage from '../components/ui/GlowImage';
import FAQAccordion from '../components/ui/FAQAccordion';
import { 
  ABOUT_HERO,
  ABOUT_OVERVIEW,
  MULTIFACETED_PILLARS,
  COLLABORATION_AREAS,
  ABOUT_STATS,
  GOVERNANCE_CREDENTIALS,
  ABOUT_FAQS
} from '../constants/aboutData';
import { BORDER_RADIUS, SHADOWS } from '../constants/design';

// Image imports
import villageCouncilImg from '../assets/images/community_village_council.jpeg';
import trophyImg from '../assets/images/trophy_celebration_milestone.jpeg';
import youthTrainingImg from '../assets/images/youth_football_training.jpeg';
import culturalArtsImg from '../assets/images/cultural_arts_workshop.jpeg';
import coachMentorshipImg from '../assets/images/volunteer_coach_mentorship.jpeg';

/**
 * Premium Cinematic About Page for Salience Foundation.
 * Incorporates official narrative: Section 8 Non-Profit based in Ranchi, Jharkhand,
 * promoting rural sporting talents, artistic learning, and cultural development.
 */
const AboutPage = () => {
  const fadeInSlideUp = {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 },
  };

  const handleScrollToStory = () => {
    const element = document.getElementById('our-story-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-white">
      
      {/* 1. Cinematic Hero Section - Matching Home Page Hero Aesthetic */}
      <section className="relative h-[100svh] min-h-[100svh] w-full overflow-hidden flex items-center justify-center bg-black">
        
        {/* Background Image */}
        <img
          src={villageCouncilImg}
          alt="Salience Foundation Youth and Community in Ranchi"
          className="absolute inset-0 w-full h-full object-cover opacity-45 scale-105 animate-subtle-zoom"
        />

        {/* Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/45 to-black/90 z-[1]" />

        {/* Hero Content Container */}
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center flex flex-col items-center justify-center h-full pt-16">
          <motion.div
            initial="initial"
            animate="animate"
            transition={{ staggerChildren: 0.15 }}
            className="w-full flex flex-col items-center"
          >
            {/* Pill Badge */}
            <motion.span
              variants={fadeInSlideUp}
              transition={{ duration: 0.6 }}
              className="inline-block px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-brand-yellow border border-brand-yellow/30 bg-brand-yellow/10 rounded-full mb-6"
            >
              {ABOUT_HERO.badge}
            </motion.span>

            {/* Main Headline */}
            <motion.h1
              variants={fadeInSlideUp}
              transition={{ duration: 0.7 }}
              className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white font-heading tracking-tight leading-none max-w-4xl"
            >
              {ABOUT_HERO.titlePrimary}<br />
              <span className="text-brand-yellow">{ABOUT_HERO.titleHighlight}</span>
            </motion.h1>

            {/* Subtitle Description */}
            <motion.p
              variants={fadeInSlideUp}
              transition={{ duration: 0.7 }}
              className="mt-6 text-base md:text-lg text-white/85 font-light max-w-2xl leading-relaxed"
            >
              {ABOUT_HERO.subtitle}
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              variants={fadeInSlideUp}
              transition={{ duration: 0.6 }}
              className="mt-8 flex flex-col sm:flex-row gap-4 justify-center items-center w-full sm:w-auto"
            >
              <Button onClick={handleScrollToStory} variant="primary">
                {ABOUT_HERO.primaryCtaText}
              </Button>
              <Link to="/contact">
                <Button variant="secondaryWhite">
                  {ABOUT_HERO.secondaryCtaText}
                </Button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Scroll Down Indicator */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 1 }}
            className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 z-10"
          >
            <span className="text-white/40 text-[10px] font-semibold uppercase tracking-[0.25em] font-heading">Scroll Down</span>
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              className="w-0.5 h-5 bg-gradient-to-b from-brand-yellow to-transparent rounded-full"
            />
          </motion.div>
        </div>

        <style>{`
          @keyframes subtle-zoom {
            0% { transform: scale(1); }
            100% { transform: scale(1.05); }
          }
          .animate-subtle-zoom {
            animation: subtle-zoom 25s ease-out forwards;
          }
        `}</style>
      </section>

      {/* 2. Official Overview & Story Section */}
      <section id="our-story-section" className="bg-white py-24 md:py-32 overflow-hidden border-b border-gray-100 scroll-mt-16">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Column: Authentic Photography */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="lg:col-span-5"
            >
              <GlowImage
                src={trophyImg}
                alt="Salience Foundation Youth Team in Ranchi"
                glowDirection="l"
                imageClassName="h-[460px] lg:h-[560px]"
              />
            </motion.div>

            {/* Right Column: Narrative Content */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="lg:col-span-7 flex flex-col items-start"
            >
              <SectionHeading
                badge="About Salience Foundation"
                title="Transforming lives through sports, arts, and cultural development."
                align="left"
                className="mb-6"
              />
              
              <p className="text-brand-dark font-normal text-base md:text-lg leading-relaxed mb-5">
                <strong className="text-brand-black font-semibold">Salience Foundation</strong>, a Non-Profit (Section 8 Company) organization based in <strong className="text-brand-black font-semibold">Ranchi, Jharkhand</strong>, is dedicated to promoting rural sporting talents and fostering an environment for artistic learning and cultural development. The foundation firmly believes in the transformative power of sports and culture to positively impact individuals and communities alike.
              </p>

              <p className="text-brand-dark/90 font-light text-base leading-relaxed mb-5">
                At the core of our mission is empowering rural sporting talents. We recognize that talent knows no boundaries and seek to identify and nurture exceptional athletes and sports enthusiasts in remote regions. Through access to resources, coaching, and opportunities, the foundation aims to provide these young athletes with a platform to shine and reach their full potential.
              </p>

              <p className="text-brand-dark/90 font-light text-base leading-relaxed mb-6">
                Beyond sports, the foundation values the significance of artistic expression and cultural heritage. Inclusivity and equality are deeply ingrained in our approach, as we strive to provide equal opportunities for all, regardless of background or location.
              </p>

              {/* Badges Box */}
              <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 border-t border-gray-100">
                <div className="p-4 rounded-xl bg-gray-50 border border-gray-100">
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-brand-yellow" />
                    <h4 className="font-bold text-brand-black text-xs uppercase tracking-wider">Headquarters</h4>
                  </div>
                  <p className="text-xs text-brand-dark/85 font-light leading-relaxed">
                    Ranchi, Jharkhand, India — driving grassroots change across remote villages.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-gray-50 border border-gray-100">
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-brand-yellow" />
                    <h4 className="font-bold text-brand-black text-xs uppercase tracking-wider">Legal Structure</h4>
                  </div>
                  <p className="text-xs text-brand-dark/85 font-light leading-relaxed">
                    Registered Section 8 Non-Profit Company with 12A/80G tax exemption.
                  </p>
                </div>
              </div>

            </motion.div>
          </div>
        </Container>
      </section>

      {/* 3. Multifaceted Approach: 4 Core Pillars */}
      <section className="bg-gray-50 py-24 md:py-32 border-b border-gray-100">
        <Container>
          <SectionHeading
            badge="Our Multifaceted Approach"
            title="Empowering individuals, enriching culture, and uplifting communities"
            subtitle="How our interconnected initiatives create meaningful, holistic transformation for rural youth."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-14">
            {MULTIFACETED_PILLARS.map((pillar, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.12 }}
                className={`bg-white rounded-2xl ${SHADOWS.card} border border-gray-100 relative group overflow-hidden flex flex-col justify-between`}
              >
                {/* Pillar Image */}
                {pillar.image && (
                  <div className="h-52 w-full overflow-hidden bg-gray-100 relative">
                    <img
                      src={pillar.image}
                      alt={pillar.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="inline-block px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-brand-black bg-brand-yellow rounded-md shadow-xs">
                        {pillar.badge}
                      </span>
                    </div>
                  </div>
                )}

                <div className="p-8 flex flex-col flex-1 justify-between">
                  <div>
                    <h4 className="text-xs uppercase font-bold tracking-widest text-brand-olive mb-1">
                      {pillar.subtitle}
                    </h4>

                    <h3 className="text-2xl font-bold text-brand-black mb-3 font-heading">
                      {pillar.title}
                    </h3>

                    <p className="text-brand-dark font-light text-sm md:text-base leading-relaxed mb-6">
                      {pillar.desc}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-100">
                    {pillar.tags.map((tag, tIdx) => (
                      <span 
                        key={tIdx}
                        className="px-2.5 py-1 text-[11px] font-medium text-brand-dark bg-gray-50 border border-gray-200/60 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* 4. Collaborative Vision (Partnerships that Amplify Impact) */}
      <section className="bg-[#111111] text-white py-24 md:py-32 relative overflow-hidden">
        {/* Ambient Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-yellow/5 rounded-full blur-[140px] pointer-events-none" />

        <Container className="relative z-10">
          <SectionHeading
            badge="Collaborative Impact"
            title="Building partnerships to amplify positive change"
            subtitle="To achieve our vision, Salience Foundation collaborates across sectors to build a thriving ecosystem for youth."
            align="center"
            className="[&_h2]:text-white [&_p]:text-white/70"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
            {COLLABORATION_AREAS.map((collab, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.12 }}
                className="bg-white/[0.04] border border-white/10 rounded-2xl p-7 flex flex-col justify-between hover:border-brand-yellow/50 hover:bg-white/[0.07] transition-all duration-300 relative group"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-xl font-black font-heading text-brand-yellow">
                      0{idx + 1}
                    </span>
                    <span className="w-2 h-2 rounded-full bg-brand-yellow/40 group-hover:bg-brand-yellow transition-colors duration-300" />
                  </div>

                  <h3 className="text-lg font-bold text-white mb-3 font-heading">
                    {collab.title}
                  </h3>

                  <p className="text-white/70 text-xs md:text-sm font-light leading-relaxed">
                    {collab.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* 5. Impact By The Numbers */}
      <section className="bg-white py-24 md:py-32 border-b border-gray-100">
        <Container>
          <SectionHeading
            badge="Measurable Reach"
            title="Creating tangible impact across rural communities"
            subtitle="We track athlete participation, girls enrollment, school retention, and community engagement continuously."
            align="center"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-14">
            {ABOUT_STATS.map((stat, idx) => (
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

      {/* 6. Governance, Legal Structure & Trust */}
      <section className="bg-gray-50 py-24 md:py-32 border-b border-gray-100">
        <Container>
          <div className="max-w-4xl mx-auto text-center mb-14">
            <SectionHeading
              badge="Governance & Trust"
              title="Built on radical transparency and regulatory compliance"
              subtitle="Operated under strict Section 8 corporate governance, certified with tax exemption and CSR compliance."
              align="center"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {GOVERNANCE_CREDENTIALS.map((cred, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="bg-white border border-gray-100 rounded-2xl p-6 flex flex-col justify-between hover:border-brand-yellow/40 hover:shadow-lg transition-all duration-300"
              >
                <div>
                  <span className="inline-block px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-yellow-800 bg-brand-yellow/20 rounded-md mb-4">
                    {cred.badge}
                  </span>
                  <h3 className="text-base font-bold text-brand-black mb-2 font-heading">
                    {cred.title}
                  </h3>
                  <p className="text-xs text-brand-dark/85 font-light leading-relaxed">
                    {cred.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* 7. Frequently Asked Questions */}
      <section className="bg-white py-24 md:py-32 border-b border-gray-100">
        <Container>
          <div className="max-w-4xl mx-auto">
            <SectionHeading
              badge="Common Questions"
              title="Frequently asked questions about Salience Foundation"
              subtitle="Key information about our location in Ranchi, Section 8 structure, programs, and collaborations."
              align="center"
            />

            <div className="mt-12">
              <FAQAccordion items={ABOUT_FAQS} />
            </div>
          </div>
        </Container>
      </section>

      {/* 8. High Impact Call to Action Section */}
      <section className="bg-gray-50 py-24 md:py-32">
        <Container>
          <div className="bg-gradient-to-br from-brand-black via-[#1c1c1c] to-brand-black rounded-3xl p-8 md:p-16 text-white text-center relative overflow-hidden border border-white/10 shadow-2xl">
            {/* Ambient Lighting */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-brand-yellow/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-brand-yellow/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
              <span className="inline-block px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-brand-yellow border border-brand-yellow/30 bg-brand-yellow/10 rounded-full mb-6">
                Connect With Us
              </span>

              <h2 className="text-3xl md:text-5xl font-extrabold font-heading tracking-tight text-white mb-6">
                Join Us in Building <span className="text-brand-yellow">Thriving Communities.</span>
              </h2>

              <p className="text-white/80 font-light text-base md:text-lg leading-relaxed mb-8 max-w-2xl">
                Through our unwavering dedication, we envision a brighter future where sports and culture thrive, uplifting lives and unlocking the true potential of rural India.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full sm:w-auto">
                <Link to="/contact">
                  <Button variant="primary">
                    Contact Us
                  </Button>
                </Link>
                <Link to="/partner">
                  <Button variant="secondaryWhite">
                    Partner With Us
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>

    </div>
  );
};

export default AboutPage;
