'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'glass' | 'gradient' | 'minimal';
  hover?: boolean;
  padding?: 'sm' | 'md' | 'lg' | 'none';
  glow?: boolean;
  goldEdge?: boolean; // new: adds subtle gold “edge lines” like the template
}

const variants = {
  default:
    'bg-background-card/80 backdrop-blur-sm border border-white/10 hover:border-primary-500/25',
  glass:
    'bg-white/[0.03] backdrop-blur-xl border border-white/[0.10] hover:border-white/20 hover:bg-white/[0.05]',
  gradient:
    'bg-linear-to-br from-primary-500/5 via-transparent to-accent-teal/5 border border-primary-500/10 hover:border-primary-500/25',
  minimal: 'bg-transparent border border-white/10 hover:border-white/20',
};

const paddings = {
  none: '',
  sm: 'p-4',
  md: 'p-6',
  lg: 'p-8',
};

export const Card: React.FC<CardProps> = ({
  children,
  className,
  variant = 'default',
  hover = true,
  padding = 'md',
  glow = false,
  goldEdge = false,
}) => {
  return (
    <motion.div
      className={cn(
        'relative rounded-2xl transition-all duration-500 ease-out',
        variants[variant],
        paddings[padding],
        hover && 'hover:shadow-xl hover:shadow-black/30',
        glow &&
          'before:absolute before:inset-0 before:rounded-2xl ' +
            'before:bg-linear-to-br before:from-white/10 before:to-transparent ' +
            'before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-500',
        goldEdge && 'overflow-hidden',
        className
      )}
      whileHover={hover ? { y: -6, scale: 1.01 } : undefined}
      transition={{ duration: 0.3, ease: 'easeOut' }}
    >
      {goldEdge && (
        <>
          <div className="pointer-events-none absolute inset-y-3 left-0 w-px bg-linear-to-b from-transparent via-[#f6c453]/55 to-transparent" />
          <div className="pointer-events-none absolute inset-y-3 right-0 w-px bg-linear-to-b from-transparent via-[#f6c453]/55 to-transparent" />
          <div className="pointer-events-none absolute inset-y-6 left-0 w-6 bg-linear-to-r from-[#f6c453]/10 to-transparent blur-md opacity-80" />
          <div className="pointer-events-none absolute inset-y-6 right-0 w-6 bg-linear-to-l from-[#f6c453]/10 to-transparent blur-md opacity-80" />
        </>
      )}

      {children}
    </motion.div>
  );
};

export const CardHeader: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className,
}) => <div className={cn('mb-4', className)}>{children}</div>;

export const CardTitle: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className,
}) => <h3 className={cn('text-xl font-semibold text-white tracking-tight', className)}>{children}</h3>;

export const CardDescription: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className,
}) => <p className={cn('mt-2 text-gray-300/80 leading-relaxed', className)}>{children}</p>;

export const CardContent: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className,
}) => <div className={cn('', className)}>{children}</div>;
