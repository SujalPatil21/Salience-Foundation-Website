import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Container from '../components/ui/Container';
import SectionHeading from '../components/ui/SectionHeading';
import Button from '../components/ui/Button';
import FAQAccordion from '../components/ui/FAQAccordion';
import JwlVenueMap from '../components/maps/JwlVenueMap';

import {
  JWL_HERO,
  JWL_STATS,
  JWL_FOUNDATION_NOTE,
  JWL_POSTERS,
  JWL_TEAMS,
  JWL_MATCH_DAYS,
  JWL_PILLARS,
  JWL_PARTNERS,
  JWL_VENUE,
  JWL_FAQS,
  JWL_LOGOS
} from '../constants/jwlData';
import { SHADOWS } from '../constants/design';

// Visual assets
import heroPosterImg from '../assets/images/jwl/jwl_hero_poster.png';
import teamsPosterImg from '../assets/images/jwl/jwl_teams_poster.png';
import girlsMatchImg from '../assets/images/girls_football_match.jpeg';

/**
 * Live Countdown Timer hook for 02 Nov 2026, 09:00 AM IST.
 */
const useCountdown = (targetDateString) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isStarted: false
  });

  useEffect(() => {
    const target = new Date(targetDateString).getTime();

    const calculateTime = () => {
      const now = new Date().getTime();
      const difference = target - now;

      if (difference <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0, isStarted: true });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds, isStarted: false });
    };

    calculateTime();
    const interval = setInterval(calculateTime, 1000);
    return () => clearInterval(interval);
  }, [targetDateString]);

  return timeLeft;
};

