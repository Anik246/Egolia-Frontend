import type { LucideIcon } from 'lucide-react';

export interface NavItem {
  label: string;
  href: string;
}

export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  cta?: { label: string; href: string };
  buttonClass?: string;
}

export interface ProcessStep {
  id: string;
  stepNumber: number;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  linkedIn?: string;
  twitter?: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface RoadmapPhase {
  id: string;
  quarter: string;
  year: string;
  title: string;
  description: string;
  items: string[];
  status: 'completed' | 'current' | 'upcoming';
}

export interface TokenAllocation {
  id: string;
  label: string;
  percentage: number;
  color: string;
  description: string;
}

export interface Partner {
  id: string;
  name: string;
  logo: string;
}

export interface SecurityFeature {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface Stat {
  id: string;
  label: string;
  value: string;
  prefix?: string;
  suffix?: string;
}

/** UI */
export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'gold';
export type ButtonSize = 'sm' | 'md' | 'lg';

export interface SectionProps {
  id?: string;
  className?: string;
}
