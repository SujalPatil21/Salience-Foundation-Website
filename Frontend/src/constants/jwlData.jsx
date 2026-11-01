import React from 'react';
import heroPosterImg from '../assets/images/jwl/jwl_hero_poster.png';
import teamsPosterImg from '../assets/images/jwl/jwl_teams_poster.png';
import fixturesDay1_2Img from '../assets/images/jwl/jwl_fixtures_day1_2.png';
import fixturesDay3_4Img from '../assets/images/jwl/jwl_fixtures_day3_4.png';
import fixturesDay5_6Img from '../assets/images/jwl/jwl_fixtures_day5_6.png';
import fixturesDay7_8Img from '../assets/images/jwl/jwl_fixtures_day7_8.png';
import fixturesDay9_10Img from '../assets/images/jwl/jwl_fixtures_day9_10.png';

// Official Tournament Emblem & Brand Logos
import jwlEmblemImg from '../assets/images/jwl/jwl_official_emblem.png';
import aiffLogoImg from '../assets/images/jwl/aiff_logo.png';
import jfaLogoImg from '../assets/images/jwl/jfa_logo.png';
import jfaLogoDarkImg from '../assets/images/jwl/jfa_logo_dark.png';
import shivNareshLogoImg from '../assets/images/jwl/shiv_naresh_logo.png';
import tygerCapitalLogoImg from '../assets/images/jwl/tyger_capital_logo.png';
import ikfNaariShaktiLogoImg from '../assets/images/jwl/ikf_naari_shakti_logo.png';
import salienceBadgeImg from '../assets/images/jwl/salience_logo_badge.png';

export const JWL_LOGOS = {
  emblem: jwlEmblemImg,
  aiff: aiffLogoImg,
  jfa: jfaLogoImg,
  jfaDark: jfaLogoDarkImg,
  shivNaresh: shivNareshLogoImg,
  tygerCapital: tygerCapitalLogoImg,
  ikfNaariShakti: ikfNaariShaktiLogoImg,
  salienceBadge: salienceBadgeImg
};

export const JWL_HERO = {
  emblem: jwlEmblemImg,
  badge: 'Official Tournament · JWL 2026–27',
  hashtag: '#NariShaktiOnThePitch',
  titlePrimary: 'The Inaugural',
  titleHighlight: "Jharkhand Women's League",
  edition: '2026 – 2027',
  tagline: "A New Chapter in Women's Football Begins!",
  subtitle: "For the first time in Jharkhand, a premier dedicated league to empower, promote, and elevate women's football. 6 elite clubs, 10 match days, and 30 high-stakes matches at the CAG Sports Complex, Ranchi.",
  dates: '02 – 20 November 2026',
  kickoffDate: '2026-11-02T09:00:00+05:30',
  venue: 'CAG Sports Complex, Hinoo, Ranchi',
  organisedBy: 'Jharkhand Football Association (JFA)',
  presentedBy: 'KnovaOne (A TrakAmerica Company)',
  sanctionedBy: 'All India Football Federation (AIFF)'
};

export const JWL_STATS = [
  {
    value: '6',
    suffix: '',
    label: 'Participating Clubs',
    desc: 'Representing premier academies & districts across Jharkhand'
  },
  {
    value: '30',
    suffix: '',
    label: 'Official Matches',
    desc: 'Intense double round-robin competition over 18 days'
  },
  {
    value: '10',
    suffix: '',
    label: 'Match Days',
    desc: 'Every alternate day: 9:00 AM, 11:00 AM, 1:00 PM'
  },
  {
    value: '100',
    suffix: '%',
    label: 'Free Spectator Entry',
    desc: 'Open to fans, students, and families at CAG Sports Complex'
  }
];

