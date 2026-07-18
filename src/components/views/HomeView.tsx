'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Marquee from '@/components/Marquee';
import { NAV_LINKS, PERSONAL_INFO, STATS } from '@/data';

gsap.registerPlugin(ScrollTrigger);

const INDEX_DESCRIPTIONS: Record<string, string> = {
  '/journey': 'Six phases, one direction',
  '/experience': 'Five companies, one operating system',
  '/projects': 'Eight disciplines, three results',
  '/playground': 'Experiments in progress',
  '/contact': 'Direct lines, no forms',
};

export default function HomeView() {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      // Hero entrance — lines slide up out of their masks, meta rows follow
      const tl = gsap.timeline({ defaults: { ease: 'power4.out' } });

      tl.from('.hero-line', {
        yPercent: 110,
        duration: 1,
        stagger: 0.08,
      }).from(
        ['.hero-meta', '.hero-bottom'],
        {
          y: 40,
          opacity: 0,
          duration: 0.8,
          ease: 'power3.out',
          stagger: 0.06,
        },
        '-=0.6'
      );

      // Play-once reveals for stat rows, index rows, and the CTA
      gsap.utils.toArray<HTMLElement>('.reveal-row').forEach((row) => {
        gsap.from(row, {
          y: 40,
          opacity: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: row,
            start: 'top 88%',
            once: true,
          },
        });
      });
    },
    { scope: containerRef }
  );

  return (
    <main ref={containerRef} className="min-h-screen bg-ink">
      {/* Hero */}
      <section
        id="hero"
        className="relative flex min-h-screen flex-col justify-between overflow-hidden px-6 pt-24 pb-8 md:px-10 md:pb-10"
      >
        {/* Top meta row */}
        <div className="hero-meta flex items-start justify-between gap-6 border-b border-line pb-4">
          <p className="uppercase text-[11px] tracking-[0.3em] text-mute">
            India — B2B SaaS
          </p>
          <p className="uppercase text-[11px] tracking-[0.3em] text-mute text-right">
            Available for growth roles
          </p>
        </div>

        {/* Center: stacked giant name / role */}
        <h1 className="font-display uppercase leading-[0.82] text-[clamp(4rem,13vw,12rem)]">
          <span className="block overflow-hidden">
            <span className="hero-line block">
              {PERSONAL_INFO.name} {PERSONAL_INFO.surname}
            </span>
          </span>
          <span className="block overflow-hidden">
            <span className="hero-line block">
              Growth <span className="stroke-bone">Marketing</span>
            </span>
          </span>
          <span className="mt-4 block overflow-hidden">
            <em className="hero-line block font-serifa italic normal-case leading-[1.05] text-[clamp(2rem,5vw,4.5rem)] text-bone">
              &amp; marketing technology
            </em>
          </span>
        </h1>

        {/* Bottom row */}
        <div className="hero-bottom flex items-end justify-between gap-8">
          <p className="text-sm md:text-base text-mute leading-relaxed max-w-md">
            {PERSONAL_INFO.subtitle}
          </p>
          <p className="uppercase text-[11px] tracking-[0.3em] text-mute shrink-0 pb-1">
            (scroll) ↓
          </p>
        </div>
      </section>

      <Marquee />

      {/* Proof — stats as full-width rows */}
      <section aria-label="Proof">
        {STATS.map((stat, i) => (
          <div
            key={stat.label}
            className="reveal-row grid grid-cols-12 items-end gap-4 border-t border-line px-6 md:px-10 py-8 md:py-10"
          >
            <p
              className={`col-span-7 md:col-span-8 font-display leading-none text-[clamp(3rem,9vw,8rem)] ${
                i === 1 ? 'stroke-bone' : ''
              }`}
            >
              {stat.value}
            </p>
            <p className="col-span-5 md:col-span-4 pb-1 text-right uppercase text-[11px] tracking-[0.3em] text-mute">
              {stat.label}
            </p>
          </div>
        ))}
      </section>

      {/* Site index */}
      <section aria-label="Index">
        {NAV_LINKS.slice(1).map((link, i) => (
          <Link
            key={link.href}
            href={link.href}
            className="reveal-row group grid grid-cols-12 items-baseline gap-4 border-t border-line px-6 md:px-10 py-8 md:py-10"
          >
            <span className="col-span-2 md:col-span-1 text-red text-xs tracking-[0.3em] uppercase">
              (0{i + 2})
            </span>
            <span className="col-span-9 md:col-span-5 font-display uppercase leading-[0.9] text-4xl md:text-7xl transition-colors duration-300 group-hover:text-red">
              {link.label}
            </span>
            <span className="hidden md:block md:col-span-5 text-sm text-mute leading-relaxed">
              {INDEX_DESCRIPTIONS[link.href]}
            </span>
            <span className="col-span-1 text-right text-xl md:text-2xl transition-transform duration-300 group-hover:translate-x-2">
              →
            </span>
          </Link>
        ))}
      </section>

      {/* Next-page CTA */}
      <Link
        href="/journey"
        className="reveal-row group block border-t border-line px-6 md:px-10 py-16 md:py-24"
      >
        <p className="uppercase text-[11px] tracking-[0.3em] text-mute mb-4">
          Next
        </p>
        <span className="font-display uppercase leading-[0.85] text-[clamp(3rem,9vw,8rem)] group-hover:text-red transition-colors duration-300">
          Journey →
        </span>
      </Link>
    </main>
  );
}
