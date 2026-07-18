'use client';

import { useRef } from 'react';
import { PERSONAL_INFO } from '@/data';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const SOCIAL_LINKS = [
  { label: 'LinkedIn', href: PERSONAL_INFO.socials.linkedin },
  { label: 'GitHub', href: PERSONAL_INFO.socials.github },
];

export default function ContactView() {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      // Page header: masked slide-up on load
      gsap.from('.contact-header-line', {
        yPercent: 110,
        duration: 1,
        ease: 'power4.out',
        stagger: 0.08,
      });

      // Rows: play-once reveals on enter
      gsap.utils.toArray<HTMLElement>('.contact-reveal').forEach((el, i) => {
        gsap.from(el, {
          y: 40,
          opacity: 0,
          duration: 0.8,
          ease: 'power3.out',
          delay: (i % 4) * 0.06,
          scrollTrigger: {
            trigger: el,
            start: 'top 88%',
            once: true,
          },
        });
      });
    },
    { scope: containerRef }
  );

  return (
    <main id="contact" ref={containerRef} className="min-h-screen bg-ink">
      {/* Page header */}
      <header className="px-6 md:px-10 pt-32 md:pt-40 pb-10 border-b border-line">
        <div className="overflow-hidden mb-6">
          <p className="contact-header-line uppercase text-[11px] tracking-[0.3em] text-mute">
            (06) — Direct lines, no forms
          </p>
        </div>
        <h1 className="font-display uppercase leading-[0.82] text-[clamp(4rem,14vw,13rem)]">
          <span className="block overflow-hidden">
            <span className="contact-header-line block">
              Let&apos;s <em className="font-serifa italic normal-case">talk</em>
              <span className="text-red">.</span>
            </span>
          </span>
        </h1>
        <div className="overflow-hidden mt-8">
          <p className="contact-header-line text-sm md:text-base text-mute leading-relaxed max-w-md">
            No contact form, no scheduler. Every line on this page goes
            straight to me — email gets the fastest reply.
          </p>
        </div>
      </header>

      {/* Direct lines */}
      <div className="contact-reveal border-t border-line py-8 px-6 md:px-10">
        <p className="uppercase text-[11px] tracking-[0.3em] text-mute">Email</p>
        <a
          href={`mailto:${PERSONAL_INFO.email}`}
          className="mt-3 inline-block font-display uppercase text-2xl md:text-5xl break-all hover:text-red transition-colors"
        >
          {PERSONAL_INFO.email}
        </a>
      </div>

      <div className="contact-reveal border-t border-line py-8 px-6 md:px-10">
        <p className="uppercase text-[11px] tracking-[0.3em] text-mute">Phone</p>
        <a
          href={`tel:${PERSONAL_INFO.phone.replace(/\s/g, '')}`}
          className="mt-3 inline-block font-display uppercase text-2xl md:text-5xl break-all hover:text-red transition-colors"
        >
          {PERSONAL_INFO.phone}
        </a>
      </div>

      <div className="contact-reveal border-t border-line py-8 px-6 md:px-10">
        <p className="uppercase text-[11px] tracking-[0.3em] text-mute">Elsewhere</p>
        <div className="mt-4 flex flex-wrap gap-x-8 gap-y-4">
          {SOCIAL_LINKS.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="uppercase text-xs tracking-[0.25em] border-b border-bone/30 pb-1 hover:border-red hover:text-red transition-colors"
            >
              {social.label} ↗
            </a>
          ))}
        </div>
      </div>

      <div className="contact-reveal border-t border-line py-8 px-6 md:px-10">
        <p className="uppercase text-[11px] tracking-[0.3em] text-mute">Availability</p>
        <p className="mt-3 font-display uppercase text-2xl md:text-4xl leading-none">
          Open to Growth &amp; Performance Marketing roles — remote or on-site
        </p>
      </div>
    </main>
  );
}
