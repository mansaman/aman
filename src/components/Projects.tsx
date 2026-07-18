'use client';

import { useRef } from 'react';
import { PROJECT_CATEGORIES } from '@/data';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Projects() {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.fromTo(
        '.proj-header',
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.proj-header',
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        }
      );

      gsap.fromTo(
        '.proj-cell',
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.06,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.proj-grid',
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        }
      );
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      id="projects"
      className="relative border-t border-ink/20 py-24 md:py-36 bg-bone text-ink"
    >
      {/* Header row — inverted */}
      <div className="proj-header flex items-end justify-between px-6 md:px-10 pb-8 border-b border-ink/20">
        <h2 className="font-display uppercase leading-[0.82] text-[clamp(3.5rem,10vw,9rem)]">
          Projects<span className="text-red">.</span>
        </h2>
        <span className="text-red text-xs tracking-[0.3em] uppercase pb-2 shrink-0">
          (04)
        </span>
      </div>

      {/* Bordered cell grid — negative margins merge outer edges with the
          header rule and the viewport edge so no border doubles up */}
      <div className="proj-grid grid md:grid-cols-2 lg:grid-cols-4 -mt-px -ml-px">
        {PROJECT_CATEGORIES.map((cat, index) => {
          const number = String(index + 1).padStart(2, '0');

          return (
            <div
              key={cat.id}
              className="proj-cell group border-t border-l border-ink/20 p-6 md:p-8 min-h-[260px] flex flex-col justify-between hover:bg-ink hover:text-bone transition-colors duration-300"
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
    </section>
  );
}