export const JWL_FOUNDATION_NOTE = {
  quoteBadge: 'Our Commitment to Grassroots Sport',
  headline: 'Where you come from should never determine how far you can go.',
  story: "Back in 2012–2013, we found ourselves asking why so many talented children in India struggled to get the support they needed to pursue sports. In March 2022, we founded Salience Foundation right here in Ranchi to break those barriers. Co-partnering with the Jharkhand Football Association for the inaugural Jharkhand Women's League is that vision in action — giving raw rural talent the spotlight, resources, and competitive pathway they deserve.",
  founders: 'Swati Bala, NeelKanth Kumar & Chandan',
  foundersTitle: 'Founders, Salience Foundation'
};

export const JWL_POSTERS = {
  heroPoster: heroPosterImg,
  teamsPoster: teamsPosterImg,
  fixturePosters: [
    { title: 'Match Days 1 & 2 (02 & 04 Nov)', image: fixturesDay1_2Img },
    { title: 'Match Days 3 & 4 (06 & 08 Nov)', image: fixturesDay3_4Img },
    { title: 'Match Days 5 & 6 (10 & 12 Nov)', image: fixturesDay5_6Img },
    { title: 'Match Days 7 & 8 (14 & 16 Nov)', image: fixturesDay7_8Img },
    { title: 'Match Days 9 & 10 (18 & 20 Nov)', image: fixturesDay9_10Img }
  ]
};

export const JWL_TEAMS = [
  {
    id: 'yuwa',
    name: 'YUWA Club',
    shortName: 'YUWA',
    origin: 'Hutup, Ranchi',
    badge: 'Grassroots Pioneer',
    motto: 'Empowering Girls Through Football',
    description: 'Internationally recognized grassroots academy transforming the lives of rural girls through daily football training, education, and life-skills leadership.',
    themeColor: 'from-amber-400 to-yellow-500'
  },
  {
    id: 'jssps',
    name: 'JSSPS',
    fullName: 'Jharkhand State Sports Promotion Society',
    shortName: 'JSSPS',
    origin: 'Ranchi / State Academy',
    badge: 'State Sports Society',
    motto: 'Our Mission: Olympic Gold Medals',
    description: 'Joint initiative of the Government of Jharkhand and CCL, cultivating high-performance athletes with Olympic-grade scientific conditioning.',
    themeColor: 'from-emerald-500 to-teal-600'
  },
  {
    id: 'swami-vivekananda',
    name: 'Swami Vivekananda FC & Academy',
    shortName: 'Swami Vivekananda FC',
    origin: 'Jharkhand',
    badge: 'Football Academy',
    motto: 'Strength, Character & Sporting Passion',
    description: 'Premier developmental academy instilling tactical football mastery, mental fortitude, and disciplined team sportsmanship in young athletes.',
    themeColor: 'from-orange-500 to-amber-600'
  },
  {
    id: 'star-warriors',
    name: 'Star Warriors Club',
    shortName: 'Star Warriors FC',
    origin: 'Kanke, Ranchi',
    badge: 'Community Club',
    motto: 'Rising from the Grassroots',
    description: 'Local powerhouse known for aggressive counter-attacking football, resilient defensive coordination, and passionate grassroots community backing.',
    themeColor: 'from-blue-600 to-cyan-600'
  },
  {
    id: 'gtx-dark-horse',
    name: 'GTX Dark Horse FC & Academy',
    shortName: 'GTX Dark Horse FC',
    origin: 'Jharkhand',
    badge: 'Elite Academy',
    motto: 'Speed, Precision & Tenacity',
    description: 'Modern tactical football club boasting rapid winger transitions, clinical finishing, and modern youth sports conditioning frameworks.',
    themeColor: 'from-zinc-700 to-neutral-900'
  },
  {
    id: 'sharada-academy',
    name: 'Sharada Football Academy',
    altName: 'Singra Football Academy',
    shortName: 'Sharada FA',
    origin: 'Chakradharpur / West Singhbhum',
    badge: 'Regional Academy',
    motto: 'Grassroots to Glory',
    description: 'Pioneering tribal and rural football talent hub, identifying explosive natural athleticism and channeling it into structured competitive play.',
    themeColor: 'from-purple-600 to-indigo-700'
  }
];

