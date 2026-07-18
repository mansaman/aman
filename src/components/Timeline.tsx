'use client';

import { useRef } from 'react';
import { JOURNEY_PHASES } from '@/data';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Timeline() {
  const containerRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const track = trackRef.current;
      const container = containerRef.current;
      if (!track || !container) return;

      // Header reveal — play once on enter (both breakpoints)
      gsap.fromTo(
        '.timeline-header > *',
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power2.out',
          stagger: 0.06,
          scrollTrigger: {
            trigger: container,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      const mm = gsap.matchMedia();

      mm.add('(min-width: 768px)', () => {
        const getScrollAmount = () => track.scrollWidth - window.innerWidth;

        // The one big scroll moment: pin + horizontal scrub
        const scrollTween = gsap.to(track, {
          x: () => -getScrollAmount(),
          ease: 'none',
          scrollTrigger: {
            trigger: container,
            pin: true,
            scrub: 1,
            start: 'top top',
            end: () => `+=${getScrollAmount()}`,
            invalidateOnRefresh: true,
          },
        });

        // Progress line at the very top of the pinned viewport
        gsap.fromTo(
          '.progress-line-fill',
          { scaleX: 0 },
          {
            scaleX: 1,
            ease: 'none',
            scrollTrigger: {
              trigger: container,
              scrub: 1,
              start: 'top top',
              end: () => `+=${getScrollAmount()}`,
              invalidateOnRefresh: true,
            },
          }
        );

        // Slides reveal once as they roll in — no scrubbed opacity on body content
        gsap.utils.toArray<HTMLElement>('.timeline-slide').forEach((slide) => {
          gsap.fromTo(
            slide,
            { y: 40, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.7,
              ease: 'power2.out',
              scrollTrigger: {
                trigger: slide,
                containerAnimation: scrollTween,
                start: 'left 90%',
                toggleActions: 'play none none reverse',
              },
            }
          );
        });
      });

      mm.add('(max-width: 767px)', () => {
        // Mobile fallback — vertical stack, simple play-once reveals
        gsap.utils.toArray<HTMLElement>('.timeline-slide').forEach((slide) => {
          gsap.fromTo(
            slide,
            { y: 40, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.7,
              ease: 'power2.out',
              scrollTrigger: {
                trigger: slide,
                start: 'top 85%',
                toggleActions: 'play none none reverse',
              },
            }
          );
        });
      });

      return () => mm.revert();
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      id="timeline"
      className="relative overflow-hidden border-t border-line py-24 md:h-screen md:py-0 md:flex md:flex-col"
    >
      {/* Progress indicator — scrub-driven, desktop only */}
      <div
        aria-hidden
        className="progress-line-fill hidden md:block absolute top-0 left-0 z-20 h-[2px] w-full bg-red origin-left scale-x-0"
      />

      {/* Header row */}
      <div className="timeline-header flex items-end justify-between px-6 md:px-10 pb-8 md:pt-20 border-b border-line shrink-0">
        <h2 className="font-display uppercase leading-[0.82] text-[clamp(3.5rem,10vw,9rem)]">
          Journey<span className="text-red">.</span>
        </h2>
        <span className="text-red text-xs tracking-[0.3em] uppercase pb-2 shrink-0">(02)</span>
      </div>

      {/* Track — horizontal on desktop, vertical stack on mobile */}
      <div className="md:flex-1 md:flex md:items-center">
        <div
          ref={trackRef}
          className="flex w-full flex-col md:w-max md:flex-row md:items-center md:gap-28 md:pl-10 md:pr-[18vw]"
        >
          {JOURNEY_PHASES.map((item) => {
            return (
              <article
                key={item.id}
                className="timeline-slide relative border-t border-line first:border-t-0 px-6 py-12 md:border-t-0 md:w-[520px] md:px-0 md:py-0 shrink-0"
              >
                {/* Ghost number, overlapping behind */}
                <span
                  aria-hidden
                  className="pointer-events-none select-none absolute top-6 left-4 md:top-0 md:-left-3 z-0 font-display stroke-bone leading-none text-[18vw] md:text-[13rem]"
                >
                  {item.number}
                </span>

                <div className="relative z-10 pt-10 md:pt-28">
                  <p className="uppercase text-[11px] tracking-[0.3em] text-red">
                    {item.kicker}
                  </p>
                  <h3 className="mt-4 font-display uppercase leading-[0.9] text-4xl md:text-5xl">
                    {item.title}
                  </h3>
                  <p className="mt-4 uppercase text-[11px] tracking-[0.3em] text-mute">
                    {item.subtitle}
                  </p>
                  <p className="mt-6 text-sm md:text-base text-mute leading-relaxed max-w-md">
                    {item.paragraphs.join(' ')}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
