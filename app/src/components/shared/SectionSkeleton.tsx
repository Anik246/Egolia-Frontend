import React from 'react';
import { Container } from '@/components/ui/Container';

export const SectionSkeleton: React.FC = () => {
  return (
    <section className="py-20 lg:py-32">
      <Container>
        <div className="animate-pulse">
          <div className="mx-auto mb-4 h-4 w-24 rounded bg-white/10" />
          <div className="mx-auto mb-4 h-10 w-64 rounded bg-white/10" />
          <div className="mx-auto mb-12 h-4 w-96 max-w-full rounded bg-white/10" />
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-64 rounded-2xl bg-white/10" />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};
