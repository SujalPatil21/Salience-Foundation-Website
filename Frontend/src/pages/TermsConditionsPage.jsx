import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Container from '../components/ui/Container';
import Button from '../components/ui/Button';

// Image import
import mudImg from '../assets/images/Mud.jpeg';

/**
 * Salience Foundation Terms and Conditions Page.
 */
const TermsConditionsPage = () => {
  const [activeSection, setActiveSection] = useState('welcome');

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
    { id: 'welcome', title: '1. Welcome & Acceptance' },
    { id: 'cookies', title: '2. Cookies Policy' },
    { id: 'license', title: '3. License & IP Rights' },
    { id: 'comments', title: '4. User Comments' },
    { id: 'hyperlinking', title: '5. Hyperlinking to Content' },
    { id: 'content-liability', title: '6. Content Liability' },
    { id: 'reservation-rights', title: '7. Reservation of Rights' },
    { id: 'removal-links', title: '8. Removal of Links' },
    { id: 'disclaimer', title: '9. Disclaimer' },
  ];

  return (
    <div className="bg-white">
      
      {/* Hero Section */}
      <section className="relative h-[65vh] min-h-[480px] w-full overflow-hidden flex items-center justify-center bg-black">
        <img
          src={mudImg}
          alt="Terms and Conditions - Salience Foundation"
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
              Rules & Regulations
            </span>

            <h1 className="text-4xl md:text-6xl font-extrabold text-white font-heading tracking-tight leading-tight">
              Terms & <span className="text-brand-yellow">Conditions</span>
            </h1>

            <p className="mt-4 text-base md:text-lg text-white/80 font-light max-w-2xl leading-relaxed">
              Rules and regulations governing the use of Salience Foundation's official website.
            </p>

            <div className="mt-6 flex items-center gap-2 text-xs text-white/50 font-light">
              <span>https://www.saliencefoundation.org.in</span>
              <span>•</span>
              <span>Effective Terms</span>
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

              <div className="mt-8 p-4 rounded-xl bg-gray-50 border border-gray-200">
                <h4 className="text-xs font-bold text-brand-black mb-1">Official Website</h4>
                <p className="text-xs text-brand-dark leading-relaxed font-light">
                  Salience Foundation Website is located at <a href="https://www.saliencefoundation.org.in" target="_blank" rel="noopener noreferrer" className="underline font-medium">saliencefoundation.org.in</a>.
                </p>
              </div>
            </aside>

            {/* Terms Detailed Sections */}
            <div className="lg:col-span-8 flex flex-col gap-12 bg-white border border-gray-100 p-8 md:p-12 rounded-2xl shadow-sm">
              
              {/* Section 1 */}
              <article id="welcome" className="scroll-mt-32">
                <h2 className="text-2xl font-bold font-heading text-brand-black mb-4">
                  1. Welcome & Acceptance of Terms
                </h2>
                <p className="text-brand-dark font-light leading-relaxed mb-4 text-sm md:text-base">
                  <strong>Welcome to Salience Foundation!</strong>
                </p>
                <p className="text-brand-dark font-light leading-relaxed mb-4 text-sm md:text-base">
                  These terms and conditions outline the rules and regulations for the use of Salience Foundation's Website, located at <a href="https://www.saliencefoundation.org.in" target="_blank" rel="noopener noreferrer" className="text-brand-black font-medium underline">https://www.saliencefoundation.org.in</a>.
                </p>
                <p className="text-brand-dark font-light leading-relaxed text-sm md:text-base">
                  By accessing this website, we assume you accept these terms and conditions. Do not continue to use Salience Foundation if you do not agree to take all of the terms and conditions stated on this page.
                </p>
              </article>

              <hr className="border-gray-100" />

              {/* Section 2 */}
              <article id="cookies" className="scroll-mt-32">
                <h2 className="text-2xl font-bold font-heading text-brand-black mb-4">
                  2. Cookies
                </h2>
                <p className="text-brand-dark font-light leading-relaxed mb-4 text-sm md:text-base">
                  The website uses cookies to help personalize your online experience. By accessing Salience Foundation, you agreed to use the required cookies.
                </p>
                <p className="text-brand-dark font-light leading-relaxed mb-4 text-sm md:text-base">
                  A cookie is a text file that is placed on your hard disk by a web page server. Cookies cannot be used to run programs or deliver viruses to your computer. Cookies are uniquely assigned to you and can only be read by a web server in the domain that issued the cookie to you.
                </p>
                <p className="text-brand-dark font-light leading-relaxed text-sm md:text-base">
                  We may use cookies to collect, store, and track information for statistical or marketing purposes to operate our website. You have the ability to accept or decline optional Cookies. There are some required Cookies that are necessary for the operation of our website. These cookies do not require your consent as they always work. Please keep in mind that by accepting required Cookies, you also accept third-party Cookies, which might be used via third-party provided services if you use such services on our website, for example, a video display window provided by third parties and integrated into our website.
                </p>
              </article>

              <hr className="border-gray-100" />

              {/* Section 3 */}
              <article id="license" className="scroll-mt-32">
                <h2 className="text-2xl font-bold font-heading text-brand-black mb-4">
                  3. License
                </h2>
                <p className="text-brand-dark font-light leading-relaxed mb-4 text-sm md:text-base">
                  Unless otherwise stated, Salience Foundation and/or its licensors own the intellectual property rights for all material on Salience Foundation. All intellectual property rights are reserved. You may access this from Salience Foundation for your own personal use subjected to restrictions set in these terms and conditions.
                </p>
                <p className="text-brand-dark font-light leading-relaxed mb-3 text-sm md:text-base">
                  You must not:
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-brand-dark text-sm md:text-base font-light mb-4">
                  <li className="p-3 bg-gray-50 border border-gray-100 rounded-xl flex items-center gap-2.5">
                    <span className="w-2 h-2 rounded-full bg-red-500 flex-shrink-0" />
                    <span>Copy or republish material from Salience Foundation</span>
                  </li>
                  <li className="p-3 bg-gray-50 border border-gray-100 rounded-xl flex items-center gap-2.5">
                    <span className="w-2 h-2 rounded-full bg-red-500 flex-shrink-0" />
                    <span>Sell, rent, or sub-license material from Salience Foundation</span>
                  </li>
                  <li className="p-3 bg-gray-50 border border-gray-100 rounded-xl flex items-center gap-2.5">
                    <span className="w-2 h-2 rounded-full bg-red-500 flex-shrink-0" />
                    <span>Reproduce, duplicate or copy material from Salience Foundation</span>
                  </li>
                  <li className="p-3 bg-gray-50 border border-gray-100 rounded-xl flex items-center gap-2.5">
                    <span className="w-2 h-2 rounded-full bg-red-500 flex-shrink-0" />
                    <span>Redistribute content from Salience Foundation</span>
                  </li>
                </ul>
                <p className="text-brand-dark font-light leading-relaxed text-sm md:text-base">
                  This Agreement shall begin on the date hereof.
                </p>
              </article>

              <hr className="border-gray-100" />

              {/* Section 4 */}
              <article id="comments" className="scroll-mt-32">
                <h2 className="text-2xl font-bold font-heading text-brand-black mb-4">
                  4. User Comments
                </h2>
                <p className="text-brand-dark font-light leading-relaxed mb-4 text-sm md:text-base">
                  Parts of this website offer users an opportunity to post and exchange opinions and information in certain areas of the website. Salience Foundation does not filter, edit, publish or review Comments before their presence on the website. Comments do not reflect the views and opinions of Salience Foundation, its agents, and/or affiliates. Comments reflect the views and opinions of the person who posts their views and opinions. To the extent permitted by applicable laws, Salience Foundation shall not be liable for the Comments or any liability, damages, or expenses caused and/or suffered as a result of any use of and/or posting of and/or appearance of the Comments on this website.
                </p>
                <p className="text-brand-dark font-light leading-relaxed mb-4 text-sm md:text-base">
                  Salience Foundation reserves the right to monitor all Comments and remove any Comments that can be considered inappropriate, offensive, or causes breach of these Terms and Conditions.
                </p>
                <p className="text-brand-dark font-light leading-relaxed mb-3 text-sm md:text-base">
                  You warrant and represent that:
                </p>
                <ul className="list-disc pl-6 flex flex-col gap-2 text-brand-dark text-sm md:text-base font-light mb-4">
                  <li>You are entitled to post the Comments on our website and have all necessary licenses and consents to do so;</li>
                  <li>The Comments do not invade any intellectual property right, including without limitation copyright, patent, or trademark of any third party;</li>
                  <li>The Comments do not contain any defamatory, libelous, offensive, indecent, or otherwise unlawful material, which is an invasion of privacy;</li>
                  <li>The Comments will not be used to solicit or promote business or custom or present commercial activities or unlawful activity.</li>
                </ul>
                <p className="text-brand-dark font-light leading-relaxed text-sm md:text-base">
                  You hereby grant Salience Foundation a non-exclusive license to use, reproduce, edit and authorize others to use, reproduce and edit any of your Comments in any and all forms, formats, or media.
                </p>
              </article>

              <hr className="border-gray-100" />

              {/* Section 5 */}
              <article id="hyperlinking" className="scroll-mt-32">
                <h2 className="text-2xl font-bold font-heading text-brand-black mb-4">
                  5. Hyperlinking to our Content
                </h2>
                <p className="text-brand-dark font-light leading-relaxed mb-3 text-sm md:text-base">
                  The following organizations may link to our Website without prior written approval:
                </p>
                <ul className="list-disc pl-6 flex flex-col gap-1.5 text-brand-dark text-sm md:text-base font-light mb-4">
                  <li>Government agencies;</li>
                  <li>Search engines;</li>
                  <li>News organizations;</li>
                  <li>Online directory distributors may link to our Website in the same manner as they hyperlink to the Websites of other listed businesses; and</li>
                  <li>System-wide Accredited Businesses except soliciting non-profit organizations, charity shopping malls, and charity fundraising groups which may not hyperlink to our Web site.</li>
                </ul>
                <p className="text-brand-dark font-light leading-relaxed mb-4 text-sm md:text-base">
                  These organizations may link to our home page, to publications, or to other Website information so long as the link: (a) is not in any way deceptive; (b) does not falsely imply sponsorship, endorsement, or approval of the linking party and its products and/or services; and (c) fits within the context of the linking party's site.
                </p>
                <p className="text-brand-dark font-light leading-relaxed mb-3 text-sm md:text-base">
                  We may consider and approve other link requests from the following types of organizations:
                </p>
                <ul className="list-disc pl-6 flex flex-col gap-1.5 text-brand-dark text-sm md:text-base font-light mb-4">
                  <li>Commonly-known consumer and/or business information sources;</li>
                  <li>Dot.com community sites;</li>
                  <li>Associations or other groups representing charities;</li>
                  <li>Online directory distributors;</li>
                  <li>Internet portals;</li>
                  <li>Accounting, law, and consulting firms; and</li>
                  <li>Educational institutions and trade associations.</li>
                </ul>
                <p className="text-brand-dark font-light leading-relaxed mb-4 text-sm md:text-base">
                  We will approve link requests from these organizations if we decide that: (a) the link would not make us look unfavorably to ourselves or to our accredited businesses; (b) the organization does not have any negative records with us; (c) the benefit to us from the visibility of the hyperlink compensates the absence of Salience Foundation; and (d) the link is in the context of general resource information.
                </p>
                <p className="text-brand-dark font-light leading-relaxed mb-4 text-sm md:text-base">
                  These organizations may link to our home page so long as the link: (a) is not in any way deceptive; (b) does not falsely imply sponsorship, endorsement, or approval of the linking party and its products or services; and (c) fits within the context of the linking party's site.
                </p>
                <p className="text-brand-dark font-light leading-relaxed mb-4 text-sm md:text-base">
                  If you are one of the organizations listed in paragraph 2 above and are interested in linking to our website, you must inform us by sending an e-mail to Salience Foundation. Please include your name, your organization name, contact information as well as the URL of your site, a list of any URLs from which you intend to link to our Website, and a list of the URLs on our site to which you would like to link. Wait 2-3 weeks for a response.
                </p>
                <p className="text-brand-dark font-light leading-relaxed mb-3 text-sm md:text-base">
                  Approved organizations may hyperlink to our Website as follows:
                </p>
                <ul className="list-disc pl-6 flex flex-col gap-1.5 text-brand-dark text-sm md:text-base font-light mb-4">
                  <li>By use of our corporate name; or</li>
                  <li>By use of the uniform resource locator being linked to; or</li>
                  <li>Using any other description of our Website being linked to that makes sense within the context and format of content on the linking party's site.</li>
                </ul>
                <p className="text-brand-dark font-light leading-relaxed text-sm md:text-base">
                  No use of Salience Foundation's logo or other artwork will be allowed for linking absent a trademark license agreement.
                </p>
              </article>

              <hr className="border-gray-100" />

              {/* Section 6 */}
              <article id="content-liability" className="scroll-mt-32">
                <h2 className="text-2xl font-bold font-heading text-brand-black mb-4">
                  6. Content Liability
                </h2>
                <p className="text-brand-dark font-light leading-relaxed text-sm md:text-base">
                  We shall not be held responsible for any content that appears on your Website. You agree to protect and defend us against all claims that are raised on your Website. No link(s) should appear on any Website that may be interpreted as libelous, obscene, or criminal, or which infringes, otherwise violates, or advocates the infringement or other violation of, any third party rights.
                </p>
              </article>

              <hr className="border-gray-100" />

              {/* Section 7 */}
              <article id="reservation-rights" className="scroll-mt-32">
                <h2 className="text-2xl font-bold font-heading text-brand-black mb-4">
                  7. Reservation of Rights
                </h2>
                <p className="text-brand-dark font-light leading-relaxed text-sm md:text-base">
                  We reserve the right to request that you remove all links or any particular link to our Website. You approve to immediately remove all links to our Website upon request. We also reserve the right to amend these terms and conditions and its linking policy at any time. By continuously linking to our Website, you agree to be bound to and follow these linking terms and conditions.
                </p>
              </article>

              <hr className="border-gray-100" />

              {/* Section 8 */}
              <article id="removal-links" className="scroll-mt-32">
                <h2 className="text-2xl font-bold font-heading text-brand-black mb-4">
                  8. Removal of links from our website
                </h2>
                <p className="text-brand-dark font-light leading-relaxed mb-4 text-sm md:text-base">
                  If you find any link on our Website that is offensive for any reason, you are free to contact and inform us at any moment. We will consider requests to remove links, but we are not obligated to or so or to respond to you directly.
                </p>
                <p className="text-brand-dark font-light leading-relaxed text-sm md:text-base">
                  We do not ensure that the information on this website is correct. We do not warrant its completeness or accuracy, nor do we promise to ensure that the website remains available or that the material on the website is kept up to date.
                </p>
              </article>

              <hr className="border-gray-100" />

              {/* Section 9 */}
              <article id="disclaimer" className="scroll-mt-32">
                <h2 className="text-2xl font-bold font-heading text-brand-black mb-4">
                  9. Disclaimer
                </h2>
                <p className="text-brand-dark font-light leading-relaxed mb-4 text-sm md:text-base">
                  To the maximum extent permitted by applicable law, we exclude all representations, warranties, and conditions relating to our website and the use of this website. Nothing in this disclaimer will:
                </p>
                <ul className="list-disc pl-6 flex flex-col gap-2 text-brand-dark text-sm md:text-base font-light mb-4">
                  <li>Limit or exclude our or your liability for death or personal injury;</li>
                  <li>Limit or exclude our or your liability for fraud or fraudulent misrepresentation;</li>
                  <li>Limit any of our or your liabilities in any way that is not permitted under applicable law; or</li>
                  <li>Exclude any of our or your liabilities that may not be excluded under applicable law.</li>
                </ul>
                <p className="text-brand-dark font-light leading-relaxed mb-4 text-sm md:text-base">
                  The limitations and prohibitions of liability set in this Section and elsewhere in this disclaimer: (a) are subject to the preceding paragraph; and (b) govern all liabilities arising under the disclaimer, including liabilities arising in contract, in tort, and for breach of statutory duty.
                </p>
                <div className="p-4 rounded-xl bg-gray-50 border border-gray-100">
                  <p className="text-xs md:text-sm text-brand-dark font-light leading-relaxed">
                    As long as the website and the information and services on the website are provided free of charge, we will not be liable for any loss or damage of any nature.
                  </p>
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
              Questions Regarding Our Terms?
            </h2>
            <p className="text-brand-dark font-light text-sm md:text-base mb-8">
              Reach out to Salience Foundation for any inquiries regarding our terms, partnership guidelines, or linking permissions.
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

export default TermsConditionsPage;
