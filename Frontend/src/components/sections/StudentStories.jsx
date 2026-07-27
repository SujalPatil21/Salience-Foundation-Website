import React from 'react';
import { Link } from 'react-router-dom';
import Container from '../ui/Container';
import SectionHeading from '../ui/SectionHeading';
import StudentCard from '../ui/StudentCard';
import Button from '../ui/Button';
import teamImg from '../../assets/images/Team.jpeg';
import villageImg from '../../assets/images/Village_People.jpeg';

/**
 * Student Stories Section. Displays student profiles who achieved sports/academic milestones.
 */
const StudentStories = () => {
  const stories = [
    {
      image: teamImg,
      name: 'Rajesh Kumar',
      village: 'Salempur, Bihar',
      story: 'Coming from a family of farmers, I never thought I would kick a leather football, let alone represent my state. The academy gave me boots, coaches, and the faith I needed.',
      achievement: 'State U-17 Forward'
    },
    {
      image: villageImg,
      name: 'Priya Sharma',
      village: 'Gara, Jharkhand',
      story: 'My village had no training spaces for girls. The foundation set up a program, bought us gear, and supported my schooling. I just got accepted to college on a sports scholarship.',
      achievement: 'National Scholar-Athlete'
    }
  ];

  return (
    <section className="bg-white py-24 md:py-32 border-b border-gray-50">
      <Container>
        <SectionHeading
          badge="Student Success Stories"
          title="Stories of grit, written on the pitch"
          subtitle="Behind every statistic is a human story. Read about the journeys of our athletes from remote villages to national platforms."
          align="center"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12 mb-0">
          {stories.map((story, idx) => (
            <StudentCard
              key={idx}
              image={story.image}
              name={story.name}
              village={story.village}
              story={story.story}
              achievement={story.achievement}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default StudentStories;

