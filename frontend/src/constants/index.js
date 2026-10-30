/**
 * Frontend Application Constants
 */

export const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';
export const FORMSPREE_FALLBACK_URL = import.meta.env.VITE_FORMSPREE_URL || 'https://formspree.io/f/xwpqjpaw';
export const RESUME_URL = import.meta.env.VITE_RESUME_URL || '/Resume.pdf';

export const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Education', href: '#education' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Contact', href: '#contact' },
];

