import React from 'react';

export const POLICY_CARDS = [
  {
    title: 'Privacy Policy',
    desc: 'Outlines how we handle visitor data, mailing rosters, cookie configurations, and regional coordinate security.',
    icon: (
      <svg className="w-6 h-6 text-brand-dark" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    isComingSoon: false,
    path: '/privacy-policy'
  },
  {
    title: 'Terms & Conditions',
    desc: 'Usage guidelines governing our digital hubs, volunteer application submissions, and public resources database.',
    icon: (
      <svg className="w-6 h-6 text-brand-dark" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    isComingSoon: false,
    path: '/terms-and-conditions'
  },
  {
    title: 'Child Protection Policy',
    desc: 'Outlines standard safeguard behaviors, physical coaching drills security, and mandatory code of conduct protocols.',
    icon: (
      <svg className="w-6 h-6 text-brand-dark" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
    isComingSoon: true
  },
  {
    title: 'Refund & Donation Policy',
    desc: 'Transparent protocols detailing Section 80G tax exemptions, fund distribution pathways, and refunds.',
    icon: (
      <svg className="w-6 h-6 text-brand-dark" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    isComingSoon: false,
    path: '/refund-policy'
  },
  {
    title: 'Transparency Code',
    desc: 'Details our management structure, project audit cycles, and verified local community center reporting logs.',
    icon: (
      <svg className="w-6 h-6 text-brand-dark" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
    ),
    isComingSoon: true
  },
  {
    title: 'Annual Reports',
    desc: 'Organizational progress summaries, audited financial balances, and field impact progress counter charts.',
    icon: (
      <svg className="w-6 h-6 text-brand-dark" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    isComingSoon: true
  }
];

export const GOVERNANCE_CARDS = [
  {
    title: 'Ethical Governance',
    desc: 'Governed by a dedicated board of administrators verifying MoUs, audit transparency, and local coaching guidelines.',
    icon: (
      <svg className="w-6 h-6 text-brand-dark" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    )
  },
  {
    title: 'Responsible Financial Practices',
    desc: 'Sponsor donations are channeled directly into boots distribution, local digital labs setup, and pitches maintenance.',
    icon: (
      <svg className="w-6 h-6 text-brand-dark" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M12 16v1" />
      </svg>
    )
  },
  {
    title: 'Community Trust',
    desc: 'Maintaining transparent logs of student attendance and school completion rates to foster village council alignment.',
    icon: (
      <svg className="w-6 h-6 text-brand-dark" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    )
  },
  {
    title: 'Inclusive Development',
    desc: 'Ensuring equal kit distribution, sports access, and scholarship recommendations for both boys and girls.',
    icon: (
      <svg className="w-6 h-6 text-brand-dark" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    )
  }
];

export const FAQS = [
  {
    question: 'Why are these policies important?',
    answer: 'Policies protect child safety on field centers, define strict donor transparency protocols, and establish our trust guidelines in rural Jharkhand blocks.'
  },
  {
    question: 'How is personal information protected?',
    answer: 'We secure coordinator logs and scholar files in encrypted formats. We do not distribute child images for advertisement without parent consent forms.'
  },
  {
    question: 'How are donations managed?',
    answer: 'Donations are managed under Section 80G frameworks, audited annually, and allocated strictly to pitch equipment, boots, and classroom tuition tools.'
  },
  {
    question: 'How can I request additional information?',
    answer: 'You can submit the assistance form below, or write directly to info@saliencefoundation.org for board transparency records.'
  },
  {
    question: 'How can I contact the foundation?',
    answer: 'You can connect with us via our headquarters in Ranchi, our telephone coordination lines, or our local village digital labs.'
  }
];
