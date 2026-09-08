import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function SectionDivider({ variant = 'beige-blue' }) {
  const dividerRef = useRef(null);
  const trackRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(trackRef.current, {
        scrollTrigger: {
          trigger: dividerRef.current,
          start: 'top 90%',
          once: true,
        },
        scaleX: 0,
        opacity: 0,
        duration: 1.2,
        ease: 'power3.out',
        transformOrigin: 'center center',
      });
    }, dividerRef);

    return () => ctx.revert();
  }, []);

  const isDarkToLight = variant === 'dark-to-beige';
  const isDark = variant === 'dark';

  if (isDark) {
    return (
      <div 
        ref={dividerRef}
        className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 pointer-events-none z-10 overflow-hidden"
      >
        <div 
          ref={trackRef}
          className="relative w-full h-[1px] bg-gradient-to-r from-transparent via-[#1D2E22] to-transparent flex items-center justify-center will-change-transform"
        >
          <div className="absolute h-[1.8px] w-28 sm:w-44 bg-gradient-to-r from-transparent via-[#A7F3A0] to-transparent animate-laser-sweep shadow-[0_0_15px_rgba(167,243,160,0.9)]" />
          <div className="absolute h-[1px] w-20 sm:w-32 bg-gradient-to-r from-transparent via-[#80E875] to-transparent animate-laser-sweep-delayed opacity-70" />
          <div className="w-72 sm:w-[480px] h-[1px] bg-gradient-to-r from-transparent via-accent-lime/40 to-transparent animate-flare-pulse" />
          <div className="absolute w-24 sm:w-40 h-[1.5px] bg-gradient-to-r from-transparent via-accent-lime to-transparent shadow-[0_0_15px_rgba(167,243,160,0.9)]" />
          <div className="absolute w-1.5 h-1.5 bg-accent-lime animate-diamond-glow" />
        </div>
      </div>
    );
  }

  if (isDarkToLight) {
    return (
      <div 
        ref={dividerRef}
        className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 pointer-events-none z-10 overflow-hidden"
      >
        <div 
          ref={trackRef}
          className="relative w-full h-[1px] bg-gradient-to-r from-transparent via-[#2563EB]/40 to-transparent flex items-center justify-center will-change-transform"
        >
          <div className="absolute h-[2px] w-36 sm:w-56 bg-gradient-to-r from-[#66FF88] via-[#38BDF8] to-[#2563EB] animate-laser-sweep shadow-[0_0_20px_rgba(37,99,235,0.8)]" />
          <div className="w-80 sm:w-[540px] h-[1px] bg-gradient-to-r from-transparent via-[#2563EB]/50 to-transparent animate-flare-pulse" />
          <div className="absolute w-28 sm:w-48 h-[1.5px] bg-gradient-to-r from-transparent via-[#38BDF8] to-transparent shadow-[0_0_15px_rgba(56,189,248,0.9)]" />
          <div className="absolute w-2 h-2 bg-[#2563EB] animate-diamond-glow-blue" />
        </div>
      </div>
    );
  }

  // Beige & Blue Divider
  return (
    <div 
      ref={dividerRef}
      className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 pointer-events-none z-10 overflow-hidden"
    >
      <div 
        ref={trackRef}
        className="relative w-full h-[1px] bg-gradient-to-r from-transparent via-[#2563EB]/25 to-transparent flex items-center justify-center will-change-transform"
      >
        {/* Animated Traveling Shooting Blue Laser Beam 1 */}
        <div 
          className="absolute h-[1.8px] w-28 sm:w-44 bg-gradient-to-r from-transparent via-[#2563EB] to-transparent animate-laser-sweep shadow-[0_0_15px_rgba(37,99,235,0.8)]" 
        />

        {/* Animated Traveling Secondary Soft Cyan Beam 2 (Delayed) */}
        <div 
          className="absolute h-[1px] w-20 sm:w-32 bg-gradient-to-r from-transparent via-[#38BDF8] to-transparent animate-laser-sweep-delayed opacity-80" 
        />

        {/* Center Pulsing Ambient Blue Spread */}
        <div className="w-72 sm:w-[480px] h-[1px] bg-gradient-to-r from-transparent via-[#2563EB]/40 to-transparent animate-flare-pulse" />
        
        {/* Center Core Royal Blue Glint */}
        <div className="absolute w-24 sm:w-40 h-[1.5px] bg-gradient-to-r from-transparent via-[#2563EB] to-transparent shadow-[0_0_15px_rgba(37,99,235,0.8)]" />
        
        {/* Pulsing Center Blue Diamond Pip */}
        <div className="absolute w-1.5 h-1.5 bg-[#2563EB] animate-diamond-glow-blue" />
      </div>
    </div>
  );
}
