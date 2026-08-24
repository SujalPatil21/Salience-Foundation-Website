import React from 'react';
import { motion } from 'framer-motion';
import villageCouncilImg from '../../assets/images/community_village_council.jpeg';
import GlowImage from '../ui/GlowImage';
import Container from '../ui/Container';
import SectionHeading from '../ui/SectionHeading';

/**
 * About Preview Section - Presents introduction, mission, and vision.
 */
const AboutPreview = () => {
  return (
    <section className="bg-white py-24 md:py-32 overflow-hidden border-b border-gray-50">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* Image Content - Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-5"
          >
            <GlowImage
              src={villageCouncilImg}
              alt="Salience Foundation Community & Youth"
              glowDirection="l"
              imageClassName="h-[450px] lg:h-[550px]"
            />
          </motion.div>

          {/* Text Content - Right Side */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-7 flex flex-col items-start"
          >
            <SectionHeading
              badge="Who We Are"
              title="Building bridges between dreams and realities."
              align="left"
              className="mb-8"
            />
            
            <p className="text-brand-dark font-light text-base md:text-lg leading-relaxed mb-6">
              <strong className="text-brand-black font-semibold">Salience Foundation</strong> is a Non-Profit (Section 8 Company) organization based in <strong className="text-brand-black font-semibold">Ranchi, Jharkhand</strong>, dedicated to promoting rural sporting talents and fostering an environment for artistic learning and cultural development.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full pt-4 border-t border-gray-100">
              <div>
                <h4 className="text-lg font-bold text-brand-black mb-2 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-brand-yellow" />
                  Rural Sports Talents
                </h4>
                <p className="text-sm text-brand-dark/90 leading-relaxed font-light">
                  Identifying exceptional athletes in remote regions, providing access to resources, coaching, and platforms to reach their full potential.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-bold text-brand-black mb-2 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-brand-yellow" />
                  Arts & Cultural Heritage
                </h4>
                <p className="text-sm text-brand-dark/90 leading-relaxed font-light">
                  Cultivating creative talents in music, dance, and theater while preserving cultural heritage and fostering societal harmony.
                </p>
              </div>
            </div>
          </motion.div>

        </div>
      </Container>
    </section>
  );
};

export default AboutPreview;