const JharkhandWomensLeaguePage = () => {
  const countdown = useCountdown(JWL_HERO.kickoffDate);
  const [activeLeg, setActiveLeg] = useState('All'); // 'All' | 'Leg 1' | 'Leg 2'
  const [selectedDayNumber, setSelectedDayNumber] = useState(1);
  const [activePosterModal, setActivePosterModal] = useState(null);
  const [activeGraphicTab, setActiveGraphicTab] = useState('hero'); // 'hero' | 'teams' | 'emblem'

  const filteredMatchDays = JWL_MATCH_DAYS.filter((md) => {
    if (activeLeg === 'Leg 1') return md.dayNumber <= 5;
    if (activeLeg === 'Leg 2') return md.dayNumber >= 6;
    return true;
  });

  const selectedDayData = JWL_MATCH_DAYS.find((d) => d.dayNumber === selectedDayNumber) || JWL_MATCH_DAYS[0];

  const handleScrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-white">
      {/* 1. Full-Screen Cinematic Hero Section (100svh) */}
      <section className="relative min-h-[100svh] w-full overflow-hidden flex items-center justify-center bg-black pt-24 pb-16">
        {/* Background Image Layer */}
        <img
          src={heroPosterImg}
          alt="Inaugural Jharkhand Women's League 2026-27"
          className="absolute inset-0 w-full h-full object-cover object-top opacity-35 scale-105 animate-subtle-zoom"
        />

        {/* Cinematic Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/80 z-[1]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-fuchsia-900/30 via-transparent to-transparent z-[2]" />

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center flex flex-col items-center justify-center">
          {/* Official Tournament Emblem */}
          <div 
            onClick={() => setActivePosterModal(JWL_LOGOS.emblem)}
            className="mb-4 relative group cursor-pointer"
          >
            <div className="absolute -inset-2 bg-gradient-to-r from-pink-500 via-brand-yellow to-pink-500 rounded-full blur-md opacity-40 group-hover:opacity-75 transition-opacity" />
            <img
              src={JWL_LOGOS.emblem}
              alt="Official Jharkhand Women's League Crest"
              className="relative w-28 sm:w-36 h-28 sm:h-36 object-contain drop-shadow-[0_10px_20px_rgba(0,0,0,0.8)] group-hover:scale-105 transition-transform duration-300"
            />
          </div>

          {/* Badge & Hashtag */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 mb-5">
            <span className="inline-block px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-brand-yellow border border-brand-yellow/40 bg-brand-yellow/15 rounded-full">
              {JWL_HERO.badge}
            </span>
            <span className="inline-block px-4 py-1.5 text-xs font-extrabold uppercase tracking-widest text-pink-300 border border-pink-500/30 bg-pink-500/10 rounded-full">
              {JWL_HERO.hashtag}
            </span>
          </div>

          {/* Main Titles */}
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-white font-heading tracking-tight leading-tight max-w-4xl">
            {JWL_HERO.titlePrimary}{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-yellow via-yellow-200 to-pink-400">
              {JWL_HERO.titleHighlight}
            </span>
          </h1>

          <p className="mt-4 text-xs sm:text-sm font-semibold uppercase tracking-[0.25em] text-white/70">
            {JWL_HERO.tagline} · {JWL_HERO.dates}
          </p>

          <p className="mt-4 text-base md:text-lg text-white/85 font-light max-w-3xl leading-relaxed">
            {JWL_HERO.subtitle}
          </p>

          {/* Organizers Credit Strip with Official Logos */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs text-white/80 border-t border-white/10 pt-4 max-w-3xl">
            <div className="flex items-center gap-2">
              <img src={JWL_LOGOS.jfaDark} alt="JFA" className="h-6 w-auto object-contain" />
              <span>Organised by: <strong className="text-white font-semibold">JFA</strong></span>
            </div>
            <span className="text-white/30 hidden sm:inline">•</span>
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 rounded bg-white text-brand-black font-extrabold text-[10px] tracking-wider">
                KNOVA ONE
              </span>
              <span>Presented by: <strong className="text-brand-yellow font-semibold">KnovaOne</strong></span>
            </div>
            <span className="text-white/30 hidden sm:inline">•</span>
            <div className="flex items-center gap-2">
              <img src={JWL_LOGOS.aiff} alt="AIFF" className="h-6 w-auto object-contain" />
              <span>Sanctioned by: <strong className="text-white font-semibold">AIFF</strong></span>
            </div>
          </div>

          {/* Countdown Clock */}
          <div className="mt-8 p-4 sm:p-6 rounded-2xl bg-white/5 backdrop-blur-md border border-white/15 max-w-lg w-full">
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-brand-yellow block mb-3">
              {countdown.isStarted ? 'Tournament is Currently Underway!' : 'Kickoff Countdown to 02 Nov 2026'}
            </span>
            <div className="grid grid-cols-4 gap-2 sm:gap-4 text-center">
              <div className="bg-black/60 rounded-xl p-2.5 sm:p-3 border border-white/10">
                <span className="block text-2xl sm:text-4xl font-extrabold text-white font-heading">
                  {String(countdown.days).padStart(2, '0')}
                </span>
                <span className="text-[10px] sm:text-xs text-white/60 uppercase font-semibold">Days</span>
              </div>
              <div className="bg-black/60 rounded-xl p-2.5 sm:p-3 border border-white/10">
                <span className="block text-2xl sm:text-4xl font-extrabold text-white font-heading">
                  {String(countdown.hours).padStart(2, '0')}
                </span>
                <span className="text-[10px] sm:text-xs text-white/60 uppercase font-semibold">Hours</span>
              </div>
              <div className="bg-black/60 rounded-xl p-2.5 sm:p-3 border border-white/10">
                <span className="block text-2xl sm:text-4xl font-extrabold text-white font-heading">
                  {String(countdown.minutes).padStart(2, '0')}
                </span>
                <span className="text-[10px] sm:text-xs text-white/60 uppercase font-semibold">Mins</span>
              </div>
              <div className="bg-black/60 rounded-xl p-2.5 sm:p-3 border border-white/10">
                <span className="block text-2xl sm:text-4xl font-extrabold text-brand-yellow font-heading">
                  {String(countdown.seconds).padStart(2, '0')}
                </span>
                <span className="text-[10px] sm:text-xs text-white/60 uppercase font-semibold">Secs</span>
              </div>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center items-center w-full sm:w-auto">
            <Button onClick={() => handleScrollToSection('fixtures-section')} variant="primary">
              View Match Fixtures
            </Button>
            <Button onClick={() => handleScrollToSection('teams-section')} variant="secondaryWhite">
              Meet The 6 Teams
            </Button>
            <Link to="/contact">
              <Button variant="secondaryWhite">
                Spectator & Media Info
              </Button>
            </Link>
          </div>
        </div>

        <style>{`
          @keyframes subtle-zoom {
            0% { transform: scale(1); }
            100% { transform: scale(1.05); }
          }
          .animate-subtle-zoom {
            animation: subtle-zoom 25s ease-out forwards;
          }
        `}</style>
      </section>

      {/* 2. Key Stats Strip */}
      <section className="bg-brand-black text-white py-12 border-b border-neutral-800">
        <Container>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            {JWL_STATS.map((stat, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-neutral-900/60 border border-neutral-800">
                <div className="text-3xl md:text-5xl font-extrabold text-brand-yellow font-heading mb-1">
                  {stat.value}{stat.suffix}
                </div>
                <div className="text-sm font-bold text-white uppercase tracking-wider mb-1">
                  {stat.label}
                </div>
                <div className="text-xs text-neutral-400 font-light leading-relaxed">
                  {stat.desc}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 3. Salience Foundation Ethos (Rooted in Option 2) */}
      <section className="py-24 bg-white border-b border-gray-100">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Column: Official Poster / Emblem Preview with Switcher */}
            <div className="lg:col-span-5 relative">
              {/* Graphic Viewer */}
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-gray-100 bg-neutral-900 group">
                <img
                  src={
                    activeGraphicTab === 'teams'
                      ? teamsPosterImg
                      : activeGraphicTab === 'emblem'
                      ? JWL_LOGOS.emblem
                      : heroPosterImg
                  }
                  alt="Official JWL Graphic"
                  className={`w-full ${activeGraphicTab === 'emblem' ? 'h-[460px] object-contain p-6 bg-radial from-slate-900 to-black' : 'h-auto object-cover'} group-hover:scale-102 transition-transform duration-500 cursor-pointer`}
                  onClick={() =>
                    setActivePosterModal(
                      activeGraphicTab === 'teams'
                        ? teamsPosterImg
                        : activeGraphicTab === 'emblem'
                        ? JWL_LOGOS.emblem
                        : heroPosterImg
                    )
                  }
                />
                <div 
                  onClick={() =>
                    setActivePosterModal(
                      activeGraphicTab === 'teams'
                        ? teamsPosterImg
                        : activeGraphicTab === 'emblem'
                        ? JWL_LOGOS.emblem
                        : heroPosterImg
                    )
                  }
                  className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center cursor-pointer"
                >
                  <span className="px-4 py-2 bg-white text-brand-black text-xs font-bold rounded-lg shadow-lg">
                    Click to Enlarge Fullscreen
                  </span>
                </div>
              </div>

              {/* Graphic Selector Switcher */}
              <div className="mt-4 flex items-center justify-center gap-2">
                <button
                  onClick={() => setActiveGraphicTab('hero')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                    activeGraphicTab === 'hero'
                      ? 'bg-brand-black text-white shadow-xs'
                      : 'bg-gray-100 text-brand-dark hover:bg-gray-200'
                  }`}
                >
                  Launch Poster
                </button>
                <button
                  onClick={() => setActiveGraphicTab('teams')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                    activeGraphicTab === 'teams'
                      ? 'bg-brand-black text-white shadow-xs'
                      : 'bg-gray-100 text-brand-dark hover:bg-gray-200'
                  }`}
                >
                  Teams Poster
                </button>
                <button
                  onClick={() => setActiveGraphicTab('emblem')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                    activeGraphicTab === 'emblem'
                      ? 'bg-brand-black text-white shadow-xs'
                      : 'bg-gray-100 text-brand-dark hover:bg-gray-200'
                  }`}
                >
                  Official Emblem
                </button>
              </div>
            </div>

            {/* Right Column: Founder Narrative */}
            <div className="lg:col-span-7 flex flex-col items-start">
              <span className="inline-block px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-brand-black bg-brand-yellow rounded-md mb-4">
                {JWL_FOUNDATION_NOTE.quoteBadge}
              </span>

              <h2 className="text-3xl md:text-4xl font-extrabold text-brand-black font-heading tracking-tight leading-tight mb-6">
                "{JWL_FOUNDATION_NOTE.headline}"
              </h2>

              <p className="text-brand-dark font-normal text-base md:text-lg leading-relaxed mb-6">
                {JWL_FOUNDATION_NOTE.story}
              </p>

              <div className="p-6 rounded-2xl bg-gray-50 border border-gray-100 w-full mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-brand-yellow flex items-center justify-center font-heading font-extrabold text-brand-black text-lg">
                    SF
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-brand-black text-base">
                      {JWL_FOUNDATION_NOTE.founders}
                    </h4>
                    <p className="text-xs text-brand-dark/80 font-medium">
                      {JWL_FOUNDATION_NOTE.foundersTitle} · Section 8 Non-Profit (Ranchi, Jharkhand)
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                <Button onClick={() => handleScrollToSection('fixtures-section')} variant="primary">
                  Explore Match Schedule
                </Button>
                <Link to="/about">
                  <Button variant="secondary">
                    Our Foundation Story
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 4. Meet The 6 Participating Teams Section */}
      <section id="teams-section" className="py-24 bg-gray-50 border-b border-gray-100 scroll-mt-20">
        <Container>
          <SectionHeading
            badge="Participating Clubs"
            title="Meet The 6 Teams of JWL 2026–27"
            subtitle="Six elite football clubs and academies competing for Jharkhand's most prestigious women's football title."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">
            {JWL_TEAMS.map((team) => (
              <div
                key={team.id}
                className={`bg-white rounded-2xl ${SHADOWS.card} border border-gray-100 p-6 flex flex-col justify-between hover:-translate-y-1 transition-all duration-300 relative overflow-hidden`}
              >
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-brand-yellow via-pink-400 to-brand-black" />

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-brand-black bg-brand-yellow/30 border border-brand-yellow/50 rounded-md">
                      {team.badge}
                    </span>
                    <span className="text-xs font-semibold text-brand-dark/70">
                      {team.origin}
                    </span>
                  </div>

                  <h3 className="text-xl font-heading font-extrabold text-brand-black mb-1">
                    {team.name}
                  </h3>
                  {team.fullName && (
                    <p className="text-xs text-brand-dark/80 font-medium mb-2">
                      {team.fullName}
                    </p>
                  )}

                  <p className="text-xs font-bold text-pink-600 italic mb-4">
                    "{team.motto}"
                  </p>

                  <p className="text-sm text-brand-dark/90 font-light leading-relaxed mb-6">
                    {team.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-gray-100 flex items-center justify-between text-xs">
                  <span className="font-semibold text-brand-black flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500" />
                    Confirmed Contender
                  </span>
                  <span className="text-brand-dark/60 font-medium">10 Fixtures</span>
                </div>
              </div>
            ))}
          </div>

          {/* Teams Poster Link */}
          <div className="mt-12 text-center">
            <button
              onClick={() => setActivePosterModal(teamsPosterImg)}
              className="inline-flex items-center gap-2 text-sm font-bold text-brand-black hover:text-yellow-700 bg-white px-5 py-3 rounded-xl border border-gray-200 shadow-xs hover:shadow-md transition-all cursor-pointer"
            >
              <svg className="w-4 h-4 text-brand-yellow" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              View Official "Meet The Teams" Poster Graphic
            </button>
          </div>
        </Container>
      </section>

      {/* 5. Match Schedule & Fixtures Section */}
      <section id="fixtures-section" className="py-24 bg-white border-b border-gray-100 scroll-mt-20">
        <Container>
          <SectionHeading
            badge="Official Match Schedule"
            title="Complete 30-Match Fixture Schedule"
            subtitle="Double round-robin league running across 10 match days at CAG Sports Complex, Hinoo, Ranchi."
            align="center"
          />

          {/* Leg Filter Tabs */}
          <div className="flex justify-center items-center gap-2 mt-8 mb-10">
            {['All', 'Leg 1', 'Leg 2'].map((leg) => (
              <button
                key={leg}
                onClick={() => setActiveLeg(leg)}
                className={`px-5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                  activeLeg === leg
                    ? 'bg-brand-black text-white shadow-md'
                    : 'bg-gray-100 text-brand-dark hover:bg-gray-200'
                }`}
              >
                {leg === 'All' ? 'All 10 Days (30 Matches)' : leg === 'Leg 1' ? 'Leg 1 (Days 1–5)' : 'Leg 2 (Days 6–10)'}
              </button>
            ))}
          </div>

          {/* Days Horizontal Carousel / Tab Selectors */}
          <div className="flex overflow-x-auto gap-2 pb-4 pt-1 mb-8 no-scrollbar">
            {filteredMatchDays.map((day) => {
              const isSelected = selectedDayNumber === day.dayNumber;
              return (
                <button
                  key={day.dayNumber}
                  onClick={() => setSelectedDayNumber(day.dayNumber)}
                  className={`flex-shrink-0 px-4 py-3 rounded-xl border text-left transition-all ${
                    isSelected
                      ? 'bg-brand-yellow text-brand-black border-brand-yellow font-bold shadow-md scale-102'
                      : 'bg-gray-50 hover:bg-gray-100 text-brand-dark border-gray-200 font-medium'
                  }`}
                >
                  <div className="text-[10px] uppercase tracking-wider opacity-75">
                    Day {day.dayNumber} · {day.dayOfWeek}
                  </div>
                  <div className="text-sm font-heading font-extrabold whitespace-nowrap">
                    {day.dateString}
                  </div>
                  <div className="text-[10px] font-semibold mt-0.5 opacity-90 truncate max-w-[120px]">
                    {day.tag}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Selected Match Day Card Display */}
          <div className="bg-gray-50 rounded-2xl border border-gray-200 p-6 sm:p-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-6 border-b border-gray-200 gap-2">
              <div>
                <span className="px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-brand-black bg-brand-yellow rounded-md mr-3">
                  Match Day {selectedDayData.dayNumber}
                </span>
                <span className="text-lg font-heading font-extrabold text-brand-black">
                  {selectedDayData.dateString} ({selectedDayData.dayOfWeek})
                </span>
              </div>
              <div className="text-xs font-semibold text-brand-dark/70">
                Venue: <strong className="text-brand-black font-semibold">CAG Sports Complex, Hinoo, Ranchi</strong>
              </div>
            </div>

            {/* 3 Matches of the Day */}
            <div className="space-y-4">
              {selectedDayData.matches.map((match, mIdx) => (
                <div
                  key={mIdx}
                  className="bg-white rounded-xl p-5 border border-gray-200 flex flex-col md:flex-row items-center justify-between gap-4 shadow-xs hover:border-brand-yellow transition-colors"
                >
                  {/* Time & Match Tag */}
                  <div className="flex items-center gap-3 w-full md:w-auto">
                    <span className="px-2.5 py-1 text-xs font-mono font-bold bg-gray-100 text-brand-black rounded-lg">
                      {match.matchId}
                    </span>
                    <div className="text-xs font-bold text-pink-600 flex items-center gap-1.5">
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <circle cx="12" cy="12" r="10" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2" />
                      </svg>
                      {match.time}
                    </div>
                  </div>

                  {/* Versus Teams Row */}
                  <div className="flex items-center justify-center gap-3 sm:gap-6 w-full md:w-auto flex-1 max-w-xl">
                    <div className="flex-1 text-right font-heading font-extrabold text-sm sm:text-base text-brand-black">
                      {match.team1}
                    </div>
                    <div className="px-3 py-1 bg-pink-500 text-white font-extrabold text-xs rounded-full uppercase tracking-wider shadow-xs">
                      VS
                    </div>
                    <div className="flex-1 text-left font-heading font-extrabold text-sm sm:text-base text-brand-black">
                      {match.team2}
                    </div>
                  </div>

                  {/* Status Indicator */}
                  <div className="w-full md:w-auto text-right">
                    <span className="inline-block px-3 py-1 bg-emerald-50 text-emerald-700 text-xs font-bold rounded-md border border-emerald-100">
                      Official Fixture
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Fixture Schedule Graphics Carousel */}
          <div className="mt-12">
            <h4 className="text-center font-heading font-bold text-base text-brand-black mb-4">
              Browse Official Match Schedule Graphics
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
              {JWL_POSTERS.fixturePosters.map((poster, pIdx) => (
                <div
                  key={pIdx}
                  onClick={() => setActivePosterModal(poster.image)}
                  className="rounded-xl overflow-hidden border border-gray-200 bg-gray-50 hover:border-brand-black transition-all cursor-pointer group shadow-xs"
                >
                  <img
                    src={poster.image}
                    alt={poster.title}
                    className="w-full h-36 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="p-2.5 text-center bg-white">
                    <p className="text-[11px] font-bold text-brand-black truncate">
                      {poster.title}
                    </p>
                    <span className="text-[10px] text-pink-600 font-semibold">View Graphic</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* 6. Host Stadium & Venue Interactive Map */}
      <section className="py-24 bg-gray-50 border-b border-gray-100">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left: Venue Information */}
            <div className="lg:col-span-5">
              <span className="inline-block px-3 py-1 text-xs font-bold uppercase tracking-wider text-brand-black bg-brand-yellow rounded-md mb-4">
                Tournament Host Venue
              </span>

              <h2 className="text-3xl md:text-4xl font-extrabold text-brand-black font-heading tracking-tight mb-4">
                {JWL_VENUE.name}
              </h2>

              <p className="text-brand-dark/90 text-sm leading-relaxed mb-6 font-light">
                Located in Hinoo, Ranchi, the CAG Sports Complex serves as the central battlefield for all 30 matches of the inaugural Jharkhand Women's League.
              </p>

              <div className="space-y-3 mb-6">
                <div className="flex items-start gap-3 text-xs text-brand-dark">
                  <span className="w-5 h-5 rounded-full bg-brand-yellow/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-brand-black" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </span>
                  <div>
                    <strong className="text-brand-black block">Address:</strong>
                    {JWL_VENUE.address} ({JWL_VENUE.landmarks})
                  </div>
                </div>

                <div className="flex items-start gap-3 text-xs text-brand-dark">
                  <span className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-emerald-700" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </span>
                  <div>
                    <strong className="text-brand-black block">Spectator Admission:</strong>
                    {JWL_VENUE.spectatorEntry} — All spectators, youth & families welcome.
                  </div>
                </div>
              </div>

              {/* Amenities List */}
              <div className="pt-4 border-t border-gray-200">
                <h4 className="text-xs font-bold uppercase tracking-wider text-brand-black mb-3">
                  Matchday Amenities & Facilities:
                </h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-brand-dark font-light">
                  {JWL_VENUE.amenities.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-yellow" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right: Interactive Leaflet Map */}
            <div className="lg:col-span-7">
              <JwlVenueMap />
            </div>
          </div>
        </Container>
      </section>

      {/* 7. Key Impact Pillars */}
      <section className="py-24 bg-white border-b border-gray-100">
        <Container>
          <SectionHeading
            badge="Tournament Mission"
            title="Beyond 90 Minutes: Transforming Women's Football"
            subtitle="The Jharkhand Women's League is engineered to create enduring pathways for rural sporting talent."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">
            {JWL_PILLARS.map((pillar, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-gray-50 border border-gray-100 hover:border-gray-200 transition-all flex flex-col justify-between"
              >
                <div>
                  <span className="inline-block px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-brand-black bg-brand-yellow rounded-md mb-4">
                    {pillar.badge}
                  </span>
                  <h3 className="text-lg font-heading font-extrabold text-brand-black mb-3">
                    {pillar.title}
                  </h3>
                  <p className="text-xs text-brand-dark/90 font-light leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 8. Stakeholders & Partners Grid with Official Logos */}
      <section className="py-24 bg-brand-black text-white border-b border-neutral-800">
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="inline-block px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-brand-yellow border border-brand-yellow/30 bg-brand-yellow/10 rounded-full mb-3">
              Official Collaboration
            </span>
            <h3 className="text-3xl md:text-4xl font-extrabold font-heading text-white mb-3">
              Organizers, Presenters & Key Supporters
            </h3>
            <p className="text-neutral-400 text-xs sm:text-sm font-light">
              United under the banner of #NariShaktiOnThePitch to transform women's football across Jharkhand.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
            {JWL_PARTNERS.map((partner, pIdx) => (
              <div
                key={pIdx}
                className="p-5 rounded-2xl bg-neutral-900/90 border border-neutral-800 text-center flex flex-col items-center justify-between hover:border-brand-yellow/50 transition-all duration-300 group shadow-sm hover:shadow-lg hover:-translate-y-1"
              >
                <span className="text-[10px] uppercase tracking-wider text-brand-yellow font-extrabold mb-3 block">
                  {partner.role}
                </span>

                {/* Logo or Typographic Monogram */}
                <div className="w-full h-16 flex items-center justify-center my-2 p-1.5">
                  {partner.logo ? (
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className="max-h-14 max-w-full object-contain filter group-hover:brightness-110 transition-all"
                    />
                  ) : partner.role === 'Presented by' ? (
                    <div className="px-3 py-1.5 rounded-lg bg-white text-brand-black text-center shadow-xs">
                      <div className="font-heading font-extrabold text-sm tracking-tight text-neutral-900 leading-none">
                        Knova<span className="text-pink-600">e</span>ne
                      </div>
                      <div className="text-[8px] uppercase tracking-wider font-bold text-neutral-500 mt-0.5">
                        A TRAKAMERICA CO.
                      </div>
                    </div>
                  ) : (
                    <div className="w-12 h-12 rounded-xl bg-neutral-800 border border-neutral-700 flex items-center justify-center font-heading font-extrabold text-brand-yellow text-sm">
                      {partner.name.split(' ').map(w => w[0]).slice(0, 3).join('')}
                    </div>
                  )}
                </div>

                <div className="mt-3">
                  <span className="text-xs sm:text-sm font-bold text-white leading-snug block">
                    {partner.name}
                  </span>
                  {partner.subLabel && (
                    <span className="text-[10px] text-pink-400 font-medium block mt-0.5">
                      {partner.subLabel}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 9. CSR & Support Call to Action */}
      <section className="py-24 bg-gradient-to-br from-yellow-50 via-white to-pink-50 border-b border-gray-100">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-brand-black bg-brand-yellow rounded-md mb-4">
              CSR & Philanthropic Collaboration
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-brand-black font-heading tracking-tight mb-6">
              Support the Future of Women’s Football in Jharkhand
            </h2>
            <p className="text-brand-dark font-light text-base md:text-lg leading-relaxed mb-8">
              Partner with <strong>Salience Foundation</strong> (Section 8 Company, 12A/80G certified, MCA CSR-1 registered) to sponsor athlete kits, grassroots scholarships, nutrition clinics, and rural scouting camps.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/partner">
                <Button variant="primary">
                  Partner with Us (CSR / Sponsorship)
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="secondary">
                  Contact Tournament Coordinators
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* 10. Frequently Asked Questions */}
      <section className="py-24 bg-white">
        <Container>
          <div className="max-w-3xl mx-auto">
            <SectionHeading
              badge="Spectator & Media Queries"
              title="Frequently Asked Questions"
              subtitle="Everything you need to know about attending and supporting the Jharkhand Women's League."
              align="center"
            />
            <div className="mt-12">
              <FAQAccordion items={JWL_FAQS} />
            </div>
          </div>
        </Container>
      </section>

      {/* Fullscreen Poster Lightbox Modal */}
      <AnimatePresence>
        {activePosterModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActivePosterModal(null)}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm p-4 md:p-8 flex items-center justify-center cursor-pointer"
          >
            <div className="relative max-w-4xl max-h-[90vh] overflow-auto rounded-2xl bg-black border border-white/20 p-2">
              <button
                onClick={() => setActivePosterModal(null)}
                className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-white/20 text-white hover:bg-white hover:text-black flex items-center justify-center font-bold text-sm transition-all"
              >
                ✕
              </button>
              <img
                src={activePosterModal}
                alt="Enlarged Tournament Graphic"
                className="w-full h-auto max-h-[85vh] object-contain rounded-xl"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default JharkhandWomensLeaguePage;
