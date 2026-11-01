import React from 'react';

// 1. Girls Football Training (Minimal football visual)
export const FootballIcon = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <path d="M12 2a14.5 14.5 0 0 0 0 20" />
    <path d="M2 12h20" />
    <path d="M12 2a14.5 14.5 0 0 1 0 20" />
    <circle cx="12" cy="12" r="3" fill="currentColor" fillOpacity="0.1" />
  </svg>
);

// 2. Community Outreach (Connected community)
export const CommunityIcon = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="3" />
    <path d="M12 15c-3 0-5 2-5 5h10c0-3-2-5-5-5Z" />
    <circle cx="6" cy="8" r="2" />
    <path d="M6 10c-2 0-3 1.5-3 3h4" />
    <circle cx="18" cy="8" r="2" />
    <path d="M18 10c2 0 3 1.5 3 3h-4" />
  </svg>
);

// 3. Sports Mentorship (Mentor + athlete)
export const MentorshipIcon = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    <path d="M9 13l3 3 5-5" stroke="#F3EA00" strokeWidth="2" />
  </svg>
);

// 4. Leadership Development (Leadership/direction)
export const LeadershipIcon = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2v20" />
    <path d="m17 7-5-5-5 5" />
    <path d="m19 14-7-7-7 7" stroke="#F3EA00" strokeWidth="2" />
  </svg>
);

// 5. Physical Fitness (Strength/athletic)
export const FitnessIcon = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="m6.5 17.5 11-11" />
    <path d="m5 16-2-2" />
    <path d="m8 19-2-2" />
    <path d="m20 8-2-2" />
    <path d="m19 11-2-2" stroke="#F3EA00" strokeWidth="2" />
    <circle cx="5.5" cy="18.5" r="2.5" />
    <circle cx="18.5" cy="5.5" r="2.5" />
  </svg>
);

// 6. Skill Enhancement (Progression + sport)
export const SkillIcon = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
    <path d="M3.3 7l8.7 5 8.7-5" />
    <path d="M12 22V12" />
    <path d="M12 12l-4-2" stroke="#F3EA00" strokeWidth="2" />
  </svg>
);

// 7. Teamwork (Connected players)
export const TeamworkIcon = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    <path d="M6 12h6" stroke="#F3EA00" strokeWidth="2" />
  </svg>
);

// 8. Gender Equality Through Sports (Equality/balance)
export const EqualityIcon = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <path d="M8 10h8" />
    <path d="M8 14h8" stroke="#F3EA00" strokeWidth="2" />
  </svg>
);
