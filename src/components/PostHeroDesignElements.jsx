import React from 'react';

export default function PostHeroDesignElements() {
  return (
    <div className="absolute inset-0 pointer-events-none select-none z-0 overflow-hidden">
      
      {/* ========================================================================= */}
      {/* 1. TOP POST-HERO AREA (Around TrustedBy & Projects Entrance) */}
      {/* ========================================================================= */}

      {/* Left 3D Sweeping Electric Blue Ribbon Wave */}
      <div className="absolute left-0 top-[2%] w-[280px] sm:w-[420px] lg:w-[540px] h-[600px] opacity-85 sm:opacity-95 pointer-events-none">
        <svg
          viewBox="0 0 500 650"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full object-contain object-left"
        >
          <defs>
            <linearGradient id="postHeroWaveGrad" x1="0" y1="100" x2="450" y2="500" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#1E3A8A" stopOpacity="0.85" />
              <stop offset="30%" stopColor="#2563EB" stopOpacity="0.9" />
              <stop offset="70%" stopColor="#3B82F6" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#080B10" stopOpacity="0" />
            </linearGradient>

            <linearGradient id="postHeroWaveRim" x1="0" y1="120" x2="420" y2="480" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.95" />
              <stop offset="25%" stopColor="#BAE6FD" stopOpacity="0.95" />
              <stop offset="60%" stopColor="#60A5FA" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#1D4ED8" stopOpacity="0.3" />
            </linearGradient>

            <filter id="postHeroGlow" x="-30%" y="-30%" width="160%" height="160%">
              <feGaussianBlur stdDeviation="7" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* 3D Wave Body */}
          <path
            d="M -10 80 C 180 120 320 260 260 440 C 220 540 80 600 -10 640 Z"
            fill="url(#postHeroWaveGrad)"
          />
          {/* Glowing Top Rim Edge */}
          <path
            d="M -10 80 C 180 120 320 260 260 440 C 220 540 80 600 -10 640"
            stroke="url(#postHeroWaveRim)"
            strokeWidth="3"
            strokeLinecap="round"
            filter="url(#postHeroGlow)"
          />
        </svg>
      </div>

      {/* Right 3D Floating Sapphire Box / Prism at Projects Section */}
      <div className="absolute right-0 top-[14%] w-[260px] sm:w-[380px] lg:w-[480px] h-[520px] pointer-events-none">
        <svg
          viewBox="0 0 500 550"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full object-contain object-right"
        >
          <defs>
            <linearGradient id="boxFrontGrad" x1="160" y1="140" x2="380" y2="360" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.4" />
              <stop offset="60%" stopColor="#1D4ED8" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#0B132B" stopOpacity="0.7" />
            </linearGradient>

            <linearGradient id="boxTopGrad" x1="180" y1="80" x2="420" y2="200" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#93C5FD" stopOpacity="0.55" />
              <stop offset="100%" stopColor="#2563EB" stopOpacity="0.25" />
            </linearGradient>

            <linearGradient id="boxEdgeRim" x1="160" y1="80" x2="420" y2="380" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.95" />
              <stop offset="40%" stopColor="#60A5FA" stopOpacity="0.85" />
              <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.35" />
            </linearGradient>
          </defs>

          {/* 3D Geometric Isometric Glass Box Facets */}
          <g className="animate-float-slow">
            {/* Top Face */}
            <polygon
              points="280,100 440,160 340,240 180,180"
              fill="url(#boxTopGrad)"
              stroke="url(#boxEdgeRim)"
              strokeWidth="2"
            />
            {/* Front Left Face */}
            <polygon
              points="180,180 340,240 340,420 180,360"
              fill="url(#boxFrontGrad)"
              stroke="url(#boxEdgeRim)"
              strokeWidth="2"
            />
            {/* Front Right Face */}
            <polygon
              points="340,240 440,160 440,340 340,420"
              fill="url(#boxFrontGrad)"
              stroke="url(#boxEdgeRim)"
              strokeWidth="2"
              opacity="0.85"
            />
            {/* Inner Floating Energy Node */}
            <circle cx="310" cy="270" r="14" fill="#60A5FA" opacity="0.8" filter="url(#postHeroGlow)" />
          </g>
        </svg>
      </div>

      {/* ========================================================================= */}
      {/* 2. MID POST-HERO AREA (Around Testimonials Section) */}
      {/* ========================================================================= */}

      {/* Left 3D Ambient Glowing Curved Blue Shape */}
      <div className="absolute left-0 top-[48%] w-[260px] sm:w-[380px] lg:w-[480px] h-[580px] pointer-events-none opacity-85">
        <svg
          viewBox="0 0 500 600"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full object-contain object-left"
        >
          <defs>
            <linearGradient id="midBlueGrad" x1="0" y1="200" x2="420" y2="450" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#1E3A8A" stopOpacity="0.8" />
              <stop offset="40%" stopColor="#2563EB" stopOpacity="0.85" />
              <stop offset="80%" stopColor="#3B82F6" stopOpacity="0.65" />
              <stop offset="100%" stopColor="#080B10" stopOpacity="0" />
            </linearGradient>

            <linearGradient id="midBlueRim" x1="0" y1="180" x2="440" y2="480" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.95" />
              <stop offset="35%" stopColor="#BAE6FD" stopOpacity="0.95" />
              <stop offset="70%" stopColor="#60A5FA" stopOpacity="0.85" />
              <stop offset="100%" stopColor="#1D4ED8" stopOpacity="0.2" />
            </linearGradient>
          </defs>

          {/* Sweeping S-Curve Surface */}
          <path
            d="M -10 160 C 220 200 380 340 320 480 C 260 580 120 620 -10 640 Z"
            fill="url(#midBlueGrad)"
          />
          <path
            d="M -10 160 C 220 200 380 340 320 480 C 260 580 120 620 -10 640"
            stroke="url(#midBlueRim)"
            strokeWidth="2.8"
            strokeLinecap="round"
            filter="url(#postHeroGlow)"
          />
        </svg>
      </div>

      {/* Right Glowing Floating Sphere at Testimonials */}
      <div className="absolute right-[4%] top-[52%] w-[140px] sm:w-[200px] h-[140px] sm:h-[200px] pointer-events-none">
        <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full animate-float-reverse">
          <defs>
            <radialGradient id="sphereTestimonial" cx="35%" cy="30%" r="70%">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="25%" stopColor="#93C5FD" />
              <stop offset="55%" stopColor="#3B82F6" />
              <stop offset="85%" stopColor="#1E3A8A" />
              <stop offset="100%" stopColor="#0B132B" />
            </radialGradient>
          </defs>
          <circle cx="100" cy="100" r="62" fill="url(#sphereTestimonial)" filter="url(#postHeroGlow)" opacity="0.9" />
          <circle cx="84" cy="80" r="16" fill="#FFFFFF" fillOpacity="0.45" filter="blur(4px)" />
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
            filter="url(#postHeroGlow)"
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
