'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import gsap from 'gsap';
import { NAV_LINKS } from '@/data';

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const lastScrollY = useRef(0);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const nav = navRef.current;
      if (!nav) return;

      if (currentScrollY > 120) {
        if (currentScrollY > lastScrollY.current) {
          gsap.to(nav, { y: '-100%', duration: 0.4, ease: 'power2.inOut' });
        } else {
          gsap.to(nav, { y: '0%', duration: 0.4, ease: 'power2.out' });
        }
      } else {
        gsap.to(nav, { y: '0%', duration: 0.4, ease: 'power2.out' });
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <>
      <nav
        ref={navRef}
        className="fixed top-0 left-0 w-full z-50 mix-blend-difference"
      >
        <div className="flex items-baseline justify-between px-6 md:px-10 py-5">
          <Link
            href="/"
            className="font-display uppercase text-sm tracking-[0.15em] text-white"
          >
            Aman Sharma
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-baseline gap-7">
            {NAV_LINKS.slice(1).map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`uppercase text-[11px] tracking-[0.25em] underline-offset-4 transition-colors duration-200 ${
                    isActive
                      ? 'text-white underline'
                      : 'text-white/70 hover:text-white hover:underline'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* Mobile trigger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden uppercase text-[11px] tracking-[0.25em] text-white"
          >
            {isOpen ? 'Close' : 'Menu'}
          </button>
        </div>
      </nav>

      {/* Mobile full-screen menu */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 bg-ink z-40 flex flex-col justify-center px-6 gap-2">
          {NAV_LINKS.map((link, i) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="flex items-baseline gap-4 text-left group"
              >
                <span className="text-red text-xs tracking-[0.2em]">
                  0{i + 1}
                </span>
                <span
                  className={`font-display uppercase text-5xl leading-[1.05] ${
                    isActive ? 'text-red' : 'text-bone group-active:text-red'
                  }`}
                >
                  {link.label}
                </span>
              </Link>
            );
          })}
        </div>
      )}
    </>
  );
}
