'use client';

import { useRef } from 'react';
import { PERSONAL_INFO } from '@/data';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ArrowRight, Sparkles, Terminal, Shield, Network } from 'lucide-react';

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline();

    // Staggered load animation
    tl.fromTo('.badge-anim', 
      { opacity: 0, y: 30, scale: 0.9 }, 
      { opacity: 1, y: 0, scale: 1, duration: 0.8, ease: 'back.out(1.7)' }
    )
    .fromTo(titleRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: 'power4.out' },
      '-=0.5'
    )
    .fromTo(textRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' },
      '-=0.6'
    )
    .fromTo(buttonsRef.current?.children || [],
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, stagger: 0.15, duration: 0.6, ease: 'power2.out' },
      '-=0.4'
    )
    .fromTo(cardsRef.current?.children || [],
      { opacity: 0, scale: 0.9, y: 40 },
      { opacity: 1, scale: 1, y: 0, stagger: 0.1, duration: 0.8, ease: 'power3.out' },
      '-=0.4'
    );

    // Floating animation for glowing background elements
    gsap.to('.glow-bubble-1', {
      x: '30px',
      y: '-20px',
      duration: 8,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut'
    });

    gsap.to('.glow-bubble-2', {
      x: '-40px',
      y: '30px',
      duration: 10,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut'
    });
  }, { scope: containerRef });

  const handleScrollToTimeline = () => {
    const element = document.getElementById('timeline');
    if (element) {
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

  const handleScrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative min-h-screen flex flex-col justify-center items-center px-6 pt-32 pb-20 md:px-12 overflow-hidden bg-radial from-[#070715] to-[#030307]"
    >
      {/* Background grids and glowing elements */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f29370a_1px,transparent_1px),linear-gradient(to_bottom,#1f29370a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />
      
      {/* Ambient glows */}
      <div className="absolute top-1/4 left-1/4 w-[35vw] h-[35vw] rounded-full bg-[#00f2fe]/10 blur-[120px] pointer-events-none glow-bubble-1" />
      <div className="absolute bottom-1/4 right-1/4 w-[30vw] h-[30vw] rounded-full bg-[#9b51e0]/10 blur-[130px] pointer-events-none glow-bubble-2" />

      <div className="max-w-5xl mx-auto flex flex-col items-center text-center z-10">
        {/* Animated Badge */}
        <div className="badge-anim flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#00f2fe]/20 bg-[#00f2fe]/5 text-xs text-[#00f2fe] font-semibold tracking-wider uppercase mb-8 shadow-[0_0_15px_rgba(0,242,254,0.1)]">
          <Sparkles size={12} className="animate-spin-slow" />
          <span>Next-Gen Systems & Interaction</span>
        </div>

        {/* Large Premium Typography */}
        <h1
          ref={titleRef}
          className="font-display text-5xl md:text-8xl font-black tracking-tight leading-[1.05] text-transparent bg-clip-text bg-gradient-to-b from-white via-zinc-100 to-zinc-500 mb-8"
        >
          {PERSONAL_INFO.title.split(' & ')[0]} <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f2fe] via-[#9b51e0] to-[#ff007f] drop-shadow-[0_2px_15px_rgba(155,81,224,0.3)]">
            & {PERSONAL_INFO.title.split(' & ')[1]}
          </span>
        </h1>

        {/* Dynamic Tagline */}
        <p
          ref={textRef}
          className="max-w-2xl text-base md:text-lg text-zinc-400 font-medium leading-relaxed tracking-wide mb-12"
        >
          {PERSONAL_INFO.subtitle}
        </p>

        {/* CTA Actions */}
        <div
          ref={buttonsRef}
          className="flex flex-col sm:flex-row gap-5 mb-20 z-10"
        >
          <button
            onClick={handleScrollToTimeline}
            className="flex items-center justify-center gap-2.5 px-8 py-4 rounded-full text-sm font-bold uppercase tracking-wider bg-white text-black hover:bg-zinc-200 transition-all duration-300 shadow-[0_5px_25px_rgba(255,255,255,0.1)] hover:shadow-[0_5px_30px_rgba(0,242,254,0.3)] hover:-translate-y-0.5 active:translate-y-0"
          >
            <span>Explore Journey</span>
            <ArrowRight size={16} />
          </button>
          <button
            onClick={handleScrollToContact}
            className="flex items-center justify-center gap-2.5 px-8 py-4 rounded-full text-sm font-bold uppercase tracking-wider border border-white/10 hover:border-[#05ffa1] bg-white/5 hover:bg-[#05ffa1]/5 text-white transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0"
          >
            <span>Contact Me</span>
          </button>
        </div>

        {/* Expertise Grid - Teaser cards showing "Can Do Everything" */}
        <div
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl"
        >
          <div className="glass-panel px-6 py-6 rounded-2xl flex flex-col items-center md:items-start text-center md:text-left hover:border-[#00f2fe]/30 transition-all duration-300 group">
            <div className="p-3 bg-[#00f2fe]/10 rounded-xl text-[#00f2fe] mb-4 group-hover:scale-110 transition-transform duration-300">
              <Terminal size={20} />
            </div>
            <h3 className="font-display font-bold text-lg text-white mb-2">Systems Engineering</h3>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Highly scalable server nodes, database structures, APIs, and low-latency system architectures.
            </p>
          </div>

          <div className="glass-panel px-6 py-6 rounded-2xl flex flex-col items-center md:items-start text-center md:text-left hover:border-[#9b51e0]/30 transition-all duration-300 group">
            <div className="p-3 bg-[#9b51e0]/10 rounded-xl text-[#9b51e0] mb-4 group-hover:scale-110 transition-transform duration-300">
              <Network size={20} />
            </div>
            <h3 className="font-display font-bold text-lg text-white mb-2">Interactive Frontends</h3>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Pixel-perfect client layouts, dynamic motion design, GSAP scroll triggers, and fluid SVG pathways.
            </p>
          </div>

          <div className="glass-panel px-6 py-6 rounded-2xl flex flex-col items-center md:items-start text-center md:text-left hover:border-[#05ffa1]/30 transition-all duration-300 group">
            <div className="p-3 bg-[#05ffa1]/10 rounded-xl text-[#05ffa1] mb-4 group-hover:scale-110 transition-transform duration-300">
              <Shield size={20} />
            </div>
            <h3 className="font-display font-bold text-lg text-white mb-2">Architectural Integrity</h3>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Continuous deployment, server-side caching, automated coverage, and sub-100ms lighthouse performance.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
