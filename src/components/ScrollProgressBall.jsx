import React, { useEffect, useState, useRef, useCallback } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function ScrollProgressBall() {
  const [progressPercent, setProgressPercent] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [activeSection, setActiveSection] = useState('Hero');
  
  const ballRef = useRef(null);
  const lineRef = useRef(null);
  const trackRef = useRef(null);
  const glowRef = useRef(null);
  const rafIdRef = useRef(null);
  const isScrollingTimeoutRef = useRef(null);
  const [isScrolling, setIsScrolling] = useState(false);

  const updateProgress = useCallback(() => {
    const faqElement = document.getElementById('faq');
    if (!faqElement || !trackRef.current || !lineRef.current || !ballRef.current) return;

    // Get current scroll position (Lenis smooth scroll or native window.scrollY)
    const currentScroll = window.lenis != null ? window.lenis.scroll : (window.scrollY || document.documentElement.scrollTop || 0);

    const faqOffsetTop = faqElement.offsetTop;
    const faqHeight = faqElement.offsetHeight;
    const windowHeight = window.innerHeight;
    
    // Target is when FAQ section is reached/visible
    const maxScroll = Math.max(faqOffsetTop + faqHeight - windowHeight, 1);
    const rawProgress = currentScroll / maxScroll;
    const clampedProgress = Math.min(Math.max(rawProgress, 0), 1);

    const pct = clampedProgress * 100;

    // DIRECT REAL-TIME DOM UPDATES with zero lag / zero CSS transition delay
    lineRef.current.style.height = `${pct}%`;
    ballRef.current.style.top = `${pct}%`;

    setProgressPercent(Math.round(pct));

    // Determine current section in view
    const projectsEl = document.getElementById('projects');
    const testimonialsEl = document.getElementById('testimonials');

    if (currentScroll < (projectsEl?.offsetTop || 600) - 200) {
      setActiveSection('Hero');
    } else if (currentScroll < (testimonialsEl?.offsetTop || 1800) - 200) {
      setActiveSection('Projects');
    } else if (currentScroll < faqOffsetTop - 200) {
      setActiveSection('Testimonials');
    } else {
      setActiveSection('FAQ');
    }

    // Indicate active scrolling
    setIsScrolling(true);
    if (isScrollingTimeoutRef.current) {
      clearTimeout(isScrollingTimeoutRef.current);
    }
    isScrollingTimeoutRef.current = setTimeout(() => {
      setIsScrolling(false);
    }, 150);
  }, []);

  useEffect(() => {
    // Initial run
    updateProgress();

    // High performance ticker update
    const onScrollTick = () => {
      if (rafIdRef.current) cancelAnimationFrame(rafIdRef.current);
      rafIdRef.current = requestAnimationFrame(updateProgress);
    };

    window.addEventListener('scroll', onScrollTick, { passive: true });
    window.addEventListener('resize', updateProgress, { passive: true });

    // Hook into Lenis smooth scroll ticker directly for frame-by-frame 60/120fps sync
    if (window.lenis) {
      window.lenis.on('scroll', onScrollTick);
    }

    // GSAP Ticker listener as additional guarantee
    gsap.ticker.add(updateProgress);

    return () => {
      window.removeEventListener('scroll', onScrollTick);
      window.removeEventListener('resize', updateProgress);
      if (window.lenis) {
        window.lenis.off('scroll', onScrollTick);
      }
      gsap.ticker.remove(updateProgress);
      if (rafIdRef.current) cancelAnimationFrame(rafIdRef.current);
      if (isScrollingTimeoutRef.current) clearTimeout(isScrollingTimeoutRef.current);
    };
  }, [updateProgress]);

  const handleTrackClick = (e) => {
    if (!trackRef.current) return;
    const rect = trackRef.current.getBoundingClientRect();
    const clickY = e.clientY - rect.top;
    const clickProgress = Math.min(Math.max(clickY / rect.height, 0), 1);

    const faqElement = document.getElementById('faq');
    if (!faqElement) return;

    const faqOffsetTop = faqElement.offsetTop;
    const faqHeight = faqElement.offsetHeight;
    const windowHeight = window.innerHeight;
    const maxScroll = faqOffsetTop + faqHeight - windowHeight;
    const targetScroll = clickProgress * maxScroll;

    if (window.lenis) {
      window.lenis.scrollTo(targetScroll, {
        duration: 1.1,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      });
    } else {
      window.scrollTo({
        top: targetScroll,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div 
      className="fixed right-2.5 sm:right-5 md:right-7 top-28 bottom-28 z-40 flex flex-col items-center justify-between pointer-events-auto select-none"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Interactive Vertical Laser Rail Track */}
      <div 
        ref={trackRef}
        onClick={handleTrackClick}
        className="relative w-7 sm:w-8 h-full flex justify-center cursor-pointer group"
        title="Scroll Progress (Click to jump)"
      >
        {/* Background Track Rail */}
        <div className="w-[2px] h-full bg-white/[0.08] group-hover:bg-white/[0.15] rounded-full transition-colors duration-300 relative">
          
          {/* Active Glowing Laser Progress Line (Zero CSS transition delay for 1:1 real-time lockstep) */}
          <div 
            ref={lineRef}
            className="w-[2.5px] -left-[0.25px] absolute top-0 bg-gradient-to-b from-[#38BDF8] via-[#3B82F6] to-[#60A5FA] rounded-full shadow-[0_0_12px_rgba(59,130,246,0.95)]"
            style={{ height: '0%' }}
          />

          {/* Section Milestone Dots */}
          <div className="absolute top-0 -left-[2px] w-1.5 h-1.5 rounded-full bg-accent-blue/50 border border-white/30" title="Hero" />
          <div className="absolute top-[33%] -left-[2px] w-1.5 h-1.5 rounded-full bg-white/25 border border-white/20" title="Projects" />
          <div className="absolute top-[66%] -left-[2px] w-1.5 h-1.5 rounded-full bg-white/25 border border-white/20" title="Testimonials" />
          <div className="absolute bottom-0 -left-[2px] w-1.5 h-1.5 rounded-full bg-accent-blue border border-white/40 shadow-blue-glow" title="FAQ" />
        </div>

        {/* 3D FLOATING GLOWING SAPPHIRE BALL / SPHERE (Compact & refined) */}
        <div 
          ref={ballRef}
          className="absolute -translate-x-1/2 left-1/2 -translate-y-1/2 w-4.5 h-4.5 sm:w-5 sm:h-5 md:w-6 md:h-6 cursor-grab active:cursor-grabbing will-change-transform"
          style={{ 
            top: '0%',
            transform: `translate(-50%, -50%) scale(${isHovered || isScrolling ? 1.15 : 1})`,
            transition: 'transform 0.2s cubic-bezier(0.34, 1.56, 0.64, 1)',
          }}
        >
          {/* Outer Volumetric Halo Glow */}
          <div 
            ref={glowRef}
            className={`absolute inset-0 rounded-full bg-[#3B82F6] blur-[6px] sm:blur-[8px] pointer-events-none transition-opacity duration-200 ${
              isScrolling || isHovered ? 'opacity-90 scale-125' : 'opacity-65'
            }`}
          />

          {/* 3D Rendered Sphere SVG */}
          <svg 
            viewBox="0 0 100 100" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full relative z-10 drop-shadow-[0_2px_8px_rgba(0,0,0,0.85)] filter"
          >
            <defs>
              {/* 3D Sphere 3-Point Light Shader matching Hero & Reference */}
              <radialGradient id="scrollSphere3D" cx="34%" cy="30%" r="68%">
                <stop offset="0%" stopColor="#FFFFFF" />
                <stop offset="20%" stopColor="#BAE6FD" />
                <stop offset="50%" stopColor="#3B82F6" />
                <stop offset="82%" stopColor="#1E3A8A" />
                <stop offset="100%" stopColor="#0B132B" />
              </radialGradient>

              {/* Edge Rim Lighting */}
              <linearGradient id="scrollSphereRim" x1="10" y1="10" x2="90" y2="90" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#E0F2FE" stopOpacity="0.95" />
                <stop offset="50%" stopColor="#60A5FA" stopOpacity="0.85" />
                <stop offset="100%" stopColor="#1D4ED8" stopOpacity="0.25" />
              </linearGradient>

              {/* Sphere Bloom Filter */}
              <filter id="sphereBloom" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="3" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* 3D Sphere Body */}
            <circle 
              cx="50" 
              cy="50" 
              r="44" 
              fill="url(#scrollSphere3D)" 
              stroke="url(#scrollSphereRim)" 
              strokeWidth="1.5"
              filter="url(#sphereBloom)"
            />

            {/* Specular Glint Highlight */}
            <circle 
              cx="42" 
              cy="38" 
              r="10" 
              fill="#FFFFFF" 
              fillOpacity="0.6" 
              filter="blur(2.5px)" 
            />

            {/* Micro Specular Sparkle Core */}
            <circle 
              cx="40" 
              cy="36" 
              r="3.5" 
              fill="#FFFFFF" 
              fillOpacity="0.95" 
            />
          </svg>

          {/* Hover / Scroll Progress & Section Indicator Tooltip */}
          <div className={`absolute right-full top-1/2 -translate-y-1/2 mr-3 px-2.5 py-1 rounded-lg bg-[#0B101D]/90 border border-accent-blue/30 backdrop-blur-md shadow-lg pointer-events-none transition-all duration-200 flex items-center gap-1.5 whitespace-nowrap ${
            isHovered || isScrolling ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-2'
          }`}>
            <span className="w-1.5 h-1.5 rounded-full bg-accent-blue animate-pulse" />
            <span className="text-[11px] font-sora font-semibold text-white">
              {activeSection}
            </span>
            <span className="text-[10px] font-inter text-accent-blue font-bold ml-0.5">
              {progressPercent}%
            </span>
          </div>

        </div>
      </div>
    </div>
  );
}
