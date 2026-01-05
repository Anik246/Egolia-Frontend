'use client';

import React, { useEffect, useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

import { cn } from '@lib/utils';
import { Container } from '@ui/Container';
import { Button } from '@ui/Button';
import { NAV_LINKS, CTA_LINKS, SITE_CONFIG } from '@lib/constants';

type NavHref = (typeof NAV_LINKS)[number]['href'];

export default function Navbar() {
  const nav = useMemo(() => NAV_LINKS, []);
  const [open, setOpen] = useState(false);
  const [activeHref, setActiveHref] = useState<NavHref>('#home');

  useEffect(() => {
    const ids = nav
      .map((n) => n.href)
      .filter((h) => h.startsWith('#'))
      .map((h) => h.slice(1));

    const nodes = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    if (!nodes.length || typeof window === 'undefined' || !('IntersectionObserver' in window)) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0))[0];

        const id = visible?.target?.id;
        if (id) setActiveHref(`#${id}` as NavHref);
      },
      {
        root: null,
        threshold: [0.2, 0.35, 0.5, 0.65, 0.8],
        rootMargin: '-25% 0px -65% 0px',
      }
    );

    nodes.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [nav]);

  const onNavClick = (href: string) => {
    setOpen(false);

    if (!href.startsWith('#')) return;

    setActiveHref(href as NavHref);

    const id = href.slice(1);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header className="sticky top-0 z-50">
      <Container className="py-3">
        {/* Transparent + blur strip */}
        <div
          className={cn(
            'relative',
            'h-[84px]',
            'bg-transparent',
            'backdrop-blur-xl',
            // subtle tint ONLY when blur is available (keeps bg image visible)
            'supports-[backdrop-filter]:bg-black/15',
            'mask-[linear-gradient(to_right,transparent,black_7%,black_93%,transparent)]',
            '[-webkit-mask-image:linear-gradient(to_right,transparent,black_7%,black_93%,transparent)]'
          )}
        >
          {/* soft inner sheen */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.10),transparent_55%)]"
          />

          {/* top & bottom hairlines */}
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-white/22 to-transparent" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-linear-to-r from-transparent via-white/14 to-transparent" />

          <div className="relative grid h-full grid-cols-3 items-center px-5 lg:px-10">
            {/* LEFT: Logo */}
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                onNavClick('#home');
              }}
              className="flex items-center gap-3"
            >
              <div className="relative h-11 w-11 overflow-hidden rounded-full">
                {/* placeholder only - swap with Image later */}
                <div className="absolute inset-0 bg-linear-to-br from-[#2da8ff] via-[#061425] to-[#f6c453]" />
              </div>

              <div className="leading-none">
                <div className="text-[20px] sm:text-[24px] lg:text-[28px] font-semibold tracking-[0.18em] text-white/90">
                  {SITE_CONFIG.shortName ?? 'EGOLIA'}
                </div>
                <div className="mt-1 text-[10px] lg:text-[11px] uppercase tracking-[0.55em] text-white/55">
                  GROUP
                </div>
              </div>
            </a>

            {/* CENTER: Nav */}
            <nav className="hidden md:flex items-center justify-center gap-10 lg:gap-14">
              {nav.map((item) => {
                const isActive = activeHref === item.href;

                return (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={(e) => {
                      // Smooth scroll + close mobile
                      if (item.href.startsWith('#')) {
                        e.preventDefault();
                        onNavClick(item.href);
                      }
                    }}
                    className={cn(
                      'relative text-[15px] font-semibold tracking-[0.03em] transition',
                      isActive ? 'text-white' : 'text-white/80 hover:text-white'
                    )}
                    style={{ textShadow: '0 0 14px rgba(255,255,255,0.10)' }}
                  >
                    {/* subtle hover glow */}
                    <span className="pointer-events-none absolute -inset-x-4 -inset-y-3 rounded-xl bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.10),transparent_65%)] opacity-0 hover:opacity-100 transition-opacity" />

                    {item.label}

                    {/* active underline */}
                    <span
                      aria-hidden
                      className={cn(
                        'pointer-events-none absolute left-1/2 -translate-x-1/2 -bottom-3 h-px w-10',
                        isActive
                          ? 'bg-linear-to-r from-transparent via-[#f6c453]/80 to-transparent opacity-100'
                          : 'opacity-0'
                      )}
                    />
                  </a>
                );
              })}
            </nav>

            {/* RIGHT: Login + Mobile Toggle */}
            <div className="flex items-center justify-end gap-3">
              <Button
                as="link"
                href={CTA_LINKS.investorLogin}
                variant="outline"
                size="sm"
                className={cn(
                  'hidden sm:inline-flex',
                  'border-[#c79a4a]/70 text-[#f6c453]',
                  'shadow-[inset_0_0_0_1px_rgba(246,196,83,0.20)]',
                  'hover:border-[#f6c453]/85 hover:bg-[#f6c453]/10'
                )}
              >
                INVESTOR LOGIN
              </Button>

              <button
                type="button"
                className={cn(
                  'md:hidden',
                  'h-10 w-10 rounded-md',
                  'border border-white/10 bg-white/5',
                  'grid place-items-center',
                  'text-white/85 hover:text-white hover:bg-white/10 transition'
                )}
                onClick={() => setOpen((v) => !v)}
                aria-label="Toggle menu"
                aria-expanded={open}
              >
                {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>

          {/* Mobile menu */}
          <AnimatePresence initial={false}>
            {open && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.22, ease: 'easeInOut' }}
                className="md:hidden overflow-hidden"
              >
                <div className="px-5 pb-5 pt-2">
                  <div className="rounded-2xl border border-white/10 bg-black/25 backdrop-blur-xl">
                    <div className="flex flex-col p-4">
                      {nav.map((item) => {
                        const isActive = activeHref === item.href;

                        return (
                          <a
                            key={item.href}
                            href={item.href}
                            onClick={(e) => {
                              if (item.href.startsWith('#')) {
                                e.preventDefault();
                                onNavClick(item.href);
                              } else {
                                setOpen(false);
                              }
                            }}
                            className={cn(
                              'rounded-xl px-3 py-3 text-sm font-semibold transition',
                              isActive
                                ? 'bg-white/6 text-white'
                                : 'text-white/80 hover:text-white hover:bg-white/5'
                            )}
                          >
                            {item.label}
                          </a>
                        );
                      })}

                      <Button
                        as="link"
                        href={CTA_LINKS.investorLogin}
                        variant="outline"
                        size="sm"
                        className={cn(
                          'mt-3 w-full',
                          'border-[#c79a4a]/70 text-[#f6c453]',
                          'shadow-[inset_0_0_0_1px_rgba(246,196,83,0.20)]',
                          'hover:border-[#f6c453]/85 hover:bg-[#f6c453]/10'
                        )}
                        onClick={() => setOpen(false)}
                      >
                        INVESTOR LOGIN
                      </Button>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </Container>
    </header>
  );
}