export const JWL_MATCH_DAYS = [
  {
    dayNumber: 1,
    dateString: '02 Nov 2026',
    dayOfWeek: 'Monday',
    tag: 'Tournament Kickoff',
    matches: [
      { time: '09:00 AM – 11:00 AM', team1: 'YUWA Club', team2: 'Swami Vivekananda FC & Academy', matchId: 'M01' },
      { time: '11:00 AM – 01:00 PM', team1: 'JSSPS', team2: 'Sharada Football Academy', matchId: 'M02' },
      { time: '01:00 PM – 03:00 PM', team1: 'Star Warriors Club', team2: 'GTX Dark Horse FC & Academy', matchId: 'M03' }
    ]
  },
  {
    dayNumber: 2,
    dateString: '04 Nov 2026',
    dayOfWeek: 'Wednesday',
    tag: 'Match Day 2',
    matches: [
      { time: '09:00 AM – 11:00 AM', team1: 'Swami Vivekananda FC & Academy', team2: 'GTX Dark Horse FC & Academy', matchId: 'M04' },
      { time: '11:00 AM – 01:00 PM', team1: 'YUWA Club', team2: 'Sharada Football Academy', matchId: 'M05' },
      { time: '01:00 PM – 03:00 PM', team1: 'JSSPS', team2: 'Star Warriors Club', matchId: 'M06' }
    ]
  },
  {
    dayNumber: 3,
    dateString: '06 Nov 2026',
    dayOfWeek: 'Friday',
    tag: 'Match Day 3',
    matches: [
      { time: '09:00 AM – 11:00 AM', team1: 'Sharada Football Academy', team2: 'Star Warriors Club', matchId: 'M07' },
      { time: '11:00 AM – 01:00 PM', team1: 'Swami Vivekananda FC & Academy', team2: 'JSSPS', matchId: 'M08' },
      { time: '01:00 PM – 03:00 PM', team1: 'YUWA Club', team2: 'GTX Dark Horse FC & Academy', matchId: 'M09' }
    ]
  },
  {
    dayNumber: 4,
    dateString: '08 Nov 2026',
    dayOfWeek: 'Sunday',
    tag: 'Weekend Derby',
    matches: [
      { time: '09:00 AM – 11:00 AM', team1: 'YUWA Club', team2: 'Star Warriors Club', matchId: 'M10' },
      { time: '11:00 AM – 01:00 PM', team1: 'GTX Dark Horse FC & Academy', team2: 'JSSPS', matchId: 'M11' },
      { time: '01:00 PM – 03:00 PM', team1: 'Sharada Football Academy', team2: 'Swami Vivekananda FC & Academy', matchId: 'M12' }
    ]
  },
  {
    dayNumber: 5,
    dateString: '10 Nov 2026',
    dayOfWeek: 'Tuesday',
    tag: 'Leg 1 Finale',
    matches: [
      { time: '09:00 AM – 11:00 AM', team1: 'Star Warriors Club', team2: 'Swami Vivekananda FC & Academy', matchId: 'M13' },
      { time: '11:00 AM – 01:00 PM', team1: 'YUWA Club', team2: 'JSSPS', matchId: 'M14' },
      { time: '01:00 PM – 03:00 PM', team1: 'GTX Dark Horse FC & Academy', team2: 'Sharada Football Academy', matchId: 'M15' }
    ]
  },
  {
    dayNumber: 6,
    dateString: '12 Nov 2026',
    dayOfWeek: 'Thursday',
    tag: 'Leg 2 Begins',
    matches: [
      { time: '09:00 AM – 11:00 AM', team1: 'Sharada Football Academy', team2: 'JSSPS', matchId: 'M16' },
      { time: '11:00 AM – 01:00 PM', team1: 'GTX Dark Horse FC & Academy', team2: 'Star Warriors Club', matchId: 'M17' },
      { time: '01:00 PM – 03:00 PM', team1: 'Swami Vivekananda FC & Academy', team2: 'YUWA Club', matchId: 'M18' }
    ]
  },
  {
    dayNumber: 7,
    dateString: '14 Nov 2026',
    dayOfWeek: 'Saturday',
    tag: 'Match Day 7',
    matches: [
      { time: '09:00 AM – 11:00 AM', team1: 'Sharada Football Academy', team2: 'YUWA Club', matchId: 'M19' },
      { time: '11:00 AM – 01:00 PM', team1: 'GTX Dark Horse FC & Academy', team2: 'Swami Vivekananda FC & Academy', matchId: 'M20' },
      { time: '01:00 PM – 03:00 PM', team1: 'Star Warriors Club', team2: 'JSSPS', matchId: 'M21' }
    ]
  },
  {
    dayNumber: 8,
    dateString: '16 Nov 2026',
    dayOfWeek: 'Monday',
    tag: 'Match Day 8',
    matches: [
      { time: '09:00 AM – 11:00 AM', team1: 'Star Warriors Club', team2: 'Sharada Football Academy', matchId: 'M22' },
      { time: '11:00 AM – 01:00 PM', team1: 'GTX Dark Horse FC & Academy', team2: 'YUWA Club', matchId: 'M23' },
      { time: '01:00 PM – 03:00 PM', team1: 'JSSPS', team2: 'Swami Vivekananda FC & Academy', matchId: 'M24' }
    ]
  },
  {
    dayNumber: 9,
    dateString: '18 Nov 2026',
    dayOfWeek: 'Wednesday',
    tag: 'Penultimate Round',
    matches: [
      { time: '09:00 AM – 11:00 AM', team1: 'JSSPS', team2: 'GTX Dark Horse FC & Academy', matchId: 'M25' },
      { time: '11:00 AM – 01:00 PM', team1: 'Swami Vivekananda FC & Academy', team2: 'Sharada Football Academy', matchId: 'M26' },
      { time: '01:00 PM – 03:00 PM', team1: 'Star Warriors Club', team2: 'YUWA Club', matchId: 'M27' }
    ]
  },
  {
    dayNumber: 10,
    dateString: '20 Nov 2026',
    dayOfWeek: 'Friday',
    tag: 'Grand Finale Day',
    matches: [
      { time: '09:00 AM – 11:00 AM', team1: 'JSSPS', team2: 'YUWA Club', matchId: 'M28' },
      { time: '11:00 AM – 01:00 PM', team1: 'Swami Vivekananda FC & Academy', team2: 'Star Warriors Club', matchId: 'M29' },
      { time: '01:00 PM – 03:00 PM', team1: 'Sharada Football Academy', team2: 'GTX Dark Horse FC & Academy', matchId: 'M30' }
    ]
  }
];

