'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight } from 'lucide-react';

import { Container } from '@ui/Container';
import { Button } from '@ui/Button';
import { AnimatedCounter } from '@shared/AnimatedCounter';
import { heroStats } from '@data/hero';

const GOLD_GRAD =
  'bg-linear-to-r from-[#b77b2b] via-[#f6c453] to-[#ffe2a1] bg-clip-text text-transparent';

export function HeroSection() {
  return (
    <section id="home" className="relative">
      <Container className="relative py-16 pt-24 md:py-20 md:pt-28">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          {/* Left */}
          <div className="lg:col-span-6">
            {/* Premium badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.45, ease: 'easeOut' }}
              className="mb-6 inline-flex"
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/5 px-4 py-2 text-[12px] font-semibold tracking-[0.18em] text-white/85 backdrop-blur-md">
                <Sparkles className="h-4 w-4 text-[#f6c453]" />
                LONG-TERM VALUE • DISCIPLINED CAPITAL
              </span>
            </motion.div>

            {/* Heading (gradient vibes) */}
            <div className="relative">
              {/* Local glow behind headline */}
              <div
                aria-hidden
                className="pointer-events-none absolute -left-10 -top-10 h-44 w-44 rounded-full blur-3xl opacity-60"
                style={{
                  background:
                    'radial-gradient(circle, rgba(246,196,83,0.22) 0%, rgba(246,196,83,0.10) 35%, transparent 70%)',
                }}
              />
              <div
                aria-hidden
                className="pointer-events-none absolute -left-6 top-10 h-40 w-40 rounded-full blur-3xl opacity-45"
                style={{
                  background:
                    'radial-gradient(circle, rgba(45,168,255,0.18) 0%, rgba(45,168,255,0.08) 38%, transparent 70%)',
                }}
              />

              <motion.h1
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.45, ease: 'easeOut' }}
                className="text-[44px] leading-[1.06] font-semibold tracking-[-0.02em] md:text-[60px] md:leading-[1.05]"
              >
                <span className="text-white/95">Empowering </span>
                <span className={GOLD_GRAD}>Growth.</span>
                <br />
                <span className="text-white/95">Enabling </span>
                <span className={GOLD_GRAD}>Innovation.</span>
              </motion.h1>

              {/* Premium accent line */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 0.5, delay: 0.08, ease: 'easeOut' }}
                className="mt-5"
              >
                <div className="h-px w-56 bg-linear-to-r from-transparent via-[#f6c453]/55 to-transparent" />
              </motion.div>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.45, delay: 0.06, ease: 'easeOut' }}
              className="mt-6 max-w-[560px] text-[15px] leading-relaxed text-white/72"
            >
              We build durable outcomes through disciplined underwriting, research-led strategy,
              and long-term partnership. Diversified exposure across real assets, operating
              businesses, and structured opportunities.
            </motion.p>

            {/* CTA (moved up after subtitle) */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.45, delay: 0.12, ease: 'easeOut' }}
              className="mt-8 flex items-center gap-4"
            >
              <Button
                as="link"
                href="#contact"
                size="md"
                variant="secondary"
                rightIcon={<ArrowRight className="h-4 w-4" />}
                className="
                  rounded-md
                  text-[12px] font-semibold tracking-[0.14em]
                  text-[#1b1206]
                  bg-linear-to-r from-[#b77b2b] via-[#f6c453] to-[#ffe2a1]
                  border border-[#f6c453]/55
                  shadow-[0_10px_30px_rgba(246,196,83,0.18)]
                  hover:brightness-105
                "
              >
                REQUEST ACCESS
              </Button>

              <a
                href="#about"
                className="text-[12px] font-semibold tracking-[0.14em] text-white/70 hover:text-white transition"
              >
                LEARN MORE
              </a>
            </motion.div>
          </div>

          {/* Right */}
          <div className="flex lg:col-span-6 lg:justify-end">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              whileHover={{ scale: 1.01 }}
              className="
                relative w-full max-w-[480px]
                overflow-hidden rounded-2xl
                bg-transparent
                backdrop-blur-2xl backdrop-saturate-200
                ring-1 ring-white/18
                shadow-[0_24px_70px_rgba(0,0,0,0.60),0_0_0_1px_rgba(255,255,255,0.06),0_0_70px_rgba(246,196,83,0.22)]
              "
            >
              {/* Outer glow */}
              <div className="pointer-events-none absolute -inset-10 blur-3xl opacity-80">
                <div className="absolute left-[-6%] top-[10%] h-64 w-64 rounded-full bg-[rgba(90,160,255,0.16)]" />
                <div className="absolute right-[-10%] bottom-[-14%] h-72 w-72 rounded-full bg-[rgba(246,196,83,0.26)]" />
              </div>

              {/* Readability layers (inside the card only) */}
              <div className="pointer-events-none absolute inset-0 bg-black/45" />
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_28%_18%,rgba(255,255,255,0.10),transparent_55%)]" />

              {/* Gold edge fades */}
              <div className="pointer-events-none absolute inset-y-4 left-0 w-px bg-linear-to-b from-transparent via-[#f6c453]/60 to-transparent" />
              <div className="pointer-events-none absolute inset-y-4 right-0 w-px bg-linear-to-b from-transparent via-[#f6c453]/60 to-transparent" />
              <div className="pointer-events-none absolute inset-y-7 left-0 w-7 bg-linear-to-r from-[#f6c453]/16 to-transparent blur-md opacity-85" />
              <div className="pointer-events-none absolute inset-y-7 right-0 w-7 bg-linear-to-l from-[#f6c453]/16 to-transparent blur-md opacity-85" />

              {/* Top hairline */}
              <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-white/18 to-transparent" />

              <div className="relative p-6 md:p-7">
                <div className="flex items-center justify-between">
                  <div className="text-[20px] font-medium tracking-[0.02em] text-white/92">
                    Investor Snapshot
                  </div>

                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-semibold tracking-[0.16em] text-white/70 backdrop-blur-md">
                    OVERVIEW
                  </span>
                </div>

                <div className="mt-3 h-px w-full bg-linear-to-r from-transparent via-white/14 to-transparent" />

                <div className="mt-5 grid grid-cols-2 gap-x-8 gap-y-7">
                  <div>
                    <AnimatedCounter
                      end={heroStats.aumB}
                      decimals={1}
                      prefix="$"
                      suffix="B"
                      duration={950}
                      className="text-[42px] leading-none font-semibold text-white/95 md:text-[44px] [text-shadow:0_0_18px_rgba(255,255,255,0.12)]"
                    />
                    <div className="mt-1.5 text-[12px] text-white/70">Assets Under Management</div>
                  </div>

                  <div>
                    <AnimatedCounter
                      end={heroStats.portfolio}
                      decimals={0}
                      prefix="+"
                      duration={900}
                      className="text-[42px] leading-none font-semibold text-[#f6c453] md:text-[44px] [text-shadow:0_0_22px_rgba(246,196,83,0.28)]"
                    />
                    <div className="mt-1.5 text-[12px] text-white/70">Portfolio Companies</div>
                  </div>

                  <div className="col-span-2 -mt-1">
                    <div className="h-px w-full bg-linear-to-r from-transparent via-white/14 to-transparent" />
                  </div>

                  <div className="-mt-4">
                    <AnimatedCounter
                      end={heroStats.years}
                      decimals={0}
                      prefix="+"
                      duration={900}
                      className="text-[42px] leading-none font-semibold text-[#f6c453] md:text-[44px] [text-shadow:0_0_22px_rgba(246,196,83,0.28)]"
                    />
                    <div className="mt-1.5 text-[12px] text-white/70">Years of Expertise</div>
                  </div>
                </div>

                <motion.a
                  href="#about"
                  whileHover={{ x: 2 }}
                  transition={{ duration: 0.2 }}
                  className="mt-7 inline-flex items-center gap-2 text-[13px] font-medium text-[#f6c453]/90 hover:text-[#f6c453] transition"
                  style={{ textShadow: '0 0 18px rgba(246,196,83,0.22)' }}
                >
                  Learn More <span className="translate-y-[1px]">›</span>
                </motion.a>
              </div>
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
}
