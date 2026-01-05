import React from 'react';
import { cn } from '@/lib/utils';

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'primary' | 'success' | 'warning' | 'error' | 'gold';
}

const variants = {
  default: 'bg-white/5 text-gray-200 border-white/10',
  primary: 'bg-primary-500/10 text-primary-300 border-primary-500/20',
  success: 'bg-green-500/10 text-green-300 border-green-500/20',
  warning: 'bg-yellow-500/10 text-yellow-300 border-yellow-500/20',
  error: 'bg-red-500/10 text-red-300 border-red-500/20',
  gold: 'bg-[#f6c453]/10 text-[#f6c453] border-[#f6c453]/25',
};

export const Badge: React.FC<BadgeProps> = ({ children, className, variant = 'default' }) => {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full border px-3 py-1 text-sm font-medium',
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
};
