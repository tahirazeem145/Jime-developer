import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { cardData } from '../../lib/utils';
import { Globe, ArrowRight, ArrowUpRight, Layers } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const SingleCard = React.forwardRef(({ item, index, totalCards }, ref) => {
  const cardColor = item.color || 'rgba(37, 99, 235, 0.85)';

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
              rgba(37, 99, 235, 0.35) 120deg,
              transparent 180deg,
              rgba(56, 189, 248, 0.3) 240deg,
              transparent 360deg
            )`,
            zIndex: -1,
          }}
        />

        {/* Main Card Glass Container in Beige & Blue */}
        <div
          className="relative w-full rounded-[26px] overflow-hidden border border-[#2563EB]/20 transition-all duration-500 shadow-[0_24px_60px_rgba(15,23,42,0.08)]"
          style={{
            background: 'linear-gradient(145deg, rgba(255, 255, 255, 0.94) 0%, rgba(248, 245, 238, 0.98) 100%)',
            backdropFilter: 'blur(32px) saturate(190%)',
            WebkitBackdropFilter: 'blur(32px) saturate(190%)',
            boxShadow: '0 24px 60px rgba(15, 23, 42, 0.08), inset 0 1px 2px rgba(255, 255, 255, 1), inset 0 -1px 0 rgba(226, 232, 240, 0.8)',
          }}
        >
          {/* Top Edge Shine Line */}
          <div
            className="absolute top-0 left-0 right-0 h-[1.5px] pointer-events-none"
            style={{
              background: 'linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.9) 50%, transparent 100%)',
            }}
          />

          {/* Real Project Content Layout */}
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 min-h-[460px]">
            {/* Left Column: Live Mockup Frame (6 Cols) */}
            <div className="lg:col-span-6 p-5 sm:p-7 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-slate-200/80 bg-[#F6F2EA]/70">
              <div className="rounded-2xl bg-white border border-slate-200 overflow-hidden shadow-[0_12px_35px_rgba(15,23,42,0.08)] group-hover:border-blue-400 transition-all duration-500">
                {/* Browser bar */}
                <div className="px-3.5 py-2.5 bg-[#F1ECE2] border-b border-slate-200 flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#EF4444]/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#F59E0B]/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#10B981]/80" />
                  </div>
                  <div className="flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-white border border-slate-200 text-[11px] font-mono text-[#475569]">
                    <Globe className="w-3 h-3 text-[#2563EB]" />
                    <span>{item.url}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-[#2563EB] animate-pulse" />
                    <span className="text-[10px] font-inter font-semibold text-[#2563EB] uppercase tracking-wider hidden sm:inline">
                      Live
                    </span>
                  </div>
                </div>

                {/* Screenshot */}
                <div className="relative overflow-hidden aspect-[16/10] bg-slate-100">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
                </div>
              </div>

              {/* Stats pills */}
              {item.stats && item.stats.length > 0 && (
                <div className="grid grid-cols-2 gap-2.5 mt-4">
                  {item.stats.map((st, i) => (
                    <div key={i} className="px-3 py-2 rounded-xl bg-white/90 border border-slate-200 text-center shadow-sm">
                      <span className="block text-[10px] font-inter text-[#64748B] uppercase tracking-wider">
                        {st.label}
                      </span>
                      <span className="block text-xs font-sora font-bold text-[#2563EB] mt-0.5 truncate">
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
                    <span className="px-3 py-1 rounded-full text-xs font-inter font-semibold text-[#1D4ED8] bg-blue-50 border border-blue-200">
                      {item.tag}
                    </span>
                    <span className="px-3 py-1 rounded-lg text-xs font-inter font-medium text-[#64748B] bg-white border border-slate-200">
                      {item.year}
                    </span>
                  </div>
                  <span className="text-xs font-mono text-[#1D4ED8] px-2.5 py-1 rounded-md bg-blue-50 border border-blue-200/80 font-medium">
                    0{index + 1} / 0{totalCards}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-sora font-bold text-lg sm:text-xl md:text-2xl text-[#0F172A] group-hover:text-[#2563EB] transition-colors duration-300 leading-snug">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="mt-2.5 sm:mt-3 text-xs sm:text-sm md:text-[15px] text-[#475569] font-inter leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div>
                {/* Tech stack */}
                {item.techStack && (
                  <div className="flex flex-wrap gap-1.5 sm:gap-2 pt-3 sm:pt-4 border-t border-slate-200/80 mb-4 sm:mb-5">
                    {item.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="text-[10px] sm:text-[11px] font-inter font-medium px-2.5 py-1 rounded-md bg-white border border-slate-200 text-[#475569] group-hover:border-blue-300 group-hover:text-[#2563EB] transition-colors shadow-sm"
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
                    className="inline-flex items-center gap-2 text-xs sm:text-sm font-sora font-semibold text-[#2563EB] hover:text-[#1D4ED8] transition-colors group/link"
                  >
                    <span>Read Case Study</span>
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-1" />
                  </a>

                  <a
                    href="#contact"
                    className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white border border-slate-200 hover:border-blue-300 flex items-center justify-center text-[#64748B] hover:text-[#2563EB] transition-colors shadow-sm"
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
      // Card 0 starts placed
      gsap.set(cards[0], {
        yPercent: 0,
        scale: 1,
        opacity: 1,
        autoAlpha: 1,
        filter: 'blur(0px) brightness(1)',
        zIndex: 10,
      });

      // Card 1+ start hidden
      cards.slice(1).forEach((card, i) => {
        gsap.set(card, {
          yPercent: 140,
          scale: 0.98,
          opacity: 0,
          autoAlpha: 0,
          filter: 'blur(0px) brightness(0.98)',
          zIndex: 20 + i * 10,
        });
      });

      // Master scrub timeline
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: 'top top+=70',
          end: `+=${(cards.length - 1) * 850}`,
          pin: true,
          scrub: 0.9,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            const step = Math.min(Math.floor(self.progress * cards.length + 0.1), cards.length - 1);
            setActiveStep(step);
          },
        },
      });

      // Stacking animation
      cards.slice(1).forEach((card, i) => {
        const prevCard = cards[i];

        tl.to(
          card,
          {
            yPercent: 0,
            autoAlpha: 1,
            opacity: 1,
            scale: 1,
            filter: 'blur(0px) brightness(1)',
            ease: 'power2.out',
            duration: 1,
          },
          i
        );

        tl.to(
          prevCard,
          {
            scale: 0.94,
            opacity: 0.35,
            filter: 'blur(8px) brightness(0.95)',
            ease: 'power2.inOut',
            duration: 0.8,
          },
          i + 0.2
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="relative w-full py-4 sm:py-6">
      {/* Visual Navigation Hint & Card Indicator */}
      <div className="flex items-center justify-between max-w-5xl mx-auto px-3 mb-5">
        <div className="flex items-center gap-2 text-xs font-mono text-[#64748B]">
          <Layers className="w-3.5 h-3.5 text-[#2563EB]" />
          <span>Interactive Stacking Deck</span>
        </div>
        <div className="flex items-center gap-2">
          {cardData.map((_, idx) => (
            <div
              key={idx}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                activeStep === idx
                  ? 'w-8 bg-[#2563EB] shadow-[0_0_10px_rgba(37,99,235,0.6)]'
                  : 'w-2 bg-slate-300'
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
