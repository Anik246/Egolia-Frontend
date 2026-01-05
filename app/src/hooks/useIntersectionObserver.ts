'use client';

import { useEffect, useRef, useState, type RefObject } from 'react';

interface UseIntersectionObserverOptions {
  threshold?: number | number[];
  root?: Element | null;
  rootMargin?: string;
  freezeOnceVisible?: boolean;
}

interface UseIntersectionObserverReturn<T extends Element> {
  ref: RefObject<T | null>;
  isIntersecting: boolean;
  entry: IntersectionObserverEntry | null;
}

export function useIntersectionObserver<T extends Element = HTMLDivElement>(
  options: UseIntersectionObserverOptions = {}
): UseIntersectionObserverReturn<T> {
  const {
    threshold = 0.1,
    root = null,
    rootMargin = '0px',
    freezeOnceVisible = true,
  } = options;

  const ref = useRef<T | null>(null);
  const [entry, setEntry] = useState<IntersectionObserverEntry | null>(null);
  const [isIntersecting, setIsIntersecting] = useState(false);
  const frozen = useRef(false);

  useEffect(() => {
    const node = ref.current;
    const hasIOSupport = typeof window !== 'undefined' && 'IntersectionObserver' in window;

    if (!hasIOSupport || !node || frozen.current) return;

    const observer = new IntersectionObserver(
      ([e]) => {
        setEntry(e);
        setIsIntersecting(e.isIntersecting);

        if (e.isIntersecting && freezeOnceVisible) {
          frozen.current = true;
          observer.disconnect();
        }
      },
      { threshold, root, rootMargin }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold, root, rootMargin, freezeOnceVisible]);

  return { ref, isIntersecting, entry };
}
