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

      {/* ABSTRACT 3D ORGANIC SHAPES ON THE RIGHT */}
      <div className="absolute right-0 top-1/2 -translate-y-[45%] w-[380px] sm:w-[480px] lg:w-[620px] h-[650px] opacity-70 lg:opacity-85 pointer-events-none select-none transition-all duration-700">
        <svg
          viewBox="0 0 600 650"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full animate-float-slow"
        >
          <defs>
            {/* 3D Glass Gradients for organic shapes */}
            <linearGradient id="glassOrganic1" x1="120" y1="80" x2="520" y2="480" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#A7F3A0" stopOpacity="0.8" />
              <stop offset="30%" stopColor="#2E6B3F" stopOpacity="0.7" />
              <stop offset="70%" stopColor="#122E1A" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#0B150E" stopOpacity="0.1" />
            </linearGradient>

            <linearGradient id="glassOrganic2" x1="450" y1="200" x2="200" y2="580" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#C2F8BC" stopOpacity="0.5" />
              <stop offset="40%" stopColor="#1F4D2B" stopOpacity="0.6" />
              <stop offset="85%" stopColor="#0E2314" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#000000" stopOpacity="0" />
            </linearGradient>

            <linearGradient id="rimLight1" x1="180" y1="100" x2="480" y2="350" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.6" />
              <stop offset="40%" stopColor="#A7F3A0" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#A7F3A0" stopOpacity="0" />
            </linearGradient>

            <radialGradient id="sphereCoreGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#A7F3A0" stopOpacity="0.4" />
              <stop offset="60%" stopColor="#1A2E1F" stopOpacity="0.2" />
              <stop offset="100%" stopColor="transparent" stopOpacity="0" />
            </radialGradient>

            <filter id="glassBlurFilter" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="10" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>

            <filter id="softGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="25" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Background blurred aura */}
          <circle cx="380" cy="300" r="180" fill="url(#sphereCoreGlow)" filter="url(#softGlow)" />

          {/* Organic Twisted Ribbon / Flowing 3D Pod */}
          <path
            d="M 320 120 C 440 90 530 180 520 290 C 510 400 420 480 340 510 C 260 540 180 490 200 390 C 220 290 200 150 320 120 Z"
            fill="url(#glassOrganic1)"
            filter="url(#glassBlurFilter)"
            stroke="url(#rimLight1)"
            strokeWidth="1.5"
            strokeOpacity="0.4"
          />

          {/* Inner Organic Intersecting Glass Loop */}
          <path
            d="M 390 190 C 490 220 540 330 480 430 C 420 530 290 550 250 460 C 210 370 290 320 360 300 C 430 280 460 210 390 190 Z"
            fill="url(#glassOrganic2)"
            stroke="url(#rimLight1)"
            strokeWidth="1.2"
            strokeOpacity="0.5"
          />

          {/* Glossy Specular Light Highlight Arc */}
          <path
            d="M 280 140 C 370 120 460 170 480 250"
            stroke="#FFFFFF"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeOpacity="0.45"
            filter="drop-shadow(0 0 8px rgba(255,255,255,0.6))"
          />

          {/* Secondary Glossy Accent */}
          <path
            d="M 230 360 C 220 430 270 490 340 490"
            stroke="#A7F3A0"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeOpacity="0.4"
          />

          {/* Floating mini glass orb */}
          <circle 
            cx="490" 
            cy="150" 
            r="18" 
            fill="url(#glassOrganic1)" 
            stroke="#A7F3A0" 
            strokeWidth="1" 
            strokeOpacity="0.6"
            className="animate-float-delayed"
          />
          <circle 
            cx="495" 
            cy="146" 
            r="4" 
            fill="#FFFFFF" 
            fillOpacity="0.7" 
            filter="drop-shadow(0 0 4px #fff)"
          />
        </svg>
      </div>

      {/* LARGE CURVED / PARTIAL CIRCULAR LINE ON LOWER-LEFT */}
      <div className="absolute left-[-15%] sm:left-[-8%] bottom-[-5%] sm:bottom-[2%] w-[450px] sm:w-[650px] lg:w-[850px] h-[450px] sm:h-[650px] lg:h-[850px] pointer-events-none opacity-40 sm:opacity-55">
        <svg
          viewBox="0 0 800 800"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          <defs>
            <linearGradient id="arcGradient" x1="100" y1="700" x2="700" y2="100" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#A7F3A0" stopOpacity="0" />
              <stop offset="25%" stopColor="#A7F3A0" stopOpacity="0.45" />
              <stop offset="50%" stopColor="#2E6B3F" stopOpacity="0.75" />
              <stop offset="75%" stopColor="#A7F3A0" stopOpacity="0.25" />
              <stop offset="100%" stopColor="#1A2E1F" stopOpacity="0" />
            </linearGradient>
            
            <linearGradient id="arcInnerGradient" x1="200" y1="650" x2="650" y2="200" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#1A2E1F" stopOpacity="0" />
              <stop offset="40%" stopColor="#A7F3A0" stopOpacity="0.2" />
              <stop offset="80%" stopColor="#1A2E1F" stopOpacity="0" />
            </linearGradient>

            <filter id="arcGlowFilter" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="4" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Primary Main Curved Arc */}
          <circle
            cx="400"
            cy="400"
            r="320"
            stroke="url(#arcGradient)"
            strokeWidth="1.8"
            strokeDasharray="14 10 180 8 300 20"
            filter="url(#arcGlowFilter)"
          />

          {/* Fainter concentric orbital arc */}
          <circle
            cx="400"
            cy="400"
            r="370"
            stroke="url(#arcInnerGradient)"
            strokeWidth="1"
            strokeDasharray="4 8"
          />

          {/* Tiny glowing beacon node on arc */}
          <circle 
            cx="580" 
            cy="170" 
            r="3.5" 
            fill="#A7F3A0" 
            filter="drop-shadow(0 0 6px #A7F3A0)" 
          />
        </svg>
      </div>

      {/* SUBTLE DARK GRID EFFECT AT THE BOTTOM */}
      <div className="absolute bottom-0 left-0 right-0 h-48 sm:h-64 cyber-grid-bottom pointer-events-none opacity-60" />
      
      {/* Bottom fade out gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background via-background/60 to-transparent pointer-events-none" />
    </div>
  );
}
