import React from 'react';

export const ABOUT_HERO = {
  badge: 'Non-Profit · Section 8 Company · Ranchi, Jharkhand',
  titlePrimary: 'Empowering Rural Talents.',
  titleHighlight: 'Inspiring Cultural & Sporting Transformation.',
  subtitle: 'Salience Foundation is dedicated to promoting rural sporting talents and fostering an environment for artistic learning, cultural preservation, and community empowerment across India.',
  primaryCtaText: 'Our Story & Mission',
  secondaryCtaText: 'Contact Us',
};

export const ABOUT_OVERVIEW = {
  intro: 'Salience Foundation, a Non-Profit (Section 8 Company) organization based in Ranchi, Jharkhand, is dedicated to promoting rural sporting talents and fostering an environment for artistic learning and cultural development. The foundation firmly believes in the transformative power of sports and culture to positively impact individuals and communities alike.',
  missionDetail: 'At the core of their mission is empowering rural sporting talents. Salience Foundation recognizes that talent knows no boundaries and seeks to identify and nurture exceptional athletes and sports enthusiasts in remote regions. Through access to resources, coaching, and opportunities, the foundation aims to provide these young athletes with a platform to shine and reach their full potential.',
  artsDetail: 'Beyond sports, the foundation values the significance of artistic expression. They endeavor to cultivate talents in music, dance, theater, and visual arts, aiming to instill passion and appreciation for art among individuals. By nurturing creative abilities, Salience Foundation seeks to enrich the lives of those they touch, encouraging them to pursue their artistic dreams.',
  cultureDetail: 'Cultural development is another focal point of their mission. The foundation is committed to preserving and promoting cultural heritage, traditions, and practices. Their initiatives raise awareness about diverse cultures, fostering a sense of unity and harmony in society.',
  communityDetail: 'The foundation\'s work goes beyond individual transformation. Salience Foundation acknowledges the profound impact that personal growth can have on communities. Inclusivity and equality are deeply ingrained in their approach, as they strive to provide equal opportunities for all, regardless of background or location.',
  collaborationDetail: 'To achieve their vision, Salience Foundation collaborates with local communities, educational institutions, sports organizations, artists, and cultural experts. By building strong partnerships, they amplify the impact of their initiatives and inspire positive change in society.',
  summary: 'In summary, Salience Foundation\'s multifaceted approach encompasses empowering rural sporting talents, nurturing artistic expression, promoting cultural diversity, and inspiring personal and community transformation. Through their unwavering dedication, they envision a brighter future where sports and culture thrive, uplifting lives and building thriving communities.'
};

export const MULTIFACETED_PILLARS = [
  {
    title: 'Rural Sporting Talents',
    subtitle: 'Unlocking Raw Athletic Potential',
    badge: 'Sports Excellence',
    desc: 'Identifying and nurturing exceptional athletes in remote regions. Providing access to quality gear, certified coaching, nutrition, and competitive platforms so young athletes reach their full potential.',
    icon: (
      <svg className="w-7 h-7 text-brand-black" fill="none" stroke="currentColor" strokeWidth="1.75" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    tags: ['Grassroots Scouting', 'Coaching & Mentorship', 'Tournament Pathways']
  },
  {
    title: 'Artistic Learning & Expression',
    subtitle: 'Music, Dance, Theater & Visual Arts',
    badge: 'Creative Arts',
    desc: 'Cultivating creativity and passion across visual and performing arts. Nurturing creative abilities to enrich young lives and encouraging individuals to confidently pursue their artistic dreams.',
    icon: (
      <svg className="w-7 h-7 text-brand-black" fill="none" stroke="currentColor" strokeWidth="1.75" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
      </svg>
    ),
    tags: ['Music & Dance', 'Theater & Drama', 'Visual Arts Workshops']
  },
  {
    title: 'Cultural Heritage & Diversity',
    subtitle: 'Preserving Traditions & Fostering Unity',
    badge: 'Cultural Development',
    desc: 'Committed to preserving and celebrating indigenous cultural heritage, folklore, and traditions. Our initiatives raise awareness about diverse cultures to build social harmony and mutual respect.',
    icon: (
      <svg className="w-7 h-7 text-brand-black" fill="none" stroke="currentColor" strokeWidth="1.75" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    tags: ['Heritage Preservation', 'Cultural Awareness', 'Unity & Inclusion']
  },
  {
    title: 'Community Transformation',
    subtitle: 'Inclusivity & Equal Opportunities',
    badge: 'Social Impact',
    desc: 'Driving collective growth through equal opportunity, gender equity, and youth empowerment. Partnering with village leaders, schools, and families to create self-sustaining, thriving communities.',
    icon: (
      <svg className="w-7 h-7 text-brand-black" fill="none" stroke="currentColor" strokeWidth="1.75" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    tags: ['Equal Opportunity', 'Gender Equality', 'Community Ownership']
  }
];

export const COLLABORATION_AREAS = [
  {
    title: 'Local Communities & Panchayats',
    desc: 'Working directly with village elders, parents, and youth coordinators to build grassroots trust and establish local practice grounds.'
  },
  {
    title: 'Educational Institutions',
    desc: 'Partnering with rural schools and colleges to ensure sports and artistic participation boost academic retention and scholar-athlete development.'
  },
  {
    title: 'Sports Federations & Clubs',
    desc: 'Collaborating with regional sports associations and certified coaches to open competitive pathways and tournament exposure for rural athletes.'
  },
  {
    title: 'Artists & Cultural Experts',
    desc: 'Engaging traditional folk artists, music teachers, and cultural custodians to mentor youth and conduct creative learning workshops.'
  }
];

export const ABOUT_STATS = [
  {
    value: '1200',
    suffix: '+',
    label: 'Youth Reached & Empowered',
    icon: (
      <svg className="w-6 h-6 text-brand-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
      </svg>
    )
  },
  {
    value: '45',
    suffix: '+',
    label: 'Rural Hamlets & Villages',
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
    label: 'Female Trainee Ratio',
    icon: (
      <svg className="w-6 h-6 text-brand-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    )
  },
  {
    value: '100',
    suffix: '%',
    label: 'Free Access for Students',
    icon: (
      <svg className="w-6 h-6 text-brand-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    )
  }
];

export const GOVERNANCE_CREDENTIALS = [
  {
    title: 'Section 8 Non-Profit Company',
    desc: 'Registered under Section 8 of the Companies Act, 2013, based in Ranchi, Jharkhand.',
    badge: 'Legal Entity'
  },
  {
    title: 'Section 12A & 80G Compliant',
    desc: 'Donors receive tax exemption benefits under Section 80G of the Income Tax Act, India.',
    badge: 'Tax Exemption'
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
