import React from 'react';
import youthTrainingImg from '../assets/images/youth_football_training.jpeg';
import culturalArtsImg from '../assets/images/cultural_arts_workshop.jpeg';
import villageCouncilImg from '../assets/images/community_village_council.jpeg';
import girlsMatchImg from '../assets/images/girls_football_match.jpeg';

export const ABOUT_HERO = {
  badge: 'Non-Profit · Section 8 Company · Ranchi, Jharkhand',
  titlePrimary: 'Empowering Rural Talents.',
  titleHighlight: 'Inspiring Cultural & Sporting Transformation.',
  subtitle: 'Salience Foundation is dedicated to promoting rural sporting talents and fostering an environment for artistic learning, cultural preservation, and community empowerment across India.',
  primaryCtaText: 'Our Story & Mission',
  secondaryCtaText: 'Contact Us',
};

export const ABOUT_OVERVIEW = {
  intro: 'Across rural India, there are young athletes with the potential to compete, aspiring artists looking for a place to learn, and communities carrying traditions that deserve to be seen, celebrated and passed on.',
  missionDetail: 'Salience Foundation is a Section 8 non-profit based in Ranchi, Jharkhand, working to bridge that gap.',
  artsDetail: 'We identify and nurture rural sporting talent by creating access to coaching, equipment, nutrition and opportunities to compete. At the same time, we support learning and expression across music, dance, theatre and visual arts, while working to preserve the cultural traditions that make communities unique.',
  cultureDetail: 'Our work is rooted in a simple belief: where you come from should not decide how far your talent can go.',
  communityDetail: 'By working with communities, schools, families, sports organisations, artists and cultural practitioners, we aim to create opportunities that are accessible, inclusive and built to last.',
  collaborationDetail: '',
  summary: ''
};

