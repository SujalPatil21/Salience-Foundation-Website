import React from 'react';
import { Link } from 'react-router-dom';
import { NAV_ITEMS, FOOTER_LEGAL_LINKS } from '../../constants/navigation';
import Container from '../ui/Container';
import logoImg from '../../assets/images/salience logo.png';

/**
 * Modern NGO/Corporate Footer component.
 */
const Footer = () => {
  return (
    <footer className="bg-brand-black text-white py-16 border-t border-gray-900">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          {/* Brand Info */}
          <div className="flex flex-col gap-4">
            <Link to="/" className="inline-block self-start mb-2">
              <img
                src={logoImg}
                alt="Salience Foundation Logo"
                className="h-12 w-auto object-contain"
              />
            </Link>

            <p className="text-white/60 text-sm font-light leading-relaxed">
              Bridging the gap between talent and opportunity for rural youth across India. Empowering communities through structured sports and quality education.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-4">
            <h4 className="text-white font-semibold font-heading uppercase text-sm tracking-wider">
              Quick Links
            </h4>
            <ul className="flex flex-col gap-2.5">
              {NAV_ITEMS.map((item, idx) => (
                <li key={idx}>
                  <Link
                    to={item.path}
                    className="text-white/60 hover:text-brand-yellow transition-colors duration-200 text-sm font-light"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div className="flex flex-col gap-4">
            <h4 className="text-white font-semibold font-heading uppercase text-sm tracking-wider">
              Contact Us
            </h4>
            <ul className="flex flex-col gap-4 text-sm text-white/60 font-light">
              <li className="flex items-center gap-3">
                <svg className="w-[18px] h-[18px] text-[#F3EA00] flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Headquarters: Ranchi, Jharkhand, India</span>
              </li>
              <li>
                <a 
                  href="mailto:info@saliencefoundation.org"
                  aria-label="Send an email to Salience Foundation"
                  className="flex items-center gap-3 hover:text-white transition-colors duration-[280ms] group cursor-pointer"
                >
                  <svg className="w-[18px] h-[18px] text-[#F3EA00] group-hover:text-[#F3EA00] flex-shrink-0 transition-colors duration-[280ms]" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>Email: info@saliencefoundation.org</span>
                </a>
              </li>
              <li>
                <a 
                  href="tel:+919876543210"
                  aria-label="Call Salience Foundation phone number"
                  className="flex items-center gap-3 hover:text-white transition-colors duration-[280ms] group cursor-pointer"
                >
                  <svg className="w-[18px] h-[18px] text-[#F3EA00] group-hover:text-[#F3EA00] flex-shrink-0 transition-colors duration-[280ms]" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>Phone: +91 98765 43210</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="flex flex-col gap-4">
            <h4 className="text-white font-semibold font-heading uppercase text-sm tracking-wider">
              Follow Our Journey
            </h4>
            <div className="flex gap-4">
              {['Facebook', 'Twitter', 'Instagram', 'LinkedIn'].map((platform, idx) => (
                <a
                  key={idx}
                  href={`#${platform.toLowerCase()}`}
                  className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/60 hover:text-brand-black hover:bg-brand-yellow hover:border-brand-yellow transition-all duration-300 text-xs font-semibold"
                >
                  {platform[0]}
                </a>
              ))}
            </div>
            <p className="text-white/40 text-xs mt-2 font-light">
              Registered NGO. Contributions are exempt under Section 80G.
            </p>
          </div>

        </div>

        {/* Copyright & Legal Links */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/40 font-light">
          <p>© {new Date().getFullYear()} Salience Foundation. All rights reserved.</p>
          <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6">
            {FOOTER_LEGAL_LINKS.map((legal, idx) => (
              <React.Fragment key={idx}>
                {idx > 0 && <span className="text-white/20 hidden sm:inline">•</span>}
                <Link
                  to={legal.path}
                  className="hover:text-brand-yellow transition-colors duration-200"
                >
                  {legal.label}
                </Link>
              </React.Fragment>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;

