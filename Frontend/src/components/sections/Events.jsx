import React from 'react';
import { Link } from 'react-router-dom';
import Container from '../ui/Container';
import SectionHeading from '../ui/SectionHeading';
import EventCard from '../ui/EventCard';
import Button from '../ui/Button';
import girlsImg from '../../assets/images/Girls.jpeg';
import childrenImg from '../../assets/images/Children.jpeg';

/**
 * Events Section displaying tournaments and educational summits with a View All link.
 */
const Events = () => {
  const events = [
    {
      image: girlsImg,
      date: 'Oct 12, 2026',
      location: 'Ranchi, Jharkhand',
      title: 'Salience Rural Football Cup 2026',
      description: 'Our annual scouting cup bringing together 32 village teams to compete, collaborate, and showcase talent before state selectors.'
    },
    {
      image: childrenImg,
      date: 'Dec 05, 2026',
      location: 'Patna, Bihar',
      title: 'Youth Leadership & Digital Summit',
      description: 'A two-day residential workshop focusing on computer literacy, career navigation, public speaking, and team leadership skills.'
    }
  ];

  return (
    <section className="bg-white py-24 md:py-32 border-b border-gray-50">
      <Container>
        <SectionHeading
          badge="Upcoming Events"
          title="Mark your calendars for impact"
          subtitle="Join us on the ground, witness the talent, or collaborate on one of our major upcoming sports summits and drives."
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 mb-0 max-w-4xl mx-auto">
          {events.map((event, idx) => (
            <EventCard
              key={idx}
              image={event.image}
              date={event.date}
              location={event.location}
              title={event.title}
              description={event.description}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Events;

