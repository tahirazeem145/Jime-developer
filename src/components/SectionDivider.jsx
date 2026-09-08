import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function SectionDivider() {
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

  return (
    <div 
      ref={dividerRef}
      className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 pointer-events-none z-10 overflow-hidden"
    >
      {/* Container Track */}
      <div 
        ref={trackRef}
        className="relative w-full h-[1px] bg-gradient-to-r from-transparent via-[#1D2E22] to-transparent flex items-center justify-center will-change-transform"
      >
        {/* Animated Traveling Shooting Laser Beam 1 */}
        <div 
          className="absolute h-[1.8px] w-28 sm:w-44 bg-gradient-to-r from-transparent via-[#A7F3A0] to-transparent animate-laser-sweep shadow-[0_0_15px_rgba(167,243,160,0.9)]" 
        />

        {/* Animated Traveling Secondary Soft Beam 2 (Delayed) */}
        <div 
          className="absolute h-[1px] w-20 sm:w-32 bg-gradient-to-r from-transparent via-[#80E875] to-transparent animate-laser-sweep-delayed opacity-70" 
        />

        {/* Center Pulsing Ambient Lime Spread */}
        <div className="w-72 sm:w-[480px] h-[1px] bg-gradient-to-r from-transparent via-accent-lime/40 to-transparent animate-flare-pulse" />
        
        {/* Center Core Neon Glint */}
        <div className="absolute w-24 sm:w-40 h-[1.5px] bg-gradient-to-r from-transparent via-accent-lime to-transparent shadow-[0_0_15px_rgba(167,243,160,0.9)]" />
        
        {/* Pulsing Center Diamond Pip */}
        <div className="absolute w-1.5 h-1.5 bg-accent-lime animate-diamond-glow" />
      </div>
    </div>
  );
}

