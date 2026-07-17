'use client';

import { useState, useRef } from 'react';
import { COMPANIES_DATA, SKILLS_CATEGORIES, Company } from '@/data';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { X, ArrowUpRight, CheckCircle2, Cpu, Wrench } from 'lucide-react';

export default function Experience() {
  const [selectedCompany, setSelectedCompany] = useState<Company | null>(null);
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  
  const drawerRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Slide-out animations for drawer
  const openDrawer = (company: Company) => {
    setSelectedCompany(company);
    
    // Quick delay to let DOM render
    setTimeout(() => {
      if (drawerRef.current && overlayRef.current) {
        gsap.killTweensOf([drawerRef.current, overlayRef.current]);
        
        gsap.timeline()
          .fromTo(overlayRef.current, 
            { opacity: 0 }, 
            { opacity: 1, duration: 0.3, pointerEvents: 'auto', ease: 'power2.out' }
          )
          .fromTo(drawerRef.current,
            { x: '100%' },
            { x: '0%', duration: 0.5, ease: 'power3.out' },
            '-=0.2'
          )
          .fromTo('.drawer-stagger',
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, stagger: 0.08, duration: 0.4, ease: 'power2.out' },
            '-=0.3'
          );
      }
    }, 50);
  };

  const closeDrawer = () => {
    if (drawerRef.current && overlayRef.current) {
      gsap.timeline({
        onComplete: () => setSelectedCompany(null)
      })
      .to(drawerRef.current, { x: '100%', duration: 0.4, ease: 'power3.in' })
      .to(overlayRef.current, { opacity: 0, duration: 0.3, pointerEvents: 'none', ease: 'power2.in' }, '-=0.2');
    }
  };

  // Fade-in cards on scroll
  useGSAP(() => {
    gsap.fromTo('.experience-card',
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.15,
        scrollTrigger: {
          trigger: '#experience',
          start: 'top 80%',
          end: 'top 40%',
          scrub: 1,
        }
      }
    );

    gsap.fromTo('.skills-matrix-box',
      { opacity: 0, scale: 0.95 },
      {
        opacity: 1,
        scale: 1,
        scrollTrigger: {
          trigger: '.skills-matrix-box',
          start: 'top 85%',
          end: 'top 60%',
          scrub: 1,
        }
      }
    );
  }, { scope: containerRef });

  return (
    <section
      ref={containerRef}
      id="experience"
      className="relative min-h-screen py-32 px-6 md:px-12 bg-[#04040a] overflow-hidden"
    >
      {/* Background glow meshes */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[35vw] h-[35vw] rounded-full bg-[#05ffa1]/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-[30vw] h-[30vw] rounded-full bg-[#ff007f]/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto z-10 relative">
        
        {/* Section Header */}
        <div className="mb-20 text-center md:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#05ffa1]/20 bg-[#05ffa1]/5 text-xs text-[#05ffa1] font-semibold uppercase tracking-wider mb-4">
            <Cpu size={12} className="animate-pulse" />
            <span>Interactive Work Experience</span>
          </div>
          <h2 className="font-display text-4xl md:text-6xl font-black uppercase tracking-tight text-white">
            Where I Built It.
          </h2>
          <p className="text-zinc-400 mt-4 max-w-xl text-sm leading-relaxed">
            Click on any company card to open an interactive deep dive into metrics, features, and the exact skill matrix deployed. Hover over skills to trace where they were used.
          </p>
        </div>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          
          {/* Company Cards Column (2/3 width) */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            {COMPANIES_DATA.map((company) => {
              // Highlight company if one of its skills is hovered
              const isHighlighted = hoveredSkill ? company.skillsUsed.includes(hoveredSkill) : false;
              const hasHoverActive = hoveredSkill !== null;

              return (
                <div
                  key={company.id}
                  onClick={() => openDrawer(company)}
                  className={`experience-card cursor-view-target p-8 rounded-3xl border text-left cursor-pointer transition-all duration-500 relative overflow-hidden group
                    ${hasHoverActive 
                      ? isHighlighted 
                        ? 'border-[#05ffa1] bg-[#05ffa1]/5 scale-[1.01] shadow-[0_0_20px_rgba(5,255,161,0.08)]' 
                        : 'border-white/5 bg-white/[0.01] opacity-30 scale-95' 
                      : 'border-white/5 bg-white/[0.02] hover:border-white/20 hover:bg-white/[0.04]'
                    }
                  `}
                >
                  {/* Decorative background glow based on company color */}
                  <div className={`absolute -right-16 -top-16 w-36 h-36 rounded-full blur-[60px] opacity-10 bg-gradient-to-br ${company.logoColor}`} />

                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                    <div>
                      {/* Badge indicator */}
                      <span className={`inline-block px-2.5 py-0.5 rounded text-[10px] font-black uppercase tracking-widest bg-gradient-to-r ${company.logoColor} text-black mb-2`}>
                        {company.name}
                      </span>
                      <h3 className="font-display font-black text-2xl text-white group-hover:text-[#05ffa1] transition-colors duration-300">
                        {company.role}
                      </h3>
                    </div>
                    <span className="text-zinc-500 text-sm font-semibold tracking-wider uppercase border border-white/5 px-4 py-1.5 rounded-full shrink-0">
                      {company.period}
                    </span>
                  </div>

                  <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                    {company.summary}
                  </p>

                  {/* Skills tags preview */}
                  <div className="flex flex-wrap gap-2">
                    {company.skillsUsed.slice(0, 5).map((skill) => (
                      <span
                        key={skill}
                        className={`text-xs px-3 py-1 rounded-full border transition-all duration-300
                          ${hoveredSkill === skill 
                            ? 'bg-[#05ffa1]/20 border-[#05ffa1] text-[#05ffa1]' 
                            : 'bg-white/5 border-white/5 text-zinc-400'
                          }
                        `}
                      >
                        {skill}
                      </span>
                    ))}
                    {company.skillsUsed.length > 5 && (
                      <span className="text-xs px-3 py-1 rounded-full bg-white/5 border border-white/5 text-zinc-500">
                        +{company.skillsUsed.length - 5} more
                      </span>
                    )}
                  </div>
                  
                  {/* Expanded reveal hover cue */}
                  <div className="absolute right-6 bottom-6 text-[#05ffa1] opacity-0 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300">
                    <ArrowUpRight size={20} />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Interactive Skills Matrix Sidebar (1/3 width) */}
          <div className="skills-matrix-box glass-panel p-8 rounded-3xl border border-white/5">
            <div className="flex items-center gap-3 border-b border-white/5 pb-4 mb-6">
              <div className="p-2 rounded-lg bg-[#ff007f]/10 text-[#ff007f]">
                <Wrench size={18} />
              </div>
              <h3 className="font-display font-bold text-lg text-white">
                Core Skills Matrix
              </h3>
            </div>
            <p className="text-zinc-500 text-xs leading-relaxed mb-6">
              Hover over any skill block below to light up the companies where I successfully put that skill into practice.
            </p>

            <div className="flex flex-col gap-6">
              {SKILLS_CATEGORIES.map((category) => (
                <div key={category.name} className="flex flex-col gap-3">
                  <h4 className="text-zinc-400 text-xs font-bold uppercase tracking-widest">
                    {category.name}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => {
                      const isActive = hoveredSkill === skill;
                      return (
                        <span
                          key={skill}
                          onMouseEnter={() => setHoveredSkill(skill)}
                          onMouseLeave={() => setHoveredSkill(null)}
                          className={`text-xs px-3 py-2 rounded-xl border font-medium cursor-default transition-all duration-300
                            ${isActive 
                              ? 'bg-gradient-to-r from-[#00f2fe] to-[#9b51e0] border-transparent text-black font-extrabold shadow-lg shadow-cyan-500/20 scale-105' 
                              : 'bg-white/5 border-white/5 text-zinc-400 hover:border-white/20 hover:text-white'
                            }
                          `}
                        >
                          {skill}
                        </span>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Drawer Overlay backdrop */}
      <div
        ref={overlayRef}
        onClick={closeDrawer}
        className="fixed inset-0 bg-[#030307]/80 backdrop-blur-md z-[99] pointer-events-none opacity-0 transition-opacity duration-300"
      />

      {/* Slide-out detail drawer */}
      {selectedCompany && (
        <div
          ref={drawerRef}
          className="fixed top-0 right-0 h-full w-full md:w-[600px] z-[100] bg-[#07070f] border-l border-white/5 shadow-2xl p-8 md:p-12 overflow-y-auto"
        >
          {/* Header */}
          <div className="flex justify-between items-center drawer-stagger border-b border-white/5 pb-6 mb-8">
            <div>
              <span className={`inline-block px-2.5 py-0.5 rounded text-[10px] font-black uppercase tracking-widest bg-gradient-to-r ${selectedCompany.logoColor} text-black mb-2`}>
                {selectedCompany.name}
              </span>
              <h3 className="font-display font-black text-3xl text-white">
                {selectedCompany.role}
              </h3>
              <p className="text-zinc-500 text-sm font-semibold tracking-wider uppercase mt-1">
                {selectedCompany.period}
              </p>
            </div>
            <button
              onClick={closeDrawer}
              className="p-3 bg-white/5 border border-white/5 rounded-full text-zinc-400 hover:text-white hover:border-white/10 transition-colors"
            >
              <X size={20} />
            </button>
          </div>

          {/* Key Achievements */}
          <div className="mb-10">
            <h4 className="font-display font-bold text-sm text-zinc-400 uppercase tracking-widest mb-4 drawer-stagger">
              Key Contributions & Accomplishments
            </h4>
            <div className="flex flex-col gap-4">
              {selectedCompany.achievements.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3.5 drawer-stagger">
                  <CheckCircle2 size={18} className="text-[#05ffa1] shrink-0 mt-0.5" />
                  <p className="text-zinc-300 text-sm leading-relaxed">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Featured Project */}
          {selectedCompany.featuredProject && (
            <div className="glass-panel p-6 rounded-2xl border border-white/5 mb-10 drawer-stagger">
              <h4 className="font-display font-extrabold text-xs text-[#00f2fe] uppercase tracking-widest mb-3">
                Featured Product Build
              </h4>
              <h5 className="font-display font-black text-xl text-white mb-2">
                {selectedCompany.featuredProject.title}
              </h5>
              <p className="text-zinc-400 text-xs leading-relaxed mb-4">
                {selectedCompany.featuredProject.description}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {selectedCompany.featuredProject.tech.map((t) => (
                  <span key={t} className="text-[10px] px-2 py-0.5 rounded bg-white/5 text-zinc-400 border border-white/5">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Skill Tag Cloud */}
          <div className="drawer-stagger">
            <h4 className="font-display font-bold text-sm text-zinc-400 uppercase tracking-widest mb-4">
              Detailed Skill Deployment
            </h4>
            <div className="flex flex-wrap gap-2">
              {selectedCompany.skillsUsed.map((skill) => (
                <span
                  key={skill}
                  className="text-xs px-3.5 py-1.5 rounded-xl bg-white/5 border border-white/5 text-white hover:border-[#00f2fe] transition-all duration-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
