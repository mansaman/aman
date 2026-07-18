'use client';

import { useRef, useState } from 'react';
import Link from 'next/link';
import { COMPANIES_DATA, INDUSTRIES } from '@/data';
import Wordmark from '@/components/Wordmark';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function ExperienceView() {
  const containerRef = useRef<HTMLElement>(null);
  const [openId, setOpenId] = useState<string | null>(null);

  useGSAP(
    () => {
      // Page-header masked slide-up on load
      gsap.fromTo(
        '.hdr-line',
        { yPercent: 110 },
        { yPercent: 0, duration: 0.9, ease: 'power3.out', stagger: 0.08 }
      );

      // Index rows — play-once reveal
      gsap.fromTo(
        '.exp-row',
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.06,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.exp-rows',
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        }
      );

      // Industries block
      gsap.fromTo(
        '.exp-industries',
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.exp-industries',
            start: 'top 90%',
            toggleActions: 'play none none none',
          },
        }
      );

      // Next-page CTA
      gsap.fromTo(
        '.exp-next',
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.exp-next',
            start: 'top 92%',
            toggleActions: 'play none none none',
          },
        }
      );
    },
    { scope: containerRef }
  );

  return (
    <main ref={containerRef} className="min-h-screen bg-ink">
      {/* Page header */}
      <header className="px-6 md:px-10 pt-32 md:pt-40 pb-10 border-b border-line">
        <div className="overflow-hidden">
          <p className="hdr-line uppercase text-[11px] tracking-[0.3em] text-mute mb-6">
            (03) — Five companies, one operating system
          </p>
        </div>
        <div className="overflow-hidden">
          <h1 className="hdr-line font-display uppercase leading-[0.82] text-[clamp(4rem,13vw,12rem)]">
            Experience<span className="text-red">.</span>
          </h1>
        </div>
        <div className="overflow-hidden mt-8">
          <p className="hdr-line text-sm md:text-base text-mute leading-relaxed max-w-md">
            Around five years running growth for B2B SaaS — building revenue
            engines across India, Southeast Asia, and the Gulf.
          </p>
        </div>
      </header>

      {/* Index rows */}
      <div className="exp-rows">
        {COMPANIES_DATA.map((company, index) => {
          const isOpen = openId === company.id;
          const number = String(index + 1).padStart(2, '0');

          return (
            <div
              key={company.id}
              className="exp-row border-t border-line first:border-t-0"
            >
              <button
                type="button"
                onClick={() => setOpenId(isOpen ? null : company.id)}
                aria-expanded={isOpen}
                aria-controls={`exp-panel-${company.id}`}
                className="group w-full text-left px-6 md:px-10 py-6 md:py-8 grid grid-cols-[2.5rem_1fr_2rem] md:grid-cols-[3.5rem_1fr_auto_2.5rem] items-baseline md:items-center gap-x-4 md:gap-x-8 gap-y-3 cursor-pointer"
              >
                {/* Number */}
                <span className="text-red text-xs tracking-[0.3em]">
                  {number}
                </span>

                {/* Company wordmark — the row's visual weight */}
                <span className="text-3xl md:text-6xl leading-none transition-colors duration-300 group-hover:text-red">
                  <Wordmark
                    id={company.id}
                    name={company.name}
                    logoFile={company.logoFile}
                  />
                </span>

                {/* Role + period (desktop, right side) */}
                <span className="hidden md:flex flex-col items-end text-right">
                  <span className="uppercase text-[11px] tracking-[0.3em] text-mute">
                    {company.role}
                  </span>
                  <span className="uppercase text-[11px] tracking-[0.3em] text-mute/70 mt-1">
                    {company.period}
                  </span>
                </span>

                {/* Toggle glyph */}
                <span
                  className={`justify-self-end text-2xl font-light leading-none transition-transform duration-300 ${
                    isOpen ? 'rotate-180 text-red' : ''
                  }`}
                >
                  {isOpen ? '−' : '+'}
                </span>

                {/* Role + period (mobile, stacked under wordmark) */}
                <span className="md:hidden col-start-2 col-span-2 uppercase text-[11px] tracking-[0.3em] text-mute">
                  {company.role} — {company.period}
                </span>
              </button>

              {/* Expanding panel — grid-rows trick */}
              <div
                id={`exp-panel-${company.id}`}
                className={`grid transition-[grid-template-rows] duration-[400ms] ease-in-out ${
                  isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                }`}
              >
                <div className="overflow-hidden">
                  <div className="px-6 md:px-10 pb-8 md:pb-10 md:grid md:grid-cols-[3.5rem_1fr_2.5rem] md:gap-x-8">
                    <div className="md:col-start-2">
                      <p className="text-sm md:text-base text-mute leading-relaxed max-w-xl">
                        {company.summary}
                      </p>

                      <ul className="mt-6 flex flex-col gap-3 max-w-2xl">
                        {company.achievements.map((achievement, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-3 text-sm text-bone/80 leading-relaxed"
                          >
                            <span className="text-red shrink-0">—</span>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>

                      <p className="mt-8 uppercase text-[11px] tracking-[0.3em] text-mute">
                        {company.skillsUsed.join(' / ')}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Industries */}
      <section className="exp-industries border-t border-line px-6 md:px-10 py-16">
        <p className="uppercase text-[11px] tracking-[0.3em] text-mute mb-8">
          Industries
        </p>
        <div className="flex flex-wrap items-baseline gap-x-4 gap-y-2">
          {INDUSTRIES.map((industry, i) => (
            <span key={industry} className="flex items-baseline gap-x-4">
              <span className="font-display uppercase text-2xl md:text-4xl text-bone/30">
                {industry}
              </span>
              {i < INDUSTRIES.length - 1 && (
                <span className="text-red text-lg md:text-xl">✳</span>
              )}
            </span>
          ))}
        </div>
      </section>

      {/* Next-page CTA */}
      <Link
        href="/projects"
        className="exp-next group block border-t border-line px-6 md:px-10 py-16 md:py-24"
      >
        <p className="uppercase text-[11px] tracking-[0.3em] text-mute mb-4">
          Next
        </p>
        <span className="font-display uppercase leading-[0.85] text-[clamp(3rem,9vw,8rem)] group-hover:text-red transition-colors duration-300">
          Projects →
        </span>
      </Link>
    </main>
  );
}
