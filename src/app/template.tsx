'use client';

import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/* Remounts on every navigation: scrolls to top, runs the page-entrance
   reveal, and refreshes ScrollTrigger once the new layout has settled. */
export default function Template({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const lenis = window.appLenis;
    if (lenis) {
      lenis.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo(0, 0);
    }

    gsap.fromTo(
      ref.current,
      { y: 24, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.7,
        ease: 'power3.out',
        clearProps: 'all',
        onComplete: () => ScrollTrigger.refresh(),
      }
    );
  }, { scope: ref });

  return <div ref={ref}>{children}</div>;
}
