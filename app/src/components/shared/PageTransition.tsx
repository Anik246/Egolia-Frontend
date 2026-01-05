'use client';

import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import type { ReactNode } from 'react';

export default function PageTransition({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  return (
    <motion.div
      key={pathname}
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ type: 'tween', ease: 'easeInOut', duration: 0.25 }}
      className="flex min-h-0 flex-1 flex-col"
    >
      {children}
    </motion.div>
  );
}
