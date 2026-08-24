import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Container from '../ui/Container';
import SectionHeading from '../ui/SectionHeading';
import Button from '../ui/Button';
import { BORDER_RADIUS, SHADOWS, TRANSITIONS } from '../../constants/design';
import girlsMatchImg from '../../assets/images/girls_football_match.jpeg';
import youthTrainingImg from '../../assets/images/youth_football_training.jpeg';
import tournamentCupImg from '../../assets/images/tournament_scouting_cup.jpeg';
import trophyImg from '../../assets/images/trophy_celebration_milestone.jpeg';
import digitalClassImg from '../../assets/images/digital_classroom_learning.jpeg';
import culturalArtsImg from '../../assets/images/cultural_arts_workshop.jpeg';

/**
 * Gallery Section showcasing community photos.
 */
const Gallery = () => {
  const images = [
    { src: girlsMatchImg, title: 'Girls Sports Championship', tag: 'Girls Empowerment' },
    { src: youthTrainingImg, title: 'Agility & Footwork Drills', tag: 'Grassroots Training' },
    { src: tournamentCupImg, title: 'Rural Football Cup', tag: 'Tournaments' },
    { src: trophyImg, title: 'Championship Victory', tag: 'Athletic Milestones' },
    { src: digitalClassImg, title: 'Digital Learning Center', tag: 'Academic Tutoring' },
    { src: culturalArtsImg, title: 'Indigenous Arts & Music', tag: 'Cultural Preservation' }
  ];

  return (
    <section className="bg-white py-24 md:py-32 border-b border-gray-50">
      <Container>
        <SectionHeading
          badge="Gallery Insights"
          title="Moments captured on our journey"
          subtitle="Real snapshots of trainings, workshops, and achievements across various communities we support."
          align="center"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 mb-0">
          {images.map((img, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className={`relative overflow-hidden group aspect-[4/3] cursor-pointer ${BORDER_RADIUS.card} ${SHADOWS.card}`}
            >
              {/* Photo */}
              <img
                src={img.src}
                alt={img.title}
                className={`w-full h-full object-cover group-hover:scale-105 ${TRANSITIONS.slow}`}
              />

              {/* Caption Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-brand-black/90 via-brand-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="text-yellow-400 text-xs font-bold uppercase tracking-wider mb-1">
                  {img.tag}
                </span>
                <h4 className="text-white text-lg font-bold font-heading">
                  {img.title}
                </h4>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Gallery;

