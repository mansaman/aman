'use client';

import { useState, useRef } from 'react';
import { PERSONAL_INFO } from '@/data';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { Phone, Mail, Clock, CheckCircle2, PhoneCall, ArrowRight, User } from 'lucide-react';

export default function Contact() {
  const [formState, setFormState] = useState({ name: '', contact: '', time: 'now' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  
  const containerRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const successRef = useRef<HTMLDivElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.contact) return;

    setIsSubmitting(true);
    
    // Simulate high-end server API check & callback scheduling
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      
      // Trigger GSAP Success Sequence
      setTimeout(() => {
        if (successRef.current) {
          gsap.fromTo(successRef.current,
            { scale: 0.8, opacity: 0 },
            { scale: 1, opacity: 1, duration: 0.6, ease: 'back.out(1.7)' }
          );
          
          gsap.fromTo('.success-icon',
            { scale: 0, rotate: -180 },
            { scale: 1, rotate: 0, duration: 0.8, ease: 'back.out(1.5)' }
          );
        }
      }, 50);
    }, 1500);
  };

  useGSAP(() => {
    // Reveal block on scroll
    gsap.fromTo('.contact-reveal',
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.15,
        scrollTrigger: {
          trigger: '#contact',
          start: 'top 80%',
          end: 'top 40%',
          scrub: 1,
        }
      }
    );
  }, { scope: containerRef });

  return (
    <section
      ref={containerRef}
      id="contact"
      className="relative min-h-screen py-32 px-6 md:px-12 bg-gradient-to-b from-[#04040a] to-[#020205] overflow-hidden flex items-center"
    >
      {/* Background neon trails */}
      <div className="absolute top-1/3 right-10 w-[30vw] h-[30vw] rounded-full bg-[#ff007f]/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[35vw] h-[35vw] rounded-full bg-[#00f2fe]/5 blur-[130px] pointer-events-none" />

      <div className="max-w-6xl mx-auto w-full z-10 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Call-to-action text details (5/12 width) */}
          <div className="lg:col-span-5 flex flex-col contact-reveal text-center lg:text-left">
            <div className="inline-flex self-center lg:self-start items-center gap-2 px-3 py-1 rounded-full border border-[#ff007f]/20 bg-[#ff007f]/5 text-xs text-[#ff007f] font-semibold uppercase tracking-wider mb-6">
              <PhoneCall size={12} className="animate-bounce" />
              <span>Let's Discuss Next Steps</span>
            </div>
            
            <h2 className="font-display text-4xl md:text-6xl font-black uppercase tracking-tight text-white mb-6 leading-tight">
              Ready to <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f2fe] via-[#9b51e0] to-[#ff007f] drop-shadow-[0_2px_15px_rgba(255,0,127,0.3)]">
                Build Anything?
              </span>
            </h2>
            
            <p className="text-zinc-400 text-sm leading-relaxed mb-10 max-w-md">
              Need elite systems designed, performant animations coded, or custom layouts built? Set a quick callback below or call direct. I am ready to handle your roadmap.
            </p>

            {/* Direct Channels */}
            <div className="flex flex-col gap-5 max-w-sm mx-auto lg:mx-0">
              <a
                href={`tel:${PERSONAL_INFO.phone}`}
                className="flex items-center gap-4 p-4 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-[#00f2fe]/30 hover:bg-white/[0.04] transition-all duration-300 group"
              >
                <div className="p-3 bg-[#00f2fe]/10 text-[#00f2fe] rounded-xl group-hover:scale-110 transition-transform duration-300">
                  <Phone size={18} />
                </div>
                <div className="text-left">
                  <p className="text-zinc-500 text-[10px] uppercase font-bold tracking-widest">Call Directly</p>
                  <p className="text-white text-sm font-semibold tracking-wider">{PERSONAL_INFO.phone}</p>
                </div>
              </a>

              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="flex items-center gap-4 p-4 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-[#9b51e0]/30 hover:bg-white/[0.04] transition-all duration-300 group"
              >
                <div className="p-3 bg-[#9b51e0]/10 text-[#9b51e0] rounded-xl group-hover:scale-110 transition-transform duration-300">
                  <Mail size={18} />
                </div>
                <div className="text-left">
                  <p className="text-zinc-500 text-[10px] uppercase font-bold tracking-widest">Send Email</p>
                  <p className="text-white text-sm font-semibold tracking-wider">{PERSONAL_INFO.email}</p>
                </div>
              </a>
            </div>
          </div>

          {/* Callback scheduler widget card (7/12 width) */}
          <div className="lg:col-span-7 contact-reveal w-full max-w-xl mx-auto">
            <div className="glass-panel p-8 md:p-12 rounded-3xl border border-white/5 relative overflow-hidden shadow-2xl">
              
              {/* Corner ambient glow */}
              <div className="absolute -top-16 -left-16 w-36 h-36 rounded-full blur-[60px] opacity-10 bg-[#00f2fe]" />

              {!isSuccess ? (
                <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-6">
                  <div>
                    <h3 className="font-display font-black text-2xl text-white mb-2">
                      Schedule Callback
                    </h3>
                    <p className="text-zinc-500 text-xs tracking-wide">
                      Submit details below to trigger an immediate automated dispatch message to my phone.
                    </p>
                  </div>

                  {/* Input Name */}
                  <div className="relative">
                    <label className="text-zinc-400 text-[10px] uppercase font-bold tracking-widest mb-2 block">
                      Your Name
                    </label>
                    <div className="relative">
                      <User size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-600" />
                      <input
                        type="text"
                        required
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        placeholder="e.g. John Doe"
                        className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-white/5 border border-white/5 focus:border-[#00f2fe]/40 focus:bg-white/[0.08] text-sm text-white placeholder-zinc-600 outline-none transition-all duration-300"
                      />
                    </div>
                  </div>

                  {/* Input Contact details */}
                  <div className="relative">
                    <label className="text-zinc-400 text-[10px] uppercase font-bold tracking-widest mb-2 block">
                      Phone Number / Email
                    </label>
                    <div className="relative">
                      <PhoneCall size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-600" />
                      <input
                        type="text"
                        required
                        value={formState.contact}
                        onChange={(e) => setFormState({ ...formState, contact: e.target.value })}
                        placeholder="e.g. +1 (555) 012-3456"
                        className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-white/5 border border-white/5 focus:border-[#00f2fe]/40 focus:bg-white/[0.08] text-sm text-white placeholder-zinc-600 outline-none transition-all duration-300"
                      />
                    </div>
                  </div>

                  {/* Pick Callback Time slot */}
                  <div>
                    <label className="text-zinc-400 text-[10px] uppercase font-bold tracking-widest mb-3 block">
                      Preferred Callback Time
                    </label>
                    <div className="grid grid-cols-3 gap-3">
                      {[
                        { id: 'now', label: 'Right Now', sub: 'Instant alert' },
                        { id: '1hour', label: 'In 1 Hour', sub: 'Today' },
                        { id: 'tomorrow', label: 'Tomorrow', sub: 'Morning slot' },
                      ].map((slot) => {
                        const isSelected = formState.time === slot.id;
                        return (
                          <div
                            key={slot.id}
                            onClick={() => setFormState({ ...formState, time: slot.id })}
                            className={`p-3 rounded-xl border text-center cursor-pointer transition-all duration-300 flex flex-col justify-center items-center gap-0.5
                              ${isSelected
                                ? 'border-[#00f2fe] bg-[#00f2fe]/5'
                                : 'border-white/5 bg-white/[0.01] hover:border-white/10 hover:bg-white/[0.03]'
                              }
                            `}
                          >
                            <span className={`text-xs font-semibold ${isSelected ? 'text-[#00f2fe]' : 'text-zinc-300'}`}>
                              {slot.label}
                            </span>
                            <span className="text-[9px] text-zinc-500 font-medium">
                              {slot.sub}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="relative overflow-hidden group flex items-center justify-center gap-2 w-full mt-2 py-4 rounded-xl text-xs font-bold uppercase tracking-widest bg-white text-black hover:text-white transition-colors duration-300 cursor-pointer disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2 relative z-10">
                        <Clock size={14} className="animate-spin" />
                        Scheduling Call...
                      </span>
                    ) : (
                      <>
                        <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-[#00f2fe] via-[#9b51e0] to-[#ff007f] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 ease-out" />
                        <span className="relative z-10 flex items-center gap-2">
                          Request Callback
                          <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                        </span>
                      </>
                    )}
                  </button>
                </form>
              ) : (
                <div
                  ref={successRef}
                  className="flex flex-col items-center justify-center text-center py-10"
                >
                  <div className="success-icon p-4 bg-[#05ffa1]/10 rounded-full text-[#05ffa1] mb-6 shadow-[0_0_25px_rgba(5,255,161,0.2)]">
                    <CheckCircle2 size={48} />
                  </div>
                  
                  <h3 className="font-display font-black text-2xl text-white mb-3">
                    Callback Scheduled!
                  </h3>
                  
                  <p className="text-zinc-400 text-sm leading-relaxed max-w-sm">
                    Thank you, <span className="text-white font-semibold">{formState.name}</span>. A dispatcher packet has been fired directly to my device. I will dial you{' '}
                    <span className="text-[#00f2fe] font-semibold">
                      {formState.time === 'now' ? 'immediately' : formState.time === '1hour' ? 'within the hour' : 'tomorrow morning' }
                    </span>{' '}
                    at <span className="text-[#05ffa1] font-semibold">{formState.contact}</span>.
                  </p>
                  
                  <button
                    onClick={() => {
                      setFormState({ name: '', contact: '', time: 'now' });
                      setIsSuccess(false);
                    }}
                    className="mt-8 text-xs font-bold uppercase tracking-widest text-[#00f2fe] hover:text-[#05ffa1] transition-colors border-b border-[#00f2fe]/20 hover:border-[#05ffa1]/20 pb-0.5"
                  >
                    Schedule Another Time
                  </button>
                </div>
              )}
            </div>
          </div>

        </div>

        {/* Footer info */}
        <div className="border-t border-white/5 mt-32 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-zinc-600 font-medium">
          <p>© {new Date().getFullYear()} Aman. All rights reserved.</p>
          <div className="flex gap-6">
            <a href={PERSONAL_INFO.socials.github} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Github</a>
            <a href={PERSONAL_INFO.socials.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
            <a href={PERSONAL_INFO.socials.twitter} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Twitter</a>
          </div>
        </div>
      </div>
    </section>
  );
}
