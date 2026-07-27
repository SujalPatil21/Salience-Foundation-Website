import React from 'react';
import Container from '../components/ui/Container';
import SectionHeading from '../components/ui/SectionHeading';

const AboutPage = () => {
  return (
    <div className="py-32 bg-white">
      <Container>
        <SectionHeading
          badge="About Salience"
          title="Empowering rural dreams through sports and education"
          align="left"
        />
        <p className="text-brand-dark max-w-3xl font-light leading-relaxed text-lg">
          Welcome to the About page. Here, we will list our detailed history, organizational structure, governing board, and long-term milestones.
        </p>
      </Container>
    </div>
  );
};

export default AboutPage;
