'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

import { Container } from '@ui/Container';
import { investmentAreas } from '@data/investmentAreas';

export function InvestmentAreasSection() {
  return (
    <section id="investments" className="relative scroll-mt-24">
      <Container className="py-14">
        {/* Header */}
        <div className="mx-auto max-w-[820px] text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.45 }}
            transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
            className="mb-5 flex justify-center"
          >
            <div
              className="
                inline-flex items-center gap-2
                rounded-full
                border border-white/12
                bg-black/25
                px-4 py-2
                text-[11px] font-semibold tracking-[0.18em]
                text-white/80
                backdrop-blur-xl
              "
            >
              <Sparkles className="h-4 w-4 text-[#f6c453]" />
              OUR FOCUS
            </div>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.45 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl font-semibold tracking-[-0.02em] text-white md:text-5xl"
          >
            Our Investment{' '}
            <span className="bg-linear-to-r from-[#b77b2b] via-[#f6c453] to-[#ffe2a1] bg-clip-text text-transparent">
              Areas
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.45 }}
            transition={{ duration: 0.85, delay: 0.06, ease: [0.16, 1, 0.3, 1] }}
            className="mt-4 text-[15px] leading-relaxed text-white/80 md:text-[16px]"
          >
            Diversified exposure designed for resilient, long-term growth.
          </motion.p>

          <div className="mt-7 flex justify-center">
            <div className="h-px w-56 bg-linear-to-r from-transparent via-[#f6c453]/55 to-transparent" />
          </div>
        </div>

        {/* Cards  */}
<div className="mx-auto mt-10 grid max-w-[1200px] gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {investmentAreas.map((a, i) => (
            <motion.div
              key={a.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1], delay: 0.06 * i }}
              className="mx-auto w-full max-w-[390px]"
            >
              <Link
                href={a.href}
                className="
                  block focus:outline-none
                  focus-visible:ring-2 focus-visible:ring-[#f6c453]/55 focus-visible:ring-offset-0
                  rounded-2xl
                "
                aria-label={`Open ${a.title}`}
              >
                <div
                  className="
                    relative h-[270px] overflow-hidden rounded-2xl
                    border border-white/12
                    bg-black/25
                    backdrop-blur-2xl
                    shadow-[0_18px_55px_rgba(0,0,0,0.55)]
                  "
                >
                  {/* subtle premium top hairline */}
                  <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-white/18 to-transparent" />

                  {/* small corner glow (very subtle, no hover) */}
                  <div className="pointer-events-none absolute -right-24 -top-24 h-56 w-56 rounded-full bg-[#f6c453]/10 blur-3xl" />

                  {/* Image (smaller height) */}
                  <div className="relative h-[155px] w-full">
                    <Image
                      src={a.imageSrc}
                      alt={a.imageAlt ?? a.title}
                      fill
                      sizes="(min-width: 1024px) 320px, (min-width: 640px) 320px, 100vw"
                      className="object-cover object-center"
                      priority={i < 3}
                    />
                    {/* slight vignette like screenshot */}
                    <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/65 via-black/10 to-transparent" />
                    {/* image bottom divider */}
                    <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-white/10" />
                  </div>

                  {/* Content */}
                  <div className="relative px-4 pb-4 pt-4">
                    <div className="text-[18px] font-semibold tracking-[-0.01em] text-white">
                      {a.title}
                    </div>

                    <div className="mt-2 h-px w-20 bg-linear-to-r from-[#f6c453]/70 to-transparent" />

                    <p className="mt-3 text-[13.5px] leading-relaxed text-white/72">
                      {a.desc}
                    </p>
                  </div>

                  {/* bottom soft fade */}
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-10 bg-linear-to-t from-black/20 to-transparent" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
