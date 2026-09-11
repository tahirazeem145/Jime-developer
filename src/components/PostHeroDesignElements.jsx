import React from 'react';

export default function PostHeroDesignElements() {
  return (
    <div className="absolute inset-0 pointer-events-none select-none z-0 overflow-hidden">
      
      {/* ========================================================================= */}
      {/* 1. TOP POST-HERO AREA (Around TrustedBy & Projects Entrance) */}
      {/* ========================================================================= */}

      {/* Left 3D Slim Electric Blue Crescent Wave (Flush on the left border, compact) */}
      <div className="absolute left-0 top-[3%] w-[70px] sm:w-[105px] lg:w-[135px] h-[220px] sm:h-[290px] lg:h-[330px] pointer-events-none opacity-90">
        <svg
          viewBox="0 0 140 330"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full object-fill object-left"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="leftBorderWaveGrad1" x1="0" y1="0" x2="140" y2="165" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#1E3A8A" stopOpacity="0.85" />
              <stop offset="35%" stopColor="#2563EB" stopOpacity="0.9" />
              <stop offset="80%" stopColor="#3B82F6" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#080B10" stopOpacity="0.2" />
            </linearGradient>

            <linearGradient id="leftBorderWaveRim1" x1="0" y1="0" x2="140" y2="165" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.95" />
              <stop offset="25%" stopColor="#BAE6FD" stopOpacity="0.95" />
              <stop offset="65%" stopColor="#60A5FA" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#1D4ED8" stopOpacity="0.3" />
            </linearGradient>

            <filter id="borderGlow" x="-20%" y="-20%" width="150%" height="140%">
              <feGaussianBlur stdDeviation="5" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* 3D Wave Body - Perfectly flush on the left border (x=0) */}
          <path
            d="M 0 0 C 75 35 130 95 130 165 C 130 235 75 295 0 330 Z"
            fill="url(#leftBorderWaveGrad1)"
          />
          {/* Glowing Electric Rim Edge */}
          <path
            d="M 0 0 C 75 35 130 95 130 165 C 130 235 75 295 0 330"
            stroke="url(#leftBorderWaveRim1)"
            strokeWidth="2.5"
            strokeLinecap="round"
            filter="url(#borderGlow)"
          />
        </svg>
      </div>

      {/* Right 3D Compact Floating Sapphire Prism at Projects Section */}
      <div className="absolute right-0 top-[15%] w-[160px] sm:w-[220px] lg:w-[280px] h-[280px] sm:h-[360px] pointer-events-none opacity-85">
        <svg
          viewBox="0 0 300 380"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full object-contain object-right"
        >
          <defs>
            <linearGradient id="boxFrontGrad" x1="80" y1="80" x2="260" y2="260" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.4" />
              <stop offset="60%" stopColor="#1D4ED8" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#0B132B" stopOpacity="0.7" />
            </linearGradient>

            <linearGradient id="boxTopGrad" x1="100" y1="40" x2="280" y2="140" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#93C5FD" stopOpacity="0.55" />
              <stop offset="100%" stopColor="#2563EB" stopOpacity="0.25" />
            </linearGradient>

            <linearGradient id="boxEdgeRim" x1="80" y1="40" x2="280" y2="280" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.95" />
              <stop offset="40%" stopColor="#60A5FA" stopOpacity="0.85" />
              <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.35" />
            </linearGradient>
          </defs>

          {/* 3D Geometric Isometric Glass Box */}
          <g className="animate-float-slow">
            {/* Top Face */}
            <polygon
              points="180,50 280,95 210,150 110,105"
              fill="url(#boxTopGrad)"
              stroke="url(#boxEdgeRim)"
              strokeWidth="1.8"
            />
            {/* Front Left Face */}
            <polygon
              points="110,105 210,150 210,270 110,225"
              fill="url(#boxFrontGrad)"
              stroke="url(#boxEdgeRim)"
              strokeWidth="1.8"
            />
            {/* Front Right Face */}
            <polygon
              points="210,150 280,95 280,215 210,270"
              fill="url(#boxFrontGrad)"
              stroke="url(#boxEdgeRim)"
              strokeWidth="1.8"
              opacity="0.85"
            />
            {/* Inner Floating Energy Node */}
            <circle cx="195" cy="170" r="9" fill="#60A5FA" opacity="0.8" filter="url(#borderGlow)" />
          </g>
        </svg>
      </div>

      {/* ========================================================================= */}
      {/* 2. MID POST-HERO AREA (Around Testimonials Section) */}
      {/* ========================================================================= */}

      {/* Left 3D Slim Blue Border Accent (Flush on left border at Testimonials) */}
      <div className="absolute left-0 top-[50%] w-[65px] sm:w-[95px] lg:w-[125px] h-[200px] sm:h-[260px] pointer-events-none opacity-85">
        <svg
          viewBox="0 0 130 260"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full object-fill object-left"
          preserveAspectRatio="none"
        >
          {/* Sweeping Slim Arc on the Border */}
          <path
            d="M 0 0 C 65 30 115 75 115 130 C 115 185 65 230 0 260 Z"
            fill="url(#leftBorderWaveGrad1)"
          />
          <path
            d="M 0 0 C 65 30 115 75 115 130 C 115 185 65 230 0 260"
            stroke="url(#leftBorderWaveRim1)"
            strokeWidth="2.2"
            strokeLinecap="round"
            filter="url(#borderGlow)"
          />
        </svg>
      </div>



      {/* ========================================================================= */}
      {/* 3. BOTTOM POST-HERO AREA (Full-width 3D Wave, Cyber Grid & Laser Flare) */}
      {/* ========================================================================= */}

      {/* Volumetric Sapphire Core Glow at Bottom */}
      <div 
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] sm:w-[1100px] lg:w-[1400px] h-[280px] sm:h-[380px] rounded-full opacity-60 sm:opacity-75 blur-[100px] sm:blur-[140px]"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(59,130,246,0.7) 0%, rgba(29,78,216,0.45) 45%, rgba(8,11,16,0) 75%)'
        }}
      />

      {/* Perspective Cyber Grid Floor at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-[280px] sm:h-[380px] md:h-[440px] cyber-grid-bottom opacity-50 sm:opacity-70" />

      {/* Full-width 3D Blue Waves with Glowing Rim Lights at the very bottom */}
      <div className="absolute bottom-0 left-0 right-0 w-full h-[220px] sm:h-[300px] md:h-[360px]">
        <svg
          viewBox="0 0 1440 360"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full object-cover object-bottom"
          preserveAspectRatio="none"
        >
          <defs>
            {/* Primary Sapphire Gradient */}
            <linearGradient id="postHeroBottomWave1" x1="720" y1="40" x2="720" y2="360" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#1E3A8A" stopOpacity="0.65" />
              <stop offset="50%" stopColor="#0F172A" stopOpacity="0.88" />
              <stop offset="100%" stopColor="#080B10" stopOpacity="0.98" />
            </linearGradient>

            {/* Secondary Azure Gradient */}
            <linearGradient id="postHeroBottomWave2" x1="720" y1="90" x2="720" y2="360" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#2563EB" stopOpacity="0.6" />
              <stop offset="60%" stopColor="#1E3A8A" stopOpacity="0.85" />
              <stop offset="100%" stopColor="#080B10" stopOpacity="0.98" />
            </linearGradient>

            {/* Glowing Cyan Rim Light */}
            <linearGradient id="postHeroBottomRimGlow" x1="0" y1="0" x2="1440" y2="0" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#3B82F6" stopOpacity="0" />
              <stop offset="15%" stopColor="#60A5FA" stopOpacity="0.7" />
              <stop offset="50%" stopColor="#E0F2FE" stopOpacity="1" />
              <stop offset="85%" stopColor="#60A5FA" stopOpacity="0.7" />
              <stop offset="100%" stopColor="#3B82F6" stopOpacity="0" />
            </linearGradient>
          </defs>

          {/* Background Dune Wave */}
          <path
            d="M 0 200 C 320 120 640 240 960 160 C 1200 100 1360 140 1440 170 L 1440 360 L 0 360 Z"
            fill="url(#postHeroBottomWave1)"
          />

          {/* Foreground Dune Wave */}
          <path
            d="M 0 250 C 280 180 560 270 880 200 C 1140 145 1320 215 1440 240 L 1440 360 L 0 360 Z"
            fill="url(#postHeroBottomWave2)"
          />

          {/* Glowing Top Electric Rim Line */}
          <path
            d="M 0 250 C 280 180 560 270 880 200 C 1140 145 1320 215 1440 240"
            stroke="url(#postHeroBottomRimGlow)"
            strokeWidth="3"
            strokeLinecap="round"
            filter="url(#borderGlow)"
          />
        </svg>
      </div>

      {/* Laser Horizon Flare Light at the bottom */}
      <div className="absolute bottom-0 left-0 right-0 flex justify-center items-center">
        <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-[#3B82F6] to-transparent opacity-80" />
        <div className="absolute w-48 sm:w-80 h-2.5 bg-gradient-to-r from-transparent via-[#93C5FD] to-transparent blur-[3px] opacity-90 animate-flare-pulse" />
      </div>

      {/* Ambient Blue Radial Glows throughout the post-hero sections */}
      <div className="absolute top-[18%] left-1/4 w-[650px] h-[650px] rounded-full bg-accent-blue/12 blur-[150px] pointer-events-none" />
      <div className="absolute top-[55%] right-1/4 w-[600px] h-[600px] rounded-full bg-primary-blue/12 blur-[140px] pointer-events-none" />
      <div className="absolute bottom-[6%] left-1/2 -translate-x-1/2 w-[900px] h-[400px] rounded-full bg-accent-blue/15 blur-[160px] pointer-events-none" />

    </div>
  );
}
