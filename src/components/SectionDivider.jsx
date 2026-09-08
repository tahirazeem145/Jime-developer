import React from 'react';

export default function SectionDivider() {
  return (
    <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 pointer-events-none z-10">
      {/* Main Gradient Line with Faded Edges */}
      <div className="relative w-full h-[1px] bg-gradient-to-r from-transparent via-[#1D2E22] to-transparent flex items-center justify-center">
        
        {/* Center Ambient Lime Spread */}
        <div className="w-72 sm:w-[480px] h-[1px] bg-gradient-to-r from-transparent via-accent-lime/40 to-transparent" />
        
        {/* Center Core Neon Glint */}
        <div className="absolute w-24 sm:w-40 h-[1.5px] bg-gradient-to-r from-transparent via-accent-lime to-transparent shadow-[0_0_15px_rgba(167,243,160,0.9)]" />
        
        {/* Center Glowing Diamond Pip */}
        <div className="absolute w-1.5 h-1.5 rotate-45 bg-accent-lime shadow-[0_0_8px_rgba(167,243,160,0.9)]" />
      </div>
    </div>
  );
}
