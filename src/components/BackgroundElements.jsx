import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function BackgroundElements() {
  const containerRef = useRef(null);
  const rightDunesRef = useRef(null);
  const rightGlowRef = useRef(null);

  useEffect(() => {
    const rightDunes = rightDunesRef.current;
    const rightGlow = rightGlowRef.current;
    if (!rightDunes) return;

    let isOut = false;

    // Smooth Scroll Listener to glide right graphic out of the screen
    const handleScroll = () => {
      const scrollY = window.scrollY || window.pageYOffset || 0;
      
      if (scrollY > 30) {
        if (!isOut) {
          isOut = true;
          gsap.to(rightDunes, {
            xPercent: 125,
            opacity: 0,
            duration: 0.9,
            ease: 'power3.inOut',
            overwrite: 'auto',
          });
          if (rightGlow) {
            gsap.to(rightGlow, {
              xPercent: 100,
              opacity: 0,
              duration: 0.9,
              ease: 'power3.inOut',
              overwrite: 'auto',
            });
          }
        }
      } else {
        if (isOut) {
          isOut = false;
          gsap.to(rightDunes, {
            xPercent: 0,
            opacity: 1,
            duration: 1,
            ease: 'power3.out',
            overwrite: 'auto',
          });
          if (rightGlow) {
            gsap.to(rightGlow, {
              xPercent: 0,
              opacity: 0.25,
              duration: 1,
              ease: 'power3.out',
              overwrite: 'auto',
            });
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Also listen to Lenis scroll if present
    if (window.lenis) {
      window.lenis.on('scroll', handleScroll);
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (window.lenis) {
        window.lenis.off('scroll', handleScroll);
      }
    };
  }, []);

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden pointer-events-none z-0">

      {/* Top ambient soft radial sapphire glow */}
      <div 
        className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[900px] h-[500px] rounded-full opacity-20 blur-[130px]"
        style={{
          background: 'radial-gradient(circle, rgba(59,130,246,0.22) 0%, rgba(30,58,138,0.4) 50%, transparent 80%)'
        }}
      />

      {/* Right side ambient electric blue glow behind organic shapes */}
      <div 
        ref={rightGlowRef}
        className="absolute top-[18%] -right-[10%] w-[650px] h-[650px] rounded-full opacity-25 blur-[120px] will-change-transform"
        style={{
          background: 'radial-gradient(circle, rgba(59,130,246,0.28) 0%, rgba(30,58,138,0.6) 50%, transparent 75%)'
        }}
      />

      {/* Left side ambient subtle dark navy glow */}
      <div 
        className="absolute bottom-[20%] -left-[10%] w-[500px] h-[500px] rounded-full opacity-20 blur-[110px]"
        style={{
          background: 'radial-gradient(circle, rgba(30,58,138,0.5) 0%, rgba(8,11,16,0.8) 70%, transparent 100%)'
        }}
      />

      {/* 3D ORGANIC DUNES & FLOATING SPHERE ON THE RIGHT */}
      <div 
        ref={rightDunesRef}
        className="absolute right-0 top-0 bottom-0 w-[220px] sm:w-[320px] md:w-[380px] lg:w-[480px] pointer-events-none select-none overflow-hidden z-0 will-change-transform"
      >
        <svg
          viewBox="0 0 700 800"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full object-cover object-right"
          preserveAspectRatio="xMaxYMid meet"
        >
          <defs>
            {/* Upper Dune Surface Velvet Sapphire Gradient */}
            <linearGradient id="upperDuneGradient" x1="280" y1="260" x2="680" y2="480" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.95" />
              <stop offset="35%" stopColor="#1D4ED8" stopOpacity="0.9" />
              <stop offset="70%" stopColor="#1E3A8A" stopOpacity="0.85" />
              <stop offset="100%" stopColor="#0B132B" stopOpacity="0.6" />
            </linearGradient>

            {/* Lower Dune Surface Velvet Gradient with tail fade */}
            <linearGradient id="lowerDuneGradient" x1="220" y1="520" x2="700" y2="780" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#93C5FD" stopOpacity="0" />
              <stop offset="15%" stopColor="#60A5FA" stopOpacity="0.4" />
              <stop offset="35%" stopColor="#3B82F6" stopOpacity="0.9" />
              <stop offset="65%" stopColor="#1D4ED8" stopOpacity="0.85" />
              <stop offset="90%" stopColor="#1E3A8A" stopOpacity="0.75" />
              <stop offset="100%" stopColor="#0B132B" stopOpacity="0.5" />
            </linearGradient>

            {/* Upper Dune Rim Light Gradient (Electric Royal Azure) */}
            <linearGradient id="upperRimLight" x1="280" y1="280" x2="700" y2="120" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#E0F2FE" stopOpacity="0.9" />
              <stop offset="40%" stopColor="#60A5FA" stopOpacity="0.95" />
              <stop offset="80%" stopColor="#3B82F6" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#2563EB" stopOpacity="0.4" />
            </linearGradient>

            {/* Lower Dune Rim Light Gradient */}
            <linearGradient id="lowerRimLight" x1="180" y1="580" x2="680" y2="420" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#E0F2FE" stopOpacity="0" />
              <stop offset="15%" stopColor="#BAE6FD" stopOpacity="0.4" />
              <stop offset="40%" stopColor="#60A5FA" stopOpacity="0.95" />
              <stop offset="70%" stopColor="#3B82F6" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#1D4ED8" stopOpacity="0.2" />
            </linearGradient>

            {/* 3D Sphere 3-Point Light Shader (Electric Sapphire) */}
            <radialGradient id="sphere3DLight" cx="36%" cy="32%" r="68%">
              <stop offset="0%" stopColor="#F0F9FF" />
              <stop offset="25%" stopColor="#93C5FD" />
              <stop offset="55%" stopColor="#3B82F6" />
              <stop offset="85%" stopColor="#1E3A8A" />
              <stop offset="100%" stopColor="#0B132B" />
            </radialGradient>

            {/* Ambient Blue Rim Glow Filter */}
            <filter id="duneGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="7" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>

            {/* Sphere Drop Shadow */}
            <filter id="sphereShadow" x="-30%" y="-30%" width="160%" height="160%">
              <feDropShadow dx="-8" dy="12" stdDeviation="15" floodColor="#000000" floodOpacity="0.75" />
            </filter>
          </defs>

          {/* Background Ambient Dark Sapphire Light behind the curves */}
          <circle cx="540" cy="400" r="240" fill="#1E3A8A" opacity="0.35" filter="url(#duneGlow)" />

          {/* 1. UPPER SWEEPING DUNE / TORUS CURVE */}
          <g>
            <path
              d="M 720 120 C 620 190 420 280 370 420 C 330 540 420 620 520 680 L 720 680 Z"
              fill="url(#upperDuneGradient)"
            />
            {/* Glowing Blue Rim Edge */}
            <path
              d="M 720 120 C 620 190 420 280 370 420 C 330 540 420 620 520 680"
              stroke="url(#upperRimLight)"
              strokeWidth="2.2"
              strokeLinecap="round"
              filter="url(#duneGlow)"
            />
          </g>

          {/* 2. FLOATING 3D MATTE SPHERE */}
          <g className="animate-float-slow" filter="url(#sphereShadow)">
            {/* Sphere Body */}
            <circle
              cx="490"
              cy="230"
              r="38"
              fill="url(#sphere3DLight)"
            />
            {/* Subtle Specular Glint */}
            <circle
              cx="482"
              cy="218"
              r="8"
              fill="#FFFFFF"
              fillOpacity="0.45"
              filter="blur(3px)"
            />
          </g>

          {/* 3. LOWER ROLLING DUNE / WAVE CURVE */}
          <g>
            <path
              d="M 720 450 C 600 500 420 600 300 680 C 200 730 100 770 20 810 L 720 810 Z"
              fill="url(#lowerDuneGradient)"
            />
            {/* Glowing Blue Rim Edge */}
            <path
              d="M 720 450 C 600 500 420 600 300 680 C 200 730 100 770 20 810"
              stroke="url(#lowerRimLight)"
              strokeWidth="2.5"
              strokeLinecap="round"
              filter="url(#duneGlow)"
            />
          </g>
        </svg>
      </div>

      {/* LEFT CORNER CURVED ARC */}
      <div className="absolute left-0 top-[52%] -translate-y-1/2 w-[340px] sm:w-[480px] lg:w-[620px] h-[450px] sm:h-[580px] lg:h-[700px] pointer-events-none opacity-75 sm:opacity-90 z-0">
        <svg
          viewBox="0 0 600 700"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          <defs>
            <linearGradient id="leftArcGradient" x1="0" y1="360" x2="340" y2="680" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#1E3A8A" stopOpacity="0.2" />
              <stop offset="25%" stopColor="#2563EB" stopOpacity="0.65" />
              <stop offset="60%" stopColor="#60A5FA" stopOpacity="0.95" />
              <stop offset="85%" stopColor="#3B82F6" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#080B10" stopOpacity="0" />
            </linearGradient>

            <filter id="arcGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="2.5" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Smooth Elegant Arc Line sweeping down-right */}
          <path
            d="M -10,360 C 130,370 270,440 330,680"
            stroke="url(#leftArcGradient)"
            strokeWidth="1.6"
            strokeLinecap="round"
            filter="url(#arcGlow)"
          />
        </svg>
      </div>

    </div>
  );
}

