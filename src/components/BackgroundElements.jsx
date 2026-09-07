import React from 'react';

export default function BackgroundElements() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {/* Top ambient soft radial glow */}
      <div 
        className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[900px] h-[500px] rounded-full opacity-20 blur-[130px]"
        style={{
          background: 'radial-gradient(circle, rgba(167,243,160,0.18) 0%, rgba(26,46,31,0.4) 50%, transparent 80%)'
        }}
      />

      {/* Right side ambient emerald glow behind organic shapes */}
      <div 
        className="absolute top-[20%] -right-[10%] w-[600px] h-[600px] rounded-full opacity-25 blur-[120px]"
        style={{
          background: 'radial-gradient(circle, rgba(167,243,160,0.2) 0%, rgba(26,46,31,0.6) 50%, transparent 75%)'
        }}
      />

      {/* Left side ambient subtle dark glow */}
      <div 
        className="absolute bottom-[20%] -left-[10%] w-[500px] h-[500px] rounded-full opacity-20 blur-[110px]"
        style={{
          background: 'radial-gradient(circle, rgba(26,46,31,0.5) 0%, rgba(11,15,12,0.8) 70%, transparent 100%)'
        }}
      />

      {/* 3D ORGANIC DUNES & FLOATING SPHERE ON THE RIGHT (REDUCED PROPORTIONS) */}
      <div 
        className="absolute right-0 top-0 bottom-0 w-[220px] sm:w-[320px] md:w-[380px] lg:w-[480px] pointer-events-none select-none overflow-hidden z-0"
        style={{
          maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 60%, rgba(0,0,0,0.5) 80%, transparent 98%)',
          WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 60%, rgba(0,0,0,0.5) 80%, transparent 98%)',
        }}
      >
        <svg
          viewBox="0 0 700 800"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full object-cover object-right"
          preserveAspectRatio="xMaxYMid meet"
        >
          <defs>
            {/* Upper Dune Surface Velvet Gradient */}
            <linearGradient id="upperDuneGradient" x1="280" y1="260" x2="680" y2="480" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#8ACD94" stopOpacity="0.95" />
              <stop offset="35%" stopColor="#4A8857" stopOpacity="0.9" />
              <stop offset="70%" stopColor="#1C4426" stopOpacity="0.85" />
              <stop offset="100%" stopColor="#0B1A0E" stopOpacity="0.6" />
            </linearGradient>

            {/* Lower Dune Surface Velvet Gradient with tail fade */}
            <linearGradient id="lowerDuneGradient" x1="220" y1="520" x2="700" y2="780" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#C4F8BE" stopOpacity="0" />
              <stop offset="15%" stopColor="#7EBA85" stopOpacity="0.4" />
              <stop offset="35%" stopColor="#7EBA85" stopOpacity="0.9" />
              <stop offset="65%" stopColor="#3B7348" stopOpacity="0.85" />
              <stop offset="90%" stopColor="#183820" stopOpacity="0.75" />
              <stop offset="100%" stopColor="#0B1A0E" stopOpacity="0.5" />
            </linearGradient>

            {/* Upper Dune Rim Light Gradient */}
            <linearGradient id="upperRimLight" x1="280" y1="280" x2="700" y2="120" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#D8FCD6" stopOpacity="0.9" />
              <stop offset="40%" stopColor="#A7F3A0" stopOpacity="0.95" />
              <stop offset="80%" stopColor="#6BC27B" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#A7F3A0" stopOpacity="0.4" />
            </linearGradient>

            {/* Lower Dune Rim Light Gradient with smooth tail fade */}
            <linearGradient id="lowerRimLight" x1="180" y1="580" x2="680" y2="420" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#E6FEE4" stopOpacity="0" />
              <stop offset="15%" stopColor="#E6FEE4" stopOpacity="0.4" />
              <stop offset="40%" stopColor="#D2FBD0" stopOpacity="0.95" />
              <stop offset="70%" stopColor="#A7F3A0" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#4A8857" stopOpacity="0.2" />
            </linearGradient>

            {/* 3D Sphere 3-Point Light Shader */}
            <radialGradient id="sphere3DLight" cx="36%" cy="32%" r="68%">
              <stop offset="0%" stopColor="#EAFEE8" />
              <stop offset="25%" stopColor="#A4E39E" />
              <stop offset="60%" stopColor="#4A8556" />
              <stop offset="88%" stopColor="#1E4427" />
              <stop offset="100%" stopColor="#0D2113" />
            </radialGradient>

            {/* Ambient Lime Rim Glow Filter */}
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

          {/* Background Ambient Dark Forest Light behind the curves */}
          <circle cx="540" cy="400" r="240" fill="#1A2E1F" opacity="0.4" filter="url(#duneGlow)" />

          {/* 1. UPPER SWEEPING DUNE / TORUS CURVE */}
          <g>
            <path
              d="M 720 120 C 620 190 420 280 370 420 C 330 540 420 620 520 680 L 720 680 Z"
              fill="url(#upperDuneGradient)"
            />
            {/* Glowing Lime Rim Edge */}
            <path
              d="M 720 120 C 620 190 420 280 370 420 C 330 540 420 620 520 680"
              stroke="url(#upperRimLight)"
              strokeWidth="2.2"
              strokeLinecap="round"
              filter="url(#duneGlow)"
            />
          </g>

          {/* 2. FLOATING 3D MATTE SPHERE (HOVERING ABOVE UPPER DUNE) */}
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
              fillOpacity="0.35"
              filter="blur(3px)"
            />
          </g>

          {/* 3. LOWER ROLLING DUNE / WAVE CURVE */}
          <g>
            <path
              d="M 720 450 C 600 500 420 600 300 680 C 200 730 100 770 20 810 L 720 810 Z"
              fill="url(#lowerDuneGradient)"
            />
            {/* Glowing Lime Rim Edge */}
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

      {/* LEFT CORNER CURVED ARC (EXACTLY MATCHING REFERENCE) */}
      <div className="absolute left-0 top-[52%] -translate-y-1/2 w-[340px] sm:w-[480px] lg:w-[620px] h-[450px] sm:h-[580px] lg:h-[700px] pointer-events-none opacity-75 sm:opacity-90 z-0">
        <svg
          viewBox="0 0 600 700"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          <defs>
            <linearGradient id="leftArcGradient" x1="0" y1="360" x2="340" y2="680" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#1A2E1F" stopOpacity="0.2" />
              <stop offset="25%" stopColor="#357845" stopOpacity="0.65" />
              <stop offset="60%" stopColor="#A7F3A0" stopOpacity="0.95" />
              <stop offset="85%" stopColor="#2E6B3F" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#0B0F0C" stopOpacity="0" />
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

      {/* DEEP BOTTOM FADE-OUT GRADIENTS */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-44 sm:h-64 lg:h-80 pointer-events-none z-20"
        style={{
          background: 'linear-gradient(to top, #0B0F0C 20%, rgba(11,15,12,0.85) 50%, rgba(11,15,12,0.4) 75%, transparent 100%)'
        }}
      />
      
      {/* Secondary Radial Bottom Shadow */}
      <div 
        className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[1100px] h-[250px] rounded-full opacity-60 blur-[60px] pointer-events-none z-10"
        style={{
          background: 'radial-gradient(ellipse, #0B0F0C 50%, transparent 85%)'
        }}
      />
    </div>
  );
}
