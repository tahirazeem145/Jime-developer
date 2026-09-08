import React, { useEffect, useRef } from 'react';
import { 
  Sparkles, 
  MapPin, 
  Code2, 
  GraduationCap, 
  ArrowRight, 
  ExternalLink, 
  CheckCircle2, 
  ShieldCheck, 
  Zap, 
  Globe2, 
  Calendar, 
  MessageSquare
} from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const cardsContainerRef = useRef(null);
  const cardRefs = useRef([]);
  const spotlightRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Header entrance: smooth, soft fade up
      if (headerRef.current) {
        gsap.fromTo(
          headerRef.current,
          { opacity: 0, y: 20 },
          {
            scrollTrigger: {
              trigger: headerRef.current,
              start: 'top 92%',
              once: true,
            },
            opacity: 1,
            y: 0,
            duration: 0.65,
            ease: 'power2.out',
          }
        );
      }

      // 2. Feature cards staggered entrance: buttery, elegant fade up
      const validCards = cardRefs.current.filter(Boolean);
      if (validCards.length > 0) {
        gsap.fromTo(
          validCards,
          { opacity: 0, y: 22 },
          {
            scrollTrigger: {
              trigger: cardsContainerRef.current,
              start: 'top 90%',
              once: true,
            },
            opacity: 1,
            y: 0,
            stagger: 0.1,
            duration: 0.6,
            ease: 'power2.out',
          }
        );
      }

      // 3. Spotlight Card entrance
      if (spotlightRef.current) {
        gsap.fromTo(
          spotlightRef.current,
          { opacity: 0, y: 20 },
          {
            scrollTrigger: {
              trigger: spotlightRef.current,
              start: 'top 90%',
              once: true,
            },
            opacity: 1,
            y: 0,
            duration: 0.65,
            ease: 'power2.out',
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      id="about" 
      ref={sectionRef}
      className="relative z-30 pt-20 sm:pt-28 pb-20 sm:pb-28 bg-[#080C0A] rounded-t-[36px] sm:rounded-t-[48px] border-t border-white/20 shadow-[0_-35px_100px_rgba(0,0,0,0.98)] overflow-hidden"
    >
      {/* Top Specular Edge Glow Highlight */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-white/50 to-transparent pointer-events-none" />
      
      {/* Top Ambient Radial Glow */}
      <div 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 opacity-15 blur-2xl pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at top, rgba(255,255,255,0.5) 0%, transparent 70%)'
        }}
      />

      {/* Subtle Ambient Radial White Glows */}
      <div 
        className="absolute top-1/4 left-1/4 w-[700px] h-[550px] rounded-full opacity-10 blur-[150px] pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(255,255,255,0.15) 0%, transparent 70%)'
        }}
      />
      <div 
        className="absolute bottom-1/4 right-10 w-[650px] h-[500px] rounded-full opacity-10 blur-[140px] pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(255,255,255,0.12) 0%, transparent 70%)'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* SECTION HEADER */}
        <div ref={headerRef} className="text-center max-w-3xl mx-auto mb-14 sm:mb-18">
          
          {/* Pill Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-pill-bw mb-5 animate-fadeIn">
            <Sparkles className="w-3.5 h-3.5 text-white animate-pulse" />
            <span className="font-sora font-semibold text-xs tracking-wider uppercase text-white">
              About Jime Developers
            </span>
          </div>

          {/* Heading */}
          <h2 className="font-sora font-extrabold text-3xl sm:text-4xl md:text-5xl text-white leading-[1.15] tracking-tight">
            Crafting software with speed, clarity, and{' '}
            <span className="text-white italic font-extrabold inline-block drop-shadow-[0_0_20px_rgba(255,255,255,0.3)]">
              zero corporate fluff.
            </span>
          </h2>

          {/* Intro text */}
          <p className="mt-5 text-base sm:text-lg text-neutral-400 font-inter font-normal leading-relaxed">
            <strong className="text-white font-semibold">Jime Developers</strong> is a modern software studio founded in{' '}
            <span className="text-white font-semibold">Aranthangi, Tamil Nadu</span>. We build custom websites, applications, and e-commerce platforms for founders, and teach the next generation of engineers through hands-on practical courses.
          </p>
        </div>

        {/* 1. THREE UNIQUE PILLAR CARDS (3-COLUMN GRID) */}
        <div 
          ref={cardsContainerRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16"
        >
          {/* Card 1: Fair Fixed Pricing */}
          <div 
            ref={(el) => (cardRefs.current[0] = el)}
            className="relative rounded-3xl glass-card-bw bg-gradient-to-b from-[#141417]/90 to-[#0A0A0C]/95 p-7 sm:p-8 flex flex-col justify-between border border-white/15 hover:border-white/40 hover:-translate-y-1 transition-all duration-300 group shadow-[0_20px_50px_rgba(0,0,0,0.7)] overflow-hidden"
          >
            <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-white/40 to-transparent pointer-events-none" />
            
            <div>
              {/* Header: Icon & Tag */}
              <div className="flex items-center justify-between gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-neutral-900 border border-white/15 flex items-center justify-center text-white shadow-[0_0_20px_rgba(255,255,255,0.08)] group-hover:scale-105 transition-transform">
                  <ShieldCheck className="w-6 h-6 text-white" />
                </div>
                <span className="px-3 py-1 rounded-full text-xs font-mono text-neutral-300 glass-pill-bw">
                  Transparent Model
                </span>
              </div>

              {/* Title */}
              <h3 className="font-sora font-bold text-xl sm:text-2xl text-white mb-3 group-hover:text-neutral-100 transition-colors">
                Fair & Fixed Pricing
              </h3>

              {/* Description */}
              <p className="text-sm text-neutral-400 font-inter leading-relaxed mb-6">
                Transparent upfront quotes with zero hidden extras, surprise invoices, or billable hour traps. You know exactly what you get and when it ships.
              </p>
            </div>

            {/* Feature Highlights */}
            <div className="pt-4 border-t border-white/10 space-y-2 text-xs font-inter text-neutral-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-white flex-shrink-0" />
                <span>100% full code ownership & IP transfer</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-white flex-shrink-0" />
                <span>No recurring retainer lock-ins</span>
              </div>
            </div>
          </div>

          {/* Card 2: Direct Engineer Access */}
          <div 
            ref={(el) => (cardRefs.current[1] = el)}
            className="relative rounded-3xl glass-card-bw bg-gradient-to-b from-[#141417]/90 to-[#0A0A0C]/95 p-7 sm:p-8 flex flex-col justify-between border border-white/15 hover:border-white/40 hover:-translate-y-1 transition-all duration-300 group shadow-[0_20px_50px_rgba(0,0,0,0.7)] overflow-hidden"
          >
            <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-white/40 to-transparent pointer-events-none" />
            
            <div>
              {/* Header: Icon & Tag */}
              <div className="flex items-center justify-between gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-neutral-900 border border-white/15 flex items-center justify-center text-white shadow-[0_0_20px_rgba(255,255,255,0.08)] group-hover:scale-105 transition-transform">
                  <MessageSquare className="w-6 h-6 text-white" />
                </div>
                <span className="px-3 py-1 rounded-full text-xs font-mono text-neutral-300 glass-pill-bw">
                  Zero Middlemen
                </span>
              </div>

              {/* Title */}
              <h3 className="font-sora font-bold text-xl sm:text-2xl text-white mb-3 group-hover:text-neutral-100 transition-colors">
                Direct Engineer Access
              </h3>

              {/* Description */}
              <p className="text-sm text-neutral-400 font-inter leading-relaxed mb-6">
                The engineer you speak with is the person writing your code. No layers of non-technical account managers or hand-offs to unaccountable juniors.
              </p>
            </div>

            {/* Feature Highlights */}
            <div className="pt-4 border-t border-white/10 space-y-2 text-xs font-inter text-neutral-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-white flex-shrink-0" />
                <span>Direct Slack, WhatsApp & Call collaboration</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-white flex-shrink-0" />
                <span>Deep context retention on your business logic</span>
              </div>
            </div>
          </div>

          {/* Card 3: Built Properly & Shipped On Time */}
          <div 
            ref={(el) => (cardRefs.current[2] = el)}
            className="relative rounded-3xl glass-card-bw bg-gradient-to-b from-[#141417]/90 to-[#0A0A0C]/95 p-7 sm:p-8 flex flex-col justify-between border border-white/15 hover:border-white/40 hover:-translate-y-1 transition-all duration-300 group shadow-[0_20px_50px_rgba(0,0,0,0.7)] overflow-hidden"
          >
            <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-white/40 to-transparent pointer-events-none" />
            
            <div>
              {/* Header: Icon & Tag */}
              <div className="flex items-center justify-between gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-neutral-900 border border-white/15 flex items-center justify-center text-white shadow-[0_0_20px_rgba(255,255,255,0.08)] group-hover:scale-105 transition-transform">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <span className="px-3 py-1 rounded-full text-xs font-mono text-neutral-300 glass-pill-bw">
                  Agile Velocity
                </span>
              </div>

              {/* Title */}
              <h3 className="font-sora font-bold text-xl sm:text-2xl text-white mb-3 group-hover:text-neutral-100 transition-colors">
                Built Right & Shipped Fast
              </h3>

              {/* Description */}
              <p className="text-sm text-neutral-400 font-inter leading-relaxed mb-6">
                Production-grade architecture with React, Next.js, and TypeScript. We test thoroughly, optimize for speed, and stay on for post-launch support.
              </p>
            </div>

            {/* Feature Highlights */}
            <div className="pt-4 border-t border-white/10 space-y-2 text-xs font-inter text-neutral-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-white flex-shrink-0" />
                <span>99.8% on-time milestone delivery</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-white flex-shrink-0" />
                <span>Post-launch warranty & ongoing maintenance</span>
              </div>
            </div>
          </div>
        </div>

        {/* 2. SPOTLIGHT & ACADEMY SHOWCASE (2-COLUMN WIDESCREEN GLASS CARD) */}
        <div 
          ref={spotlightRef}
          className="relative rounded-3xl glass-card-bw bg-gradient-to-r from-[#121215]/95 via-[#1a1a1f]/95 to-[#121215]/95 p-8 sm:p-12 border border-white/20 shadow-[0_25px_60px_rgba(0,0,0,0.9)] overflow-hidden"
        >
          <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-white/50 to-transparent pointer-events-none" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.08)_0%,transparent_60%)] pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left 7 cols: Online Academy & Mentorship */}
            <div className="lg:col-span-7 flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill-bw text-white text-xs font-mono mb-5">
                  <GraduationCap className="w-3.5 h-3.5" />
                  <span>ONLINE ACADEMY & MENTORSHIP</span>
                </div>

                <h3 className="font-sora font-bold text-2xl sm:text-3xl text-white leading-snug mb-4">
                  "We don't just ship products — we train the developers of tomorrow."
                </h3>

                <p className="text-neutral-300 font-inter text-sm sm:text-base leading-relaxed mb-6">
                  Through our learning platform at <strong className="text-white font-semibold">learn.jimedevelopers.in</strong>, we teach Python, modern web development, and practical software engineering with hands-on portfolio projects and direct mentor feedback.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a
                  href="https://learn.jimedevelopers.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black font-sora font-semibold text-xs sm:text-sm hover:bg-neutral-200 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:scale-[1.02] active:scale-[0.98] transition-all"
                >
                  <span>Explore Courses at learn.jimedevelopers.in</span>
                  <ExternalLink className="w-4 h-4" />
                </a>

                <a
                  href="#services"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-neutral-900/90 border border-white/20 hover:border-white/50 text-white font-sora font-semibold text-xs sm:text-sm hover:bg-neutral-800 transition-all"
                >
                  <span>Explore Services</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Right 5 cols: Studio Identity Card */}
            <div className="lg:col-span-5">
              <div className="relative p-6 sm:p-7 rounded-2xl bg-neutral-950/80 border border-white/15 shadow-xl">
                
                {/* Brand Header */}
                <div className="flex items-center gap-3.5 pb-4 border-b border-white/10">
                  <div className="p-2 rounded-xl bg-neutral-900 border border-white/15">
                    <img
                      src="/assets/jime-logo-brand.png"
                      alt="Jime Developers"
                      className="h-7 w-auto object-contain drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]"
                    />
                  </div>
                  <div>
                    <h5 className="font-sora font-semibold text-sm text-white">Jime Developers</h5>
                    <p className="text-[11px] text-neutral-400 font-mono">Studio & Learning Hub</p>
                  </div>
                </div>

                {/* Key Facts */}
                <div className="space-y-2.5 py-4 text-xs font-inter">
                  <div className="flex items-center justify-between p-2.5 rounded-xl bg-neutral-900/60 border border-white/10">
                    <span className="text-neutral-400 flex items-center gap-2">
                      <MapPin className="w-3.5 h-3.5 text-white" />
                      Base:
                    </span>
                    <span className="text-white font-medium">Aranthangi, Tamil Nadu</span>
                  </div>

                  <div className="flex items-center justify-between p-2.5 rounded-xl bg-neutral-900/60 border border-white/10">
                    <span className="text-neutral-400 flex items-center gap-2">
                      <Globe2 className="w-3.5 h-3.5 text-white" />
                      Clients:
                    </span>
                    <span className="text-white font-medium">India & Malaysia</span>
                  </div>

                  <div className="flex items-center justify-between p-2.5 rounded-xl bg-neutral-900/60 border border-white/10">
                    <span className="text-neutral-400 flex items-center gap-2">
                      <Calendar className="w-3.5 h-3.5 text-white" />
                      Founded:
                    </span>
                    <span className="text-white font-medium">2023</span>
                  </div>

                  <div className="flex items-center justify-between p-2.5 rounded-xl bg-neutral-900/60 border border-white/10">
                    <span className="text-neutral-400 flex items-center gap-2">
                      <Zap className="w-3.5 h-3.5 text-white" />
                      Delivered:
                    </span>
                    <span className="text-white font-semibold">15+ Client Projects</span>
                  </div>
                </div>

                {/* Connect CTA */}
                <div className="pt-2">
                  <a
                    href="#book-call"
                    className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-white text-black font-sora font-semibold text-xs hover:bg-neutral-200 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:scale-[1.02] active:scale-[0.98] transition-all"
                  >
                    <span>Connect With Our Team</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
