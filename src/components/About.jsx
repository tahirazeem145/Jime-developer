import React, { useEffect, useRef } from 'react';
import { 
  Sparkles, 
  MapPin, 
  Code2, 
  GraduationCap, 
  Compass, 
  Users, 
  ArrowRight, 
  ExternalLink, 
  CheckCircle2, 
  ShieldCheck, 
  Zap, 
  Globe2, 
  Calendar, 
  HeartHandshake,
  Terminal,
  MessageSquare
} from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const storyCardRef = useRef(null);
  const pillarsRef = useRef(null);
  const pillarCardsRef = useRef([]);
  const teamCardRef = useRef(null);
  const quickFactsRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header entrance animation
      if (headerRef.current?.children) {
        gsap.fromTo(
          headerRef.current.children,
          { opacity: 0, y: 35 },
          {
            scrollTrigger: {
              trigger: headerRef.current,
              start: 'top 85%',
              once: true,
            },
            opacity: 1,
            y: 0,
            stagger: 0.15,
            duration: 0.8,
            ease: 'power3.out',
          }
        );
      }

      // Story Card entrance
      if (storyCardRef.current) {
        gsap.fromTo(
          storyCardRef.current,
          { opacity: 0, y: 40, scale: 0.98 },
          {
            scrollTrigger: {
              trigger: storyCardRef.current,
              start: 'top 85%',
              once: true,
            },
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.85,
            ease: 'power3.out',
          }
        );
      }

      // What We Do Pillars entrance
      const validPillars = pillarCardsRef.current.filter(Boolean);
      if (validPillars.length > 0) {
        gsap.fromTo(
          validPillars,
          { opacity: 0, y: 40, scale: 0.96 },
          {
            scrollTrigger: {
              trigger: pillarsRef.current,
              start: 'top 85%',
              once: true,
            },
            opacity: 1,
            y: 0,
            scale: 1,
            stagger: 0.15,
            duration: 0.8,
            ease: 'power3.out',
          }
        );
      }

      // Team & Collaboration card entrance
      if (teamCardRef.current) {
        gsap.fromTo(
          teamCardRef.current,
          { opacity: 0, y: 40 },
          {
            scrollTrigger: {
              trigger: teamCardRef.current,
              start: 'top 85%',
              once: true,
            },
            opacity: 1,
            y: 0,
            duration: 0.85,
            ease: 'power3.out',
          }
        );
      }

      // Quick Facts Bar entrance
      if (quickFactsRef.current) {
        gsap.fromTo(
          quickFactsRef.current,
          { opacity: 0, y: 30 },
          {
            scrollTrigger: {
              trigger: quickFactsRef.current,
              start: 'top 90%',
              once: true,
            },
            opacity: 1,
            y: 0,
            duration: 0.75,
            ease: 'power3.out',
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
      className="relative z-10 py-20 sm:py-28 overflow-hidden"
    >
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
        <div ref={headerRef} className="text-center max-w-3xl mx-auto mb-14 sm:mb-20">
          
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
            <strong className="text-white font-semibold">Jime Developers</strong> is a small software studio based in{' '}
            <span className="text-white font-semibold">Aranthangi, Tamil Nadu</span>. We build websites and apps for founders and small businesses, and we also teach the next batch of developers through our online courses. We started in <span className="text-white font-semibold">2023</span> and have shipped <span className="text-white font-bold">15-plus projects</span> for clients in <span className="text-white font-semibold">India and Malaysia</span> since.
          </p>
        </div>

        {/* 1. WHY WE DO THIS (MANIFESTO / CORE PHILOSOPHY GLASS CARD) */}
        <div 
          ref={storyCardRef}
          className="relative rounded-3xl glass-card-bw p-8 sm:p-12 mb-12 sm:mb-16 overflow-hidden group hover:border-white/40 transition-all duration-500"
        >
          {/* Top edge reflection shine */}
          <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-white/50 to-transparent pointer-events-none" />
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left 7 cols: Narrative */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill-bw text-white text-xs font-mono mb-5">
                <HeartHandshake className="w-3.5 h-3.5" />
                <span>WHY WE DO THIS</span>
              </div>

              <h3 className="font-sora font-bold text-2xl sm:text-3xl text-white leading-snug mb-5">
                "Good software is too often overpriced, oversold, and dragged out for months."
              </h3>

              <p className="text-neutral-400 font-inter text-sm sm:text-base leading-relaxed mb-4">
                We wanted to do the opposite: <strong className="text-white font-semibold">quote a fair fixed price</strong>, <strong className="text-white font-semibold">build the thing properly</strong>, and <strong className="text-white font-semibold">ship it on time</strong>.
              </p>

              <p className="text-neutral-400 font-inter text-sm sm:text-base leading-relaxed">
                When a project goes well, the client comes back and tells a friend. That's how we've grown, and it's the only growth plan we care about.
              </p>
            </div>

            {/* Right 5 cols: Glass Sub-Cards */}
            <div className="lg:col-span-5 flex flex-col gap-3.5">
              
              <div className="relative p-4 rounded-2xl glass-subcard-bw hover:border-white/35 transition-all duration-300 flex items-start gap-3.5 group/item overflow-hidden">
                <div className="w-10 h-10 rounded-xl bg-neutral-900 border border-white/15 flex items-center justify-center flex-shrink-0 text-white shadow-[0_0_15px_rgba(255,255,255,0.08)] group-hover/item:scale-105 transition-transform">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-sora font-semibold text-white group-hover/item:text-neutral-200 transition-colors">Fair Fixed Price</h4>
                  <p className="text-xs text-neutral-400 font-inter mt-0.5 leading-relaxed">Transparent upfront quotes with zero hidden extras or surprise invoices.</p>
                </div>
              </div>

              <div className="relative p-4 rounded-2xl glass-subcard-bw hover:border-white/35 transition-all duration-300 flex items-start gap-3.5 group/item overflow-hidden">
                <div className="w-10 h-10 rounded-xl bg-neutral-900 border border-white/15 flex items-center justify-center flex-shrink-0 text-white shadow-[0_0_15px_rgba(255,255,255,0.08)] group-hover/item:scale-105 transition-transform">
                  <Zap className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-sora font-semibold text-white group-hover/item:text-neutral-200 transition-colors">Built Properly & Shipped On Time</h4>
                  <p className="text-xs text-neutral-400 font-inter mt-0.5 leading-relaxed">High-standard engineering, production speed, and rigorous attention to detail.</p>
                </div>
              </div>

              <div className="relative p-4 rounded-2xl glass-subcard-bw hover:border-white/35 transition-all duration-300 flex items-start gap-3.5 group/item overflow-hidden">
                <div className="w-10 h-10 rounded-xl bg-neutral-900 border border-white/15 flex items-center justify-center flex-shrink-0 text-white shadow-[0_0_15px_rgba(255,255,255,0.08)] group-hover/item:scale-105 transition-transform">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-sora font-semibold text-white group-hover/item:text-neutral-200 transition-colors">Word-of-Mouth Organic Growth</h4>
                  <p className="text-xs text-neutral-400 font-inter mt-0.5 leading-relaxed">Over 15+ clients acquired through happy recommendations and client trust.</p>
                </div>
              </div>

            </div>

          </div>
        </div>

        {/* 2. WHAT WE DO (3 FEATURED PILLARS - TRIPLE GLASS CARDS) */}
        <div className="mb-12 sm:mb-16">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-pill-bw text-white text-xs font-sora font-semibold uppercase tracking-wider mb-3">
              WHAT WE DO
            </div>
            <h3 className="font-sora font-bold text-2xl sm:text-3xl text-white">
              End-to-end development, practical courses, and honest mentorship.
            </h3>
          </div>

          <div ref={pillarsRef} className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            
            {/* Pillar 1: Web & App Development Glass Card */}
            <div 
              ref={(el) => (pillarCardsRef.current[0] = el)}
              className="relative rounded-3xl glass-card-bw p-6 sm:p-8 flex flex-col justify-between group hover:border-white/45 transition-all duration-500 overflow-hidden"
            >
              <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-white/50 to-transparent pointer-events-none" />

              <div className="relative z-10">
                {/* Icon & Badge */}
                <div className="flex items-center justify-between gap-3 mb-6">
                  <div className="w-13 h-13 p-3 rounded-2xl bg-neutral-900 border border-white/20 flex items-center justify-center text-white group-hover:scale-110 group-hover:border-white/40 transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.1)] backdrop-blur-md">
                    <Code2 className="w-6 h-6" />
                  </div>
                  <span className="px-3.5 py-1.5 rounded-full text-xs font-inter font-semibold text-white glass-pill-bw">
                    Studio Engineering
                  </span>
                </div>

                {/* Title */}
                <h4 className="font-sora font-bold text-xl text-white mb-3 group-hover:text-neutral-200 transition-colors duration-300">
                  Web & App Development
                </h4>

                {/* Description */}
                <p className="text-sm text-neutral-400 font-inter leading-relaxed mb-6">
                  Business websites, e-commerce stores, job boards, dashboards, and full SaaS products. We handle the design and the build, hand over code you own, and stay on for support after launch.
                </p>

                {/* Feature checklist */}
                <div className="space-y-2.5 pt-4 border-t border-white/10">
                  <div className="flex items-start gap-2.5 text-xs text-[#E2E8F0] font-inter p-2 rounded-xl bg-neutral-900/70 border border-white/10">
                    <CheckCircle2 className="w-4 h-4 text-white flex-shrink-0 mt-0.5" />
                    <span>Business websites & high-converting e-commerce</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs text-[#E2E8E4] font-inter p-2 rounded-xl bg-neutral-900/70 border border-white/10">
                    <CheckCircle2 className="w-4 h-4 text-white flex-shrink-0 mt-0.5" />
                    <span>Custom job boards, dashboards & SaaS platforms</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs text-[#E2E8E4] font-inter p-2 rounded-xl bg-neutral-900/70 border border-white/10">
                    <CheckCircle2 className="w-4 h-4 text-white flex-shrink-0 mt-0.5" />
                    <span>100% code ownership & post-launch support</span>
                  </div>
                </div>
              </div>

              {/* Action */}
              <div className="relative z-10 mt-8 pt-4 border-t border-white/10">
                <a
                  href="#services"
                  className="inline-flex items-center gap-2 text-xs font-sora font-semibold text-white hover:text-neutral-300 transition-colors group/link"
                >
                  <span>Explore Services</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-1" />
                </a>
              </div>
            </div>

            {/* Pillar 2: Courses & Training Glass Card */}
            <div 
              ref={(el) => (pillarCardsRef.current[1] = el)}
              className="relative rounded-3xl glass-card-bw p-6 sm:p-8 flex flex-col justify-between group hover:border-white/45 transition-all duration-500 overflow-hidden"
            >
              <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-white/50 to-transparent pointer-events-none" />

              <div className="relative z-10">
                {/* Icon & Badge */}
                <div className="flex items-center justify-between gap-3 mb-6">
                  <div className="w-13 h-13 p-3 rounded-2xl bg-neutral-900 border border-white/20 flex items-center justify-center text-white group-hover:scale-110 group-hover:border-white/40 transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.1)] backdrop-blur-md">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <span className="px-3.5 py-1.5 rounded-full text-xs font-inter font-semibold text-white glass-pill-bw">
                    Online Academy
                  </span>
                </div>

                {/* Title */}
                <h4 className="font-sora font-bold text-xl text-white mb-3 group-hover:text-neutral-200 transition-colors duration-300">
                  Courses & Training
                </h4>

                {/* Description */}
                <p className="text-sm text-neutral-400 font-inter leading-relaxed mb-6">
                  We teach Python, web development, and the practical skills that actually get people hired, with hands-on projects rather than theory. You can see our courses at <span className="text-white font-semibold">learn.jimedevelopers.in</span>.
                </p>

                {/* Feature checklist */}
                <div className="space-y-2.5 pt-4 border-t border-white/10">
                  <div className="flex items-start gap-2.5 text-xs text-[#E2E8F0] font-inter p-2 rounded-xl bg-neutral-900/70 border border-white/10">
                    <CheckCircle2 className="w-4 h-4 text-white flex-shrink-0 mt-0.5" />
                    <span>Python programming & real-world web dev</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs text-[#E2E8F0] font-inter p-2 rounded-xl bg-neutral-900/70 border border-white/10">
                    <CheckCircle2 className="w-4 h-4 text-white flex-shrink-0 mt-0.5" />
                    <span>Practical job-ready portfolio projects, not theory</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs text-[#E2E8F0] font-inter p-2 rounded-xl bg-neutral-900/70 border border-white/10">
                    <CheckCircle2 className="w-4 h-4 text-white flex-shrink-0 mt-0.5" />
                    <span>Direct mentorship from active software engineers</span>
                  </div>
                </div>
              </div>

              {/* Action: Link to learn.jimedevelopers.in */}
              <div className="relative z-10 mt-8 pt-4 border-t border-white/10">
                <a
                  href="https://learn.jimedevelopers.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-sora font-semibold text-white hover:text-neutral-300 transition-colors group/link"
                >
                  <span>learn.jimedevelopers.in</span>
                  <ExternalLink className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                </a>
              </div>
            </div>

            {/* Pillar 3: Career Guidance Glass Card */}
            <div 
              ref={(el) => (pillarCardsRef.current[2] = el)}
              className="relative rounded-3xl glass-card-bw p-6 sm:p-8 flex flex-col justify-between group hover:border-white/45 transition-all duration-500 overflow-hidden"
            >
              <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-white/50 to-transparent pointer-events-none" />

              <div className="relative z-10">
                {/* Icon & Badge */}
                <div className="flex items-center justify-between gap-3 mb-6">
                  <div className="w-13 h-13 p-3 rounded-2xl bg-neutral-900 border border-white/20 flex items-center justify-center text-white group-hover:scale-110 group-hover:border-white/40 transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.1)] backdrop-blur-md">
                    <Compass className="w-6 h-6" />
                  </div>
                  <span className="px-3.5 py-1.5 rounded-full text-xs font-inter font-semibold text-white glass-pill-bw">
                    Tech Mentorship
                  </span>
                </div>

                {/* Title */}
                <h4 className="font-sora font-bold text-xl text-white mb-3 group-hover:text-neutral-200 transition-colors duration-300">
                  Career Guidance
                </h4>

                {/* Description */}
                <p className="text-sm text-neutral-400 font-inter leading-relaxed mb-6">
                  If you're a student or someone switching into tech, we'll give you straight advice on where to focus and what to skip. We've helped people figure out their next step without the usual sales pitch.
                </p>

                {/* Feature checklist */}
                <div className="space-y-2.5 pt-4 border-t border-white/10">
                  <div className="flex items-start gap-2.5 text-xs text-[#E2E8F0] font-inter p-2 rounded-xl bg-neutral-900/70 border border-white/10">
                    <CheckCircle2 className="w-4 h-4 text-white flex-shrink-0 mt-0.5" />
                    <span>Straightforward advice on tech stacks to focus & skip</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs text-[#E2E8F0] font-inter p-2 rounded-xl bg-neutral-900/70 border border-white/10">
                    <CheckCircle2 className="w-4 h-4 text-white flex-shrink-0 mt-0.5" />
                    <span>Guidance for students & career switchers in tech</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs text-[#E2E8F0] font-inter p-2 rounded-xl bg-neutral-900/70 border border-white/10">
                    <CheckCircle2 className="w-4 h-4 text-white flex-shrink-0 mt-0.5" />
                    <span>Zero sales pitches — purely honest roadmap clarity</span>
                  </div>
                </div>
              </div>

              {/* Action */}
              <div className="relative z-10 mt-8 pt-4 border-t border-white/10">
                <a
                  href="#book-call"
                  className="inline-flex items-center gap-2 text-xs font-sora font-semibold text-white hover:text-neutral-300 transition-colors group/link"
                >
                  <span>Talk to Our Mentors</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-1" />
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* 3. WHO YOU'LL WORK WITH (DIRECT DEV ACCESS & TRANSPARENCY CARD) */}
        <div 
          ref={teamCardRef}
          className="relative rounded-3xl glass-card-bw p-8 sm:p-12 mb-12 sm:mb-16 border border-white/15 overflow-hidden group hover:border-white/35 transition-all duration-500"
        >
          <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-white/50 to-transparent pointer-events-none" />
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column (7 cols) */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill-bw text-white text-xs font-mono mb-5">
                <Users className="w-3.5 h-3.5" />
                <span>WHO YOU'LL WORK WITH</span>
              </div>

              <h3 className="font-sora font-bold text-2xl sm:text-3xl text-white leading-tight mb-4">
                "The person you talk to is the person writing your code."
              </h3>

              <p className="text-neutral-400 font-inter text-sm sm:text-base leading-relaxed mb-6">
                We're a small, hands-on team, which is the whole point. No layers of account managers, no handing your project to a junior you never met. You get direct answers and someone who actually remembers the details of your project.
              </p>

              {/* 4 Glass Sub-cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                
                <div className="relative flex items-center gap-3 p-3.5 rounded-2xl glass-subcard-bw hover:border-white/30 transition-all duration-300 overflow-hidden group/item">
                  <div className="w-8 h-8 rounded-lg bg-neutral-900 border border-white/15 flex items-center justify-center flex-shrink-0 text-white">
                    <MessageSquare className="w-4 h-4" />
                  </div>
                  <span className="text-xs sm:text-sm font-inter text-[#E2E8F0] font-medium group-hover/item:text-white">Direct Engineer Access</span>
                </div>

                <div className="relative flex items-center gap-3 p-3.5 rounded-2xl glass-subcard-bw hover:border-white/30 transition-all duration-300 overflow-hidden group/item">
                  <div className="w-8 h-8 rounded-lg bg-neutral-900 border border-white/15 flex items-center justify-center flex-shrink-0 text-white">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <span className="text-xs sm:text-sm font-inter text-[#E2E8F0] font-medium group-hover/item:text-white">Zero Middlemen or Layers</span>
                </div>

                <div className="relative flex items-center gap-3 p-3.5 rounded-2xl glass-subcard-bw hover:border-white/30 transition-all duration-300 overflow-hidden group/item">
                  <div className="w-8 h-8 rounded-lg bg-neutral-900 border border-white/15 flex items-center justify-center flex-shrink-0 text-white">
                    <Terminal className="w-4 h-4" />
                  </div>
                  <span className="text-xs sm:text-sm font-inter text-[#E2E8F0] font-medium group-hover/item:text-white">Deep Technical Context</span>
                </div>

                <div className="relative flex items-center gap-3 p-3.5 rounded-2xl glass-subcard-bw hover:border-white/30 transition-all duration-300 overflow-hidden group/item">
                  <div className="w-8 h-8 rounded-lg bg-neutral-900 border border-white/15 flex items-center justify-center flex-shrink-0 text-white">
                    <Zap className="w-4 h-4" />
                  </div>
                  <span className="text-xs sm:text-sm font-inter text-[#E2E8F0] font-medium group-hover/item:text-white">Fast, Direct Answers</span>
                </div>

              </div>
            </div>

            {/* Right Column: Studio Profile Glass Card (5 cols) */}
            <div className="lg:col-span-5">
              <div className="relative p-6 sm:p-7 rounded-3xl glass-card-bw border border-white/20 shadow-[0_20px_50px_rgba(0,0,0,0.85)] overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-white/50 to-transparent pointer-events-none" />
                
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
                    <p className="text-[11px] text-neutral-400 font-mono">Software Studio & Academy</p>
                  </div>
                </div>

                <div className="space-y-3 py-4 text-xs font-inter">
                  <div className="flex items-center justify-between p-2.5 rounded-xl glass-subcard-bw">
                    <span className="text-neutral-400 flex items-center gap-2">
                      <MapPin className="w-3.5 h-3.5 text-white" />
                      Headquarters:
                    </span>
                    <span className="text-white font-medium">Aranthangi, Tamil Nadu</span>
                  </div>

                  <div className="flex items-center justify-between p-2.5 rounded-xl glass-subcard-bw">
                    <span className="text-neutral-400 flex items-center gap-2">
                      <Globe2 className="w-3.5 h-3.5 text-white" />
                      Client Footprint:
                    </span>
                    <span className="text-white font-medium">India & Malaysia</span>
                  </div>

                  <div className="flex items-center justify-between p-2.5 rounded-xl glass-subcard-bw">
                    <span className="text-neutral-400 flex items-center gap-2">
                      <Calendar className="w-3.5 h-3.5 text-white" />
                      Established:
                    </span>
                    <span className="text-white font-medium">2023</span>
                  </div>

                  <div className="flex items-center justify-between p-2.5 rounded-xl glass-subcard-bw">
                    <span className="text-neutral-400 flex items-center gap-2">
                      <Zap className="w-3.5 h-3.5 text-white" />
                      Shipped Projects:
                    </span>
                    <span className="text-white font-semibold">15+ and counting</span>
                  </div>
                </div>

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

        {/* 4. QUICK STUDIO BADGES STRIP (FROSTED GLASS PANEL) */}
        <div ref={quickFactsRef} className="relative rounded-2xl glass-subcard-bw p-4 sm:p-6 text-center overflow-hidden border border-white/10 shadow-md">
          <div className="flex flex-wrap items-center justify-around gap-4 text-xs sm:text-sm font-inter text-neutral-400">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-white animate-pulse shadow-[0_0_8px_rgba(255,255,255,0.8)]" />
              <span>Base: <strong className="text-white font-semibold">Aranthangi, Tamil Nadu</strong></span>
            </div>
            <div className="hidden sm:block text-white/20">•</div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-white shadow-[0_0_8px_rgba(255,255,255,0.8)]" />
              <span>Reach: <strong className="text-white font-semibold">India & Malaysia Clients</strong></span>
            </div>
            <div className="hidden sm:block text-white/20">•</div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-white shadow-[0_0_8px_rgba(255,255,255,0.8)]" />
              <span>Online Academy: <strong className="text-white font-semibold">learn.jimedevelopers.in</strong></span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
