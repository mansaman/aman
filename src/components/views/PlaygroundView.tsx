'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { PLAYGROUND_DATA, type PlaygroundItem } from '@/data';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const STATUS: Record<PlaygroundItem['status'], { label: string; className: string }> = {
  building: { label: '[IN PROGRESS]', className: 'text-red' },
  concept: { label: '[SOON]', className: 'text-mute' },
  live: { label: '[LIVE]', className: 'text-bone' },
};

export default function PlaygroundView() {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      /* Page header — masked slide-up on load */
      gsap.fromTo(
        '.pg-header-line',
        { yPercent: 110 },
        {
          yPercent: 0,
          duration: 0.9,
          stagger: 0.08,
          ease: 'power3.out',
          delay: 0.1,
        }
      );

      /* List rows — play-once reveal on enter */
      gsap.fromTo(
        '.pg-row',
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.06,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.pg-rows',
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        }
      );

      /* Closing line + next-page CTA — play-once reveals */
      gsap.fromTo(
        '.pg-closing',
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.pg-closing',
            start: 'top 90%',
            toggleActions: 'play none none none',
          },
        }
      );

      gsap.fromTo(
        '.pg-next',
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.pg-next',
            start: 'top 92%',
            toggleActions: 'play none none none',
          },
        }
      );
    },
    { scope: containerRef }
  );

  return (
    <main ref={containerRef} id="playground" className="min-h-screen bg-ink">
      {/* Page header */}
      <header className="px-6 md:px-10 pt-32 md:pt-40 pb-10 border-b border-line">
        <div className="overflow-hidden mb-6">
          <p className="pg-header-line uppercase text-[11px] tracking-[0.3em] text-mute">
            (05) — Experiments in progress
          </p>
        </div>
        <div className="overflow-hidden">
          <h1 className="pg-header-line font-display uppercase leading-[0.82] text-[clamp(4rem,13vw,12rem)]">
            Playground<span className="text-red">.</span>
          </h1>
        </div>
        <div className="overflow-hidden mt-8">
          <p className="pg-header-line text-sm md:text-base text-mute leading-relaxed max-w-md">
            The space between marketing and building. Everything here is a work
            in progress — built in public, unfinished on purpose.
          </p>
        </div>
      </header>

      {/* Editorial list */}
      <div className="pg-rows">
        {PLAYGROUND_DATA.map((item, index) => {
          const number = String(index + 1).padStart(2, '0');
          const status = STATUS[item.status];

          return (
            <div
              key={item.id}
              className="pg-row group border-t border-line first:border-t-0 py-6 md:py-8 px-6 md:px-10 grid grid-cols-[2.5rem_1fr_auto] md:grid-cols-[3.5rem_1fr_minmax(0,28rem)_auto] items-baseline gap-x-4 md:gap-x-8"
            >
              {/* Number */}
              <span className="text-red text-xs tracking-[0.3em]">{number}</span>

              {/* Name */}
              <h2 className="font-display uppercase text-2xl md:text-4xl leading-none transition-colors duration-300 group-hover:text-red">
                {item.name}
              </h2>

              {/* Description — hidden on smallest screens */}
              <p className="hidden md:block text-mute text-sm leading-relaxed max-w-md">
                {item.description}
              </p>

              {/* Status */}
              <span
                className={`uppercase text-xs tracking-[0.25em] whitespace-nowrap justify-self-end ${status.className}`}
              >
                {status.label}
              </span>
            </div>
          );
        })}
      </div>

      {/* Closing line */}
      <div className="pg-closing border-t border-line px-6 md:px-10 py-16">
        <p className="uppercase text-[11px] tracking-[0.3em] text-mute">
          New experiments land here first — check back.
        </p>
      </div>

      {/* Next-page CTA */}
      <Link
        href="/contact"
        className="pg-next group block border-t border-line px-6 md:px-10 py-16 md:py-24"
      >
        <p className="uppercase text-[11px] tracking-[0.3em] text-mute mb-4">
          Next
        </p>
        <span className="font-display uppercase leading-[0.85] text-[clamp(3rem,9vw,8rem)] group-hover:text-red transition-colors duration-300">
          Contact →
        </span>
      </Link>
    </main>
  );
}
