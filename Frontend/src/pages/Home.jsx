import React from 'react';
import Hero from '../components/sections/Hero';
import AboutPreview from '../components/sections/AboutPreview';
import OurImpact from '../components/sections/OurImpact';
import ProgramsPreview from '../components/sections/ProgramsPreview';
import Achievements from '../components/sections/Achievements';
import StudentStories from '../components/sections/StudentStories';
import Events from '../components/sections/Events';
import Partners from '../components/sections/Partners';
import Gallery from '../components/sections/Gallery';
import CallToAction from '../components/sections/CallToAction';

/**
 * Homepage component aggregating all 10 section previews in sequence.
 */
const Home = () => {
  return (
    <>
      <Hero />
      <AboutPreview />
      <OurImpact />
      <ProgramsPreview />
      <Achievements />
      <StudentStories />
      <Events />
      <Partners />
      <Gallery />
      <CallToAction />
    </>
  );
};

export default Home;
