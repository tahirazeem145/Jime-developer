import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { cardData } from '../../lib/utils';
import { Globe, ArrowRight, ArrowUpRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const ProjectCard = ({ item, index, totalCards }) => {
  const cardRef = useRef(null);
  const containerRef = useRef(null);
  const color = item.color || 'rgba(255, 255, 255, 0.85)';

  useEffect(() => {
    const card = cardRef.current;
    const container = containerRef.current;
    if (!card || !container) return;

    const targetScale = 1 - (totalCards - index) * 0.05;

    // Set initial state
    gsap.set(card, {
      scale: 1,
      transformOrigin: 'center top',
    });

    // Create scroll trigger for stacking scale effect
    const trigger = ScrollTrigger.create({
      trigger: container,
      start: 'top center',
      end: 'bottom center',
      scrub: 1,
      onUpdate: (self) => {
        const progress = self.progress;
        const scale = gsap.utils.interpolate(1, targetScale, progress);

        gsap.set(card, {
          scale: Math.max(scale, targetScale),
          transformOrigin: 'center top',
        });
      },
    });

    return () => {
      trigger.kill();
    };
  }, [index, totalCards]);

  return (
    <div
      ref={containerRef}
      className="relative w-full flex items-center justify-center sticky top-0 py-6"
      style={{
        minHeight: '85vh',
      }}
    >
      <div
        ref={cardRef}
        className="relative w-full max-w-5xl rounded-[26px] isolation-auto will-change-transform group"
        style={{
          top: `calc(-2vh + ${index * 26}px)`,
          transformOrigin: 'top',
        }}
      >
        {/* Electric Conic Border Glow Effect */}
        <div
          className="absolute -inset-[3px] rounded-[29px] pointer-events-none transition-opacity duration-500"
          style={{
            background: `conic-gradient(
              from 0deg,
              transparent 0deg,
              ${color} 60deg,
              rgba(255, 255, 255, 0.5) 120deg,
              transparent 180deg,
              rgba(255, 255, 255, 0.3) 240deg,
              transparent 360deg
            )`,
            zIndex: -1,
          }}
        />

        {/* Main Card Glass Container */}
        <div
          className="relative w-full rounded-[26px] overflow-hidden border border-white/20 transition-all duration-500 shadow-[0_30px_70px_rgba(0,0,0,0.95)]"
          style={{
            background: 'linear-gradient(145deg, rgba(20, 20, 20, 0.95) 0%, rgba(10, 10, 10, 0.98) 100%)',
            backdropFilter: 'blur(32px) saturate(190%)',
            WebkitBackdropFilter: 'blur(32px) saturate(190%)',
            boxShadow: `
              0 24px 60px rgba(0, 0, 0, 0.95),
              0 2px 8px rgba(0, 0, 0, 0.4),
              inset 0 1px 1.5px rgba(255, 255, 255, 0.3),
              inset 0 -1px 0 rgba(255, 255, 255, 0.1)
            `,
          }}
        >
          {/* Enhanced Glass Reflection Overlay */}
          <div
            className="absolute top-0 left-0 right-0 h-3/5 pointer-events-none rounded-t-[26px]"
            style={{
              background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.18) 0%, rgba(255, 255, 255, 0.04) 50%, transparent 100%)',
            }}
          />

          {/* Top Glass Shine Line */}
          <div
            className="absolute top-2.5 left-3 right-3 h-[1.5px] pointer-events-none rounded-full"
            style={{
              background: 'linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.7) 50%, transparent 100%)',
            }}
          />

          {/* Side Glass Reflection */}
          <div
            className="absolute top-0 left-0 w-[2px] h-full pointer-events-none rounded-l-[26px]"
            style={{
              background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.3) 0%, transparent 60%)',
            }}
          />

          {/* Frosted Glass Texture Noise */}
          <div
            className="absolute inset-0 pointer-events-none opacity-40 rounded-[26px]"
            style={{
              backgroundImage: `
                radial-gradient(circle at 20% 30%, rgba(255,255,255,0.08) 1px, transparent 2px),
                radial-gradient(circle at 80% 70%, rgba(255,255,255,0.06) 1px, transparent 2px),
                radial-gradient(circle at 40% 80%, rgba(255,255,255,0.04) 1px, transparent 2px)
              `,
              backgroundSize: '30px 30px, 25px 25px, 35px 35px',
            }}
          />

          {/* Real Project Content Layout */}
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 min-h-[460px]">
            {/* Left Column: Live Mockup Frame (6 Cols) */}
            <div className="lg:col-span-6 p-5 sm:p-7 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-white/10 bg-[#0A0A0A]/85">
              <div className="rounded-2xl bg-neutral-950 border border-white/15 overflow-hidden shadow-[0_12px_35px_rgba(0,0,0,0.85)] group-hover:border-white/35 transition-all duration-500">
                {/* Browser bar */}
                <div className="px-3.5 py-2.5 bg-neutral-900 border-b border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#EF4444]/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#F59E0B]/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#10B981]/80" />
                  </div>
                  <div className="flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-neutral-950 border border-white/10 text-[11px] font-mono text-neutral-300">
                    <Globe className="w-3 h-3 text-white" />
                    <span>{item.url}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-white animate-pulse shadow-[0_0_8px_rgba(255,255,255,0.8)]" />
                    <span className="text-[10px] font-inter font-semibold text-white uppercase tracking-wider hidden sm:inline">
                      Live
                    </span>
                  </div>
                </div>

                {/* Screenshot */}
                <div className="relative overflow-hidden aspect-[16/10] bg-neutral-950">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                </div>
              </div>

              {/* Stats pills */}
              {item.stats && item.stats.length > 0 && (
                <div className="grid grid-cols-2 gap-2.5 mt-4">
                  {item.stats.map((st, i) => (
                    <div key={i} className="px-3 py-2 rounded-xl bg-neutral-900/80 border border-white/10 text-center backdrop-blur-sm">
                      <span className="block text-[10px] font-inter text-neutral-400 uppercase tracking-wider">
                        {st.label}
                      </span>
                      <span className="block text-xs font-sora font-bold text-white mt-0.5 truncate">
                        {st.value}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Right Column: Project Details (6 Cols) */}
            <div className="lg:col-span-6 p-5 sm:p-7 flex flex-col justify-between">
              <div>
                {/* Badges & Counter */}
                <div className="flex items-center justify-between gap-2 mb-3 sm:mb-4">
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1 rounded-full text-xs font-inter font-semibold text-white bg-neutral-900 border border-white/20">
                      {item.tag}
                    </span>
                    <span className="px-3 py-1 rounded-lg text-xs font-inter font-medium text-neutral-400 bg-neutral-900/80 border border-white/10">
                      {item.year}
                    </span>
                  </div>
                  <span className="text-xs font-mono text-white px-2.5 py-1 rounded-md bg-neutral-900 border border-white/20 font-medium">
                    0{index + 1} / 0{totalCards}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-sora font-bold text-lg sm:text-xl md:text-2xl text-white group-hover:text-neutral-200 transition-colors duration-300 leading-snug">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="mt-2.5 sm:mt-3 text-xs sm:text-sm md:text-[15px] text-neutral-400 font-inter leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div>
                {/* Tech stack */}
                {item.techStack && (
                  <div className="flex flex-wrap gap-1.5 sm:gap-2 pt-3 sm:pt-4 border-t border-white/10 mb-4 sm:mb-5">
                    {item.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="text-[10px] sm:text-[11px] font-inter font-medium px-2.5 py-1 rounded-md bg-neutral-900/70 border border-white/10 text-neutral-300 group-hover:border-white/30 group-hover:text-white transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}

                {/* Actions */}
                <div className="flex items-center justify-between pt-1">
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 text-xs sm:text-sm font-sora font-semibold text-white hover:text-neutral-300 transition-colors group/link"
                  >
                    <span>Read Case Study</span>
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-1" />
                  </a>

                  <a
                    href="#contact"
                    className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-neutral-900 border border-white/15 hover:border-white/40 flex items-center justify-center text-neutral-300 hover:text-white transition-colors backdrop-blur-sm"
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const StackedCards = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    gsap.fromTo(
      container,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 1,
        ease: 'power2.out',
      }
    );
  }, []);

  return (
    <div ref={containerRef} className="relative w-full">
      {cardData.map((card, index) => (
        <ProjectCard
          key={card.id}
          item={card}
          index={index}
          totalCards={cardData.length}
        />
      ))}
    </div>
  );
};

export default StackedCards;
