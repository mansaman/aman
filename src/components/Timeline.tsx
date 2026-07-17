'use client';

import { useRef } from 'react';
import { TIMELINE_DATA } from '@/data';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import * as Icons from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function Timeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  // Helper to render icons dynamically
  const getIcon = (name: string) => {
    const LucideIcon = (Icons as any)[name];
    if (!LucideIcon) return <Icons.Briefcase className="w-5 h-5" />;
    return <LucideIcon className="w-5 h-5" />;
  };

  useGSAP(() => {
    const track = trackRef.current;
    const container = containerRef.current;
    if (!track || !container) return;

    // Check media queries for horizontal pin
    const mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      const scrollWidth = track.scrollWidth;
      const amountToScroll = scrollWidth - window.innerWidth;

      // Translate track horizontally based on vertical scroll
      const scrollTween = gsap.to(track, {
        x: -amountToScroll,
        ease: 'none',
        scrollTrigger: {
          trigger: container,
          pin: true,
          scrub: 1,
          start: 'top top',
          end: () => `+=${amountToScroll}`,
          invalidateOnRefresh: true,
        }
      });

      // Animate progress line width
      gsap.fromTo('.progress-line-fill',
        { scaleX: 0 },
        {
          scaleX: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: container,
            scrub: 1,
            start: 'top top',
            end: () => `+=${amountToScroll}`,
          }
        }
      );

      // Animate each section node and card content as they roll in
      const cards = gsap.utils.toArray('.timeline-card');
      cards.forEach((card: any) => {
        // Glowing dot animation
        gsap.fromTo(card.querySelector('.node-dot'),
          { scale: 0.8, backgroundColor: '#18181b', borderColor: '#3f3f46', boxShadow: 'none' },
          {
            scale: 1.3,
            backgroundColor: '#00f2fe',
            borderColor: '#00f2fe',
            boxShadow: '0 0 20px rgba(0, 242, 254, 0.8)',
            scrollTrigger: {
              trigger: card,
              containerAnimation: scrollTween,
              start: 'left 65%',
              end: 'left 45%',
              scrub: true,
            }
          }
        );

        // Card content fade & elevate
        gsap.fromTo(card.querySelector('.card-details'),
          { opacity: 0.2, y: 30, scale: 0.95 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            scrollTrigger: {
              trigger: card,
              containerAnimation: scrollTween,
              start: 'left 80%',
              end: 'left 50%',
              scrub: true,
            }
          }
        );
      });
    });

    mm.add("(max-width: 767px)", () => {
      // Mobile - standard vertical list with scroll entries fading up
      const cards = gsap.utils.toArray('.timeline-card');
      cards.forEach((card: any) => {
        gsap.fromTo(card,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            scrollTrigger: {
              trigger: card,
              start: 'top 85%',
              end: 'top 60%',
              scrub: 0.5,
            }
          }
        );
      });
    });

    return () => mm.revert();
  }, { scope: containerRef });

  return (
    <section
      ref={containerRef}
      id="timeline"
      className="relative md:h-screen w-full bg-[#030307] flex items-center overflow-hidden py-24 md:py-0 border-y border-white/5"
    >
      {/* Background Section Title */}
      <div className="absolute top-10 md:top-20 left-6 md:left-16 z-10 pointer-events-none">
        <h2 className="font-display text-4xl md:text-6xl font-black uppercase tracking-wider text-white/5">
          Life Milestones
        </h2>
        <p className="text-zinc-600 text-xs md:text-sm tracking-widest uppercase mt-2">
          Left to Right Scroll / Career & Achievements
        </p>
      </div>

      {/* Progress Track (Horizontal Centerline for Desktop) */}
      <div className="hidden md:block absolute top-[52%] left-0 w-full h-[2px] bg-white/5 z-0 pointer-events-none">
        <div className="progress-line-fill absolute top-0 left-0 w-full h-full bg-gradient-to-r from-[#00f2fe] via-[#9b51e0] to-[#ff007f] origin-left scale-x-0" />
      </div>

      {/* Timeline track wrapper */}
      <div 
        ref={trackRef}
        className="flex flex-col md:flex-row items-stretch md:items-center px-6 md:px-[30vw] gap-16 md:gap-32 w-full md:w-auto relative"
      >
        {TIMELINE_DATA.map((item, index) => {
          // Alternating layout for desktop (top/bottom cards relative to line)
          const isEven = index % 2 === 0;

          return (
            <div
              key={item.id}
              className={`timeline-card flex flex-col md:relative md:w-[450px] shrink-0 z-10 ${
                isEven ? 'md:flex-col-reverse' : 'md:flex-col'
              }`}
            >
              {/* Card content container */}
              <div 
                className={`card-details glass-panel p-6 md:p-8 rounded-3xl relative border border-white/5 shadow-2xl transition-all duration-300 hover:border-[#00f2fe]/30 hover:shadow-[0_10px_30px_rgba(0,242,254,0.05)] cursor-view-target ${
                  isEven ? 'md:mb-16' : 'md:mt-16'
                }`}
              >
                {/* Accent glow corner */}
                <div className={`absolute top-0 right-0 w-16 h-16 rounded-tr-3xl rounded-bl-full opacity-10 bg-gradient-to-br ${
                  index % 3 === 0 ? 'from-[#00f2fe] to-[#9b51e0]' : 
                  index % 3 === 1 ? 'from-[#9b51e0] to-[#ff007f]' : 'from-[#05ffa1] to-[#00f2fe]'
                }`} />

                {/* Date */}
                <div className={`font-display font-extrabold text-xs md:text-sm tracking-widest uppercase mb-3 ${
                  index % 3 === 0 ? 'text-[#00f2fe]' : 
                  index % 3 === 1 ? 'text-[#9b51e0]' : 'text-[#05ffa1]'
                }`}>
                  {item.year}
                </div>

                {/* Header */}
                <h3 className="font-display font-black text-xl md:text-2xl text-white tracking-wide mb-1">
                  {item.title}
                </h3>
                <h4 className="text-zinc-400 text-xs md:text-sm font-semibold tracking-wide mb-4">
                  {item.subtitle}
                </h4>

                {/* Description */}
                <p className="text-zinc-500 text-sm leading-relaxed mb-6">
                  {item.description}
                </p>

                {/* Footer Brand Logo Block */}
                <div className="flex items-center gap-3 border-t border-white/5 pt-4">
                  <div className={`p-2 rounded-xl bg-white/5 text-zinc-300 border border-white/5`}>
                    {getIcon(item.logo)}
                  </div>
                  <span className="text-zinc-400 text-xs font-semibold uppercase tracking-wider">
                    {item.subtitle.split(' & ')[0]}
                  </span>
                </div>
              </div>

              {/* Glowing Line Node (Centered relative to card in vertical stack/horizontal list) */}
              <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 items-center justify-center pointer-events-none">
                <div className="node-dot w-4 h-4 rounded-full border-2 border-zinc-700 bg-zinc-950 transition-all duration-300" />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
