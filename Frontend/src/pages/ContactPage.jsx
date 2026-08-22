import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Container from '../components/ui/Container';
import SectionHeading from '../components/ui/SectionHeading';
import Button from '../components/ui/Button';
import FAQAccordion from '../components/ui/FAQAccordion';
import { WHY_CONTACT_CARDS, FAQS } from '../constants/contactData';

// Image import
import coachMentorshipImg from '../assets/images/volunteer_coach_mentorship.jpeg';

const InteractiveMap = React.lazy(() => import('../components/maps/InteractiveMap'));

/**
 * Premium Contact Page.
 * Implements 100vh hero, form validation placeholders, map container, and FAQ.
 */
const ContactPage = () => {
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setForm({ name: '', email: '', phone: '', subject: '', message: '' });
    }, 3000);
  };

  const handleScrollToForm = () => {
    const element = document.getElementById('contact-form-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const contactInfo = [
    { 
      label: 'Headquarters', 
      value: 'Ranchi, Jharkhand, India', 
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#575757" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-map-pin">
          <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
          <circle cx="12" cy="10" r="3"/>
        </svg>
      )
    },
    { 
      label: 'Email Address', 
      value: 'info@saliencefoundation.org', 
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#575757" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail">
          <rect width="20" height="16" x="2" y="4" rx="2"/>
          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
        </svg>
      )
    },
    { 
      label: 'Phone Number', 
      value: '+91 98765 43210', 
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#575757" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-phone">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
        </svg>
      )
    },
    { 
      label: 'Working Hours', 
      value: 'Mon - Sat: 9:00 AM - 6:00 PM', 
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#575757" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-clock">
          <circle cx="12" cy="12" r="10"/>
          <polyline points="12 6 12 12 16 14"/>
        </svg>
      )
    }
  ];

  return (
    <div className="bg-white">
      
      {/* Hero Section */}
      <section className="relative h-[100svh] w-full overflow-hidden flex items-center justify-center bg-black">
        <img
          src={coachMentorshipImg}
          alt="Contact Salience Foundation"
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
              Get In Touch
            </span>

            <h1 className="text-4xl md:text-6xl font-extrabold text-white font-heading tracking-tight leading-none">
              Let's Build Opportunities Together
            </h1>

            <p className="mt-6 text-base md:text-lg text-white/80 font-light max-w-2xl leading-relaxed">
              Whether you're interested in volunteering, partnering, supporting a program, or simply learning more about our work, we'd love to hear from you.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center items-center w-full sm:w-auto">
              <Button onClick={handleScrollToForm} variant="primary">
                Contact Us
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

      {/* Contact Information Cards */}
      <section className="py-24 border-b border-gray-50 bg-white">
        <Container>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, idx) => (
              <div 
                key={idx} 
                className="group bg-white border border-gray-100 p-6 rounded-2xl flex items-center gap-5 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-[280ms] ease-in-out cursor-default"
              >
                <div className="w-12 h-12 rounded-xl bg-[#FFFBE6] group-hover:bg-[#FFF5C6] transition-colors duration-[280ms] flex items-center justify-center flex-shrink-0">
                  {info.icon}
                </div>
                <div>
                  <h4 className="font-heading font-bold text-brand-black text-base">{info.label}</h4>
                  <p className="text-sm text-brand-dark/95 font-light leading-relaxed mt-0.5">{info.value}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Contact Form Section */}
      <section id="contact-form-section" className="py-24 bg-gray-50/40 border-b border-gray-100">
        <Container>
          <div className="max-w-3xl mx-auto bg-white border border-gray-100 p-8 md:p-10 rounded-2xl shadow-sm">
            <SectionHeading
              title="Send a Message"
              align="center"
              className="mb-8"
            />
            <form onSubmit={handleFormSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-brand-black mb-2">Full Name</label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-brand-yellow transition duration-200"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-brand-black mb-2">Email Address</label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-brand-yellow transition duration-200"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-brand-black mb-2">Phone Number</label>
                  <input
                    type="tel"
                    required
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-brand-yellow transition duration-200"
                    placeholder="+91 XXXXX XXXXX"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-brand-black mb-2">Subject</label>
                  <input
                    type="text"
                    required
                    value={form.subject}
                    onChange={(e) => setForm({ ...form, subject: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-brand-yellow transition duration-200"
                    placeholder="Partnership, Volunteering, Enquiry..."
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-brand-black mb-2">Message</label>
                <textarea
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-brand-yellow transition duration-200 resize-none"
                  placeholder="Tell us how we can help..."
                />
              </div>
              <Button type="submit" variant="primary" className="w-full sm:w-auto px-10 py-3.5">
                Send Message
              </Button>
              {submitted && (
                <div className="p-4 bg-yellow-100 text-yellow-800 text-sm font-semibold rounded-xl animate-fade-in mt-4">
                  Thank you! Your message was submitted successfully.
                </div>
              )}
            </form>
          </div>
        </Container>
      </section>

      {/* Map Section */}
      <section className="py-24 border-b border-gray-50 bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left detail card */}
            <div className="lg:col-span-5">
              <SectionHeading
                badge="Location"
                title="Visit our headquarters"
                align="left"
                className="mb-6"
              />
              <p className="text-brand-dark font-light text-base leading-relaxed mb-6">
                Our main administrative operations and coordination centers are based in Ranchi, Jharkhand. We invite sponsors and visitors to align audits or join tournament cups in targeted rural blocks.
              </p>
              <h5 className="font-heading font-extrabold text-brand-black text-sm mb-2">Salience Foundation Office</h5>
              <p className="text-xs text-brand-dark leading-relaxed font-light mb-8">
                Ranchi, Jharkhand, India.
              </p>
              <a href="https://www.openstreetmap.org/?mlat=23.3441&mlon=85.3096#map=15/23.3441/85.3096" target="_blank" rel="noopener noreferrer">
                <Button variant="secondary" className="px-6 py-2.5 text-xs font-semibold">
                  Get Directions
                </Button>
              </a>
            </div>

            {/* Right Map frame */}
            <div className="lg:col-span-7 h-[350px] md:h-[480px] overflow-hidden rounded-[20px]">
              <React.Suspense fallback={
                <div className="w-full h-full bg-gray-50 border border-gray-100 rounded-[20px] flex items-center justify-center">
                  <span className="text-gray-400 text-sm animate-pulse">Loading map...</span>
                </div>
              }>
                <InteractiveMap />
              </React.Suspense>
            </div>
          </div>

          {/* Info Card below the map grid */}
          <div className="mt-12 bg-gray-50 border border-gray-100 p-6 md:p-8 rounded-2xl shadow-sm max-w-4xl mx-auto">
            <h5 className="font-heading font-bold text-brand-black text-lg mb-2">Community Center Visits</h5>
            <p className="text-sm text-brand-dark leading-relaxed font-light">
              For field visits or academy tournament inspections, please connect with our project coordinators at least 48 hours prior to arrange transportation support and safety clearances.
            </p>
          </div>
        </Container>
      </section>

      {/* Why Contact Us */}
      <section className="py-24 bg-gray-50 border-b border-gray-100">
        <Container>
          <SectionHeading
            badge="Why Contact Us"
            title="Channels of communication"
            subtitle="Understand how our different teams manage corporate MoUs, volunteering rosters, and gear sponsorships."
            align="center"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {WHY_CONTACT_CARDS.map((card, idx) => (
              <div key={idx} className="bg-white border border-gray-100 p-8 rounded-2xl flex flex-col shadow-sm">
                <div className="w-12 h-12 rounded-xl bg-brand-yellow/15 flex items-center justify-center mb-6">
                  {card.icon}
                </div>
                <h3 className="text-lg md:text-xl font-bold text-brand-black mb-3 font-heading">
                  {card.title}
                </h3>
                <p className="text-brand-dark font-light text-xs md:text-sm leading-relaxed">
                  {card.desc}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white border-b border-gray-50">
        <Container>
          <SectionHeading
            badge="FAQ"
            title="Contact frequently asked questions"
            align="center"
          />
          <div className="max-w-3xl mx-auto mt-12">
            <FAQAccordion items={FAQS} />
          </div>
        </Container>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-gray-50/50 text-center">
        <Container>
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-extrabold font-heading text-brand-black mb-4">
              Together We Can Create More Opportunities
            </h2>
            <p className="text-brand-dark font-light text-base md:text-lg mb-8">
              Every conversation begins with a shared purpose. Reach out and let's create lasting impact together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/partner">
                <Button variant="primary">Partner With Us</Button>
              </Link>
              <Link to="/programs">
                <Button variant="secondary">Explore Programs</Button>
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

export default ContactPage;
