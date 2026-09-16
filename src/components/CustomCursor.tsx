'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const hasFinePointer = window.matchMedia('(pointer: fine)').matches;
    if (!hasFinePointer || window.innerWidth < 1024) return;

    document.documentElement.classList.add('custom-cursor-active');

    const dot = dotRef.current;
    if (!dot) return;

    gsap.set(dot, { xPercent: -50, yPercent: -50 });

    const xSetter = gsap.quickTo(dot, 'x', { duration: 0.12, ease: 'power3' });
    const ySetter = gsap.quickTo(dot, 'y', { duration: 0.12, ease: 'power3' });

    const onMouseMove = (e: MouseEvent) => {
      xSetter(e.clientX);
      ySetter(e.clientY);
    };

    // Grow the dot over interactive elements
    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isInteractive = target?.closest('a, button, [role="button"], input, select, textarea');
      gsap.to(dot, { scale: isInteractive ? 2.4 : 1, duration: 0.25, ease: 'power2.out' });
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseover', onMouseOver);

    return () => {
      document.documentElement.classList.remove('custom-cursor-active');
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseover', onMouseOver);
    };
  }, []);

  return (
    <div
      ref={dotRef}
      className="fixed top-0 left-0 w-3 h-3 bg-white rounded-full pointer-events-none z-[9999] mix-blend-difference hidden lg:block"
    />
  );
}
