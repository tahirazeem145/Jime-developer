import React from 'react';

export default function FixedBottomBackground() {
  return (
    <div className="fixed bottom-0 left-0 right-0 h-[220px] sm:h-[300px] md:h-[360px] pointer-events-none select-none z-0 overflow-hidden">
      
      {/* 1. Ambient Volumetric Sapphire Glow Core */}
      <div 
        className="absolute -bottom-[20%] left-1/2 -translate-x-1/2 w-[600px] sm:w-[900px] lg:w-[1100px] h-[220px] sm:h-[300px] rounded-full opacity-35 sm:opacity-45 blur-[90px] sm:blur-[120px]"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(59,130,246,0.6) 0%, rgba(29,78,216,0.4) 45%, rgba(8,11,16,0) 75%)'
        }}
      />

      {/* 2. Perspective Cyber Grid Floor */}
      <div className="absolute inset-0 cyber-grid-bottom opacity-40 sm:opacity-55" />

      {/* 3. Sweeping 3D Blue Waves & Dune Silhouettes with Glowing Rim Lights */}
      <div className="absolute bottom-0 left-0 right-0 w-full h-[140px] sm:h-[200px] md:h-[240px]">
        <svg
          viewBox="0 0 1440 240"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full object-cover object-bottom"
          preserveAspectRatio="none"
        >
          <defs>
            {/* Primary Sapphire Gradient */}
            <linearGradient id="bottomWaveGrad1" x1="720" y1="40" x2="720" y2="240" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#1E3A8A" stopOpacity="0.45" />
              <stop offset="50%" stopColor="#0F172A" stopOpacity="0.85" />
              <stop offset="100%" stopColor="#080B10" stopOpacity="0.95" />
            </linearGradient>

            {/* Secondary Azure Gradient */}
            <linearGradient id="bottomWaveGrad2" x1="720" y1="90" x2="720" y2="240" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#2563EB" stopOpacity="0.4" />
              <stop offset="60%" stopColor="#1E3A8A" stopOpacity="0.7" />
              <stop offset="100%" stopColor="#080B10" stopOpacity="0.9" />
            </linearGradient>

            {/* Glowing Cyan Rim Light */}
            <linearGradient id="bottomRimGlow" x1="0" y1="0" x2="1440" y2="0" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#3B82F6" stopOpacity="0" />
              <stop offset="20%" stopColor="#60A5FA" stopOpacity="0.6" />
              <stop offset="50%" stopColor="#BAE6FD" stopOpacity="0.95" />
              <stop offset="80%" stopColor="#60A5FA" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#3B82F6" stopOpacity="0" />
            </linearGradient>

            {/* Glow Filter */}
            <filter id="bottomGlowFilter" x="-10%" y="-30%" width="120%" height="160%">
              <feGaussianBlur stdDeviation="4" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Background Dune Wave */}
          <path
            d="M 0 160 C 320 100 640 180 960 120 C 1200 80 1360 110 1440 130 L 1440 240 L 0 240 Z"
            fill="url(#bottomWaveGrad1)"
          />

          {/* Foreground Dune Wave */}
          <path
            d="M 0 190 C 280 140 560 210 880 150 C 1140 110 1320 160 1440 180 L 1440 240 L 0 240 Z"
            fill="url(#bottomWaveGrad2)"
          />

          {/* Glowing Top Electric Rim Line */}
          <path
            d="M 0 190 C 280 140 560 210 880 150 C 1140 110 1320 160 1440 180"
            stroke="url(#bottomRimGlow)"
            strokeWidth="2"
            strokeLinecap="round"
            filter="url(#bottomGlowFilter)"
          />
        </svg>
      </div>

      {/* 4. Center Horizon Laser Flare Light */}
      <div className="absolute bottom-0 left-0 right-0 flex justify-center items-center">
        {/* Horizontal Laser Line */}
        <div className="w-full h-[1.5px] bg-gradient-to-r from-transparent via-[#3B82F6] to-transparent opacity-60" />
        
        {/* Core Center Pulse Flare */}
        <div className="absolute w-40 sm:w-64 h-2 bg-gradient-to-r from-transparent via-[#60A5FA] to-transparent blur-[2px] opacity-85 animate-flare-pulse" />
      </div>

    </div>
  );
}
