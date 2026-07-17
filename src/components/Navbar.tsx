'use client';

import { useState, useEffect, useRef } from 'react';
import { PERSONAL_INFO } from '@/data';
import { PhoneCall, Menu, X } from 'lucide-react';
import gsap from 'gsap';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const nav = navRef.current;
      if (!nav) return;

      if (currentScrollY > 100) {
        if (currentScrollY > lastScrollY.current) {
          // Scrolling down - hide navbar
          gsap.to(nav, { y: '-100%', duration: 0.3, ease: 'power2.inOut' });
        } else {
          // Scrolling up - show navbar
          gsap.to(nav, { y: '0%', duration: 0.3, ease: 'power2.out' });
        }
      } else {
        // At the top - keep visible
        gsap.to(nav, { y: '0%', duration: 0.3, ease: 'power2.out' });
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      // Offset for sticky nav
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav
      ref={navRef}
      className="fixed top-0 left-0 w-full z-50 px-6 py-4 md:px-12 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between glass-panel px-6 py-3 rounded-full border border-white/5 shadow-2xl">
        {/* Logo */}
        <div 
          onClick={() => scrollToSection('hero')} 
          className="flex items-center gap-2 cursor-pointer font-display font-black text-xl tracking-widest text-white group"
        >
          <span className="relative inline-block px-2.5 py-0.5 bg-gradient-to-r from-[#00f2fe] to-[#9b51e0] rounded text-black font-extrabold shadow-[0_0_15px_rgba(0,242,254,0.4)] group-hover:scale-105 transition-transform duration-300">
            A
          </span>
          <span className="group-hover:text-[#00f2fe] transition-colors duration-300">
            MAN
          </span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wider uppercase">
          <button 
            onClick={() => scrollToSection('hero')} 
            className="text-zinc-400 hover:text-white transition-colors duration-300 relative py-1 group"
          >
            Home
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#00f2fe] group-hover:w-full transition-all duration-300" />
          </button>
          <button 
            onClick={() => scrollToSection('timeline')} 
            className="text-zinc-400 hover:text-white transition-colors duration-300 relative py-1 group"
          >
            Life Journey
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#9b51e0] group-hover:w-full transition-all duration-300" />
          </button>
          <button 
            onClick={() => scrollToSection('experience')} 
            className="text-zinc-400 hover:text-white transition-colors duration-300 relative py-1 group"
          >
            Experience
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#05ffa1] group-hover:w-full transition-all duration-300" />
          </button>
          <button 
            onClick={() => scrollToSection('contact')} 
            className="text-zinc-400 hover:text-white transition-colors duration-300 relative py-1 group"
          >
            Contact
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#ff007f] group-hover:w-full transition-all duration-300" />
          </button>
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <button
            onClick={() => scrollToSection('contact')}
            className="relative overflow-hidden group flex items-center gap-2 px-5 py-2 rounded-full text-xs font-bold uppercase tracking-widest bg-white text-black hover:text-white transition-colors duration-300"
          >
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-[#00f2fe] to-[#9b51e0] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 ease-out" />
            <PhoneCall size={14} className="relative z-10 group-hover:animate-bounce" />
            <span className="relative z-10">Call Me</span>
          </button>
        </div>

        {/* Mobile menu trigger */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white hover:text-[#00f2fe] transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 top-[76px] bg-[#030307]/95 backdrop-blur-xl z-40 flex flex-col justify-center items-center gap-8 border-t border-white/5 animate-fade-in">
          <button 
            onClick={() => scrollToSection('hero')} 
            className="text-2xl font-display font-medium text-zinc-300 hover:text-white tracking-widest"
          >
            Home
          </button>
          <button 
            onClick={() => scrollToSection('timeline')} 
            className="text-2xl font-display font-medium text-zinc-300 hover:text-[#9b51e0] tracking-widest"
          >
            Life Journey
          </button>
          <button 
            onClick={() => scrollToSection('experience')} 
            className="text-2xl font-display font-medium text-zinc-300 hover:text-[#05ffa1] tracking-widest"
          >
            Experience
          </button>
          <button 
            onClick={() => scrollToSection('contact')} 
            className="text-2xl font-display font-medium text-zinc-300 hover:text-[#ff007f] tracking-widest"
          >
            Contact
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="flex items-center gap-2 px-8 py-3 rounded-full text-sm font-bold uppercase tracking-widest bg-gradient-to-r from-[#00f2fe] to-[#9b51e0] text-black shadow-lg shadow-cyan-500/20"
          >
            <PhoneCall size={16} />
            Call Me
          </button>
        </div>
      )}
    </nav>
  );
}
