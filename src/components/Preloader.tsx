'use client';

import { useState, useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

/* First-visit loader: the name stamps in line by line, then the whole
   screen wipes upward. The overlay is always in the initial HTML (no
   hydration mismatch, no content flash); repeat visitors in the same
   session get an instant removal instead of the animation. */
export default function Preloader() {
  const [done, setDone] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!ref.current) return;

    if (sessionStorage.getItem('preloader-seen') === '1') {
      setDone(true);
      return;
    }

    const tl = gsap.timeline({
      onComplete: () => {
        sessionStorage.setItem('preloader-seen', '1');
        setDone(true);
      },
    });

    tl.fromTo(
      '.preloader-line',
      { yPercent: 110 },
      { yPercent: 0, duration: 0.6, stagger: 0.12, ease: 'power4.out' }
    )
      .to('.preloader-line', {
        yPercent: -110,
        duration: 0.5,
        stagger: 0.06,
        ease: 'power3.in',
        delay: 0.5,
      })
      .to(ref.current, {
        yPercent: -100,
        duration: 0.7,
        ease: 'power4.inOut',
      }, '-=0.15');
  }, { scope: ref });

  if (done) return null;

  return (
    <div
      ref={ref}
      className="fixed inset-0 z-[10000] bg-ink flex flex-col justify-center px-6 md:px-10"
      aria-hidden="true"
    >
      <div className="overflow-hidden">
        <p className="preloader-line font-display uppercase text-[13vw] leading-[0.85] text-bone">
          Aman
        </p>
      </div>
      <div className="overflow-hidden">
        <p className="preloader-line font-display uppercase text-[13vw] leading-[0.85] text-bone">
          Sharma<span className="text-red">.</span>
        </p>
      </div>
      <div className="overflow-hidden mt-4">
        <p className="preloader-line uppercase text-[11px] tracking-[0.3em] text-mute">
          Growth — built end to end
        </p>
      </div>
    </div>
  );
}
