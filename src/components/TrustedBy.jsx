import React from 'react';

const CLIENT_LOGOS = [
  {
    id: 'omneky',
    name: 'Omneky',
    category: 'AI Marketing & Vision',
    svg: (
      <svg className="h-6 sm:h-7 w-auto fill-current" viewBox="0 0 140 36">
        {/* Omneky Avatar/Robot Icon */}
        <circle cx="16" cy="18" r="14" fill="none" stroke="currentColor" strokeWidth="2.5" />
        <circle cx="11" cy="15" r="2.5" fill="currentColor" />
        <circle cx="21" cy="15" r="2.5" fill="currentColor" />
        <path d="M11 22 Q16 26 21 22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        {/* Wordmark */}
        <text x="38" y="24" fontFamily="Sora, sans-serif" fontSize="18" fontWeight="700" letterSpacing="-0.5">
          Omneky
        </text>
      </svg>
    ),
  },
  {
    id: 'tasc',
    name: 'TASC',
    category: 'Enterprise Outsourcing',
    svg: (
      <svg className="h-6 sm:h-7 w-auto fill-current" viewBox="0 0 130 36">
        <text x="5" y="26" fontFamily="Sora, sans-serif" fontSize="24" fontWeight="900" letterSpacing="2">
          TASC
        </text>
        <circle cx="110" cy="12" r="3.5" fill="#3B82F6" />
      </svg>
    ),
  },
  {
    id: 'cashew',
    name: 'cashew',
    category: 'Fintech & BNPL',
    svg: (
      <svg className="h-6 sm:h-7 w-auto fill-current" viewBox="0 0 145 36">
        {/* Cashew Petals Icon */}
        <g transform="translate(14, 18) scale(0.9)">
          <circle cx="0" cy="-8" r="2" fill="currentColor" />
          <circle cx="6" cy="-6" r="2" fill="currentColor" />
          <circle cx="8" cy="0" r="2" fill="currentColor" />
          <circle cx="6" cy="6" r="2" fill="currentColor" />
          <circle cx="0" cy="8" r="2" fill="currentColor" />
          <circle cx="-6" cy="6" r="2" fill="currentColor" />
          <circle cx="-8" cy="0" r="2" fill="currentColor" />
          <circle cx="-6" cy="-6" r="2" fill="currentColor" />
        </g>
        {/* Wordmark */}
        <text x="32" y="24" fontFamily="Sora, sans-serif" fontSize="20" fontWeight="800" letterSpacing="-0.5">
          cashew
        </text>
      </svg>
    ),
  },
  {
    id: 'mfl',
    name: 'MY FANTASY LEAGUE',
    category: 'Sports & Gaming Platform',
    svg: (
      <svg className="h-7 sm:h-8 w-auto fill-current" viewBox="0 0 180 36">
        {/* Crest/Shield */}
        <path d="M6 8 L18 8 L24 18 L18 28 L6 28 L12 18 Z" fill="#3B82F6" opacity="0.85" />
        <path d="M12 11 L19 18 L12 25" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
        {/* Text */}
        <text x="32" y="16" fontFamily="Sora, sans-serif" fontSize="10" fontWeight="900" letterSpacing="1">
          MY FANTASY
        </text>
        <text x="32" y="28" fontFamily="Sora, sans-serif" fontSize="11" fontWeight="900" letterSpacing="2.5" fill="#3B82F6">
          LEAGUE
        </text>
      </svg>
    ),
  },
  {
    id: 'emirates',
    name: 'Emirates Facilities',
    category: 'UAE Corporate Services',
    svg: (
      <svg className="h-7 sm:h-8 w-auto fill-current" viewBox="0 0 185 36">
        {/* Wing/Falcon Emblem */}
        <path d="M8 26 L16 10 L24 26 L19 26 L16 16 L13 26 Z" fill="#3B82F6" />
        <circle cx="16" cy="8" r="2.5" fill="currentColor" />
        {/* Arabic + English typography */}
        <text x="32" y="17" fontFamily="Arial, sans-serif" fontSize="10" fontWeight="700" letterSpacing="0.5">
          الإمارات للمرافق
        </text>
        <text x="32" y="28" fontFamily="Sora, sans-serif" fontSize="9" fontWeight="700" letterSpacing="1.2" opacity="0.8">
          Emirates Facilities
        </text>
      </svg>
    ),
  },
  {
    id: 'packagex',
    name: 'PACKAGE X',
    category: 'Logistics AI & Vision',
    svg: (
      <svg className="h-6 sm:h-7 w-auto fill-current" viewBox="0 0 160 36">
        <text x="6" y="25" fontFamily="Sora, sans-serif" fontSize="18" fontWeight="900" letterSpacing="1.5">
          PACKAGE
        </text>
        {/* Modern brackets X */}
        <text x="122" y="25" fontFamily="Sora, sans-serif" fontSize="20" fontWeight="900" fill="#3B82F6">
          X
        </text>
      </svg>
    ),
  },
  {
    id: 'daifuku',
    name: 'DAIFUKU',
    category: 'Intralogistics & Automation',
    svg: (
      <svg className="h-6 sm:h-7 w-auto fill-current" viewBox="0 0 150 36">
        <text x="4" y="26" fontFamily="Sora, sans-serif" fontSize="22" fontWeight="900" letterSpacing="1.5">
          DAIFUKU
        </text>
      </svg>
    ),
  },
  {
    id: 'tamizha',
    name: 'Tamizha Jobs',
    category: 'Recruitment & Talent',
    svg: (
      <svg className="h-6 sm:h-7 w-auto fill-current" viewBox="0 0 160 36">
        <circle cx="14" cy="18" r="9" fill="#3B82F6" opacity="0.2" />
        <path d="M10 18 L14 22 L22 14" fill="none" stroke="#3B82F6" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <text x="30" y="24" fontFamily="Sora, sans-serif" fontSize="16" fontWeight="800" letterSpacing="-0.3">
          Tamizha<span className="text-[#3B82F6]">Jobs</span>
        </text>
      </svg>
    ),
  },
  {
    id: 'affylix',
    name: 'Affylix Store',
    category: 'Social Commerce',
    svg: (
      <svg className="h-6 sm:h-7 w-auto fill-current" viewBox="0 0 140 36">
        <polygon points="14,8 24,18 14,28 4,18" fill="none" stroke="#3B82F6" strokeWidth="2.5" />
        <text x="32" y="24" fontFamily="Sora, sans-serif" fontSize="17" fontWeight="800" letterSpacing="-0.5">
          Affylix
        </text>
      </svg>
    ),
  },
];

