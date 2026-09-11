import React from 'react';

export default function PostHeroBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none select-none z-0 overflow-hidden">
      
      {/* 1. TOP-RIGHT FLOATING BLUE GLASS BOX (Behind Projects/Testimonials) */}
      <div 
        className="absolute top-[28%] -right-[8%] sm:-right-[4%] w-[320px] sm:w-[500px] lg:w-[600px] h-[320px] sm:h-[500px] lg:h-[600px] rounded-[3rem] sm:rounded-[4rem] p-1.5 bg-gradient-to-br from-[#3B82F6]/20 via-[#1D4ED8]/10 to-transparent border border-[#3B82F6]/30 shadow-[0_0_100px_rgba(59,130,246,0.18)] transform rotate-12 opacity-70 animate-float-slow"
      >
        {/* Inner concentric ring */}
        <div className="w-full h-full rounded-[calc(3rem-0.375rem)] sm:rounded-[calc(4rem-0.375rem)] bg-[#0B101D]/40 border border-white/10 shadow-[inset_0_1px_2px_rgba(255,255,255,0.15)] flex items-center justify-center relative overflow-hidden">
          {/* Subtle cyber grid lines inside the box */}
          <div className="absolute inset-0 cyber-grid-bottom opacity-30" />
          <div className="w-3/4 h-3/4 rounded-3xl border border-[#3B82F6]/15 bg-gradient-to-tr from-[#3B82F6]/5 to-transparent" />
        </div>
      </div>

      {/* 2. MID-LEFT FLOATING BLUE GLASS BOX (Behind Testimonials/TrustedBy) */}
      <div 
        className="absolute top-[52%] -left-[10%] sm:-left-[5%] w-[280px] sm:w-[440px] lg:w-[520px] h-[280px] sm:h-[440px] lg:h-[520px] rounded-[3rem] sm:rounded-[3.5rem] p-1.5 bg-gradient-to-tr from-[#2563EB]/20 via-[#1E3A8A]/10 to-transparent border border-[#3B82F6]/25 shadow-[0_0_110px_rgba(59,130,246,0.15)] transform -rotate-12 opacity-60 animate-float-reverse"
      >
        <div className="w-full h-full rounded-[calc(3rem-0.375rem)] sm:rounded-[calc(3.5rem-0.375rem)] bg-[#0B101D]/40 border border-white/10 shadow-[inset_0_1px_2px_rgba(255,255,255,0.12)] relative overflow-hidden">
          <div className="absolute inset-0 bg-radial-gradient from-[#3B82F6]/10 to-transparent" />
        </div>
      </div>

      {/* 3. BOTTOM-RIGHT FLOATING BLUE GLASS BOX (Behind FAQ Section) */}
      <div 
        className="absolute bottom-[8%] -right-[6%] sm:-right-[2%] w-[260px] sm:w-[400px] lg:w-[480px] h-[260px] sm:h-[400px] lg:h-[480px] rounded-[2.5rem] sm:rounded-[3.5rem] p-1.5 bg-gradient-to-bl from-[#3B82F6]/18 via-[#1D4ED8]/8 to-transparent border border-[#3B82F6]/25 shadow-[0_0_90px_rgba(59,130,246,0.14)] transform rotate-6 opacity-65 animate-float-slow"
      >
        <div className="w-full h-full rounded-[calc(2.5rem-0.375rem)] sm:rounded-[calc(3.5rem-0.375rem)] bg-[#0B101D]/40 border border-white/10 shadow-[inset_0_1px_2px_rgba(255,255,255,0.12)] relative overflow-hidden" />
      </div>

      {/* 4. Ambient Soft Volumetric Spotlights */}
      <div className="absolute top-[35%] left-1/3 w-[650px] h-[650px] rounded-full bg-accent-blue/5 blur-[160px]" />
      <div className="absolute bottom-[20%] right-1/3 w-[550px] h-[550px] rounded-full bg-[#1D4ED8]/5 blur-[150px]" />

    </div>
  );
}