export const JWL_PILLARS = [
  {
    title: 'Professional Scouting Pipeline',
    desc: 'Certified AIFF and state talent scouts monitoring all 30 matches, giving standout players direct invitations to national leagues and state camps.',
    badge: 'Scouting Pathway'
  },
  {
    title: 'Grassroots Gender Parity',
    desc: 'Creating an equitable platform for rural women footballers with certified female match officials, licensed coaching staff, and equal recognition.',
    badge: 'Gender Equity'
  },
  {
    title: '100% Free Gear & Nutrition',
    desc: 'Complete high-grade match kits by Shiv-Naresh, sports nutrition, physiotherapy, and hydration support provided to every athlete free of cost.',
    badge: 'Athlete Welfare'
  },
  {
    title: 'Community Empowerment',
    desc: 'Inspiring families, village councils, and schools across Jharkhand to encourage sports participation as a pathway to higher education and dignity.',
    badge: 'Social Impact'
  }
];

export const JWL_PARTNERS = [
  { 
    name: 'Jharkhand Football Association', 
    role: 'Organised by', 
    category: 'governing',
    logo: jfaLogoImg,
    darkLogo: jfaLogoDarkImg
  },
  { 
    name: 'KnovaOne (A TrakAmerica Company)', 
    role: 'Presented by', 
    category: 'presenter',
    logo: null // Rendered with styled official typographic badge
  },
  { 
    name: 'All India Football Federation', 
    subLabel: 'AIFF',
    role: 'Affiliated Governing Body', 
    category: 'governing',
    logo: aiffLogoImg
  },
  { 
    name: 'Indian Audit and Accounts Dept.', 
    subLabel: 'Ranchi, Jharkhand',
    role: 'Host & Venue Partner', 
    category: 'institutional',
    logo: null
  },
  { 
    name: 'Shiv-Naresh', 
    role: 'Official Apparel & Kit Partner', 
    category: 'kit',
    logo: shivNareshLogoImg
  },
  { 
    name: 'Salience Foundation', 
    role: 'Grassroots Co-Partner', 
    category: 'csr',
    logo: salienceBadgeImg
  },
  { 
    name: 'Tyger Capital', 
    role: 'Supporting Partner', 
    category: 'sponsor',
    logo: tygerCapitalLogoImg
  },
  { 
    name: 'IKF Naari Shakti', 
    subLabel: 'Aap Khelo Mauka Hum Denge!',
    role: 'Scouting & Talent Partner', 
    category: 'partner',
    logo: ikfNaariShaktiLogoImg
  },
  { 
    name: 'Gantavya Care Foundation', 
    role: 'Community Partner', 
    category: 'csr',
    logo: null
  }
];

