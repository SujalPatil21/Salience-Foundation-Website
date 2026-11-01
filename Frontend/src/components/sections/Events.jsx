import React from 'react';
import { Link } from 'react-router-dom';
import Container from '../ui/Container';
import SectionHeading from '../ui/SectionHeading';
import EventCard from '../ui/EventCard';
import Button from '../ui/Button';
import tournamentCupImg from '../../assets/images/tournament_scouting_cup.jpeg';
import digitalClassImg from '../../assets/images/digital_classroom_learning.jpeg';
import jwlHeroPoster from '../../assets/images/jwl/jwl_hero_poster.png';

/**
 * Events Section displaying tournaments and educational summits with a View All link.
 */
const Events = () => {
  const events = [
    {
      image: tournamentCupImg,
      date: 'Oct 12, 2026',
      location: 'Ranchi, Jharkhand',
      title: 'Salience Rural Football Cup 2026',
      description: 'Our annual scouting cup bringing together 32 village teams to compete, collaborate, and showcase talent before state selectors.'
    },
    {
      image: digitalClassImg,
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

        {/* Featured Flagship: Jharkhand Women's League */}
        <div className="mt-8 mb-12 max-w-4xl mx-auto rounded-2xl bg-gradient-to-r from-neutral-900 via-neutral-950 to-black p-6 sm:p-8 text-white border border-neutral-800 shadow-xl flex flex-col sm:flex-row items-center gap-6">
          <div className="flex-1 text-left">
            <span className="inline-block px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-brand-black bg-brand-yellow rounded-md mb-3">
              Official Tournament · Nov 02 – 20, 2026
            </span>
            <h3 className="text-xl sm:text-2xl font-extrabold font-heading text-white mb-2">
              The Inaugural Jharkhand Women's League (JWL 2026–27)
            </h3>
            <p className="text-xs sm:text-sm text-neutral-300 font-light mb-5 leading-relaxed">
              6 participating clubs, 10 match days, and 30 official matches at CAG Sports Complex, Hinoo, Ranchi. Organized by JFA and presented by KnovaOne in co-partnership with Salience Foundation.
            </p>
            <Link to="/jharkhand-womens-league">
              <Button variant="primary">
                Explore JWL 2026 Fixtures & Teams
              </Button>
            </Link>
          </div>
          <div className="w-full sm:w-56 h-40 rounded-xl overflow-hidden flex-shrink-0 border border-neutral-700 shadow-md">
            <img src={jwlHeroPoster} alt="JWL 2026-27 Official Banner" className="w-full h-full object-cover" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4 mb-0 max-w-4xl mx-auto">
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

