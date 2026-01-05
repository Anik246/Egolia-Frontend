'use client';

import { useEffect, useState } from 'react';

interface ScrollPosition {
  scrollY: number;
  scrollX: number;
  scrollDirection: 'up' | 'down' | null;
}

export function useScrollPosition(): ScrollPosition {
  const [scrollPosition, setScrollPosition] = useState<ScrollPosition>({
    scrollY: 0,
    scrollX: 0,
    scrollDirection: null,
  });

  useEffect(() => {
    if (typeof window === 'undefined') return;

    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const currentScrollX = window.scrollX;
      const dir = currentScrollY > lastScrollY ? 'down' : 'up';

      setScrollPosition({
        scrollY: currentScrollY,
        scrollX: currentScrollX,
        scrollDirection: currentScrollY === lastScrollY ? null : dir,
      });

      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return scrollPosition;
}
