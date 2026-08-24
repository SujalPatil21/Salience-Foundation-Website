import React from 'react';
import { Link } from 'react-router-dom';
import Container from '../ui/Container';
import SectionHeading from '../ui/SectionHeading';
import InitiativeCard from '../ui/InitiativeCard';
import Button from '../ui/Button';
import youthTrainingImg from '../../assets/images/youth_football_training.jpeg';
import girlsMatchImg from '../../assets/images/girls_football_match.jpeg';
import digitalClassImg from '../../assets/images/digital_classroom_learning.jpeg';

/**
 * Programs Preview Section displaying core programs with links to the full page.
 */
const ProgramsPreview = () => {
  const initiatives = [
    {
      image: youthTrainingImg,
      title: 'Rural Grassroots Academy',
      description: 'Identifying elite potential in isolated areas, providing structured training pitches, standard boots, footballs, and expert local coaching.',
      badge: 'Athletics'
    },
    {
      image: girlsMatchImg,
      title: 'Girls’ Empowerment Sports',
      description: 'Defying stereotypes by running dedicated female tournaments and training camps, supporting sports as a tool for confidence and leadership.',
      badge: 'Equality'
    },
    {
      image: digitalClassImg,
      title: 'Academic & Digital Classrooms',
      description: 'Ensuring that top athletes are supported with secondary schooling tuition fees, digital learning equipment, and study mentorship.',
      badge: 'Education'
    }
  ];

  return (
    <section className="bg-white py-24 md:py-32 border-b border-gray-50">
      <Container>
        <SectionHeading
          badge="Our Programs"
          title="Transforming grit into global achievements"
          subtitle="Our core programs are customized to address rural realities, offering clear avenues for talent development."
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 mb-0">
          {initiatives.map((item, idx) => (
            <InitiativeCard
              key={idx}
              image={item.image}
              title={item.title}
              description={item.description}
              badge={item.badge}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default ProgramsPreview;

