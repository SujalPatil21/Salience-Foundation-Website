/**
 * Design Tokens for Salience Foundation Website
 * Centralizes UI constants to ensure consistency and ease of future transformation.
 */

export const COLORS = {
  // Brand Colors (Phase 2 - Yellow and White dominant)
  primary: '#F3EA00',       // Brand Yellow Accent
  secondary: '#B6B137',     // Brand Olive Accent
  dark: '#575757',          // Dark gray neutral
  black: '#111111',         // Primary dark text/base
  white: '#FFFFFF',         // Dominant background color
  
  // Tailwind Utility Classes mapping for quick reuse
  tailwind: {
    primaryText: 'text-brand-yellow',
    primaryBg: 'bg-brand-yellow',
    primaryHoverBg: 'hover:bg-yellow-400',
    primaryBorder: 'border-brand-yellow',
    glowGradient: 'from-brand-yellow/20 to-transparent',
    glowGradientAlt: 'from-brand-yellow/10 via-brand-olive/10 to-transparent',
  }
};

export const BORDER_RADIUS = {
  button: 'rounded-full',
  card: 'rounded-2xl',
};

export const SHADOWS = {
  button: 'shadow-lg',
  card: 'shadow-xl hover:shadow-2xl transition-shadow duration-300',
};

export const TRANSITIONS = {
  default: 'transition-all duration-300 ease-in-out',
  slow: 'transition-all duration-500 ease-in-out',
  glow: 'transition duration-1000 group-hover:duration-200',
};

export const CONTAINER = {
  maxWidth: 'max-w-7xl',
  maxWidthHero: 'max-w-5xl',
  padding: 'px-6 lg:px-12',
};

export const Z_INDEX = {
  videoBg: 'z-0',
  overlay: 'z-10',
  content: 'z-20',
};

export const TYPOGRAPHY = {
  fontFamily: "'Inter', sans-serif",
  h1: 'text-4xl md:text-6xl lg:text-7xl font-extrabold font-heading tracking-tight',
  h2: 'text-3xl md:text-5xl font-bold font-heading tracking-tight',
  body: 'text-base md:text-lg font-light leading-relaxed',
};