export const MULTIFACETED_PILLARS = [
  {
    title: 'Helping rural talent find its playing field.',
    subtitle: 'Rural Sporting Talents',
    badge: 'SPORTS',
    image: youthTrainingImg,
    desc: 'Talent can be found anywhere. Access to the right resources cannot. We identify promising athletes in rural communities and help them take the next step through quality equipment, trained coaching, nutrition, physical training and opportunities to compete.',
    icon: (
      <svg className="w-7 h-7 text-brand-black" fill="none" stroke="currentColor" strokeWidth="1.75" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    tags: ['Coaching', 'Equipment', 'Opportunities']
  },
  {
    title: 'Giving creativity a place to grow.',
    subtitle: 'Music, Dance, Theatre & Visual Arts',
    badge: 'ARTS',
    image: culturalArtsImg,
    desc: 'Art begins with an opportunity to learn, explore and express. Through creative learning and mentorship, we encourage individuals to discover their abilities across music, dance, theatre and visual arts and give them the confidence to pursue what they love.',
    icon: (
      <svg className="w-7 h-7 text-brand-black" fill="none" stroke="currentColor" strokeWidth="1.75" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
      </svg>
    ),
    tags: ['Music', 'Dance', 'Theatre', 'Visual Arts']
  },
  {
    title: 'Keeping traditions alive, while bringing people together.',
    subtitle: 'Cultural Heritage & Diversity',
    badge: 'CULTURE',
    image: villageCouncilImg,
    desc: 'Every community carries stories, traditions and forms of expression that are worth preserving. We work with local artists, cultural practitioners and communities to celebrate indigenous heritage, folklore and traditions, while creating greater awareness and respect for India\'s cultural diversity.',
    icon: (
      <svg className="w-7 h-7 text-brand-black" fill="none" stroke="currentColor" strokeWidth="1.75" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    tags: ['Traditions', 'Heritage', 'Diversity']
  },
  {
    title: 'Creating opportunities that reach beyond the individual.',
    subtitle: 'Community Transformation',
    badge: 'COMMUNITY',
    image: girlsMatchImg,
    desc: 'Real change becomes meaningful when the wider community benefits. We work alongside village leaders, schools, families and local communities to promote equal opportunity, gender inclusion and youth participation, helping create communities where more people have the chance to learn, participate and grow.',
    icon: (
      <svg className="w-7 h-7 text-brand-black" fill="none" stroke="currentColor" strokeWidth="1.75" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    tags: ['Equal Opportunity', 'Inclusion', 'Transformation']
  }
];

export const COLLABORATION_AREAS = [
  {
    title: '01 — Local Communities & Panchayats',
    desc: 'Starting with the community. We work closely with village leaders, families and local youth coordinators to understand community needs, build trust and create opportunities that can grow locally.'
  },
  {
    title: '02 — Educational Institutions',
    desc: 'Bringing opportunity into learning spaces. We partner with rural schools and colleges to make sports and creative learning more accessible, while encouraging participation, confidence and continued engagement with education.'
  },
  {
    title: '03 — Sports Federations & Clubs',
    desc: 'Creating pathways to compete. We work with sports associations, clubs and certified coaches to connect rural athletes with quality training, competitions and opportunities to take their skills further.'
  },
  {
    title: '04 — Artists & Cultural Experts',
    desc: 'Learning from those who carry the tradition. We collaborate with folk artists, musicians, theatre practitioners and cultural custodians to create learning experiences that connect young people with art, culture and local traditions.'
  }
];

export const ABOUT_STATS = [
  {
    value: '1,200',
    suffix: '+',
    label: 'YOUNG PEOPLE REACHED',
    icon: (
      <svg className="w-6 h-6 text-brand-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
      </svg>
    )
  },
  {
    value: '45',
    suffix: '+',
    label: 'RURAL HAMLETS & VILLAGES',
    icon: (
      <svg className="w-6 h-6 text-brand-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    )
  },
  {
    value: '42',
    suffix: '%',
    label: 'FEMALE TRAINEE PARTICIPATION',
    icon: (
      <svg className="w-6 h-6 text-brand-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    )
  },
  {
    value: '100',
    suffix: '%',
    label: 'FREE ACCESS FOR STUDENTS',
    icon: (
      <svg className="w-6 h-6 text-brand-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    )
  }
];

export const GOVERNANCE_CREDENTIALS = [
  {
    title: 'Headquarters',
    desc: 'Ranchi, Jharkhand, India. Working with communities and talent across rural India.',
    badge: 'HQ'
  },
  {
    title: 'Legal Structure',
    desc: 'Registered Section 8 Non-Profit Company with 12A/80G tax exemption.',
    badge: 'Legal Entity'
  },
  {
    title: 'MCA CSR-1 Registered',
    desc: 'Certified with the Ministry of Corporate Affairs for eligible corporate CSR funding and partnerships.',
    badge: 'CSR Eligible'
  },
  {
    title: 'Independent Audited Accounts',
    desc: 'Annual financial and impact audits conducted by certified chartered accountants.',
    badge: 'Audit Verified'
  }
];

export const ABOUT_FAQS = [
  {
    question: 'Where is Salience Foundation based and what is its legal structure?',
    answer: 'Salience Foundation is a Non-Profit (Section 8 Company) organization registered and headquartered in Ranchi, Jharkhand, dedicated to rural sporting talents, artistic learning, and cultural development.'
  },
  {
    question: 'How does Salience Foundation identify and nurture rural sporting talents?',
    answer: 'We organize grassroots trials and athletic screenings in remote villages across Jharkhand and beyond. Enrolled athletes receive free coaching, football gear, physical training, and tournament exposure.'
  },
  {
    question: 'What artistic learning opportunities are offered beyond sports?',
    answer: 'We cultivate creative talents in music, dance, theater, and visual arts, encouraging individuals to pursue their artistic passions and enriching community cultural life.'
  },
  {
    question: 'How does the foundation preserve and promote cultural heritage?',
    answer: 'We collaborate with local artists and cultural experts to organize workshops, celebrations, and awareness initiatives that safeguard local traditions and foster social harmony.'
  },
  {
    question: 'How can partners and sponsors collaborate with Salience Foundation?',
    answer: 'Corporates, educational institutions, sports bodies, and donors can partner with us for CSR projects, equipment sponsorship, or academy infrastructure development. You can reach out directly via our Contact page.'
  }
];
