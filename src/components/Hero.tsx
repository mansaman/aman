'use client';

import { useRef } from 'react';
import { PERSONAL_INFO } from '@/data';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
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
    },
    { scope: containerRef }
  );

  return (
    <section
      id="hero"
      ref={containerRef}
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
  );
}
