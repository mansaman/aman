'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { CASE_STUDIES, PROJECT_CATEGORIES } from '@/data';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/* THE INVERTED PAGE — bg-bone, text-ink. Hairlines are border-ink/20,
   mute text is text-ink/60, ghost/outline type uses .stroke-ink. */
export default function ProjectsView() {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      // Page-header lines: masked slide-up on load
      gsap.fromTo(
        '.pv-header-line',
        { yPercent: 110 },
        {
          yPercent: 0,
          duration: 0.9,
          ease: 'power3.out',
          stagger: 0.08,
          delay: 0.1,
        }
      );

      // Case-study rows: reveal once on enter
      gsap.utils.toArray<HTMLElement>('.pv-case').forEach((row) => {
        gsap.fromTo(
          row,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: row,
              start: 'top 85%',
              toggleActions: 'play none none none',
            },
          }
        );
      });

      // Discipline cells: staggered reveal once
      gsap.fromTo(
        '.pv-cell',
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.06,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.pv-grid',
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        }
      );

      // Next-page CTA
      gsap.fromTo(
        '.pv-cta-inner',
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.pv-cta',
            start: 'top 90%',
            toggleActions: 'play none none none',
          },
        }
      );
    },
    { scope: containerRef }
  );

  return (
    <main ref={containerRef} className="min-h-screen bg-bone text-ink">
      {/* ————— Page header (04) ————— */}
      <header className="px-6 md:px-10 pt-32 md:pt-40 pb-10 border-b border-ink/20">
        <div className="overflow-hidden mb-6">
          <p className="pv-header-line uppercase text-[11px] tracking-[0.3em] text-ink/60">
            (04) — Eight disciplines, three results
          </p>
        </div>
        <div className="overflow-hidden">
          <h1 className="pv-header-line font-display uppercase leading-[0.82] text-[clamp(4rem,13vw,12rem)]">
            Projects<span className="text-red">.</span>
          </h1>
        </div>
        <div className="overflow-hidden mt-8">
          <p className="pv-header-line text-sm md:text-base text-ink/60 leading-relaxed max-w-md">
            Growth work grouped by discipline — and what it produced when the
            pieces ran as one system instead of separate channels.
          </p>
        </div>
      </header>

      {/* ————— Results first: case studies ————— */}
      {/* -mt-px merges the first row's top rule with the header's bottom rule */}
      <div className="-mt-px">
        {CASE_STUDIES.map((cs, index) => (
          <div
            key={cs.id}
            className="pv-case border-t border-ink/20 px-6 md:px-10 py-14 grid md:grid-cols-12 gap-6 items-end"
          >
            <div className="md:col-span-5">
              <div
                className={`font-display leading-none text-[clamp(4rem,12vw,10rem)] ${
                  index === 1 ? 'stroke-ink' : ''
                }`}
              >
                {cs.stat}
              </div>
              <p className="uppercase text-[11px] tracking-[0.3em] text-ink/60 mt-4">
                {cs.statLabel}
              </p>
            </div>
            <div className="md:col-span-7 max-w-2xl">
              <h2 className="font-display uppercase text-2xl md:text-4xl leading-none">
                {cs.title}
              </h2>
              <p className="text-ink/60 text-sm md:text-base leading-relaxed mt-4 max-w-xl">
                {cs.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* ————— Discipline grid — bordered cells, hover inversion ————— */}
      {/* -ml-px pushes the leftmost cells' left rule off the viewport edge */}
      <div className="pv-grid grid md:grid-cols-2 lg:grid-cols-4 -ml-px">
        {PROJECT_CATEGORIES.map((cat, index) => {
          const number = String(index + 1).padStart(2, '0');

          return (
            <div
              key={cat.id}
              className="pv-cell group border-t border-l border-ink/20 p-6 md:p-8 min-h-[260px] flex flex-col justify-between hover:bg-ink hover:text-bone transition-colors duration-300"
            >
              {/* Top: number + name */}
              <div>
                <span className="text-red text-[11px] tracking-[0.3em] uppercase">
                  ({number})
                </span>
                <h3 className="font-display uppercase text-2xl md:text-3xl leading-none mt-3">
                  {cat.name}
                </h3>
              </div>

              {/* Bottom: description + highlights */}
              <div className="mt-8">
                <p className="text-ink/60 group-hover:text-bone/60 text-sm leading-relaxed transition-colors duration-300">
                  {cat.description}
                </p>
                <ul className="mt-4 flex flex-col gap-1.5">
                  {cat.highlights.map((h) => (
                    <li
                      key={h}
                      className="flex items-start gap-2 text-xs leading-relaxed text-ink/60 group-hover:text-bone/60 transition-colors duration-300"
                    >
                      <span className="text-red shrink-0">—</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </div>

      {/* ————— Next-page CTA ————— */}
      <Link
        href="/playground"
        className="pv-cta group block border-t border-ink/20 px-6 md:px-10 py-16 md:py-24"
      >
        <div className="pv-cta-inner">
          <p className="uppercase text-[11px] tracking-[0.3em] text-ink/60 mb-4">
            Next
          </p>
          <span className="font-display uppercase leading-[0.85] text-[clamp(3rem,9vw,8rem)] group-hover:text-red transition-colors duration-300">
            Playground →
          </span>
        </div>
      </Link>
    </main>
  );
}
