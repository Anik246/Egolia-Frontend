export const THEME = {
  gold: '#f6c453',
  goldDeep: '#dca636',
} as const;

export const SITE_CONFIG = {
  name: 'Egolia Group',
  shortName: 'EGOLIA',
  description: 'Investment firm for diversified, sustainable growth.',
  url: 'https://example.com',
  email: 'info@example.com',
  supportEmail: 'support@example.com',
} as const;

export const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Investments', href: '#investments' },
  { label: 'News', href: '#news' },
  { label: 'Contact', href: '#contact' },
] as const;

export const CTA_LINKS = {
  investorLogin: '/login',
  requestAccess: '/request-access',
} as const;

export const SOCIAL_LINKS = {
  twitter: '',
  linkedin: '',
  telegram: '',
  discord: '',
  medium: '',
} as const;

export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
} as const;

export const ANIMATION_DURATION = {
  fast: 0.2,
  normal: 0.3,
  slow: 0.5,
} as const;
