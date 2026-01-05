'use client';

import React, { useEffect, useRef, useState } from 'react';
import { useIntersectionObserver } from '@hooks/useIntersectionObserver';

interface AnimatedCounterProps {
  end: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  className?: string;
  style?: React.CSSProperties;
}

function formatNumber(value: number, decimals: number) {
  const fixed = value.toFixed(decimals);
  const [int, dec] = fixed.split('.');
  const withCommas = int.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  return dec ? `${withCommas}.${dec}` : withCommas;
}

export const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  end,
  duration = 2000,
  prefix = '',
  suffix = '',
  decimals = 0,
  className,
  style,
}) => {
  const [count, setCount] = useState(0);

  // ✅ Make the hook ref type compatible with <span>
  const { ref, isIntersecting } = useIntersectionObserver<HTMLSpanElement>({
    threshold: 0.5,
    freezeOnceVisible: true,
  });

  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!isIntersecting || hasAnimated.current) return;

    hasAnimated.current = true;
    let startTime: number | null = null;

    const tick = (ts: number) => {
      if (!startTime) startTime = ts;
      const progress = Math.min((ts - startTime) / duration, 1);
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);

      setCount(easeOutQuart * end);

      if (progress < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  }, [isIntersecting, end, duration]);

  return (
    <span ref={ref} className={className} style={style}>
      {prefix}
      {formatNumber(count, decimals)}
      {suffix}
    </span>
  );
};
