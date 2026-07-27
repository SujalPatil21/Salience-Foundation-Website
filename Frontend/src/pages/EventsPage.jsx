import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Container from '../components/ui/Container';
import SectionHeading from '../components/ui/SectionHeading';
import Button from '../components/ui/Button';
import FAQAccordion from '../components/ui/FAQAccordion';
import { 
  EVENT_CATEGORIES, 
  UPCOMING_EVENTS, 
  PAST_EVENTS, 
  EVENT_HIGHLIGHTS, 
  FAQS 
} from '../constants/eventsData';

// Image imports
import heroImg from '../assets/images/Team.jpeg';
import galleryImg1 from '../assets/images/Children.jpeg';
import galleryImg2 from '../assets/images/Community.jpeg';
import galleryImg3 from '../assets/images/Girls.jpeg';
import galleryImg4 from '../assets/images/Mud.jpeg';

/**
 * Premium Events Page (Placeholder Version).
 * Renders upcoming filter grid, featured item, past timeline, and values highlights.
 */
const EventsPage = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredEvents = activeFilter === 'All'
    ? UPCOMING_EVENTS
    : UPCOMING_EVENTS.filter(ev => ev.category === activeFilter);

  const handleScrollToEvents = () => {
    const element = document.getElementById('events-grid-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-white">
      
      {/* Hero Section */}
      <section className="relative h-[100svh] w-full overflow-hidden flex items-center justify-center bg-black">
        <img
          src={heroImg}
          alt="Salience Foundation Events"
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
              Events
            </span>

            <h1 className="text-4xl md:text-6xl font-extrabold text-white font-heading tracking-tight leading-none">
              Bringing Communities <span className="text-brand-yellow">Together</span> Through Sport
            </h1>

            <p className="mt-6 text-base md:text-lg text-white/80 font-light max-w-2xl leading-relaxed">
              Events create opportunities for learning, teamwork, leadership, and community engagement. Explore upcoming activities and memorable moments from Salience Foundation.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center items-center w-full sm:w-auto">
              <Button onClick={handleScrollToEvents} variant="primary">
                Explore Events
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
              badge="Activities Index"
              title="Strengthening communities through collective play"
              align="center"
            />
            <p className="text-brand-dark font-light text-base md:text-lg leading-relaxed mt-4">
              Salience Foundation events are built to invite village support. We coordinate selection camps, academic checkups, and volunteer logistics to motivate rural youth.
            </p>
          </div>
        </Container>
      </section>

      {/* Featured Event Section */}
      <section className="py-24 bg-gray-50 border-b border-gray-100">
        <Container>
          <SectionHeading
            badge="Featured Highlight"
            title="Next scheduled activity"
            align="center"
            className="mb-12"
          />

          <div className="max-w-5xl mx-auto bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm grid grid-cols-1 lg:grid-cols-12">
            {/* Image banner */}
            <div className="lg:col-span-6 aspect-video lg:aspect-auto bg-gray-100 relative">
              <img
                src={heroImg}
                alt="Featured Event Banner"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-brand-black/30" />
            </div>

            {/* Event Info */}
            <div className="lg:col-span-6 p-8 md:p-10 flex flex-col justify-between">
              <div>
                <span className="inline-block px-3 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider text-yellow-800 bg-brand-yellow/20 mb-4">
                  Upcoming Event — Official Details Coming Soon
                </span>
                <h3 className="text-2xl md:text-3xl font-bold text-brand-black mb-4 font-heading">
                  Milestone Program Clinic
                </h3>
                <p className="text-brand-dark font-light text-sm leading-relaxed mb-6">
                  This featured section will display coordinates, scheduled session agendas, and parent guidance guidelines once selection audits are validated.
                </p>
              </div>

              {/* Placeholders */}
              <div className="grid grid-cols-2 gap-4 border-t border-gray-100 pt-6">
                <div>
                  <span className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider block">Date</span>
                  <span className="text-xs font-bold text-brand-black">To Be Updated</span>
                </div>
                <div>
                  <span className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider block">Time</span>
                  <span className="text-xs font-bold text-brand-black">To Be Updated</span>
                </div>
                <div className="col-span-2 mt-2">
                  <span className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider block">Location</span>
                  <span className="text-xs font-bold text-brand-black">Jharkhand coordination blocks</span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Upcoming Events Grid Section */}
      <section id="events-grid-section" className="py-24 border-b border-gray-50 bg-white">
        <Container>
          <SectionHeading
            badge="Audited Calendar"
            title="Upcoming activities calendar"
            align="center"
            className="mb-12"
          />

          {/* Filter Chips */}
          <div className="flex flex-wrap justify-center gap-3 mb-16">
            {EVENT_CATEGORIES.map((cat, idx) => (
              <button
                key={idx}
                onClick={() => setActiveFilter(cat)}
                className={`px-5 py-2 rounded-full text-xs md:text-sm font-semibold tracking-wide transition-all duration-300 ${
                  activeFilter === cat
                    ? 'bg-[#F3EA00] text-[#111111] shadow-md'
                    : 'bg-gray-100 text-brand-dark hover:bg-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid list */}
          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence mode="popLayout">
              {filteredEvents.map((ev, idx) => (
                <motion.div
                  key={ev.title}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm flex flex-col justify-between"
                >
                  <div className="p-6 md:p-8">
                    <span className="inline-block px-2.5 py-0.5 rounded text-[9px] font-bold uppercase tracking-wider text-yellow-700 bg-brand-yellow/20 mb-4">
                      Coming Soon
                    </span>
                    <h4 className="font-heading font-bold text-brand-black text-lg mb-2">{ev.title}</h4>
                    <p className="text-xs text-brand-dark font-light leading-relaxed mb-6">{ev.desc}</p>
                  </div>
                  <div className="bg-gray-50 border-t border-gray-100 px-6 py-4 flex justify-between items-center text-[10px] text-gray-400 font-semibold uppercase tracking-wider">
                    <span>{ev.date}</span>
                    <span>{ev.location}</span>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </Container>
      </section>

      {/* Past Events Grid */}
      <section className="py-24 bg-gray-50 border-b border-gray-100">
        <Container>
          <SectionHeading
            badge="Archive"
            title="Past events logs"
            subtitle="Explore our archived coordinates. Details will be updated upon validation."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {PAST_EVENTS.map((item, idx) => (
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

      {/* Event Highlights Section */}
      <section className="py-24 border-b border-gray-50 bg-white">
        <Container>
          <SectionHeading
            badge="Nurture Areas"
            title="Common event highlights"
            subtitle="Features integrated within our event calendar blocks."
            align="center"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {EVENT_HIGHLIGHTS.map((item, idx) => (
              <div key={idx} className="bg-white border border-gray-100 p-8 rounded-2xl flex flex-col shadow-sm">
                <div className="w-12 h-12 rounded-xl bg-brand-yellow/15 flex items-center justify-center mb-6">
                  {item.icon}
                </div>
                <h3 className="text-lg md:text-xl font-bold text-brand-black mb-3 font-heading">
                  {item.title}
                </h3>
                <p className="text-brand-dark font-light text-xs md:text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Photo Highlights preview */}
      <section className="py-24 bg-gray-50 border-b border-gray-100">
        <Container>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
            <SectionHeading
              badge="Snapshots"
              title="Memorable event snapshots"
              align="left"
            />
            <Link to="/gallery" className="mt-4 md:mt-0">
              <Button variant="secondary" className="px-6 py-2.5 text-xs font-semibold">
                Explore Full Gallery
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[galleryImg1, galleryImg2, galleryImg3, galleryImg4].map((src, idx) => (
              <div key={idx} className="relative aspect-[4/3] rounded-2xl overflow-hidden group shadow-sm">
                <img
                  src={src}
                  alt="Events snapshot detail"
                  className="w-full h-full object-cover group-hover:scale-105 transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* FAQ Accordion Section */}
      <section className="py-24 border-b border-gray-50 bg-white">
        <Container>
          <SectionHeading
            badge="FAQ"
            title="Common event queries"
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
              Be Part of the Next Event
            </h2>
            <p className="text-brand-dark font-light text-base md:text-lg mb-8">
              Join us as we continue creating opportunities for learning, leadership, and community impact through sport.
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

export default EventsPage;
