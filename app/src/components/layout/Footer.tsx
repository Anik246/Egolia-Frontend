import React from 'react';
import { Container } from '@ui/Container';
import { SITE_CONFIG } from '@lib/constants';

const LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Investments', href: '#investments' },
  { label: 'News', href: '#news' },
  { label: 'Contact', href: '#contact' },
] as const;

export function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-black/25 backdrop-blur">
      {/* subtle gold top glow */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-[#f6c453]/35 to-transparent" />

      <Container className="py-10">
        <div className="flex flex-col items-center gap-4">
          {/* mini brand row */}
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-full border border-white/10 bg-white/5 grid place-items-center overflow-hidden">
              <div className="h-full w-full bg-linear-to-br from-[#2da8ff] via-[#061425] to-[#f6c453]" />
            </div>
            <div className="leading-none">
              <div className="text-sm font-semibold tracking-[0.16em] text-white/90">
                {SITE_CONFIG.shortName ?? 'EGOLIA'}
              </div>
              <div className="mt-1 text-[10px] uppercase tracking-[0.5em] text-white/55">
                GROUP
              </div>
            </div>
          </div>

          {/* links */}
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-xs font-medium tracking-wide text-white/60 hover:text-white transition"
              >
                {l.label}
              </a>
            ))}
          </div>

          {/* copyright */}
          <p className="text-xs text-white/55 text-center">
            © {new Date().getFullYear()} {SITE_CONFIG.name}. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
