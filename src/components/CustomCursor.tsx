'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [hoverType, setHoverType] = useState<'default' | 'link' | 'view'>('default');

  useEffect(() => {
    // Disable custom cursor on touch devices or small screens
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice || window.innerWidth < 1024) return;

    // Enable custom cursor active styling to hide standard cursor
    document.documentElement.classList.add('custom-cursor-active');

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    // Set initial positions
    gsap.set(dot, { xPercent: -50, yPercent: -50 });
    gsap.set(ring, { xPercent: -50, yPercent: -50 });

    const xDotSetter = gsap.quickTo(dot, "x", { duration: 0.08, ease: "power3" });
    const yDotSetter = gsap.quickTo(dot, "y", { duration: 0.08, ease: "power3" });
    const xRingSetter = gsap.quickTo(ring, "x", { duration: 0.35, ease: "power3" });
    const yRingSetter = gsap.quickTo(ring, "y", { duration: 0.35, ease: "power3" });

    const onMouseMove = (e: MouseEvent) => {
      xDotSetter(e.clientX);
      yDotSetter(e.clientY);
      xRingSetter(e.clientX);
      yRingSetter(e.clientY);
    };

    window.addEventListener('mousemove', onMouseMove);

    // Track hovers
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target) return;
      
      const isInteractive = target.closest('a, button, [role="button"], input, select, textarea');
      const isViewable = target.closest('.cursor-view-target');

      if (isViewable) {
        setHoverType('view');
      } else if (isInteractive) {
        setHoverType('link');
      } else {
        setHoverType('default');
      }
    };

    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      document.documentElement.classList.remove('custom-cursor-active');
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  // Don't render on mobile/SSR
  return (
    <>
      {/* Dot */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-2.5 h-2.5 bg-white rounded-full pointer-events-none z-[9999] mix-blend-difference hidden lg:block"
      />
      {/* Ring */}
      <div
        ref={ringRef}
        className={`fixed top-0 left-0 rounded-full pointer-events-none z-[9998] transition-all duration-300 ease-out border hidden lg:flex items-center justify-center text-[10px] font-bold uppercase tracking-wider
          ${hoverType === 'default' ? 'w-10 h-10 border-white/20 bg-transparent' : ''}
          ${hoverType === 'link' ? 'w-16 h-16 border-[#00f2fe]/80 bg-[#00f2fe]/5 scale-110 shadow-[0_0_15px_rgba(0,242,254,0.3)]' : ''}
          ${hoverType === 'view' ? 'w-20 h-20 border-[#9b51e0] bg-[#9b51e0]/10 text-[#00f2fe] scale-120' : ''}
        `}
      >
        {hoverType === 'view' && (
          <span className="animate-pulse">View</span>
        )}
      </div>
    </>
  );
}
