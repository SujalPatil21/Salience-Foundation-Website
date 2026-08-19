import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Container from '../components/ui/Container';
import Button from '../components/ui/Button';

// Image import
import childrenImg from '../assets/images/Children.jpeg';

/**
 * Salience Foundation Returns & Refunds Policy Page.
 */
const RefundPolicyPage = () => {
  const [activeSection, setActiveSection] = useState('cancellation');

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
    { id: 'cancellation', title: '1. Cancellation & Reimbursement' },
    { id: 'conditions', title: '2. Conditions for Returns' },
    { id: 'non-returnable', title: '3. Non-Returnable Goods' },
    { id: 'returning-goods', title: '4. Returning Goods & Address' },
    { id: 'gifts', title: '5. Gifts Policy' },
    { id: 'contact-us', title: '6. Contact Us' },
  ];

  return (
    <div className="bg-white">
      
      {/* Hero Section */}
      <section className="relative h-[65vh] min-h-[480px] w-full overflow-hidden flex items-center justify-center bg-black">
        <img
          src={childrenImg}
          alt="Returns and Refunds Policy - Salience Foundation"
          className="absolute inset-0 w-full h-full object-cover opacity-45 scale-105 animate-subtle-zoom"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/55 to-black/85 z-[1]" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center flex flex-col items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center"
          >
            <span className="inline-block px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-brand-yellow border border-brand-yellow/30 bg-brand-yellow/10 rounded-full mb-5">
              Financial Transparency & Support
            </span>

            <h1 className="text-4xl md:text-6xl font-extrabold text-white font-heading tracking-tight leading-tight">
              Returns & <span className="text-brand-yellow">Refunds</span> Policy
            </h1>

            <p className="mt-4 text-base md:text-lg text-white/80 font-light max-w-2xl leading-relaxed">
              Read our 30-day cancellation rights, return eligibility, address guidelines, and reimbursement process.
            </p>

            <div className="mt-6 flex items-center gap-2 text-xs text-white/50 font-light">
              <span>30-Day Cancellation Window</span>
              <span>•</span>
              <span>Ranchi, Jharkhand, India</span>
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
                <h4 className="text-xs font-bold text-amber-900 mb-1">30-Day Guarantee</h4>
                <p className="text-xs text-amber-800 leading-relaxed font-light">
                  You are entitled to cancel your order within 30 days without giving any reason for doing so.
                </p>
              </div>
            </aside>

            {/* Policy Detailed Sections */}
            <div className="lg:col-span-8 flex flex-col gap-12 bg-white border border-gray-100 p-8 md:p-12 rounded-2xl shadow-sm">
              
              {/* Section 1 */}
              <article id="cancellation" className="scroll-mt-32">
                <h2 className="text-2xl font-bold font-heading text-brand-black mb-4">
                  1. Cancellation & Reimbursement
                </h2>
                <p className="text-brand-dark font-light leading-relaxed mb-4 text-sm md:text-base">
                  You are entitled to cancel your order within 30 days without giving any reason for doing so.
                </p>
                <p className="text-brand-dark font-light leading-relaxed mb-4 text-sm md:text-base">
                  The deadline for canceling an order is 30 days from the date you received the goods or on which a third party you have appointed, who is not the carrier, takes possession of the product delivered.
                </p>
                <p className="text-brand-dark font-light leading-relaxed mb-4 text-sm md:text-base">
                  In order to exercise your right of cancellation, you must inform us of your decision by means of a clear statement. You can inform us of your decision by e-mail at <a href="mailto:saliencefoundation@gmail.com" className="text-brand-black font-medium underline hover:text-amber-600">saliencefoundation@gmail.com</a>.
                </p>
                <div className="p-4 rounded-xl bg-gray-50 border border-gray-100">
                  <p className="text-xs md:text-sm text-brand-dark font-light leading-relaxed">
                    We will reimburse you no later than 30 days from the day on which we receive the returned goods. We will use the same means of payment as you used for the order, and you will not incur any fees for such reimbursement.
                  </p>
                </div>
              </article>

              <hr className="border-gray-100" />

              {/* Section 2 */}
              <article id="conditions" className="scroll-mt-32">
                <h2 className="text-2xl font-bold font-heading text-brand-black mb-4">
                  2. Conditions for Returns
                </h2>
                <p className="text-brand-dark font-light leading-relaxed mb-4 text-sm md:text-base">
                  In order for the goods to be eligible for a return, please make sure that:
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-brand-dark text-sm md:text-base font-light mb-4">
                  <li className="p-3 bg-gray-50 border border-gray-100 rounded-xl flex items-center gap-2.5">
                    <span className="w-2 h-2 rounded-full bg-brand-yellow flex-shrink-0" />
                    <span>The goods were purchased in the last 30 days</span>
                  </li>
                  <li className="p-3 bg-gray-50 border border-gray-100 rounded-xl flex items-center gap-2.5">
                    <span className="w-2 h-2 rounded-full bg-brand-yellow flex-shrink-0" />
                    <span>The goods are in the original packaging</span>
                  </li>
                </ul>
              </article>

              <hr className="border-gray-100" />

              {/* Section 3 */}
              <article id="non-returnable" className="scroll-mt-32">
                <h2 className="text-2xl font-bold font-heading text-brand-black mb-4">
                  3. Non-Returnable Goods
                </h2>
                <p className="text-brand-dark font-light leading-relaxed mb-4 text-sm md:text-base">
                  The following goods cannot be returned:
                </p>
                <ul className="list-disc pl-6 flex flex-col gap-2.5 text-brand-dark text-sm md:text-base font-light mb-6">
                  <li>The supply of goods made to your specifications or clearly personalized.</li>
                  <li>The supply of goods which according to their nature are not suitable to be returned, for example goods which deteriorate rapidly or where the date of expiry is over.</li>
                  <li>The supply of goods which are not suitable for return due to health protection or hygiene reasons and were unsealed after delivery.</li>
                  <li>The supply of goods which are, after delivery, according to their nature, inseparably mixed with other items.</li>
                </ul>
                <p className="text-brand-dark font-light leading-relaxed text-sm md:text-base">
                  We reserve the right to refuse returns of any merchandise that does not meet the above return conditions at our sole discretion.
                </p>
              </article>

              <hr className="border-gray-100" />

              {/* Section 4 */}
              <article id="returning-goods" className="scroll-mt-32">
                <h2 className="text-2xl font-bold font-heading text-brand-black mb-4">
                  4. Returning Goods & Address
                </h2>
                <p className="text-brand-dark font-light leading-relaxed mb-4 text-sm md:text-base">
                  You are responsible for the cost and risk of returning the goods to us. You should send the goods to the following address:
                </p>

                <div className="p-6 rounded-xl bg-amber-500/10 border border-brand-yellow/40 mb-6">
                  <span className="text-xs font-bold uppercase tracking-wider text-amber-900 block mb-1">
                    Return Dispatch Address
                  </span>
                  <p className="text-base md:text-lg font-bold font-heading text-brand-black">
                    Tau, Bundu Ranchi Jharkhand 835204
                  </p>
                </div>

                <p className="text-brand-dark font-light leading-relaxed text-sm md:text-base">
                  We cannot be held responsible for goods damaged or lost in return shipment. Therefore, we recommend an insured and trackable mail service. We are unable to issue a refund without actual receipt of the goods or proof of received return delivery.
                </p>
              </article>

              <hr className="border-gray-100" />

              {/* Section 5 */}
              <article id="gifts" className="scroll-mt-32">
                <h2 className="text-2xl font-bold font-heading text-brand-black mb-4">
                  5. Gifts Policy
                </h2>
                <p className="text-brand-dark font-light leading-relaxed mb-4 text-sm md:text-base">
                  If the goods were marked as a gift when purchased and then shipped directly to you, you'll receive a gift credit for the value of your return. Once the returned product is received, a gift certificate will be mailed to you.
                </p>
                <p className="text-brand-dark font-light leading-relaxed text-sm md:text-base">
                  If the goods weren't marked as a gift when purchased, or the gift giver had the order shipped to themselves to give it to you later, we will send the refund to the gift giver.
                </p>
              </article>

              <hr className="border-gray-100" />

              {/* Section 6 */}
              <article id="contact-us" className="scroll-mt-32">
                <h2 className="text-2xl font-bold font-heading text-brand-black mb-4">
                  6. Contact Us
                </h2>
                <p className="text-brand-dark font-light leading-relaxed mb-6 text-sm md:text-base">
                  If you have any questions about our Returns and Refunds Policy, please contact us by e-mail:
                </p>

                <div className="bg-gray-50 border border-gray-100 p-6 rounded-xl flex flex-col gap-3 text-sm">
                  <div className="flex items-center gap-3">
                    <span className="font-semibold text-brand-black w-32">Organization:</span>
                    <span className="text-brand-dark">Salience Foundation</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="font-semibold text-brand-black w-32">Email:</span>
                    <a href="mailto:saliencefoundation@gmail.com" className="text-brand-black font-medium underline hover:text-amber-600">
                      saliencefoundation@gmail.com
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="font-semibold text-brand-black w-32">Return Location:</span>
                    <span className="text-brand-dark">Tau, Bundu Ranchi Jharkhand 835204</span>
                  </div>
                </div>
              </article>

            </div>
          </div>
        </Container>
      </section>

      {/* Footer CTA */}
      <section className="py-20 bg-white text-center">
        <Container>
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl md:text-4xl font-extrabold font-heading text-brand-black mb-4">
              Need Help With an Order or Return?
            </h2>
            <p className="text-brand-dark font-light text-sm md:text-base mb-8">
              Our team is here to assist you with any questions regarding product returns, cancellations, or delivery status.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/contact">
                <Button variant="primary">Contact Us</Button>
              </Link>
              <a href="mailto:saliencefoundation@gmail.com">
                <Button variant="secondary">Email Support</Button>
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

export default RefundPolicyPage;
