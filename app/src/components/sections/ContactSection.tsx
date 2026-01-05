'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '@ui/Container';
import { Card } from '@ui/Card';
import { CONTACT_INFO } from '@data/contact';
import {
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  User,
  Building2,
  MessageSquare,
  Sparkles,
} from 'lucide-react';

/* -----------------------------------------------------------------------------
 * Premium Field Shell
 * - Placeholder-based (no floating labels)
 * - Icon inside
 * - Thin border + soft glow on focus
 * -------------------------------------------------------------------------- */

function FieldShell({
  icon: Icon,
  children,
  iconAlign = 'center',
}: {
  icon: React.ComponentType<{ className?: string }>;
  children: React.ReactNode;
  iconAlign?: 'center' | 'top';
}) {
  return (
    <div className="group relative">
      {/* ultra-thin gradient edge */}
      <div
        aria-hidden
        className="
          pointer-events-none absolute -inset-[1px] rounded-2xl
          bg-linear-to-br from-white/14 via-white/5 to-[#f6c453]/16
          opacity-55 transition-opacity
          group-hover:opacity-70
          group-focus-within:opacity-85
        "
      />

      {/* soft focus halo */}
      <div
        aria-hidden
        className="
          pointer-events-none absolute -inset-8 rounded-3xl blur-3xl
          opacity-0 transition-opacity duration-300
          group-focus-within:opacity-100
          bg-[radial-gradient(circle_at_35%_20%,rgba(246,196,83,0.14),transparent_60%)]
        "
      />

      {/* control container */}
      <div
        className="
          relative rounded-2xl
          ring-1 ring-white/10
          group-hover:ring-white/12
          group-focus-within:ring-[#f6c453]/30
          group-focus-within:shadow-[0_0_0_4px_rgba(246,196,83,0.08)]
          transition
        "
      >
        {/* icon */}
        <div
          className={[
            'pointer-events-none absolute left-4 text-[#ffe6a8]',
            iconAlign === 'top' ? 'top-4' : 'top-1/2 -translate-y-1/2',
          ].join(' ')}
        >
          <Icon className="h-5 w-5" />
        </div>

        {/* hairline highlight */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-4 top-0 h-px bg-linear-to-r from-transparent via-white/12 to-transparent"
        />

        {children}
      </div>
    </div>
  );
}

function InputField({
  label,
  placeholder,
  type = 'text',
  icon,
}: {
  label: string;
  placeholder: string;
  type?: string;
  icon: React.ComponentType<{ className?: string }>;
}) {
  return (
    <label className="grid gap-2">
      <span className="text-[15px] font-semibold text-white/90">{label}</span>

      <FieldShell icon={icon}>
        <input
          type={type}
          placeholder={placeholder}
          className="
            h-12 w-full rounded-2xl
            bg-white/6
            pl-12 pr-4
            text-[14px] text-white
            placeholder:text-white/45
            outline-none
          "
        />
      </FieldShell>
    </label>
  );
}

function SelectField({
  label,
  options,
  icon,
}: {
  label: string;
  options: string[];
  icon: React.ComponentType<{ className?: string }>;
}) {
  return (
    <label className="grid gap-2">
      <span className="text-[15px] font-semibold text-white/90">{label}</span>

      <FieldShell icon={icon}>
        <select
          defaultValue={options[0]}
          className="
            h-12 w-full rounded-2xl
            bg-white/6
            pl-12 pr-10
            text-[14px] text-white
            outline-none appearance-none
          "
        >
          {options.map((o) => (
            <option key={o} value={o} className="bg-[#050606]">
              {o}
            </option>
          ))}
        </select>

        {/* caret */}
        <div
          aria-hidden
          className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#f6c453]/90"
        >
          <span className="text-[16px] leading-none">▾</span>
        </div>
      </FieldShell>
    </label>
  );
}

function MessageField({
  label,
  placeholder,
  icon,
}: {
  label: string;
  placeholder: string;
  icon: React.ComponentType<{ className?: string }>;
}) {
  const Icon = icon;

  return (
    <label className="grid gap-2">
      <span className="text-[15px] font-semibold text-white/90">{label}</span>

      <FieldShell icon={Icon} iconAlign="top">
        <textarea
          rows={6}
          placeholder={placeholder}
          className="
            w-full rounded-2xl
            min-h-[170px]
            pl-12 pr-4 pt-4 pb-4
            text-[14px] text-white
            placeholder:text-white/45
            outline-none resize-none leading-relaxed
            bg-[linear-gradient(180deg,rgba(255,255,255,0.07),rgba(255,255,255,0.035))]
          "
        />
      </FieldShell>

      <div className="text-[12px] text-white/55">
        Share a brief summary — we’ll route it to the right team.
      </div>
    </label>
  );
}

/* -----------------------------------------------------------------------------
 * Social Buttons
 * -------------------------------------------------------------------------- */

function SocialRow() {
  return (
    <div className="mt-5">
      <div className="text-[13px] font-semibold text-white/85">Follow</div>

      <div className="mt-3 flex items-center gap-3">
        {CONTACT_INFO.socials.map((s) => {
          const Icon = s.icon;
          return (
            <a
              key={s.label}
              href={s.href}
              aria-label={s.label}
              className="
                group relative
                h-11 w-11 rounded-2xl
                ring-1 ring-white/10
                hover:ring-white/14
                backdrop-blur-md
                transition
              "
            >
              <div
                aria-hidden
                className="
                  pointer-events-none absolute -inset-[1px] rounded-2xl
                  bg-linear-to-br from-white/10 via-white/4 to-[#f6c453]/14
                  opacity-55
                  group-hover:opacity-75
                  transition-opacity
                "
              />

              <div
                aria-hidden
                className="
                  pointer-events-none absolute -inset-6 rounded-3xl blur-3xl
                  opacity-0 group-hover:opacity-100 transition-opacity duration-300
                  bg-[radial-gradient(circle_at_50%_40%,rgba(246,196,83,0.14),transparent_60%)]
                "
              />

              <div className="relative grid h-full w-full place-items-center">
                <Icon className="h-5 w-5 text-white/80 group-hover:text-[#ffe6a8] transition-colors" />
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
}

/* -----------------------------------------------------------------------------
 * ContactSection
 * -------------------------------------------------------------------------- */

export function ContactSection() {
  return (
    <section id="contact" className="relative scroll-mt-24">
      <Container className="py-16">
        {/* Header */}
        <div className="mx-auto max-w-[900px] text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.45, ease: 'easeOut' }}
            className="mb-5 flex justify-center"
          >
            <span
              className="
        inline-flex items-center gap-2
        rounded-full px-4 py-2
        text-[12px] font-semibold tracking-[0.12em]
        text-white/90
        ring-1 ring-white/12
        bg-white/5 backdrop-blur-md
      "
            >
              <Sparkles className="h-4 w-4 text-[#ffe6a8]" />
              INVESTOR ACCESS
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.45, ease: 'easeOut' }}
            className="text-4xl md:text-5xl font-semibold tracking-[-0.02em] text-white"
          >
            Unlock Exclusive <span className="text-[#f6c453]">Opportunities</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.45, delay: 0.06, ease: 'easeOut' }}
            className="mt-4 text-[15px] md:text-[16px] text-white/80"
          >
            Join our network of accredited investors and access unique opportunities.
          </motion.p>

          <div className="mt-7 flex justify-center">
            <div className="h-px w-56 bg-linear-to-r from-transparent via-[#f6c453]/65 to-transparent" />
          </div>
        </div>


        {/* Panel */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="relative mt-12"
        >
          <Card
            variant="glass"
            padding="none"
            goldEdge
            className="
              relative rounded-3xl overflow-hidden
              ring-1 ring-white/8
              shadow-[0_26px_80px_rgba(0,0,0,0.52),0_0_70px_rgba(246,196,83,0.08)]
            "
          >
            {/* top hairline */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-white/14 to-transparent"
            />

            <div className="grid gap-0 lg:grid-cols-12">
              {/* LEFT: Form */}
              <div className="relative lg:col-span-7 p-7 md:p-9">
                <div
                  aria-hidden
                  className="hidden lg:block pointer-events-none absolute right-0 top-10 bottom-10 w-px bg-linear-to-b from-transparent via-white/10 to-transparent"
                />

                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="text-[20px] md:text-[22px] font-semibold text-white tracking-[-0.01em]">
                      Request Investor Access
                    </div>
                    <div className="mt-2 text-[14px] text-white/75">Response time: 24–48 hours</div>
                  </div>

                  <div className="hidden sm:flex items-center gap-2 rounded-full px-3.5 py-1.5 text-[13px] font-semibold text-white/85 ring-1 ring-white/10">
                    <Sparkles className="h-4 w-4 text-[#ffe6a8]" />
                    Secure Intake
                  </div>
                </div>

                <form className="mt-7 grid gap-5" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid gap-5 md:grid-cols-2">
                    <InputField label="Full Name" placeholder="Your full name" icon={User} />
                    <InputField label="Email" placeholder="you@email.com" type="email" icon={Mail} />
                  </div>

                  <div className="grid gap-5 md:grid-cols-2">
                    <InputField label="Phone" placeholder="+1 (___) ___-____" icon={Phone} />
                    <SelectField
                      label="Inquiry Type"
                      options={CONTACT_INFO.inquiryTypes}
                      icon={Building2}
                    />
                  </div>

                  <MessageField
                    label="Message"
                    placeholder="Tell us what you’re looking for…"
                    icon={MessageSquare}
                  />

                  <div className="flex items-center justify-end">
                    <motion.button
                      type="submit"
                      whileHover={{ y: -1 }}
                      whileTap={{ scale: 0.98 }}
                      className="
                        inline-flex items-center justify-center gap-2
                        h-12 px-7 rounded-2xl
                        text-[12px] md:text-[13px] font-semibold tracking-[0.14em]
                        text-[#1b1206]
                        bg-linear-to-r from-[#b77b2b] via-[#f6c453] to-[#ffe2a1]
                        ring-1 ring-[#f6c453]/30
                        shadow-[0_14px_40px_rgba(246,196,83,0.20)]
                        hover:brightness-105 transition
                      "
                    >
                      SEND MESSAGE <ArrowRight className="h-4 w-4" />
                    </motion.button>
                  </div>
                </form>
              </div>

              {/* RIGHT: Info */}
              <div className="lg:col-span-5 p-7 md:p-9">
                <div className="flex items-center gap-3">
                  {/* Logo placeholder */}
                  <div className="relative h-12 w-12">
                    <div
                      aria-hidden
                      className="pointer-events-none absolute -inset-4 rounded-full blur-2xl bg-[#f6c453]/14 opacity-60"
                    />
                    <div className="relative grid h-12 w-12 place-items-center rounded-full ring-1 ring-white/12 backdrop-blur-md">
                      <span className="text-[11px] font-bold tracking-[0.14em] text-white/90">
                        LOGO
                      </span>
                    </div>
                  </div>

                  <div>
                    <div className="text-[15px] font-semibold tracking-wide text-white">
                      {CONTACT_INFO.brandName}
                    </div>
                    <div className="text-[11px] uppercase tracking-[0.24em] text-white/70">
                      {CONTACT_INFO.brandSub}
                    </div>
                  </div>
                </div>

                <div className="mt-6">
                  <div className="text-[20px] md:text-[22px] font-semibold text-white tracking-[-0.01em]">
                    Let’s talk.
                  </div>
                  <p className="mt-3 text-[14px] leading-relaxed text-white/80">
                    Reach out directly or send a message using the form. We’ll route your inquiry
                    to the right team.
                  </p>
                </div>

                <div className="mt-7 grid gap-4 text-[14px] text-white/85">
                  <div className="flex items-start gap-3">
                    <MapPin className="mt-0.5 h-5 w-5 text-[#ffe6a8]" />
                    <span>{CONTACT_INFO.address}</span>
                  </div>

                  <div className="h-px w-full bg-linear-to-r from-transparent via-white/12 to-transparent" />

                  <div className="flex items-start gap-3">
                    <Mail className="mt-0.5 h-5 w-5 text-[#ffe6a8]" />
                    <span>{CONTACT_INFO.email}</span>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="mt-0.5 h-5 w-5 text-[#ffe6a8]" />
                    <span>{CONTACT_INFO.phone}</span>
                  </div>
                </div>

                <SocialRow />

                <div className="mt-7">
                  <div className="h-px w-full bg-linear-to-r from-transparent via-white/12 to-transparent" />
                </div>
              </div>
            </div>
          </Card>
        </motion.div>
      </Container>
    </section>
  );
}
