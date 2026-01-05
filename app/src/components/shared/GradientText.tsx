import React from 'react';
import { cn } from '@/lib/utils';

interface GradientTextProps {
  children: React.ReactNode;
  className?: string;
  as?: 'span' | 'h1' | 'h2' | 'h3' | 'p';
  tone?: 'teal' | 'gold';
}

export const GradientText: React.FC<GradientTextProps> = ({
  children,
  className,
  as: Component = 'span',
  tone = 'teal',
}) => {
  const toneClass =
    tone === 'gold'
      ? 'bg-linear-to-r from-[#f6c453] via-[#ffd889] to-[#dca636]'
      : 'bg-linear-to-r from-primary-400 via-accent-cyan to-accent-teal';

  return (
    <Component className={cn(toneClass, 'bg-clip-text text-transparent', className)}>
      {children}
    </Component>
  );
};
