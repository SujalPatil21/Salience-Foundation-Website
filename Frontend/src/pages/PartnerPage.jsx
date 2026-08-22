import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Container from '../components/ui/Container';
import SectionHeading from '../components/ui/SectionHeading';
import Button from '../components/ui/Button';
import FAQAccordion from '../components/ui/FAQAccordion';
import { 
  WHY_PARTNER_CARDS, 
  OPPORTUNITIES_CARDS, 
  JOURNEY_STEPS, 
  CHOOSE_SALIENCE, 
  IMPACT_AREAS, 
  FAQS 
} from '../constants/partnerData';

// Image imports
import villageCouncilImg from '../assets/images/community_village_council.jpeg';

/**
 * Premium Partner With Us Page.
 * Implements the 8 detailed sections for collaborations, MoUs, and CSR sponsorships.
 */
const PartnerPage = () => {
  const [form, setForm] = useState({ name: '', org: '', email: '', phone: '', type: 'CSR', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setForm({ name: '', org: '', email: '', phone: '', type: 'CSR', message: '' });
    }, 3000);
  };

  const handleScrollToForm = () => {
    const element = document.getElementById('partner-form-section');
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
          src={villageCouncilImg}
          alt="Salience Foundation Community Partnerships"
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
              Collaborate With Us
            </span>

            <h1 className="text-4xl md:text-6xl font-extrabold text-white font-heading tracking-tight leading-none">
              Become a Partner in <span className="text-brand-yellow">Creating Opportunities</span>
            </h1>

            <p className="mt-6 text-base md:text-lg text-white/80 font-light max-w-2xl leading-relaxed">
              Every child deserves the opportunity to learn, grow, and succeed. Partner with Salience Foundation to help expand access to sports, education, leadership, and community development across rural India.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center items-center w-full sm:w-auto">
              <Button onClick={handleScrollToForm} variant="primary">
                Partner Today
              </Button>
              <Link to="/contact">
                <Button variant="secondaryWhite">Contact Us</Button>
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

      {/* Section 1 — Why Partner With Salience */}
      <section className="py-24 border-b border-gray-50 bg-white">
        <Container>
          <div className="max-w-4xl mx-auto text-center mb-16">
            <SectionHeading
              badge="Our Purpose"
              title="Talent exists everywhere, opportunity does not"
              align="center"
            />
            <p className="text-brand-dark font-light text-base md:text-lg leading-relaxed mt-4">
              At Salience Foundation, we bridge the opportunity gap by partnering with organizations and individuals. Together, we deploy scalable networks to support rural development, gender inclusion, and athletic scouting.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {WHY_PARTNER_CARDS.map((card, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -6 }}
                className="bg-white border border-gray-100 p-8 rounded-2xl flex flex-col shadow-sm"
              >
                <div className="w-12 h-12 rounded-xl bg-brand-yellow/15 flex items-center justify-center mb-6">
                  {card.icon}
                </div>
                <h3 className="text-lg md:text-xl font-bold text-brand-black mb-3 font-heading">
                  {card.title}
                </h3>
                <p className="text-brand-dark font-light text-xs md:text-sm leading-relaxed">
                  {card.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Section 2 — Partnership Opportunities */}
      <section className="py-24 bg-gray-50 border-b border-gray-100">
        <Container>
          <SectionHeading
            badge="Opportunities"
            title="Sectors of collaboration"
            subtitle="Explore how schools, corporates, volunteers, and sport associations work with our team on the ground."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {OPPORTUNITIES_CARDS.map((opp, idx) => (
              <div key={idx} className="bg-white border border-gray-100/50 p-8 rounded-2xl flex flex-col justify-between shadow-sm">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-brand-yellow/15 flex items-center justify-center mb-6">
                    {opp.icon}
                  </div>
                  <h3 className="text-xl font-bold text-brand-black mb-3 font-heading">
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

      {/* Section 3 — Partnership Journey */}
      <section className="py-24 border-b border-gray-50">
        <Container>
          <SectionHeading
            badge="Our Journey"
            title="The collaborative timeline"
            subtitle="From initial connect to quarterly on-ground audits, we ensure complete governance and transparency."
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
                className="bg-white border border-gray-100 p-6 rounded-2xl flex flex-col items-center text-center shadow-sm relative"
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

      {/* Section 4 — Why Organizations Choose Salience */}
      <section className="py-24 bg-gray-50 border-b border-gray-100">
        <Container>
          <SectionHeading
            badge="Trust & Quality"
            title="Why organizations choose Salience"
            subtitle="We maintain strict financial transparency, community alignment, and measurable results."
            align="center"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {CHOOSE_SALIENCE.map((choose, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex gap-4">
                <span className="w-2.5 h-2.5 rounded-full bg-brand-yellow mt-2 flex-shrink-0" />
                <div>
                  <h4 className="font-heading font-bold text-brand-black text-base md:text-lg mb-2">{choose.title}</h4>
                  <p className="text-xs md:text-sm text-brand-dark font-light leading-relaxed">{choose.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Section 5 — Areas of Impact */}
      <section className="py-24 border-b border-gray-50">
        <Container>
          <SectionHeading
            badge="Impact Fields"
            title="Areas where contributions create change"
            subtitle="Choose a target sector that fits your CSR and volunteering mandates."
            align="center"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {IMPACT_AREAS.map((area, idx) => (
              <div key={idx} className="bg-white border border-gray-100 p-8 rounded-2xl flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow duration-300">
                <div>
                  <h3 className="text-lg md:text-xl font-bold text-brand-black mb-2 font-heading">
                    {area.title}
                  </h3>
                  <p className="text-brand-dark font-light text-xs md:text-sm leading-relaxed">
                    {area.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Section 6 — FAQ Accordion */}
      <section className="py-24 bg-gray-50 border-b border-gray-100">
        <Container>
          <SectionHeading
            badge="FAQ"
            title="Partnership FAQ"
            align="center"
          />
          <div className="max-w-3xl mx-auto mt-12">
            <FAQAccordion items={FAQS} />
          </div>
        </Container>
      </section>

      {/* Section 7 — Partnership Form & Contact Info */}
      <section id="partner-form-section" className="py-24 bg-white border-b border-gray-50">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Form */}
            <div className="lg:col-span-7 bg-white border border-gray-100 p-8 rounded-2xl shadow-sm">
              <SectionHeading
                title="Partnership Enquiry"
                align="left"
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
                      placeholder="Jane Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-brand-black mb-2">Organization</label>
                    <input
                      type="text"
                      required
                      value={form.org}
                      onChange={(e) => setForm({ ...form, org: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-brand-yellow transition duration-200"
                      placeholder="Organization / School Name"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-brand-black mb-2">Email Address</label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-brand-yellow transition duration-200"
                      placeholder="jane@organization.org"
                    />
                  </div>
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
                </div>
                <div>
                  <label className="block text-sm font-semibold text-brand-black mb-2">Partnership Type</label>
                  <select
                    value={form.type}
                    onChange={(e) => setForm({ ...form, type: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-brand-yellow transition duration-200 bg-white"
                  >
                    <option value="CSR">Corporate CSR Sponsorship</option>
                    <option value="School">School/College Alliance</option>
                    <option value="NGO">NGO Collaboration</option>
                    <option value="Volunteer">Individual Volunteering</option>
                    <option value="Sponsor">Sports Gear/Kit Sponsor</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-brand-black mb-2">Message</label>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-brand-yellow transition duration-200 resize-none"
                    placeholder="Tell us about your collaboration plans..."
                  />
                </div>
                <Button type="submit" variant="primary" className="w-full sm:w-auto px-8 py-3.5">
                  Submit Enquiry
                </Button>
                {submitted && (
                  <div className="p-4 bg-yellow-100 text-yellow-800 text-sm font-semibold rounded-xl animate-fade-in mt-4">
                    Thank you! Your enquiry was submitted successfully. Our coordinators will reach out.
                  </div>
                )}
              </form>
            </div>

            {/* Contact Info Cards */}
            <div className="lg:col-span-5 flex flex-col gap-6">
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

          </div>
        </Container>
      </section>

      {/* Section 8 — Final Call To Action */}
      <section className="py-24 bg-gray-50/50 text-center">
        <Container>
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-extrabold font-heading text-brand-black mb-4">
              Together We Can Create Opportunities Where They Are Needed Most
            </h2>
            <p className="text-brand-dark font-light text-base md:text-lg mb-8">
              Join us in empowering young people through sport, education, and community development.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button onClick={handleScrollToForm} variant="primary">
                Partner Today
              </Button>
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

export default PartnerPage;