export const JWL_VENUE = {
  name: 'CAG Sports Complex',
  address: 'Hinoo, Ranchi, Jharkhand 834002',
  coords: [23.3284, 85.3235],
  landmarks: 'Near Birsa Munda Airport Road, Hinoo',
  spectatorEntry: 'Free Public Admission',
  amenities: [
    'Regulation Turf Football Pitch',
    'Spectator Seating Stands',
    'Certified Medical & First Aid Station',
    'Dedicated Player Dressing Rooms',
    'On-site Hydration & Nutrition Hub'
  ]
};

export const JWL_FAQS = [
  {
    question: "What is the Inaugural Jharkhand Women's League (JWL 2026–27)?",
    answer: "The Jharkhand Women's League is the state's premier official tournament dedicated to women's football, organized by the Jharkhand Football Association (JFA), presented by KnovaOne, and co-partnered with Salience Foundation to empower and scout grassroots female footballers across Jharkhand."
  },
  {
    question: 'When and where are the matches being played?',
    answer: 'All matches take place from 02nd November to 20th November 2026 at the CAG Sports Complex in Hinoo, Ranchi. Matches are scheduled on 10 match days at 09:00 AM, 11:00 AM, and 01:00 PM.'
  },
  {
    question: 'Is there an entry fee for spectators and football fans?',
    answer: 'No. Spectator entry is 100% free. We invite families, youth, students, and football enthusiasts to come and cheer for the teams and celebrate #NariShaktiOnThePitch.'
  },
  {
    question: 'Which teams are competing in JWL 2026–27?',
    answer: 'Six elite clubs and academies are competing: YUWA Club, JSSPS, Swami Vivekananda FC & Academy, Star Warriors Club (Kanke), GTX Dark Horse FC & Academy, and Sharada Football Academy.'
  },
  {
    question: 'What is the tournament format?',
    answer: 'The tournament follows a double round-robin league format. Each team plays every other team twice (home & away fixtures) across 30 thrilling matches to determine the champion.'
  },
  {
    question: 'How can corporate partners or donors support the league?',
    answer: 'Corporates and philanthropists can partner with Salience Foundation to sponsor athlete kits, grassroots scholarships, and match-day nutrition. Salience Foundation is a registered Section 8 non-profit with 12A/80G tax exemption and MCA CSR-1 certification.'
  }
];
