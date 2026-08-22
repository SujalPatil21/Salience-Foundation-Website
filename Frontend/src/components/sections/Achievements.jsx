import React from 'react';
import { Link } from 'react-router-dom';
import Container from '../ui/Container';
import SectionHeading from '../ui/SectionHeading';
import AchievementCard from '../ui/AchievementCard';
import Button from '../ui/Button';
import trophyImg from '../../assets/images/trophy_celebration_milestone.jpeg';
import digitalClassImg from '../../assets/images/digital_classroom_learning.jpeg';
import tournamentCupImg from '../../assets/images/tournament_scouting_cup.jpeg';

/**
 * Achievements Section presenting key institutional milestones with a "View All" link.
 */
const Achievements = () => {
  const achievements = [
    {
      image: trophyImg,
      title: '50+ State-Level Athletes Produced',
      description: 'Our trainees have represented states like Bihar, Jharkhand, and West Bengal in sub-junior and junior national tournaments.',
      date: 'Athletic Milestone'
    },
    {
      image: digitalClassImg,
      title: '100% Secondary School Completion',
      description: 'Zero dropouts among our sports scholars. Every youth in our football training program maintains active enrollment in secondary school.',
      date: 'Academic Success'
    },
    {
      image: tournamentCupImg,
      title: 'National Grassroots Excellence Award',
      description: 'Recognized by regional sports bodies for developing community football infrastructure in remote villages with zero state support.',
      date: 'Institutional Honor'
    }
  ];

  return (
    <section className="bg-gray-50 py-24 md:py-32 border-b border-gray-100">
      <Container>
        <SectionHeading
          badge="Our Milestones"
          title="Achievements that validate our vision"
          subtitle="We measure success not in medals alone, but in systemic shifts in rural development and youth education."
          align="center"
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-12 mb-0">
          {achievements.map((item, idx) => (
            <AchievementCard
              key={idx}
              image={item.image}
              title={item.title}
              description={item.description}
              date={item.date}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Achievements;

