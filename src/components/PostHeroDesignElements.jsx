import React from 'react';
import LiquidWaveBottom from './LiquidWaveBottom';

export default function PostHeroDesignElements() {
  return (
    <div className="absolute inset-0 pointer-events-none select-none z-0 overflow-hidden">
      
      {/* ========================================================================= */}
      {/* BOTTOM POST-HERO AREA (Full-width 3D Wave, Cyber Grid & Laser Flare) */}
      {/* ========================================================================= */}

      {/* Perspective Cyber Grid Floor at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-[280px] sm:h-[380px] md:h-[440px] cyber-grid-bottom opacity-50 sm:opacity-70" />

      {/* Interactive Liquid Flow Wave reacting in real-time to cursor hover */}
      <LiquidWaveBottom />

      {/* Laser Horizon Flare Light at the bottom */}
      <div className="absolute bottom-0 left-0 right-0 flex justify-center items-center">
        <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-[#3B82F6] to-transparent opacity-80" />
        <div className="absolute w-48 sm:w-80 h-2.5 bg-gradient-to-r from-transparent via-[#93C5FD] to-transparent blur-[3px] opacity-90 animate-flare-pulse" />
      </div>

      {/* Ambient Blue Radial Glows for upper sections only */}
      <div className="absolute top-[18%] left-1/4 w-[650px] h-[650px] rounded-full bg-blue-500/[0.04] blur-[150px] pointer-events-none" />
      <div className="absolute top-[55%] right-1/4 w-[600px] h-[600px] rounded-full bg-blue-600/[0.03] blur-[140px] pointer-events-none" />

    </div>
  );
}
