import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { cardData } from '../../lib/utils';
import { Globe, ArrowRight, ArrowUpRight, Layers } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const SingleCard = React.forwardRef(({ item, index, totalCards }, ref) => {
  const cardColor = item.color || 'rgba(102, 255, 136, 0.8)';

  return (
    <div
      ref={ref}
      className="w-full will-change-transform"
      style={{
        transformOrigin: 'center center',
      }}
    >
      <div className="relative w-full rounded-[26px] isolation-auto group">
        {/* Electric Conic Border Glow */}
        <div
          className="absolute -inset-[2px] rounded-[28px] pointer-events-none transition-opacity duration-500"
          style={{
            background: `conic-gradient(
              from 0deg,
              transparent 0deg,
              ${cardColor} 60deg,
              rgba(102, 255, 136, 0.4) 120deg,
              transparent 180deg,
              rgba(102, 255, 136, 0.3) 240deg,
              transparent 360deg
            )`,
            zIndex: -1,
          }}
        />

        {/* Main Card Glass Container */}
        <div
          className="relative w-full rounded-[26px] overflow-hidden border border-[#66FF88]/20 transition-all duration-500"
          style={{
            background: 'linear-gradient(145deg, rgba(13, 17, 15, 0.94) 0%, rgba(8, 12, 10, 0.98) 100%)',
            backdropFilter: 'blur(30px) saturate(180%)',
            WebkitBackdropFilter: 'blur(30px) saturate(180%)',
            boxShadow: '0 25px 60px rgba(0, 0, 0, 0.9), inset 0 1px 1px rgba(255, 255, 255, 0.25), inset 0 -1px 0 rgba(255, 255, 255, 0.05)',
          }}
        >
          {/* Glass reflection gradient top overlay */}
          <div
            className="absolute top-0 left-0 right-0 h-2/3 pointer-events-none rounded-t-[26px]"
            style={{
              background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.14) 0%, rgba(255, 255, 255, 0.02) 50%, transparent 100%)',
            }}
          />

          {/* Top Edge Shine Line */}
          <div
            className="absolute top-2.5 left-3 right-3 h-[1.5px] pointer-events-none rounded-full"
            style={{
              background: 'linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.6) 50%, transparent 100%)',
            }}
          />

          {/* Frosted texture noise overlay */}
          <div
            className="absolute inset-0 pointer-events-none opacity-40 rounded-[26px]"
            style={{
              backgroundImage: `
                radial-gradient(circle at 20% 30%, rgba(255,255,255,0.08) 1px, transparent 2px),
                radial-gradient(circle at 80% 70%, rgba(255,255,255,0.06) 1px, transparent 2px)
              `,
              backgroundSize: '28px 28px, 22px 22px',
            }}
          />

          {/* Real Project Content Layout */}
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 min-h-[460px]">
            {/* Left Column: Live Mockup Frame (6 Cols) */}
            <div className="lg:col-span-6 p-5 sm:p-7 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-white/[0.08] bg-[#050806]/75">
              <div className="rounded-2xl bg-[#080C0A]/90 border border-white/[0.1] overflow-hidden shadow-[0_12px_35px_rgba(0,0,0,0.85)] group-hover:border-[#66FF88]/40 transition-all duration-500">
                {/* Browser bar */}
                <div className="px-3.5 py-2.5 bg-[#0D110F] border-b border-white/[0.08] flex items-center justify-between">
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
              {item.stats && item.stats.length > 0 && (
                <div className="grid grid-cols-2 gap-2.5 mt-4">
                  {item.stats.map((st, i) => (
                    <div key={i} className="px-3 py-2 rounded-xl bg-[#080C0A]/70 border border-white/[0.08] text-center backdrop-blur-sm">
                      <span className="block text-[10px] font-inter text-[#9EA8A3] uppercase tracking-wider">
                        {st.label}
                      </span>
                      <span className="block text-xs font-sora font-bold text-[#66FF88] mt-0.5 truncate">
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
                    <span className="px-3 py-1 rounded-full text-xs font-inter font-semibold text-[#66FF88] bg-[#132218] border border-[#1D3A26]">
                      {item.tag}
                    </span>
                    <span className="px-3 py-1 rounded-lg text-xs font-inter font-medium text-[#9EA8A3] bg-[#080C0A]/80 border border-white/[0.08]">
                      {item.year}
                    </span>
                  </div>
                  <span className="text-xs font-mono text-[#66FF88]/80 px-2.5 py-1 rounded-md bg-[#080C0A] border border-[#66FF88]/20">
                    0{index + 1} / 0{totalCards}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-sora font-bold text-lg sm:text-xl md:text-2xl text-white group-hover:text-[#66FF88] transition-colors duration-300 leading-snug">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="mt-2.5 sm:mt-3 text-xs sm:text-sm md:text-[15px] text-[#9EA8A3] font-inter leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div>
                {/* Tech stack */}
                {item.techStack && (
                  <div className="flex flex-wrap gap-1.5 sm:gap-2 pt-3 sm:pt-4 border-t border-white/[0.08] mb-4 sm:mb-5">
                    {item.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="text-[10px] sm:text-[11px] font-inter font-medium px-2.5 py-1 rounded-md bg-[#080C0A]/70 border border-white/[0.08] text-[#9EA8A3] group-hover:border-[#66FF88]/40 group-hover:text-white transition-colors"
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
                    className="inline-flex items-center gap-2 text-xs sm:text-sm font-sora font-semibold text-[#66FF88] hover:text-[#4ADE80] transition-colors group/link"
                  >
                    <span>Read Case Study</span>
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-1" />
                  </a>

                  <a
                    href="#contact"
                    className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#080C0A]/80 border border-white/[0.08] hover:border-[#66FF88]/50 flex items-center justify-center text-[#9EA8A3] hover:text-[#66FF88] transition-colors backdrop-blur-sm"
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
});

SingleCard.displayName = 'SingleCard';

export const StackedCards = () => {
  const containerRef = useRef(null);
  const cardsRef = useRef([]);
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const container = containerRef.current;
    const cards = cardsRef.current.filter(Boolean);
    if (!container || cards.length < 2) return;

    const ctx = gsap.context(() => {
      // Set initial positions
      // Card 0 starts placed and visible
      gsap.set(cards[0], {
        yPercent: 0,
        scale: 1,
        opacity: 1,
        filter: 'brightness(1)',
        zIndex: 10,
      });

      // Card 1 (and subsequent) start hidden below the bottom of the viewport
      cards.slice(1).forEach((card, i) => {
        gsap.set(card, {
          yPercent: 125, // offscreen bottom
          scale: 0.96,
          opacity: 0.9,
          filter: 'brightness(0.95)',
          zIndex: 20 + i * 10,
        });
      });

      // Master scrub timeline with buttery easing
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: 'top top+=70',
          end: `+=${(cards.length - 1) * 1100}`,
          pin: true,
          scrub: 1.2,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            const step = Math.min(Math.floor(self.progress * cards.length + 0.1), cards.length - 1);
            setActiveStep(step);
          },
        },
      });

      // Stacking animation for each consecutive card
      cards.slice(1).forEach((card, i) => {
        const prevCard = cards[i];
        tl.to(
          prevCard,
          {
            scale: 0.96,
            yPercent: 0,
            opacity: 0.2,
            filter: 'brightness(0.35)',
            ease: 'power2.inOut',
          },
          i
        ).to(
          card,
          {
            yPercent: 0,
            scale: 1,
            opacity: 1,
            filter: 'brightness(1)',
            ease: 'power2.inOut',
          },
          i
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="relative w-full py-4 sm:py-6">
      {/* Visual Navigation Hint & Card Indicator */}
      <div className="flex items-center justify-between max-w-5xl mx-auto px-3 mb-5">
        <div className="flex items-center gap-2 text-xs font-mono text-[#9EA8A3]">
          <Layers className="w-3.5 h-3.5 text-[#66FF88]" />
          <span>Interactive Stacking Deck</span>
        </div>
        <div className="flex items-center gap-2">
          {cardData.map((_, idx) => (
            <div
              key={idx}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                activeStep === idx
                  ? 'w-8 bg-[#66FF88] shadow-[0_0_10px_rgba(102,255,136,0.8)]'
                  : 'w-2 bg-white/20'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Cards Deck Stacking Wrapper */}
      <div className="relative w-full max-w-5xl mx-auto min-h-[640px] sm:min-h-[560px] lg:min-h-[480px]">
        {cardData.map((card, index) => (
          <div
            key={card.id}
            ref={(el) => (cardsRef.current[index] = el)}
            className="absolute top-0 left-0 right-0 w-full"
            style={{
              zIndex: index === 0 ? 10 : 20 + index * 10,
            }}
          >
            <SingleCard
              item={card}
              index={index}
              totalCards={cardData.length}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default StackedCards;

