import React from 'react';
import studentAnjaliImg from '../assets/images/student_athlete_anjali.jpeg';
import studentRahulImg from '../assets/images/student_athlete_rahul.jpeg';
import studentSunitaImg from '../assets/images/student_athlete_sunita.jpeg';
import studentAmitImg from '../assets/images/student_athlete_amit.jpeg';
import girlsMatchImg from '../assets/images/girls_football_match.jpeg';
import youthTrainingImg from '../assets/images/youth_football_training.jpeg';

export const JOURNEY_STEPS = [
  {
    title: 'Discover Talent',
    desc: 'Conducting local village cups to identify raw sports interest.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    )
  },
  {
    title: 'Join the Program',
    desc: 'Selecting trainees, providing boots, jerseys, and guidelines.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
      </svg>
    )
  },
  {
    title: 'Training & Learning',
    desc: 'Attending elite football camps and after-school tutoring.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    )
  },
  {
    title: 'Leadership Development',
    desc: 'Taking on game captaincy and digital lab group roles.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    )
  },
  {
    title: 'Community Impact',
    desc: 'Acting as peer safety net mentors in their home villages.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    )
  }
];

export const STUDENT_STORIES = [
  { 
    name: 'Anjali Kumari', 
    age: '16 Years Old', 
    village: 'Khunti, Jharkhand',
    program: 'Girls Football Initiative', 
    image: studentAnjaliImg,
    badge: 'State U-17 Forward',
    story: 'From playing with makeshift balls on uneven ground to leading her district team in state championships. Anjali maintains a 90% attendance record in school and mentors younger girls in her village.' 
  },
  { 
    name: 'Rahul Soren', 
    age: '15 Years Old', 
    village: 'Salempur, Bihar',
    program: 'YuvaGati Sports Academy', 
    image: studentRahulImg,
    badge: 'Academy Team Captain',
    story: 'A natural leader on the pitch, Rahul has transformed disciplined training habits into top academic performance in science tuitions and computer lab sessions.' 
  },
  { 
    name: 'Sunita Hansda', 
    age: '14 Years Old', 
    village: 'Gara, Jharkhand',
    program: 'Scholar-Athlete Program', 
    image: studentSunitaImg,
    badge: 'Merit Scholar & Midfielder',
    story: 'Supported by Salience Foundation with sports gear and secondary tuition grants, Sunita became the first girl in her family to complete high school with distinction.' 
  },
  { 
    name: 'Amit Munda', 
    age: '13 Years Old', 
    village: 'Ranchi Sector, Jharkhand',
    program: 'YuvaGati Sports Academy', 
    image: studentAmitImg,
    badge: 'Youth Goalkeeper',
    story: 'Amit discovered his passion during an annual monsoon scouting cup. Through consistent coaching, he has become one of the top youth keepers in the district.' 
  },
  { 
    name: 'Priya Mahato', 
    age: '15 Years Old', 
    village: 'Bahragora, Jharkhand',
    program: 'Girls Football Initiative', 
    image: girlsMatchImg,
    badge: 'Tournament MVP',
    story: 'Priya captained her village team to the finals of the Rural Cup, proving that young women in rural communities can break barriers through sports excellence.' 
  },
  { 
    name: 'Vikram Murmu', 
    age: '16 Years Old', 
    village: 'East Singhbhum, Jharkhand',
    program: 'Youth Leadership & Sports', 
    image: youthTrainingImg,
    badge: 'Peer Mentor & Winger',
    story: 'Combining athletics with leadership modules, Vikram coordinates weekend football clinics for younger children across three neighboring villages.' 
  }
];

export const SKILLS_DEVELOPED = [
  {
    title: 'Leadership',
    desc: 'Captaining games, aligning strategies, and taking responsibility for collective outcomes.',
    icon: (
      <svg className="w-6 h-6 text-brand-dark" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    )
  },
  {
    title: 'Teamwork',
    desc: 'Understanding collaboration, mutual respect, and standard sportsmanship in game formats.',
    icon: (
      <svg className="w-6 h-6 text-brand-dark" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    )
  },
  {
    title: 'Confidence',
    desc: 'Succeeding on the pitch translates to believing in oneself in academic and social life.',
    icon: (
      <svg className="w-6 h-6 text-brand-dark" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    title: 'Discipline',
    desc: 'Fostering punctual attendance, structured practice schedules, and respect for team protocols.',
    icon: (
      <svg className="w-6 h-6 text-brand-dark" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    title: 'Communication',
    desc: 'Clear dialoguing, voice coordination, and active game calls to coordinate players.',
    icon: (
      <svg className="w-6 h-6 text-brand-dark" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    )
  },
  {
    title: 'Physical Fitness',
    desc: 'Instilling lifelong fitness habits, athletic coordination, and healthy nutritional guidelines.',
    icon: (
      <svg className="w-6 h-6 text-brand-dark" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    )
  },
  {
    title: 'Goal Setting',
    desc: 'Formulating strategic play layouts and establishing school advancement benchmarks.',
    icon: (
      <svg className="w-6 h-6 text-brand-dark" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    )
  },
  {
    title: 'Respect',
    desc: 'Respecting team decisions, referee guidelines, and opponent boundaries during games.',
    icon: (
      <svg className="w-6 h-6 text-brand-dark" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  }
];

export const FUTURE_OPPS = [
  { title: 'Sports Development', desc: 'Sponsoring pitch constructs, regional tournaments travel, and gear distribution.' },
  { title: 'Education Support', desc: 'Direct school attendance monitoring, evening classrooms, and secondary scholarships.' },
  { title: 'Leadership Training', desc: 'Youth camp guidelines, public speaking workshops, and team governance drills.' },
  { title: 'Life Skills', desc: 'Computer lab lessons, safety guidelines, and team inclusion workshops.' },
  { title: 'Community Participation', desc: 'Village alignment cups, local councils alignments, and parental support circles.' },
  { title: 'Career Guidance', desc: 'Secondary school completion workshops and higher learning entry guidance.' }
];

export const FAQS = [
  {
    question: 'Who can join the programs?',
    answer: 'Any boy or girl aged 8 to 17 living in our target rural Jharkhand villages is welcome to join our selection clinics.'
  },
  {
    question: 'What age groups are supported?',
    answer: 'We focus primarily on the under-13, under-15, and under-17 cohorts for structured football and educational tutoring.'
  },
  {
    question: 'How do students enroll?',
    answer: 'Enrollment happens through local community scouting camp cups organized in target blocks once a year.'
  },
  {
    question: 'Can schools recommend students?',
    answer: 'Yes, local secondary schools can recommend kids who show high interest in sports and maintain standard attendance.'
  },
  {
    question: 'How can parents get involved?',
    answer: 'Parents join regular community support councils and align with student study and training hours.'
  }
];
