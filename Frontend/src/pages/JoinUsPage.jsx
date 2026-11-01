import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Container from '../components/ui/Container';
import SectionHeading from '../components/ui/SectionHeading';
import Button from '../components/ui/Button';

// Image imports
import villageCouncilImg from '../assets/images/community_village_council.jpeg';
import { OPPORTUNITIES_CARDS } from '../constants/partnerData';

/**
 * Unified Join Us Page
 * Consolidates the Get Involved experience into 3 pathways: Partner, Donate, Athlete.
 */
const JoinUsPage = () => {
  const { hash } = useLocation();

  // Scroll to hash on mount or when hash changes
  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.substring(1));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
    }
  }, [hash]);

  const [athleteForm, setAthleteForm] = useState({ name: '', age: '', location: '', sport: '', experience: '', message: '' });
  const [athleteSubmitted, setAthleteSubmitted] = useState(false);

  const handleAthleteSubmit = (e) => {
    e.preventDefault();
    setAthleteSubmitted(true);
    setTimeout(() => {
      setAthleteSubmitted(false);
      setAthleteForm({ name: '', age: '', location: '', sport: '', experience: '', message: '' });
    }, 3000);
  };

  const handleScrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-white">
      
      {/* Hero Section */}
      <section className="relative h-[100svh] w-full overflow-hidden flex items-center justify-center bg-black">
        <img
          src={villageCouncilImg}
          alt="Join Salience Foundation"
          className="absolute inset-0 w-full h-full object-cover opacity-50 scale-105 animate-subtle-zoom"
        />
        <div className="absolute inset-0 bg-black/60 z-[1]" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center flex flex-col items-center justify-center h-full mt-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center w-full"
          >
            <span className="inline-block px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-brand-yellow border border-brand-yellow/30 bg-brand-yellow/10 rounded-full mb-6">
              Join Us
            </span>

            <h1 className="text-4xl md:text-6xl font-extrabold text-white font-heading tracking-tight leading-none mb-4">
              Find your <span className="text-brand-yellow">way in.</span>
            </h1>

            <p className="mt-4 mb-12 text-base md:text-lg text-white/80 font-light max-w-2xl leading-relaxed">
              There are different ways to be part of the mission. Choose your path below and help us bridge the opportunity gap.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full max-w-3xl">
              <div 
                onClick={() => handleScrollTo('partner')}
                className="cursor-pointer group flex-1 bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-md px-6 py-8 rounded-2xl flex flex-col items-center transition-all duration-300 w-full sm:w-auto hover:-translate-y-1"
              >
                <span className="text-brand-yellow mb-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                </span>
                <span className="font-heading font-bold text-white tracking-wide uppercase text-sm">Partner With Us</span>
              </div>
              
              <div 
                onClick={() => handleScrollTo('donate')}
                className="cursor-pointer group flex-1 bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-md px-6 py-8 rounded-2xl flex flex-col items-center transition-all duration-300 w-full sm:w-auto hover:-translate-y-1"
              >
                <span className="text-brand-yellow mb-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
                </span>
                <span className="font-heading font-bold text-white tracking-wide uppercase text-sm">Support the Mission</span>
              </div>

              <div 
                onClick={() => handleScrollTo('athlete')}
                className="cursor-pointer group flex-1 bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-md px-6 py-8 rounded-2xl flex flex-col items-center transition-all duration-300 w-full sm:w-auto hover:-translate-y-1"
              >
                <span className="text-brand-yellow mb-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
                </span>
                <span className="font-heading font-bold text-white tracking-wide uppercase text-sm">Join as Athlete</span>
              </div>
            </div>
          </motion.div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 z-10">
            <span className="text-white/40 text-[10px] font-semibold uppercase tracking-[0.25em] font-heading">Explore Options</span>
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              className="w-0.5 h-5 bg-brand-yellow rounded-full"
            />
          </div>
        </div>
      </section>

      {/* 01 - PARTNER WITH US (GATEWAY) */}
      <section id="partner" className="py-24 border-b border-gray-50 bg-white scroll-mt-20">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block text-brand-yellow font-heading font-bold tracking-wider text-sm uppercase mb-4">01 — Collaborate</span>
            <SectionHeading title="Partner With Us" align="center" />
            <p className="text-brand-dark font-light text-base md:text-lg leading-relaxed mt-4 mb-12">
              For organizations, companies, institutions, sponsors, and other partners. Explore how schools, corporates, volunteers, and sport associations work with our team on the ground.
            </p>
            
            <div className="bg-gray-50 border border-gray-200 p-12 rounded-3xl shadow-sm text-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-building-2 text-gray-400 mx-auto mb-6"><path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"/><path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"/><path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"/><path d="M10 6h4"/><path d="M10 10h4"/><path d="M10 14h4"/><path d="M10 18h4"/></svg>
              <h3 className="text-2xl font-bold font-heading text-brand-black mb-4">Explore Partnership Opportunities</h3>
              <p className="text-gray-500 max-w-lg mx-auto mb-8 text-sm leading-relaxed">
                Discover our collaborative journey, impact areas, and apply to partner with us on dedicated rural development projects.
              </p>
              <Link to="/partner">
                <Button variant="primary" className="px-8 shadow-md">
                  Learn More →
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* 02 - DONATE / SUPPORT US */}
      <section id="donate" className="py-24 bg-gray-50 border-b border-gray-100 scroll-mt-20">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block text-brand-yellow font-heading font-bold tracking-wider text-sm uppercase mb-4">02 — Financial Support</span>
            <SectionHeading title="Support The Mission" align="center" />
            <p className="text-brand-dark font-light text-base md:text-lg leading-relaxed mt-4 mb-12">
              For individuals and benefactors who want to financially support our on-ground efforts. Your contributions directly fund sports equipment, coaching, and digital literacy tools for rural youth.
            </p>
            
            <div className="bg-white border border-gray-200 p-12 rounded-3xl shadow-sm text-center relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-2 bg-brand-yellow"></div>
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-banknote text-gray-300 mx-auto mb-6"><rect width="20" height="12" x="2" y="6" rx="2"/><circle cx="12" cy="12" r="2"/><path d="M6 12h.01M18 12h.01"/></svg>
              <h3 className="text-2xl font-bold font-heading text-brand-black mb-4">Make a Donation</h3>
              <p className="text-gray-500 max-w-lg mx-auto mb-8 text-sm leading-relaxed">
                We are currently updating our secure payment gateway and banking integration. Bank details, UPI IDs, and tax benefit information will be listed here shortly.
              </p>
              <Button variant="secondary" className="px-8 cursor-not-allowed opacity-50">
                Donate Now
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* 03 - JOIN AS ATHLETE */}
      <section id="athlete" className="py-24 bg-white scroll-mt-20">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            <div className="lg:col-span-5 flex flex-col gap-6 lg:order-2">
              <span className="text-brand-yellow font-heading font-bold tracking-wider text-sm uppercase">03 — Empower Yourself</span>
              <h2 className="text-3xl md:text-5xl font-extrabold font-heading text-brand-black leading-tight">
                Join As Athlete
              </h2>
              <p className="text-brand-dark font-light text-base md:text-lg leading-relaxed mb-6">
                Are you passionate about sports and willing to dedicate yourself to both academics and athletics? Join our Scholar-Athlete Program.
              </p>
              
              <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                <h4 className="font-bold text-brand-black mb-4 font-heading">What we offer:</h4>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="text-brand-yellow mt-1"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg></span>
                    <span className="text-sm text-brand-dark font-light">Access to quality gear, certified coaching, and nutrition.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-brand-yellow mt-1"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg></span>
                    <span className="text-sm text-brand-dark font-light">Competitive platforms and tournament exposure to reach your full potential.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-brand-yellow mt-1"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg></span>
                    <span className="text-sm text-brand-dark font-light">Academic support, digital learning equipment, and study mentorship to ensure school retention.</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="lg:col-span-7 lg:order-1 bg-white border border-gray-100 p-8 rounded-2xl shadow-sm">
              <SectionHeading title="Athlete Application" align="left" className="mb-8" />
              <form onSubmit={handleAthleteSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-brand-black mb-2">Full Name</label>
                    <input type="text" required value={athleteForm.name} onChange={(e) => setAthleteForm({ ...athleteForm, name: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-brand-yellow transition" placeholder="Your Name" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-brand-black mb-2">Age</label>
                    <input type="number" required min="8" max="25" value={athleteForm.age} onChange={(e) => setAthleteForm({ ...athleteForm, age: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-brand-yellow transition" placeholder="e.g. 14" />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-brand-black mb-2">Location / Village</label>
                    <input type="text" required value={athleteForm.location} onChange={(e) => setAthleteForm({ ...athleteForm, location: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-brand-yellow transition" placeholder="Your District or Village" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-brand-black mb-2">Primary Sport</label>
                    <input type="text" required value={athleteForm.sport} onChange={(e) => setAthleteForm({ ...athleteForm, sport: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-brand-yellow transition" placeholder="e.g. Football, Athletics" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-brand-black mb-2">Current Experience Level</label>
                  <select value={athleteForm.experience} onChange={(e) => setAthleteForm({ ...athleteForm, experience: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-brand-yellow transition bg-white">
                    <option value="" disabled>Select Level</option>
                    <option value="Beginner">Beginner / Just starting</option>
                    <option value="School">School/District Level</option>
                    <option value="State">State Level</option>
                    <option value="National">National Level</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-brand-black mb-2">Why do you want to join Salience?</label>
                  <textarea required rows={4} value={athleteForm.message} onChange={(e) => setAthleteForm({ ...athleteForm, message: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-brand-yellow transition resize-none" placeholder="Tell us about your sporting dreams..." />
                </div>
                <Button type="submit" variant="primary" className="w-full sm:w-auto px-8 py-3.5">Submit Application</Button>
                {athleteSubmitted && <div className="p-4 bg-yellow-100 text-yellow-800 text-sm font-semibold rounded-xl mt-4">Application submitted successfully. We will be in touch!</div>}
              </form>
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

export default JoinUsPage;
