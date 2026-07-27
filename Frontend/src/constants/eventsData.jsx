import React from 'react';

export const EVENT_CATEGORIES = [
  'All', 
  'Football', 
  'Community', 
  'Workshops', 
  'Training', 
  'Youth Development', 
  'Special Events'
];

export const UPCOMING_EVENTS = [
  { title: 'Football Tournament Cup', category: 'Football', date: 'Date: To Be Updated', location: 'Location: Ranchi Sector', desc: 'Upcoming Event — Official Details Coming Soon. In this card, we will feature the event program, scheduling, age groups, and parent coordinates.' },
  { title: 'Youth Leadership Workshop', category: 'Workshops', date: 'Date: To Be Updated', location: 'Location: Community Lab', desc: 'Upcoming Event — Official Details Coming Soon. In this card, we will feature the event program, scheduling, age groups, and parent coordinates.' },
  { title: 'Community Outreach Drive', category: 'Community', date: 'Date: To Be Updated', location: 'Location: Village Hub', desc: 'Upcoming Event — Official Details Coming Soon. In this card, we will feature the event program, scheduling, age groups, and parent coordinates.' },
  { title: 'Girls Football Training Clinic', category: 'Girls Empowerment', date: 'Date: To Be Updated', location: 'Location: Academy Pitch', desc: 'Upcoming Event — Official Details Coming Soon. In this card, we will feature the event program, scheduling, age groups, and parent coordinates.' },
  { title: 'Volunteer Coordination Seminar', category: 'Special Events', date: 'Date: To Be Updated', location: 'Location: Main Hall', desc: 'Upcoming Event — Official Details Coming Soon. In this card, we will feature the event program, scheduling, age groups, and parent coordinates.' },
  { title: 'Sports Fitness & Health Summit', category: 'Training', date: 'Date: To Be Updated', location: 'Location: Sports Field', desc: 'Upcoming Event — Official Details Coming Soon. In this card, we will feature the event program, scheduling, age groups, and parent coordinates.' }
];

export const PAST_EVENTS = [
  { title: 'Village Scouting Cup', desc: 'Official Event Information Will Be Updated Soon.' },
  { title: 'Local Digital Lab Activation', desc: 'Official Event Information Will Be Updated Soon.' },
  { title: 'Safeguard Code Seminar', desc: 'Official Event Information Will Be Updated Soon.' }
];

export const EVENT_HIGHLIGHTS = [
  {
    title: 'Football Activities',
    desc: 'Structured soccer cups and friendly selection clinics designed to foster athletic skills.',
    icon: (
      <svg className="w-6 h-6 text-brand-dark" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
      </svg>
    )
  },
  {
    title: 'Leadership Sessions',
    desc: 'Seminars led by licensed sports guides to build public speaking and team management skills.',
    icon: (
      <svg className="w-6 h-6 text-brand-dark" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    )
  },
  {
    title: 'Community Engagement',
    desc: 'Village awareness groups aligning parents around educational guidelines.',
    icon: (
      <svg className="w-6 h-6 text-brand-dark" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    )
  },
  {
    title: 'Team Building',
    desc: 'Interactive soccer modules teaching collaboration and standard sportsmanship.',
    icon: (
      <svg className="w-6 h-6 text-brand-dark" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    )
  },
  {
    title: 'Girls Participation',
    desc: 'Girls-only clinics and tournament schedules to break gender-based stereotypes.',
    icon: (
      <svg className="w-6 h-6 text-brand-dark" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    )
  },
  {
    title: 'Volunteer Support',
    desc: 'Local logistics coordination networks, gear distribution setups, and photo logs.',
    icon: (
      <svg className="w-6 h-6 text-brand-dark" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    )
  }
];

export const FAQS = [
  {
    question: 'How can I participate in future events?',
    answer: 'Trainees can participate through annual block clinics. Sponsoring organizations can register coordinates under Partner channels.'
  },
  {
    question: 'Can schools collaborate?',
    answer: 'Yes. Schools can co-host friendly selection cups, sports safety clinics, or computer lab seminars.'
  },
  {
    question: 'Can volunteers help organize events?',
    answer: 'Absolutely. We look for volunteers to manage match photography, training gear distribution, and local logistics.'
  },
  {
    question: 'How will upcoming events be announced?',
    answer: 'Schedules are updated on the website and announced locally through village council coordinators.'
  },
  {
    question: 'Are events open to everyone?',
    answer: 'Grassroots training clinics are open to target village youths. Tournaments and cups welcome parent and community supporters.'
  }
];
