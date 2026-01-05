import {
  Linkedin,
  Twitter,
  Instagram,
  Youtube,
  Building2,
  type LucideIcon,
} from 'lucide-react';

export type ContactSocial = {
  label: string;
  href: string;
  icon: LucideIcon;
};

export type ContactInfo = {
  brandName: string;
  brandSub: string;
  address: string;
  email: string;
  phone: string;
  inquiryTypes: string[];
  socials: ContactSocial[];
};

export const CONTACT_INFO: ContactInfo = {
  brandName: 'EGOLIA',
  brandSub: 'Group',
  address: '123 Investment Blvd, Suite 456, Business City, NY 70001',
  email: 'info@egoliagroup.com',
  phone: '+1 (234) 557 9900',
  inquiryTypes: ['General', 'Investor Access', 'Partnership', 'Media'],
  socials: [
    { label: 'LinkedIn', href: '#', icon: Linkedin },
    { label: 'Twitter', href: '#', icon: Twitter },
    { label: 'Instagram', href: '#', icon: Instagram },
    { label: 'YouTube', href: '#', icon: Youtube },
  ],
};
