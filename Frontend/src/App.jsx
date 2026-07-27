import React, { useLayoutEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import ProgramsPage from './pages/ProgramsPage';
import AchievementsPage from './pages/AchievementsPage';
import StudentsPage from './pages/StudentsPage';
import EventsPage from './pages/EventsPage';
import GalleryPage from './pages/GalleryPage';
import PoliciesPage from './pages/PoliciesPage';
import ContactPage from './pages/ContactPage';
import PartnerPage from './pages/PartnerPage';

/**
 * Synchronous Scroll-to-Top helper.
 * Fires in useLayoutEffect before the browser paints to prevent navbar flashes.
 */
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

/**
 * Reusable animated wrapper for clean page fades.
 */
const PageTransition = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35, ease: 'easeInOut' }}
    >
      {children}
    </motion.div>
  );
};

/**
 * Page routes wrapper with AnimatePresence support.
 */
const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageTransition><Home /></PageTransition>} />
        <Route path="/about" element={<PageTransition><AboutPage /></PageTransition>} />
        <Route path="/programs" element={<PageTransition><ProgramsPage /></PageTransition>} />
        <Route path="/achievements" element={<PageTransition><AchievementsPage /></PageTransition>} />
        <Route path="/students" element={<PageTransition><StudentsPage /></PageTransition>} />
        <Route path="/events" element={<PageTransition><EventsPage /></PageTransition>} />
        <Route path="/gallery" element={<PageTransition><GalleryPage /></PageTransition>} />
        <Route path="/policies" element={<PageTransition><PoliciesPage /></PageTransition>} />
        <Route path="/contact" element={<PageTransition><ContactPage /></PageTransition>} />
        <Route path="/partner" element={<PageTransition><PartnerPage /></PageTransition>} />
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <AnimatedRoutes />
      </Layout>
    </Router>
  );
}

export default App;
