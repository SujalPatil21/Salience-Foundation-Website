import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Container from '../components/ui/Container';
import Button from '../components/ui/Button';

// Image import
import communityImg from '../assets/images/Community.jpeg';

/**
 * Salience Foundation Privacy Policy Page.
 */
const PrivacyPolicyPage = () => {
  const [activeSection, setActiveSection] = useState('overview');

  const scrollToSection = (id) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const sections = [
    { id: 'overview', title: '1. Overview' },
    { id: 'personal-info', title: '2. Personal Information We Collect' },
    { id: 'why-process', title: '3. Why Do We Process Your Data?' },
    { id: 'your-rights', title: '4. Your Rights' },
    { id: 'links-other-sites', title: '5. Links to Other Websites' },
    { id: 'information-security', title: '6. Information Security' },
    { id: 'legal-disclosure', title: '7. Legal Disclosure' },
    { id: 'contact-information', title: '8. Contact Information' },
  ];

  return (
    <div className="bg-white">
      
      {/* Hero Section */}
      <section className="relative h-[65vh] min-h-[480px] w-full overflow-hidden flex items-center justify-center bg-black">
        <img
          src={communityImg}
          alt="Privacy Policy - Salience Foundation"
          className="absolute inset-0 w-full h-full object-cover opacity-45 scale-105 animate-subtle-zoom"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80 z-[1]" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center flex flex-col items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center"
          >
            <span className="inline-block px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-brand-yellow border border-brand-yellow/30 bg-brand-yellow/10 rounded-full mb-5">
              Legal & Transparency
            </span>

            <h1 className="text-4xl md:text-6xl font-extrabold text-white font-heading tracking-tight leading-tight">
              Privacy <span className="text-brand-yellow">Policy</span>
            </h1>

            <p className="mt-4 text-base md:text-lg text-white/80 font-light max-w-2xl leading-relaxed">
              Learn how Salience Foundation collects, processes, and protects your personal data when using our website and services.
            </p>

            <div className="mt-6 flex items-center gap-2 text-xs text-white/50 font-light">
              <span>Salience Foundation</span>
              <span>•</span>
              <span>Data Controller</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content Area with Sticky Sidebar */}
      <section className="py-16 md:py-24 bg-gray-50 border-b border-gray-100">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Table of Contents - Desktop Sticky Sidebar */}
            <aside className="lg:col-span-4 sticky top-28 bg-white border border-gray-100 p-6 rounded-2xl shadow-sm hidden lg:block">
              <h3 className="text-sm font-bold uppercase tracking-wider font-heading text-brand-black mb-4 pb-3 border-b border-gray-100">
                Contents
              </h3>
              <nav className="flex flex-col gap-1.5">
                {sections.map((sec) => (
                  <button
                    key={sec.id}
                    onClick={() => scrollToSection(sec.id)}
                    className={`text-left text-xs md:text-sm py-2 px-3 rounded-lg transition-all duration-200 ${
                      activeSection === sec.id
                        ? 'bg-brand-yellow text-brand-black font-semibold shadow-xs'
                        : 'text-brand-dark hover:bg-gray-50 hover:text-brand-black font-normal'
                    }`}
                  >
                    {sec.title}
                  </button>
                ))}
              </nav>

              <div className="mt-8 p-4 rounded-xl bg-amber-50 border border-amber-100">
                <h4 className="text-xs font-bold text-amber-900 mb-1">Confidentiality Guarantee</h4>
                <p className="text-xs text-amber-800 leading-relaxed font-light">
                  We take care of your personal data and undertake to guarantee its confidentiality and security.
                </p>
              </div>
            </aside>

            {/* Policy Detailed Sections */}
            <div className="lg:col-span-8 flex flex-col gap-12 bg-white border border-gray-100 p-8 md:p-12 rounded-2xl shadow-sm">
              
              {/* Section 1 */}
              <article id="overview" className="scroll-mt-32">
                <h2 className="text-2xl font-bold font-heading text-brand-black mb-4">
                  1. Overview
                </h2>
                <p className="text-brand-dark font-light leading-relaxed mb-4 text-sm md:text-base">
                  Salience Foundation website is owned by Salience Foundation, which is a data controller of your personal data.
                </p>
                <p className="text-brand-dark font-light leading-relaxed mb-4 text-sm md:text-base">
                  We have adopted this Privacy Policy, which determines how we are processing the information collected by Salience Foundation, which also provides the reasons why we must collect certain personal data about you. Therefore, you must read this Privacy Policy before using Salience Foundation website.
                </p>
                <p className="text-brand-dark font-light leading-relaxed text-sm md:text-base">
                  We take care of your personal data and undertake to guarantee its confidentiality and security.
                </p>
              </article>

              <hr className="border-gray-100" />

              {/* Section 2 */}
              <article id="personal-info" className="scroll-mt-32">
                <h2 className="text-2xl font-bold font-heading text-brand-black mb-4">
                  2. Personal Information We Collect
                </h2>
                <p className="text-brand-dark font-light leading-relaxed mb-4 text-sm md:text-base">
                  When you visit the Salience Foundation, we automatically collect certain information about your device, including information about your web browser, IP address, time zone, and some of the installed cookies on your device. Additionally, as you browse the Site, we collect information about the individual web pages or products you view, what websites or search terms referred you to the Site, and how you interact with the Site. We refer to this automatically-collected information as “Device Information.”
                </p>
                <p className="text-brand-dark font-light leading-relaxed text-sm md:text-base">
                  Moreover, we might collect the personal data you provide to us (including but not limited to Name, Surname, Address, payment information, etc.) during registration to be able to fulfill the agreement.
                </p>
              </article>

              <hr className="border-gray-100" />

              {/* Section 3 */}
              <article id="why-process" className="scroll-mt-32">
                <h2 className="text-2xl font-bold font-heading text-brand-black mb-4">
                  3. Why Do We Process Your Data?
                </h2>
                <p className="text-brand-dark font-light leading-relaxed mb-4 text-sm md:text-base">
                  Our top priority is customer data security, and, as such, we may process only minimal user data, only as much as it is absolutely necessary to maintain the website. Information collected automatically is used only to identify potential cases of abuse and establish statistical information regarding website usage. This statistical information is not otherwise aggregated in such a way that it would identify any particular user of the system.
                </p>
                <p className="text-brand-dark font-light leading-relaxed mb-4 text-sm md:text-base">
                  You can visit the website without telling us who you are or revealing any information, by which someone could identify you as a specific, identifiable individual. If, however, you wish to use some of the website’s features, or you wish to receive our newsletter or provide other details by filling a form, you may provide personal data to us, such as your email, first name, last name, city of residence, organization, telephone number.
                </p>
                <p className="text-brand-dark font-light leading-relaxed text-sm md:text-base">
                  You can choose not to provide us with your personal data, but then you may not be able to take advantage of some of the website’s features. For example, you won’t be able to receive our Newsletter or contact us directly from the website. Users who are uncertain about what information is mandatory are welcome to contact us via <a href="mailto:saliencefoundation@gmail.com" className="text-brand-black font-medium underline hover:text-amber-600">saliencefoundation@gmail.com</a>.
                </p>
              </article>

              <hr className="border-gray-100" />

              {/* Section 4 */}
              <article id="your-rights" className="scroll-mt-32">
                <h2 className="text-2xl font-bold font-heading text-brand-black mb-4">
                  4. Your Rights
                </h2>
                <p className="text-brand-dark font-light leading-relaxed mb-4 text-sm md:text-base">
                  If you are an Indian resident, you have the following rights related to your personal data:
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-brand-dark text-sm md:text-base font-light mb-6">
                  <li className="p-3 bg-gray-50 border border-gray-100 rounded-xl flex items-center gap-2.5">
                    <span className="w-2 h-2 rounded-full bg-brand-yellow flex-shrink-0" />
                    <span>The right to be informed.</span>
                  </li>
                  <li className="p-3 bg-gray-50 border border-gray-100 rounded-xl flex items-center gap-2.5">
                    <span className="w-2 h-2 rounded-full bg-brand-yellow flex-shrink-0" />
                    <span>The right of access.</span>
                  </li>
                  <li className="p-3 bg-gray-50 border border-gray-100 rounded-xl flex items-center gap-2.5">
                    <span className="w-2 h-2 rounded-full bg-brand-yellow flex-shrink-0" />
                    <span>The right to rectification.</span>
                  </li>
                  <li className="p-3 bg-gray-50 border border-gray-100 rounded-xl flex items-center gap-2.5">
                    <span className="w-2 h-2 rounded-full bg-brand-yellow flex-shrink-0" />
                    <span>The right to erasure.</span>
                  </li>
                  <li className="p-3 bg-gray-50 border border-gray-100 rounded-xl flex items-center gap-2.5">
                    <span className="w-2 h-2 rounded-full bg-brand-yellow flex-shrink-0" />
                    <span>The right to restrict processing.</span>
                  </li>
                  <li className="p-3 bg-gray-50 border border-gray-100 rounded-xl flex items-center gap-2.5">
                    <span className="w-2 h-2 rounded-full bg-brand-yellow flex-shrink-0" />
                    <span>The right to data portability.</span>
                  </li>
                  <li className="p-3 bg-gray-50 border border-gray-100 rounded-xl flex items-center gap-2.5">
                    <span className="w-2 h-2 rounded-full bg-brand-yellow flex-shrink-0" />
                    <span>The right to object.</span>
                  </li>
                  <li className="p-3 bg-gray-50 border border-gray-100 rounded-xl flex items-center gap-2.5">
                    <span className="w-2 h-2 rounded-full bg-brand-yellow flex-shrink-0" />
                    <span>Rights in relation to automated decision-making and profiling.</span>
                  </li>
                </ul>
                <p className="text-brand-dark font-light leading-relaxed mb-4 text-sm md:text-base">
                  If you would like to exercise this right, please contact us through the contact information below.
                </p>
                <p className="text-brand-dark font-light leading-relaxed text-sm md:text-base">
                  Additionally, if you are an Indian resident, we note that we are processing your information in order to fulfill contracts we might have with you (for example, if you make an order through the Site), or otherwise to pursue our legitimate business interests listed above. Additionally, please note that your information might be transferred outside of Europe, including Canada and the United States.
                </p>
              </article>

              <hr className="border-gray-100" />

              {/* Section 5 */}
              <article id="links-other-sites" className="scroll-mt-32">
                <h2 className="text-2xl font-bold font-heading text-brand-black mb-4">
                  5. Links to Other Websites
                </h2>
                <p className="text-brand-dark font-light leading-relaxed text-sm md:text-base">
                  Our website may contain links to other websites that are not owned or controlled by us. Please be aware that we are not responsible for such other websites or third parties' privacy practices. We encourage you to be aware when you leave our website and read the privacy statements of each website that may collect personal information.
                </p>
              </article>

              <hr className="border-gray-100" />

              {/* Section 6 */}
              <article id="information-security" className="scroll-mt-32">
                <h2 className="text-2xl font-bold font-heading text-brand-black mb-4">
                  6. Information Security
                </h2>
                <p className="text-brand-dark font-light leading-relaxed text-sm md:text-base">
                  We secure information you provide on computer servers in a controlled, secure environment, protected from unauthorized access, use, or disclosure. We keep reasonable administrative, technical, and physical safeguards to protect against unauthorized access, use, modification, and personal data disclosure in its control and custody. However, no data transmission over the Internet or wireless network can be guaranteed.
                </p>
              </article>

              <hr className="border-gray-100" />

              {/* Section 7 */}
              <article id="legal-disclosure" className="scroll-mt-32">
                <h2 className="text-2xl font-bold font-heading text-brand-black mb-4">
                  7. Legal Disclosure
                </h2>
                <p className="text-brand-dark font-light leading-relaxed text-sm md:text-base">
                  We will disclose any information we collect, use or receive if required or permitted by law, such as to comply with a subpoena or similar legal process, and when we believe in good faith that disclosure is necessary to protect our rights, protect your safety or the safety of others, investigate fraud, or respond to a government request.
                </p>
              </article>

              <hr className="border-gray-100" />

              {/* Section 8 */}
              <article id="contact-information" className="scroll-mt-32">
                <h2 className="text-2xl font-bold font-heading text-brand-black mb-4">
                  8. Contact Information
                </h2>
                <p className="text-brand-dark font-light leading-relaxed mb-6 text-sm md:text-base">
                  If you would like to contact us to understand more about this Policy or wish to contact us concerning any matter relating to individual rights and your Personal Information, you may send an email to:
                </p>

                <div className="bg-gray-50 border border-gray-100 p-6 rounded-xl flex flex-col gap-3 text-sm">
                  <div className="flex items-center gap-3">
                    <span className="font-semibold text-brand-black w-32">Entity:</span>
                    <span className="text-brand-dark">Salience Foundation</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="font-semibold text-brand-black w-32">Email:</span>
                    <a href="mailto:saliencefoundation@gmail.com" className="text-brand-black font-medium underline hover:text-amber-600">
                      saliencefoundation@gmail.com
                    </a>
                  </div>
                </div>
              </article>

            </div>
          </div>
        </Container>
      </section>

      {/* Need Assistance Section */}
      <section className="py-20 bg-white text-center">
        <Container>
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl md:text-4xl font-extrabold font-heading text-brand-black mb-4">
              Have Questions About Our Policies?
            </h2>
            <p className="text-brand-dark font-light text-sm md:text-base mb-8">
              Feel free to contact us regarding any questions about our privacy policies or data protection practices.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/contact">
                <Button variant="primary">Contact Us</Button>
              </Link>
              <a href="mailto:saliencefoundation@gmail.com">
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

export default PrivacyPolicyPage;
