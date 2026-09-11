import React, { useEffect, useRef } from 'react';
import { ArrowRight, Star } from 'lucide-react';
import { gsap } from 'gsap';

export default function Hero({ onOpenProjectModal }) {
  const heroRef = useRef(null);
  const heroContentRef = useRef(null);
  const badgeRef = useRef(null);
  const headlineRef = useRef(null);
  const subtitleRef = useRef(null);
  const ctaRef = useRef(null);
  const statsRef = useRef(null);
  const statsItemsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Clean, non-colliding Entrance Timeline on Page Load
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.fromTo(
        badgeRef.current,
        { opacity: 0, y: -20, scale: 0.92 },
        { opacity: 1, y: 0, scale: 1, duration: 0.7, delay: 0.1 }
      )
      .fromTo(
        headlineRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8 },
        '-=0.4'
      )
      .fromTo(
        subtitleRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.7 },
        '-=0.5'
      )
      .fromTo(
        ctaRef.current,
        { opacity: 0, y: 20, scale: 0.98 },
        { opacity: 1, y: 0, scale: 1, duration: 0.7 },
        '-=0.4'
      )
      .fromTo(
        statsItemsRef.current.filter(Boolean),
        { opacity: 0, y: 25 },
        { opacity: 1, y: 0, stagger: 0.12, duration: 0.7 },
        '-=0.3'
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <div 
      id="home" 
      ref={heroRef}
      className="relative z-10 w-full flex flex-col justify-center items-center pt-24 sm:pt-28 md:pt-32 pb-8 sm:pb-12"
    >
      <div 
        ref={heroContentRef}
        className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center will-change-transform opacity-100"
      >
        
        {/* GOOGLE REVIEW BADGE */}
        <div ref={badgeRef} className="inline-flex items-center justify-center mb-4 sm:mb-6">
          <a
            href="https://www.google.com/search?q=Jime+Developers+Reviews"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 sm:gap-2.5 px-3.5 sm:px-4 py-1.5 rounded-full bg-slate-100/90 hover:bg-slate-200/80 border border-slate-200/90 hover:border-blue-400 backdrop-blur-sm transition-all duration-300 hover:scale-[1.02] cursor-pointer shadow-sm"
          >
            {/* Google Icon */}
            <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0 transition-transform duration-300 group-hover:scale-110" viewBox="0 0 24 24">
              <path
                fill="#4285F4"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="#34A853"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="#FBBC05"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
              />
              <path
                fill="#EA4335"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
              />
            </svg>

            {/* Rating Number */}
            <span className="font-inter font-bold text-xs sm:text-sm text-slate-900 transition-colors">
              5.0
            </span>

            {/* 5 Gold Stars */}
            <div className="flex items-center gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-[#FBBF24] text-[#FBBF24] gold-star"
                />
              ))}
            </div>

            {/* Separator Dot */}
            <span className="text-slate-400 text-xs">·</span>

            {/* Reviews Count */}
            <span className="text-xs sm:text-sm font-inter text-slate-600 group-hover:text-slate-900 font-normal transition-colors">
              5 Google reviews
            </span>
          </a>
        </div>

        {/* MAIN HEADLINE */}
        <h1 
          ref={headlineRef}
          className="font-sora font-extrabold text-3xl sm:text-5xl md:text-6xl lg:text-[72px] leading-[1.12] sm:leading-[1.08] tracking-[-0.035em] text-slate-950 max-w-4xl mx-auto will-change-transform"
        >
          We turn your idea <br className="hidden sm:inline" />
          into a{' '}
          <span className="text-accent-blue italic font-extrabold inline-block tracking-tight">
            real product.
          </span>
        </h1>

        {/* SUBTITLE */}
        <p 
          ref={subtitleRef}
          className="mt-3 sm:mt-5 text-sm sm:text-lg md:text-xl text-slate-600 max-w-2xl mx-auto font-inter font-normal leading-relaxed tracking-normal"
        >
          Web and mobile apps, designed and shipped fast.
        </p>

        {/* 2 CTA BUTTONS: PRIMARY (WHATSAPP) + SECONDARY (START YOUR PROJECT) */}
        <div 
          ref={ctaRef} 
          className="mt-7 sm:mt-9 flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4 max-w-lg mx-auto w-full px-2"
        >
          {/* Primary CTA: WhatsApp */}
          <a
            href="https://api.whatsapp.com/send/?phone=918610647763&text=Hi+Jime+Developers%2C+I%27d+like+to+talk+about+a+project.&type=phone_number&app_absent=0"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative w-full sm:w-auto inline-flex items-center justify-between sm:justify-center gap-3 pl-6 pr-2 py-2 rounded-full bg-accent-blue text-white font-sora font-semibold text-xs sm:text-sm tracking-tight hover:bg-accent-blue-hover shadow-[0_4px_16px_rgba(37,99,235,0.3)] hover:shadow-[0_4px_24px_rgba(37,99,235,0.45)] active:scale-[0.97] transition-all duration-300 ease-[cubic-bezier(0.32,0.72,0,1)]"
          >
            <div className="flex items-center gap-2.5">
              <svg
                className="w-4 h-4 fill-white transition-transform duration-300 group-hover:scale-110"
                viewBox="0 0 24 24"
              >
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
              </svg>
              <span>Chat on WhatsApp</span>
            </div>
            <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center transition-transform duration-300 group-hover:translate-x-0.5 group-hover:bg-white/30">
              <ArrowRight className="w-3.5 h-3.5 text-white" />
            </div>
          </a>

          {/* Secondary CTA: Start your project */}
          <button
            type="button"
            onClick={() => {
              if (onOpenProjectModal) {
                onOpenProjectModal();
              } else {
                window.dispatchEvent(new CustomEvent('open-project-modal'));
              }
            }}
            className="group relative w-full sm:w-auto inline-flex items-center justify-between sm:justify-center gap-3 pl-6 pr-2 py-2 rounded-full bg-slate-950 hover:bg-slate-900 text-white font-sora font-semibold text-xs sm:text-sm tracking-tight active:scale-[0.97] transition-all duration-300 shadow-[0_4px_16px_rgba(15,23,42,0.18)] cursor-pointer"
          >
            <span>Start your project</span>
            <div className="w-8 h-8 rounded-full bg-white/15 group-hover:bg-white/25 flex items-center justify-center text-white transition-all duration-300 group-hover:translate-x-0.5">
              <ArrowRight className="w-3.5 h-3.5 text-white" />
            </div>
          </button>
        </div>

        {/* THREE STATS IN A MACHINED DOUBLE-BEZEL ENCLOSURE */}
        <div ref={statsRef} className="mt-10 sm:mt-14 max-w-2xl mx-auto w-full">
          <div className="p-1 sm:p-1.5 rounded-3xl bg-slate-100/90 border border-slate-200/80 shadow-[0_10px_30px_rgba(0,0,0,0.04)]">
            <div className="rounded-[calc(1.5rem-0.25rem)] bg-white px-4 py-4 sm:py-5 border border-slate-100">
              <div className="grid grid-cols-3 divide-x divide-slate-100 items-center justify-center">
                {/* Stat 1 */}
                <div 
                  ref={(el) => (statsItemsRef.current[0] = el)}
                  className="flex flex-col items-center text-center px-2 sm:px-4"
                >
                  <span className="font-sora font-extrabold text-2xl sm:text-4xl lg:text-[42px] text-accent-blue tracking-tight">
                    15+
                  </span>
                  <span className="mt-0.5 sm:mt-1 text-[10px] sm:text-xs text-slate-500 font-inter font-medium tracking-wide">
                    Products shipped
                  </span>
                </div>

                {/* Stat 2 */}
                <div 
                  ref={(el) => (statsItemsRef.current[1] = el)}
                  className="flex flex-col items-center text-center px-2 sm:px-4"
                >
                  <span className="font-sora font-extrabold text-2xl sm:text-4xl lg:text-[42px] text-accent-blue tracking-tight">
                    2+
                  </span>
                  <span className="mt-0.5 sm:mt-1 text-[10px] sm:text-xs text-slate-500 font-inter font-medium tracking-wide">
                    Years in business
                  </span>
                </div>

                {/* Stat 3 */}
                <div 
                  ref={(el) => (statsItemsRef.current[2] = el)}
                  className="flex flex-col items-center text-center px-2 sm:px-4"
                >
                  <span className="font-sora font-extrabold text-2xl sm:text-4xl lg:text-[42px] text-accent-blue tracking-tight">
                    2
                  </span>
                  <span className="mt-0.5 sm:mt-1 text-[10px] sm:text-xs text-slate-500 font-inter font-medium tracking-wide">
                    Countries
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

