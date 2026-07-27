import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Container from '../components/ui/Container';
import SectionHeading from '../components/ui/SectionHeading';
import Button from '../components/ui/Button';
import FAQAccordion from '../components/ui/FAQAccordion';
import { POLICY_CARDS, GOVERNANCE_CARDS, FAQS } from '../constants/policiesData';

// Image import
import communityImg from '../assets/images/Community.jpeg';

/**
 * Premium Policies & Transparency Page.
 * Implements 100vh hero banner, policy card grid with 'Coming Soon' triggers,
 * ethical governance cards, and support CTAs.
 */
const PoliciesPage = () => {

  const handleScrollToPolicies = () => {
    const element = document.getElementById('policies-grid-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-white">
      
      {/* Hero Section */}
      <section className="relative h-[100svh] w-full overflow-hidden flex items-center justify-center bg-black">
        <img
          src={communityImg}
          alt="Policies & Transparency Salience"
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
              Legal & Transparency
            </span>

            <h1 className="text-4xl md:text-6xl font-extrabold text-white font-heading tracking-tight leading-none">
              Policies & <span className="text-brand-yellow">Transparency</span>
            </h1>

            <p className="mt-6 text-base md:text-lg text-white/80 font-light max-w-2xl leading-relaxed">
              Transparency, accountability, and trust are fundamental to everything we do. Here you can access our policies and important organizational documents.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center items-center w-full sm:w-auto">
              <Button onClick={handleScrollToPolicies} variant="primary">
                View Policies
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

      {/* Introduction Section */}
      <section className="py-24 border-b border-gray-50 bg-white">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <SectionHeading
              badge="Our Commitment"
              title="Valuing responsibility and protection"
              align="center"
            />
            <p className="text-brand-dark font-light text-base md:text-lg leading-relaxed mt-4">
              Salience Foundation aligns strictly with global legal and safeguarding standards. We believe in child protection, responsible donor fund stewardship, transparent data management, and ethical community governance.
            </p>
          </div>
        </Container>
      </section>

      {/* Policy Resources Grid Section */}
      <section id="policies-grid-section" className="py-24 bg-gray-50 border-b border-gray-100">
        <Container>
          <SectionHeading
            badge="Documents"
            title="Policy resources"
            subtitle="Browse our compliance and transparency documents. Inactive files list as 'Coming Soon'."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {POLICY_CARDS.map((policy, idx) => (
              <div key={idx} className="bg-white border border-gray-100 p-8 rounded-2xl flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow duration-300">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-brand-yellow/15 flex items-center justify-center mb-6">
                    {policy.icon}
                  </div>
                  <h3 className="text-xl font-bold text-brand-black mb-3 font-heading">
                    {policy.title}
                  </h3>
                  <p className="text-brand-dark font-light text-xs md:text-sm leading-relaxed mb-6">
                    {policy.desc}
                  </p>
                </div>
                <div>
                  {policy.isComingSoon ? (
                    <span className="inline-block w-full text-center px-4 py-2.5 rounded-xl border border-gray-200 text-gray-400 text-xs font-semibold uppercase tracking-wider bg-gray-50 cursor-not-allowed">
                      Coming Soon
                    </span>
                  ) : (
                    <Button variant="secondary" className="w-full text-xs font-semibold py-2.5">
                      View Policy
                    </Button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Transparency Section */}
      <section className="py-24 border-b border-gray-50 bg-white">
        <Container>
          <SectionHeading
            badge="Structure"
            title="Transparency & Governance"
            subtitle="We maintain metrics auditing and parent council alignment at every step of our local training operations."
            align="center"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {GOVERNANCE_CARDS.map((gov, idx) => (
              <div key={idx} className="bg-white border border-gray-100 p-6 md:p-8 rounded-2xl flex flex-col shadow-sm">
                <div className="w-12 h-12 rounded-xl bg-brand-yellow/15 flex items-center justify-center mb-6">
                  {gov.icon}
                </div>
                <h4 className="font-heading font-bold text-brand-black text-sm md:text-base mb-2">
                  {gov.title}
                </h4>
                <p className="text-xs text-brand-dark font-light leading-relaxed">
                  {gov.desc}
                </p>
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
            title="Common governance queries"
            align="center"
          />
          <div className="max-w-3xl mx-auto mt-12">
            <FAQAccordion items={FAQS} />
          </div>
        </Container>
      </section>

      {/* Need Assistance Section */}
      <section className="py-24 bg-white text-center">
        <Container>
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-extrabold font-heading text-brand-black mb-4">
              Need More Information?
            </h2>
            <p className="text-brand-dark font-light text-base md:text-lg mb-8">
              If you have questions regarding any policy or organizational practice, please reach out to our team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/contact">
                <Button variant="primary">Contact Us</Button>
              </Link>
              <a href="mailto:info@saliencefoundation.org">
                <Button variant="secondary">Email Us</Button>
              </a>
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

export default PoliciesPage;
