import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Container from '../components/ui/Container';
import SectionHeading from '../components/ui/SectionHeading';
import Button from '../components/ui/Button';
import { 
  GALLERY_CATEGORIES, 
  GALLERY_IMAGES, 
  FEATURED_IMAGES, 
  COMMUNITY_STORY_SECTIONS 
} from '../constants/galleryData';
import { BORDER_RADIUS, SHADOWS, TRANSITIONS } from '../constants/design';

// Hero background image
import heroImg from '../assets/images/Team.jpeg';

/**
 * Premium Gallery Page with visual filters, interactive Lightbox (with keyboard support),
 * Featured Image thumbnail swap widget, and storytelling blocks.
 */
const GalleryPage = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const [featuredIndex, setFeaturedIndex] = useState(0);

  const filteredImages = activeFilter === 'All'
    ? GALLERY_IMAGES
    : GALLERY_IMAGES.filter(img => img.category === activeFilter);

  // Keydown event listener for Lightbox navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') setLightboxIndex(null);
      if (e.key === 'ArrowRight') {
        setLightboxIndex((prev) => (prev + 1) % filteredImages.length);
      }
      if (e.key === 'ArrowLeft') {
        setLightboxIndex((prev) => (prev - 1 + filteredImages.length) % filteredImages.length);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, filteredImages]);

  const handleScrollToGallery = () => {
    const element = document.getElementById('gallery-grid-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const showNext = (e) => {
    e.stopPropagation();
    setLightboxIndex((prev) => (prev + 1) % filteredImages.length);
  };

  const showPrev = (e) => {
    e.stopPropagation();
    setLightboxIndex((prev) => (prev - 1 + filteredImages.length) % filteredImages.length);
  };

  return (
    <div className="bg-white">
      
      {/* Hero Section */}
      <section className="relative h-[100svh] w-full overflow-hidden flex items-center justify-center bg-black">
        <img
          src={heroImg}
          alt="Salience Foundation Action Gallery"
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
              Our Gallery
            </span>

            <h1 className="text-4xl md:text-6xl font-extrabold text-white font-heading tracking-tight leading-none">
              Capturing Every Step of the <span className="text-brand-yellow">Journey</span>
            </h1>

            <p className="mt-6 text-base md:text-lg text-white/80 font-light max-w-2xl leading-relaxed">
              Explore moments that reflect the passion, teamwork, leadership, and opportunities created through Salience Foundation's initiatives across rural India.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center items-center w-full sm:w-auto">
              <Button onClick={handleScrollToGallery} variant="primary">
                Explore Gallery
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

      {/* Gallery Introduction */}
      <section className="py-24 border-b border-gray-50 bg-white">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <SectionHeading
              badge="Visual Stories"
              title="Every photograph holds a purpose"
              align="center"
            />
            <p className="text-brand-dark font-light text-base md:text-lg leading-relaxed mt-4">
              Our gallery acts as an audited footprint, logging village scouting cups, girls soccer clinics, parent assemblies, and computer tutorial hours. Explore the authentic moments captured on the pitch.
            </p>
          </div>
        </Container>
      </section>

      {/* Featured Gallery Section */}
      <section className="py-24 bg-gray-50 border-b border-gray-100">
        <Container>
          <SectionHeading
            badge="Featured Highlight"
            title="Focusing on raw athletic drive"
            subtitle="Click thumbnails below to explore select high-impact program operations."
            align="center"
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-12 items-start">
            
            {/* Left side: Large featured frame */}
            <div className="lg:col-span-8 bg-white p-4 rounded-2xl border border-gray-100 shadow-sm">
              <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl bg-gray-100">
                <img
                  src={FEATURED_IMAGES[featuredIndex].src}
                  alt={FEATURED_IMAGES[featuredIndex].title}
                  className="w-full h-full object-cover transition-opacity duration-300"
                />
              </div>
            </div>

            {/* Right side: Description & Thumbnails */}
            <div className="lg:col-span-4 flex flex-col h-full justify-between gap-6">
              <div>
                <span className="text-yellow-600 text-xs font-bold uppercase tracking-widest block mb-2">
                  Active Highlight
                </span>
                <h3 className="text-2xl font-bold text-brand-black mb-3 font-heading">
                  {FEATURED_IMAGES[featuredIndex].title}
                </h3>
                <p className="text-brand-dark font-light text-sm leading-relaxed">
                  {FEATURED_IMAGES[featuredIndex].desc || 'A capture of Salience scholars engaging in collaborative coaching drills, learning teamwork, and physical fitness guidelines.'}
                </p>
              </div>

              {/* Thumbnails grid */}
              <div className="grid grid-cols-4 gap-4 mt-4">
                {FEATURED_IMAGES.map((thumb, idx) => (
                  <button
                    key={idx}
                    onClick={() => setFeaturedIndex(idx)}
                    className={`relative aspect-square rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                      featuredIndex === idx ? 'border-brand-yellow scale-95 shadow-md' : 'border-transparent hover:border-gray-300'
                    }`}
                  >
                    <img
                      src={thumb.src}
                      alt={thumb.title}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

          </div>
        </Container>
      </section>

      {/* Gallery Grid Section */}
      <section id="gallery-grid-section" className="py-24 border-b border-gray-50 bg-white">
        <Container>
          <SectionHeading
            badge="Audited Media"
            title="Moments from the field"
            align="center"
            className="mb-12"
          />

          {/* Filter Bar */}
          <div className="flex flex-wrap justify-center gap-3 mb-16">
            {GALLERY_CATEGORIES.map((cat, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setActiveFilter(cat);
                  setLightboxIndex(null);
                }}
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

          {/* Responsive Gallery Grid */}
          <motion.div 
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence mode="popLayout">
              {filteredImages.map((img, idx) => (
                <motion.div
                  key={img.src}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  onClick={() => openLightbox(idx)}
                  className={`relative overflow-hidden group aspect-[4/3] cursor-pointer ${BORDER_RADIUS.card} ${SHADOWS.card}`}
                >
                  <img
                    src={img.src}
                    alt={img.title}
                    loading="lazy"
                    className={`w-full h-full object-cover group-hover:scale-105 ${TRANSITIONS.slow}`}
                  />
                  {/* Caption Overlay on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-black/90 via-brand-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <span className="text-yellow-400 text-[10px] font-bold uppercase tracking-wider mb-1">
                      {img.category}
                    </span>
                    <h4 className="text-white text-lg font-bold font-heading">
                      {img.title}
                    </h4>
                    <p className="text-white/70 text-xs font-light leading-relaxed mt-1 line-clamp-2">
                      {img.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </Container>
      </section>

      {/* Community Through Sport Story Section */}
      <section className="py-24 bg-gray-50 border-b border-gray-100">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Story Text */}
            <div className="lg:col-span-6">
              <SectionHeading
                badge="Values & Impact"
                title="Community through sport"
                align="left"
                className="mb-8"
              />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {COMMUNITY_STORY_SECTIONS.map((story, idx) => (
                  <div key={idx} className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                    <h4 className="font-heading font-bold text-brand-black text-sm md:text-base mb-2">
                      {story.title}
                    </h4>
                    <p className="text-xs text-brand-dark leading-relaxed font-light">
                      {story.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Side Image */}
            <div className="lg:col-span-6">
              <img
                src={heroImg}
                alt="Community story soccer drills"
                className="rounded-2xl shadow-xl w-full h-[400px] object-cover grayscale-[10%]"
              />
            </div>

          </div>
        </Container>
      </section>

      {/* Final Call to Action */}
      <section className="py-24 text-center">
        <Container>
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-extrabold font-heading text-brand-black mb-4">
              Every Picture Represents a New Opportunity
            </h2>
            <p className="text-brand-dark font-light text-base md:text-lg mb-8">
              Help us create more stories of hope, leadership, and opportunity across rural India.
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

      {/* Fullscreen Lightbox Modal */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
            className="fixed inset-0 z-50 bg-black/95 flex flex-col items-center justify-center p-4 cursor-pointer"
          >
            {/* Close button */}
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 text-white hover:text-brand-yellow focus:outline-none p-2 text-2xl"
            >
              ✕
            </button>

            {/* Left Nav */}
            <button
              onClick={showPrev}
              className="absolute left-6 text-white hover:text-brand-yellow focus:outline-none p-3 text-4xl hidden sm:block"
            >
              ‹
            </button>

            {/* Image frame */}
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl max-h-[75vh] w-full h-full flex flex-col items-center justify-center cursor-default"
            >
              <img
                src={filteredImages[lightboxIndex].src}
                alt={filteredImages[lightboxIndex].title}
                className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
              />
              <div className="absolute bottom-[-60px] left-0 right-0 text-center text-white">
                <h4 className="font-heading font-extrabold text-lg">{filteredImages[lightboxIndex].title}</h4>
                <p className="text-xs text-brand-yellow uppercase tracking-wider mt-1">{filteredImages[lightboxIndex].category}</p>
                <p className="text-xs text-white/60 font-light mt-1 max-w-md mx-auto leading-relaxed">{filteredImages[lightboxIndex].desc}</p>
              </div>
            </motion.div>

            {/* Right Nav */}
            <button
              onClick={showNext}
              className="absolute right-6 text-white hover:text-brand-yellow focus:outline-none p-3 text-4xl hidden sm:block"
            >
              ›
            </button>
          </motion.div>
        )}
      </AnimatePresence>

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

export default GalleryPage;
