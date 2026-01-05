'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { cn, fadeInUp } from '@lib/utils';
import { GradientText } from '@shared/GradientText';


interface SectionHeaderProps {
  tag?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  className?: string;
  highlight?: 'none' | 'gold' | 'teal';
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  tag,
  title,
  description,
  align = 'center',
  className,
  highlight = 'none',
}) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-100px' }}
      variants={fadeInUp}
      className={cn('mb-16 lg:mb-20', align === 'center' && 'text-center', className)}
    >
      {tag && (
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-4 inline-block text-sm font-medium tracking-widest uppercase text-[#f6c453]"
        >
          {tag}
        </motion.span>
      )}

      {highlight === 'none' ? (
        <h2
          className={cn(
            'font-display text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl',
            align === 'center' && 'mx-auto',
            'text-white'
          )}
        >
          {title}
        </h2>
      ) : (
        <GradientText
          as="h2"
          tone={highlight === 'gold' ? 'gold' : 'teal'}
          className={cn(
            'font-display text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl',
            align === 'center' && 'mx-auto'
          )}
        >
          {title}
        </GradientText>
      )}

      {description && (
        <p className={cn('mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-gray-300/80')}>
          {description}
        </p>
      )}
    </motion.div>
  );
};