export default function TrustedBy() {
  // Duplicate array for seamless infinite marquee loop
  const marqueeLogos = [...CLIENT_LOGOS, ...CLIENT_LOGOS, ...CLIENT_LOGOS];

  return (
    <section className="relative w-full bg-slate-50/50 py-12 sm:py-16 overflow-hidden border-t border-b border-slate-200 select-none">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[180px] bg-blue-500/5 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        {/* Section Heading Badge (PROUDLY WORKED WITH) */}
        <div className="inline-flex items-center justify-center mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-200 backdrop-blur-md shadow-[0_2px_10px_rgba(0,0,0,0.03)]">
            <span className="w-1.5 h-1.5 rounded-full bg-accent-blue animate-pulse" />
            <span className="text-[11px] sm:text-xs font-sora font-bold tracking-[0.18em] uppercase text-accent-blue">
              PROUDLY WORKED WITH
            </span>
          </div>
        </div>

        {/* Marquee Container with Left & Right Gradient Fade Masks */}
        <div className="relative w-full overflow-hidden">
          {/* Left Gradient Fade */}
          <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-slate-50 via-slate-50/80 to-transparent z-10 pointer-events-none" />

          {/* Right Gradient Fade */}
          <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-slate-50 via-slate-50/80 to-transparent z-10 pointer-events-none" />

          {/* Infinite Moving Logo Track */}
          <div className="flex w-max animate-marquee items-center gap-8 sm:gap-12 md:gap-16 py-3">
            {marqueeLogos.map((client, index) => (
              <div
                key={`${client.id}-${index}`}
                className="flex items-center justify-center px-4 py-3 rounded-2xl bg-white border border-slate-200/70 hover:border-slate-300 hover:bg-white text-slate-500 hover:text-slate-900 transition-all duration-300 group cursor-default hover:scale-105 shadow-sm"
                title={`${client.name} — ${client.category}`}
              >
                <div className="transition-transform duration-300 drop-shadow-sm group-hover:drop-shadow-[0_2px_10px_rgba(37,99,235,0.2)]">
                  {client.svg}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
