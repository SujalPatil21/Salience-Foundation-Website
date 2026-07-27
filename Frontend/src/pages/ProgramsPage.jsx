import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Container from '../components/ui/Container';
import SectionHeading from '../components/ui/SectionHeading';
import Button from '../components/ui/Button';
import StatisticCard from '../components/ui/StatisticCard';
import FAQAccordion from '../components/ui/FAQAccordion';
import { 
  PROGRAM_AREAS, 
  METHODOLOGY_STEPS, 
  STATS_ITEMS, 
  FAQS, 
  WHY_SPORTS_MATTER 
} from '../constants/programsData';
import { BORDER_RADIUS, SHADOWS, TRANSITIONS } from '../constants/design';

// Image imports
import teamImg from '../assets/images/Team.jpeg';
import girlsImg from '../assets/images/Girls.jpeg';
import mudImg from '../assets/images/Mud.jpeg';
import communityImg from '../assets/images/Community.jpeg';

/**
 * Premium Programs Page.
 * Implements the 9 structured sections focusing on sport-based social empowerment.
 */
const ProgramsPage = () => {
  const fadeInSlideUp = {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 },
  };

  const yuvaGatiHighlights = [
    { title: 'Youth Empowerment', desc: 'Fostering confidence and self-agency in rural teenagers.' },
    { title: 'Football Development', desc: 'Elite soccer coaching camps and local pitch setups.' },
    { title: 'Holistic Growth', desc: 'Coordinating physical fitness with academic tutoring.' }
  ];

  return (
    <div className="bg-white">
      
      {/* 1. Hero Section */}
      <section className="relative h-[100svh] w-full overflow-hidden flex items-center justify-center bg-black">
        <img
          src={teamImg}
          alt="Salience Foundation Youth Team"
          className="absolute inset-0 w-full h-full object-cover opacity-50 scale-105 animate-subtle-zoom"
        />
        {/* Dark overlay to match Home Page hero */}
        <div className="absolute inset-0 bg-black/60 z-[1]" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center flex flex-col items-center justify-center h-full">
          <motion.div
            initial="initial"
            animate="animate"
            transition={{ staggerChildren: 0.15 }}
            className="flex flex-col items-center"
          >
            <motion.span
              variants={fadeInSlideUp}
              transition={{ duration: 0.6 }}
              className="inline-block px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-brand-yellow border border-brand-yellow/30 bg-brand-yellow/10 rounded-full mb-6"
            >
              Our Initiatives
            </motion.span>

            <motion.h1
              variants={fadeInSlideUp}
              transition={{ duration: 0.7 }}
              className="text-4xl md:text-6xl font-extrabold text-white font-heading tracking-tight leading-none"
            >
              Programs That <span className="text-brand-yellow">Transform Lives</span> Through Sport
            </motion.h1>

            <motion.p
              variants={fadeInSlideUp}
              transition={{ duration: 0.7 }}
              className="mt-6 text-base md:text-lg text-white/80 font-light max-w-2xl leading-relaxed"
            >
              Salience Foundation empowers children and young people across rural India through structured football academies, secondary school retention support, digital literacy, and youth leadership.
            </motion.p>

            <motion.div
              variants={fadeInSlideUp}
              transition={{ duration: 0.6 }}
              className="mt-8 flex flex-col sm:flex-row gap-4 justify-center items-center w-full sm:w-auto"
            >
              <Link to="/partner">
                <Button variant="primary">Partner With Us</Button>
              </Link>
              <Link to="/contact">
                <Button variant="secondaryWhite">Contact Us</Button>
              </Link>
            </motion.div>
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


      {/* 2. Introduction Section */}
      <section className="py-24 border-b border-gray-50 bg-white">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <SectionHeading
              badge="Our Philosophy"
              title="Sports as a vehicle for systemic change"
              align="center"
              className="mb-8"
            />
            <p className="text-brand-dark font-light text-lg md:text-xl leading-relaxed">
              We believe football is more than a game—it is a classroom without walls. On the pitch, rural youth discover self-belief, develop strict discipline, practice collaborative teamwork, and unlock opportunities that geography and birth circumstances had closed.
            </p>
          </div>
        </Container>
      </section>

      {/* 3. Featured Initiative – YuvaGati */}
      <section className="py-24 bg-gray-50 border-b border-gray-100">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            
            {/* Left side: Image */}
            <div className="lg:col-span-6 relative">
              <img
                src={mudImg}
                alt="YuvaGati Grassroots Academy"
                className="rounded-2xl shadow-xl w-full h-[450px] object-cover grayscale-[10%] hover:grayscale-0 transition-all duration-500"
              />
            </div>

            {/* Right side: Content */}
            <div className="lg:col-span-6">
              <SectionHeading
                badge="Flagship Initiative"
                title="YuvaGati Sports Academy"
                align="left"
                className="mb-6"
              />
              <p className="text-brand-dark font-light text-base md:text-lg leading-relaxed mb-8">
                YuvaGati is our premium sports training network. We construct local pitches, distribute professional boots and footballs, and establish weekly training schedules led by certified regional mentors. The program channels sports passion directly into youth development and academic stability.
              </p>

              {/* Highlights cards */}
              <div className="flex flex-col gap-4">
                {yuvaGatiHighlights.map((high, idx) => (
                  <div key={idx} className="bg-white border border-gray-100 p-4 rounded-xl flex gap-4 items-start shadow-sm">
                    <span className="w-2.5 h-2.5 rounded-full bg-brand-yellow mt-1.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-heading font-bold text-brand-black text-sm md:text-base">{high.title}</h4>
                      <p className="text-xs text-brand-dark/90 font-light leading-relaxed mt-0.5">{high.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </Container>
      </section>

      {/* 4. Program Areas */}
      <section className="py-24 border-b border-gray-50">
        <Container>
          <SectionHeading
            badge="Program Areas"
            title="Focusing on holistic development"
            subtitle="We run structured, sports-based modules designed to build critical skills on and off the field."
            align="center"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {PROGRAM_AREAS.map((prog, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -6 }}
                className={`bg-white border border-gray-100 p-6 md:p-8 rounded-2xl flex flex-col items-start shadow-sm ${SHADOWS.card}`}
              >
                <div className="w-12 h-12 rounded-full bg-brand-yellow/15 flex items-center justify-center text-brand-black text-2xl font-bold mb-5">
                  {prog.icon}
                </div>
                <h3 className="text-lg md:text-xl font-bold text-brand-black mb-3 font-heading leading-snug">
                  {prog.title}
                </h3>
                <p className="text-brand-dark font-light text-xs md:text-sm leading-relaxed">
                  {prog.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* 5. Program Methodology */}
      <section className="py-24 bg-gray-50 border-b border-gray-100">
        <Container>
          <SectionHeading
            badge="Methodology"
            title="How we deliver impact"
            subtitle="Our structural process ensures sustainability, metrics auditing, and parent-community alignment at every step."
            align="center"
          />

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 mt-12">
            {METHODOLOGY_STEPS.map((step, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl border border-gray-100/50 flex flex-col h-full shadow-sm">
                <div className="text-3xl font-black text-brand-yellow/45 font-heading mb-4">
                  {step.step}
                </div>
                <h4 className="font-heading font-bold text-brand-black text-base md:text-lg mb-2">{step.title}</h4>
                <p className="text-xs md:text-sm text-brand-dark font-light leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 6. Impact Section */}
      <section className="py-24 border-b border-gray-50">
        <Container>
          <SectionHeading
            badge="Centralized Audits"
            title="Measured progress across sectors"
            subtitle="Real statistics updated continuously from our academy databases. We monitor attendance, school retention, and skill scores."
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

      {/* 7. Why Sports Matter */}
      <section className="py-24 bg-gray-50 border-b border-gray-100">
        <Container>
          <SectionHeading
            badge="Development Goals"
            title="Why sports play a key role"
            subtitle="Sports build core physical, psychological, and social foundations crucial for youth success."
            align="center"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {WHY_SPORTS_MATTER.map((item, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                <h4 className="font-heading font-bold text-brand-black text-base md:text-lg mb-2">{item.title}</h4>
                <p className="text-xs md:text-sm text-brand-dark font-light leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 8. Frequently Asked Questions */}
      <section className="py-24 bg-white border-b border-gray-50">
        <Container>
          <SectionHeading
            badge="FAQ"
            title="Programs frequently asked questions"
            align="center"
          />
          <div className="max-w-3xl mx-auto mt-12">
            <FAQAccordion items={FAQS} />
          </div>
        </Container>
      </section>

      {/* 9. Call To Action */}
      <section className="py-24 bg-gray-50/50 text-center">
        <Container>
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-extrabold font-heading text-brand-black mb-4">
              Help us expand these programs
            </h2>
            <p className="text-brand-dark font-light text-base md:text-lg mb-8">
              Become a sponsor, contribute kits, or dedicate volunteering hours to co-create opportunities for rural youth.
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

export default ProgramsPage;
