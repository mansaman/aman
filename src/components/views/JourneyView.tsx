'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Timeline from '@/components/Timeline';

gsap.registerPlugin(ScrollTrigger);

export default function JourneyView() {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.fromTo(
        '.jr-header-line',
        { yPercent: 110 },
        {
          yPercent: 0,
          duration: 0.9,
          ease: 'power3.out',
          stagger: 0.08,
          delay: 0.1,
        }
      );

      gsap.fromTo(
        '.jr-cta-inner',
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.jr-cta',
            start: 'top 90%',
            toggleActions: 'play none none none',
          },
        }
      );
    },
    { scope: containerRef }
  );

  return (
    <main ref={containerRef} id="journey" className="min-h-screen bg-ink">
      {/* Page header (02) */}
      <header className="px-6 md:px-10 pt-32 md:pt-40 pb-10">
        <div className="overflow-hidden mb-6">
          <p className="jr-header-line uppercase text-[11px] tracking-[0.3em] text-mute">
            (02) — Six phases, one direction
          </p>
        </div>
        <div className="overflow-hidden">
          <h1 className="jr-header-line font-display uppercase leading-[0.82] text-[clamp(4rem,13vw,12rem)]">
            Journey<span className="text-red">.</span>
          </h1>
        </div>
        <div className="overflow-hidden mt-8">
          <p className="jr-header-line text-sm md:text-base text-mute leading-relaxed max-w-md">
            From a curious engineering student to a growth builder — the steps
            that turned breadth into a single revenue engine.
          </p>
        </div>
      </header>

      <Timeline withHeader={false} />

      {/* Next-page CTA */}
      <Link
        href="/experience"
        className="jr-cta group block border-t border-line px-6 md:px-10 py-16 md:py-24"
      >
        <div className="jr-cta-inner">
          <p className="uppercase text-[11px] tracking-[0.3em] text-mute mb-4">
            Next
          </p>
          <span className="font-display uppercase leading-[0.85] text-[clamp(3rem,9vw,8rem)] group-hover:text-red transition-colors duration-300">
            Experience →
          </span>
        </div>
      </Link>
    </main>
  );
}
