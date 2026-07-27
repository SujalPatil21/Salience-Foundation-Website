import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Container from '../components/ui/Container';
import SectionHeading from '../components/ui/SectionHeading';
import Button from '../components/ui/Button';
import FAQAccordion from '../components/ui/FAQAccordion';
import { 
  JOURNEY_STEPS, 
  STUDENT_STORIES, 
  SKILLS_DEVELOPED, 
  FUTURE_OPPS, 
  FAQS 
} from '../constants/studentsData';

// Image import
import heroImg from '../assets/images/Girls.jpeg';

/**
 * Premium Students Page (Placeholder Version).
 * Renders trainee journey, placeholder story cards, skills grid, and process steps.
 */
const StudentsPage = () => {
  const handleScrollToStories = () => {
    const element = document.getElementById('student-stories-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const growthStages = [
    { label: 'Learn', desc: 'Understanding core rules, sports discipline, and basic footwork.' },
    { label: 'Practice', desc: 'Executing coaching drills, physical routines, and group study.' },
    { label: 'Compete', desc: 'Playing friendly cups, block championships, and league scouting.' },
    { label: 'Lead', desc: 'Taking game captaincy, mentoring peers, and leading lab tasks.' },
    { label: 'Inspire', desc: 'Modeling scholar-athlete values to motivate other village youth.' }
  ];

  return (
    <div className="bg-white">
      
      {/* Hero Section */}
      <section className="relative h-[100svh] w-full overflow-hidden flex items-center justify-center bg-black">
        <img
          src={heroImg}
          alt="Salience Foundation Trainees"
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
              Our Students
            </span>

            <h1 className="text-4xl md:text-6xl font-extrabold text-white font-heading tracking-tight leading-none">
              Empowering the <span className="text-brand-yellow">Next Generation</span>
            </h1>

            <p className="mt-6 text-base md:text-lg text-white/80 font-light max-w-2xl leading-relaxed">
              Every child deserves the opportunity to learn, grow, lead, and dream through sport. Meet the young people whose journeys are shaping the future of their communities.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center items-center w-full sm:w-auto">
              <Button onClick={handleScrollToStories} variant="primary">
                Explore Stories
              </Button>
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
              badge="Trainee Profiles"
              title="Every student has a unique pathway to growth"
              align="center"
            />
            <p className="text-brand-dark font-light text-base md:text-lg leading-relaxed mt-4">
              Salience Foundation is committed to providing athletic gear, computer literacy classrooms, and standard football coaching to select youth in isolated blocks.
            </p>
          </div>
        </Container>
      </section>

      {/* Student Journey Timeline */}
      <section className="py-24 bg-gray-50 border-b border-gray-100">
        <Container>
          <SectionHeading
            badge="Trainee Lifecycle"
            title="The student growth journey"
            subtitle="How we scaffold athletic and educational support to help kids grow."
            align="center"
          />

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 mt-12">
            {JOURNEY_STEPS.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white border border-gray-100 p-6 rounded-2xl flex flex-col items-center text-center shadow-sm"
              >
                <div className="w-12 h-12 rounded-full bg-brand-yellow text-brand-black flex items-center justify-center mb-4 text-xl">
                  {step.icon}
                </div>
                <h4 className="font-heading font-bold text-brand-black text-sm md:text-base mb-2">{step.title}</h4>
                <p className="text-xs text-brand-dark font-light leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Student Stories (Placeholder Cards) */}
      <section id="student-stories-section" className="py-24 border-b border-gray-50 bg-white">
        <Container>
          <SectionHeading
            badge="Trainees"
            title="Trainee success logs"
            subtitle="Verified student profiles will be updated once field data audits complete."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {STUDENT_STORIES.map((student, idx) => (
              <div key={idx} className="bg-white border border-gray-100 p-8 rounded-2xl flex flex-col items-center text-center shadow-sm">
                {/* Circular Placeholder Image */}
                <div className="w-24 h-24 rounded-full bg-gray-100 border border-gray-200 flex items-center justify-center mb-6">
                  <span className="text-gray-400 text-2xl font-bold">👤</span>
                </div>
                <span className="inline-block px-2.5 py-0.5 text-[9px] font-bold uppercase tracking-wider text-yellow-700 bg-brand-yellow/20 rounded-md mb-3">
                  Official Story Coming Soon
                </span>
                <h3 className="text-lg md:text-xl font-bold text-brand-black mb-1 font-heading">
                  {student.name}
                </h3>
                <span className="text-brand-dark/75 text-xs font-semibold uppercase tracking-wider mb-4 block">
                  {student.age} &bull; {student.program}
                </span>
                <p className="text-xs text-brand-dark italic font-light leading-relaxed">
                  "{student.story}"
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Skills Developed */}
      <section className="py-24 bg-gray-50 border-b border-gray-100">
        <Container>
          <SectionHeading
            badge="Asset Building"
            title="Skills nurtured on the pitch"
            subtitle="We integrate life-skills coaching inside daily soccer training clinics."
            align="center"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {SKILLS_DEVELOPED.map((skill, idx) => (
              <div key={idx} className="bg-white border border-gray-100 p-8 rounded-2xl flex flex-col shadow-sm">
                <div className="w-12 h-12 rounded-xl bg-brand-yellow/15 flex items-center justify-center mb-6">
                  {skill.icon}
                </div>
                <h3 className="text-lg md:text-xl font-bold text-brand-black mb-3 font-heading">
                  {skill.title}
                </h3>
                <p className="text-brand-dark font-light text-xs md:text-sm leading-relaxed">
                  {skill.desc}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Student Growth Infographic */}
      <section className="py-24 border-b border-gray-50 bg-white">
        <Container>
          <SectionHeading
            badge="Process Map"
            title="Trainee growth stages"
            subtitle="The advancement pipeline of Salience scholars from entry clinics to peer leaders."
            align="center"
          />

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 mt-12">
            {growthStages.map((stage, idx) => (
              <div key={idx} className="bg-gray-50 p-6 rounded-2xl border border-gray-100 flex flex-col h-full shadow-sm text-center">
                <div className="w-10 h-10 rounded-full bg-brand-yellow text-brand-black flex items-center justify-center mx-auto mb-4 font-heading font-black text-sm">
                  {idx + 1}
                </div>
                <h4 className="font-heading font-bold text-brand-black text-base md:text-lg mb-2">{stage.label}</h4>
                <p className="text-xs text-brand-dark font-light leading-relaxed">{stage.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Parent & Community Support */}
      <section className="py-24 bg-gray-50 border-b border-gray-100">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <SectionHeading
              badge="Collaboration"
              title="Parent & community alignment"
              align="center"
            />
            <p className="text-brand-dark font-light text-base md:text-lg leading-relaxed mt-4">
              Student growth relies on the support of families, school administrators, and village councils. We establish local coordination groups to monitor class attendance and support training guidelines.
            </p>
          </div>
        </Container>
      </section>

      {/* Future Opportunities */}
      <section className="py-24 border-b border-gray-50 bg-white">
        <Container>
          <SectionHeading
            badge="Support Areas"
            title="Future opportunities"
            subtitle="Avenues of support intended for expansion upon confirmed school alliances."
            align="center"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {FUTURE_OPPS.map((opp, idx) => (
              <div key={idx} className="bg-white border border-gray-100 p-8 rounded-2xl flex flex-col justify-between shadow-sm">
                <div>
                  <h3 className="text-lg md:text-xl font-bold text-brand-black mb-2 font-heading">
                    {opp.title}
                  </h3>
                  <p className="text-brand-dark font-light text-xs md:text-sm leading-relaxed">
                    {opp.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* FAQ Accordion Section */}
      <section className="py-24 bg-gray-50 border-b border-gray-100">
        <Container>
          <SectionHeading
            badge="FAQ"
            title="Common trainee questions"
            align="center"
          />
          <div className="max-w-3xl mx-auto mt-12">
            <FAQAccordion items={FAQS} />
          </div>
        </Container>
      </section>

      {/* Final CTA */}
      <section className="py-24 text-center bg-white">
        <Container>
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-extrabold font-heading text-brand-black mb-4">
              Help Shape the Next Generation
            </h2>
            <p className="text-brand-dark font-light text-base md:text-lg mb-8">
              Support opportunities that help young people grow through sport, education, and community leadership.
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

export default StudentsPage;
