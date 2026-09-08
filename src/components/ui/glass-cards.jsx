import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { cardData } from '../../lib/utils';
import { Globe, ArrowRight, ArrowUpRight, Sparkles, ExternalLink } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Card = ({ item, index, totalCards }) => {
  const cardRef = useRef(null);
  const containerRef = useRef(null);
  const color = item.color || 'rgba(102, 255, 136, 0.8)';

  useEffect(() => {
    const card = cardRef.current;
    const container = containerRef.current;
    if (!card || !container) return;

    const targetScale = 1 - (totalCards - index) * 0.05;

    // Set initial state
    gsap.set(card, {
      scale: 1,
      transformOrigin: 'center top'
    });

    // Create scroll trigger for stacking effect
    const trigger = ScrollTrigger.create({
      trigger: container,
      start: 'top 35%',
      end: 'bottom center',
      scrub: 1,
      onUpdate: (self) => {
        const progress = self.progress;
        const scale = gsap.utils.interpolate(1, targetScale, progress);

        gsap.set(card, {
          scale: Math.max(scale, targetScale),
          transformOrigin: 'center top'
        });
      }
    });

    return () => {
      trigger.kill();
    };
  }, [index, totalCards]);

  return (
    <div
      ref={containerRef}
      className="sticky top-24 min-h-[90vh] sm:min-h-[85vh] flex items-center justify-center py-6"
    >
      <div
        ref={cardRef}
        style={{
          position: 'relative',
          width: '92%',
          maxWidth: '1000px',
          minHeight: '480px',
          borderRadius: '28px',
          isolation: 'isolate',
          top: `calc(-2vh + ${index * 20}px)`,
          transformOrigin: 'top'
        }}
        className="group transition-all duration-300"
      >
        {/* Electric Conic Border Effect */}
        <div
          style={{
            position: 'absolute',
            inset: '-2.5px',
            borderRadius: '30px',
            padding: '2.5px',
            background: `conic-gradient(
              from 0deg,
              transparent 0deg,
              ${color} 60deg,
              ${color.replace('0.8', '0.5')} 120deg,
              transparent 180deg,
              ${color.replace('0.8', '0.3')} 240deg,
              transparent 360deg
            )`,
            zIndex: -1
          }}
        />

        {/* Main Card Glass Surface Body */}
        <div 
          style={{
            position: 'relative',
            width: '100%',
            height: '100%',
            borderRadius: '28px',
            background: 'linear-gradient(145deg, rgba(13, 17, 15, 0.85), rgba(8, 12, 10, 0.92))',
            backdropFilter: 'blur(28px) saturate(180%)',
            border: '1px solid rgba(102, 255, 136, 0.18)',
            boxShadow: `
              0 20px 50px rgba(0, 0, 0, 0.85),
              0 0 35px rgba(102, 255, 136, 0.08),
              inset 0 1px 1px rgba(255, 255, 255, 0.2),
              inset 0 -1px 0 rgba(255, 255, 255, 0.05)
            `,
            overflow: 'hidden'
          }}
        >
          {/* Enhanced Glass reflection overlay */}
          <div 
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: '50%',
              background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0.03) 50%, transparent 100%)',
              pointerEvents: 'none',
              borderRadius: '28px 28px 0 0'
            }} 
          />

          {/* Glass Top Shine line */}
          <div 
            style={{
              position: 'absolute',
              top: '10px',
              left: '12px',
              right: '12px',
              height: '1.5px',
              background: 'linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.5) 50%, transparent 100%)',
              borderRadius: '1px',
              pointerEvents: 'none'
            }} 
          />

          {/* Frosted glass texture */}
          <div 
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundImage: `
                radial-gradient(circle at 20% 30%, rgba(255,255,255,0.06) 1px, transparent 2px),
                radial-gradient(circle at 80% 70%, rgba(255,255,255,0.04) 1px, transparent 2px)
              `,
              backgroundSize: '30px 30px, 25px 25px',
              pointerEvents: 'none',
              borderRadius: '28px',
              opacity: 0.6
            }} 
          />

          {/* Card Internal Grid Content */}
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 h-full">
            
            {/* Left Column: Live Mockup Frame (6 Cols) */}
            <div className="lg:col-span-6 p-6 sm:p-8 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-white/[0.08] bg-[#050806]/60">
              <div className="rounded-2xl bg-[#080C0A]/80 border border-white/[0.1] overflow-hidden shadow-[0_12px_30px_rgba(0,0,0,0.8)] group-hover:border-[#66FF88]/40 transition-all duration-500">
                {/* Browser bar */}
                <div className="px-4 py-2 bg-[#0D110F]/90 border-b border-white/[0.08] flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#EF4444]/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#F59E0B]/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#10B981]/80" />
                  </div>
                  <div className="flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-[#080C0A] border border-white/[0.08] text-[11px] font-mono text-[#9EA8A3]">
                    <Globe className="w-3 h-3 text-[#66FF88]" />
                    <span>{item.url}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-[#66FF88] animate-pulse" />
                    <span className="text-[10px] font-inter font-semibold text-[#66FF88] uppercase tracking-wider hidden sm:inline">
                      Live
                    </span>
                  </div>
                </div>

                {/* Screenshot */}
                <div className="relative overflow-hidden aspect-[16/10] bg-[#080C0A]">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#080C0A]/50 via-transparent to-transparent pointer-events-none" />
                </div>
              </div>

              {/* Stats pills */}
              <div className="grid grid-cols-2 gap-2.5 mt-4">
                {item.stats.map((st, i) => (
                  <div key={i} className="px-3 py-2 rounded-xl bg-[#080C0A]/60 border border-white/[0.08] text-center backdrop-blur-sm">
                    <span className="block text-[10px] font-inter text-[#9EA8A3] uppercase tracking-wider">
                      {st.label}
                    </span>
                    <span className="block text-xs font-sora font-bold text-[#66FF88] mt-0.5 truncate">
                      {st.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Project Details (6 Cols) */}
            <div className="lg:col-span-6 p-6 sm:p-8 flex flex-col justify-between">
              <div>
                {/* Badges */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="px-3.5 py-1 rounded-full text-xs font-inter font-semibold text-[#66FF88] bg-[#132218] border border-[#1D3A26]">
                    {item.tag}
                  </span>
                  <span className="px-3 py-1 rounded-lg text-xs font-inter font-medium text-[#9EA8A3] bg-[#080C0A]/80 border border-white/[0.08]">
                    {item.year}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-sora font-bold text-xl sm:text-2xl text-white group-hover:text-[#66FF88] transition-colors duration-300 leading-snug">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="mt-3 text-sm sm:text-[15px] text-[#9EA8A3] font-inter leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div>
                {/* Tech stack */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-white/[0.08] mb-5">
                  {item.techStack.map((tech) => (
                    <span 
                      key={tech} 
                      className="text-[11px] font-inter font-medium px-2.5 py-1 rounded-md bg-[#080C0A]/70 border border-white/[0.08] text-[#9EA8A3] group-hover:border-[#66FF88]/40 group-hover:text-white transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex items-center justify-between pt-1">
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 text-sm font-sora font-semibold text-[#66FF88] hover:text-[#4ADE80] transition-colors group/link"
                  >
                    <span>Read Case Study</span>
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-1" />
                  </a>

                  <a
                    href="#contact"
                    className="w-9 h-9 rounded-full bg-[#080C0A]/80 border border-white/[0.08] hover:border-[#66FF88]/50 flex items-center justify-center text-[#9EA8A3] hover:text-[#66FF88] transition-colors backdrop-blur-sm"
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

    gsap.fromTo(container,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 1.2,
        ease: "power2.out"
      }
    );
  }, []);

  return (
    <div ref={containerRef} className="relative w-full">
      {cardData.map((card, index) => (
        <Card
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
