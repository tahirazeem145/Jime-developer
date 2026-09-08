import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { cardData } from '../../lib/utils';
import { Globe, ArrowRight, ArrowUpRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const ProjectCard = ({ item, index, totalCards }) => {
  const color = item.color || '#ffffff';
  const frameColor = item.frameColor || 'rgba(255, 255, 255, 0.8)';
  const glowColor = item.glowColor || 'rgba(255, 255, 255, 0.2)';

  return (
    <div className="relative w-full rounded-[28px] isolation-auto group">
      {/* Electric Conic Border Glow Frame */}
      <div
        className="absolute -inset-[2px] rounded-[30px] pointer-events-none transition-opacity duration-500 opacity-90 group-hover:opacity-100"
        style={{
          background: `conic-gradient(
            from 0deg,
            transparent 0deg,
            ${frameColor} 60deg,
            rgba(255, 255, 255, 0.8) 120deg,
            transparent 180deg,
            ${frameColor} 240deg,
            transparent 360deg
          )`,
          zIndex: -1,
        }}
      />

      {/* Main Card Glass Container (Sleek Dark/Black Body with Colored Frame) */}
      <div
        className="relative w-full rounded-[28px] overflow-hidden transition-all duration-500"
        style={{
          background: 'linear-gradient(145deg, rgba(16, 16, 18, 0.96) 0%, rgba(8, 8, 10, 0.99) 100%)',
          backdropFilter: 'blur(32px) saturate(190%)',
          WebkitBackdropFilter: 'blur(32px) saturate(190%)',
          border: `2px solid ${item.borderColor || frameColor}`,
          boxShadow: `
            0 30px 70px rgba(0, 0, 0, 0.95),
            0 0 35px ${glowColor},
            0 4px 16px rgba(0, 0, 0, 0.6),
            inset 0 1.5px 2px rgba(255, 255, 255, 0.4),
            inset 0 -1px 0 rgba(255, 255, 255, 0.1)
          `,
        }}
      >
        {/* Top Edge Colored Specular Highlight Line (Colored Frame Accent) */}
        <div
          className="absolute top-2 left-4 right-4 h-[2.5px] pointer-events-none rounded-full"
          style={{
            background: `linear-gradient(90deg, transparent 0%, ${color} 25%, #ffffff 50%, ${color} 75%, transparent 100%)`,
          }}
        />

        {/* Enhanced Glass Reflection Overlay */}
        <div
          className="absolute top-0 left-0 right-0 h-3/5 pointer-events-none rounded-t-[28px]"
          style={{
            background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0.02) 50%, transparent 100%)',
          }}
        />

        {/* Side Glass Reflection */}
        <div
          className="absolute top-0 left-0 w-[2px] h-full pointer-events-none rounded-l-[28px]"
          style={{
            background: `linear-gradient(180deg, ${color} 0%, transparent 60%)`,
          }}
        />

        {/* Frosted Glass Texture Noise */}
        <div
          className="absolute inset-0 pointer-events-none opacity-30 rounded-[28px]"
          style={{
            backgroundImage: `
              radial-gradient(circle at 20% 30%, rgba(255,255,255,0.1) 1px, transparent 2px),
              radial-gradient(circle at 80% 70%, rgba(255,255,255,0.06) 1px, transparent 2px),
              radial-gradient(circle at 40% 80%, rgba(255,255,255,0.04) 1px, transparent 2px)
            `,
            backgroundSize: '30px 30px, 25px 25px, 35px 35px',
          }}
        />

        {/* Project Content Layout */}
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 min-h-[440px] sm:min-h-[460px]">
          {/* Left Column: Live Mockup Frame (6 Cols) */}
          <div className="lg:col-span-6 p-5 sm:p-7 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-white/10 bg-[#0C0C0E]/90">
            <div className="rounded-2xl bg-neutral-950 border border-white/15 overflow-hidden shadow-[0_12px_35px_rgba(0,0,0,0.85)] group-hover:border-white/30 transition-all duration-500">
              {/* Browser bar */}
              <div className="px-3.5 py-2.5 bg-neutral-900 border-b border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#EF4444]/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#F59E0B]/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#10B981]/80" />
                </div>
                <div className="flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-neutral-950 border border-white/15 text-[11px] font-mono text-neutral-200">
                  <Globe className="w-3 h-3 text-white" />
                  <span>{item.url}</span>
                </div>
                <div className="flex items-center gap-1">
                  <span 
                    className="w-2 h-2 rounded-full animate-pulse shadow-[0_0_8px_currentColor]"
                    style={{ backgroundColor: color, color: color }}
                  />
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
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>

            {/* Stats pills */}
            {item.stats && item.stats.length > 0 && (
              <div className="grid grid-cols-2 gap-2.5 mt-4">
                {item.stats.map((st, i) => (
                  <div key={i} className="px-3 py-2 rounded-xl bg-neutral-900/80 border border-white/10 text-center">
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
          <div className="lg:col-span-6 p-5 sm:p-7 flex flex-col justify-between bg-[#0E0E10]/80">
            <div>
              {/* Badges & Counter */}
              <div className="flex items-center justify-between gap-2 mb-3 sm:mb-4">
                <div className="flex items-center gap-2">
                  <span 
                    className="px-3 py-1 rounded-full text-xs font-inter font-semibold text-white bg-neutral-900 border"
                    style={{ borderColor: `${color}80` }}
                  >
                    <span className="inline-block w-1.5 h-1.5 rounded-full mr-1.5" style={{ backgroundColor: color }} />
                    {item.tag}
                  </span>
                  <span className="px-3 py-1 rounded-lg text-xs font-inter font-medium text-neutral-400 bg-neutral-900/80 border border-white/10">
                    {item.year}
                  </span>
                </div>
                <span 
                  className="text-xs font-mono font-semibold px-2.5 py-1 rounded-md bg-neutral-900 border"
                  style={{ color: color, borderColor: `${color}60` }}
                >
                  0{index + 1} / 0{totalCards}
                </span>
              </div>

              {/* Title */}
              <h3 className="font-sora font-bold text-lg sm:text-xl md:text-2xl text-white group-hover:text-neutral-100 transition-colors duration-300 leading-snug">
                {item.title}
              </h3>

              {/* Tagline */}
              {item.tagline && (
                <p className="font-inter text-xs sm:text-sm font-semibold text-neutral-300 mt-1 mb-2">
                  {item.tagline}
                </p>
              )}

              {/* Description */}
              <p className="mt-2 text-xs sm:text-sm md:text-[14px] text-neutral-400 font-inter leading-relaxed">
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
                      className="text-[10px] sm:text-[11px] font-inter font-medium px-2.5 py-1 rounded-md bg-neutral-900/70 border border-white/10 text-neutral-300 group-hover:border-white/25 group-hover:text-white transition-colors"
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
                  className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-neutral-900 border border-white/20 hover:border-white/50 flex items-center justify-center text-white transition-colors hover:scale-105 active:scale-95"
                  style={{ borderColor: `${color}60` }}
                >
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const StackedCards = () => {
  const pinSectionRef = useRef(null);
  const cardRefs = useRef([]);

  useEffect(() => {
    const pinSection = pinSectionRef.current;
    const cards = cardRefs.current.filter(Boolean);
    if (!pinSection || cards.length === 0) return;

    const ctx = gsap.context(() => {
      // Set initial positions:
      // Card 0 starts in place at top (y: 0, opacity: 1, scale: 1)
      // Subsequent cards are hidden (opacity: 0, y: 140) so they NEVER peek at the bottom beforehand
      cards.forEach((card, i) => {
        if (i === 0) {
          gsap.set(card, { y: 0, opacity: 1, scale: 1, pointerEvents: 'auto', transformOrigin: 'top center' });
        } else {
          gsap.set(card, { y: 140, opacity: 0, scale: 0.98, pointerEvents: 'none', transformOrigin: 'top center' });
        }
      });

      // Pinning timeline: snappy scroll scrubbing
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: pinSection,
          start: 'top 85px',
          end: `+=${(cards.length - 1) * 360}`,
          pin: true,
          scrub: 0.4,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      // Animate each subsequent card fading in and rising smoothly into place
      for (let i = 1; i < cards.length; i++) {
        const timeOffset = (i - 1) * 0.9;

        // Card i fades in and glides up into place
        tl.to(
          cards[i],
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.85,
            ease: 'power2.out',
            pointerEvents: 'auto',
          },
          timeOffset
        );

        // Previous cards scale down slightly to create physical tabbed deck depth
        for (let j = 0; j < i; j++) {
          const depthScale = 1 - (i - j) * 0.025;
          tl.to(
            cards[j],
            {
              scale: depthScale,
              duration: 0.85,
              ease: 'power2.out',
            },
            timeOffset
          );
        }
      }
    }, pinSection);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={pinSectionRef} className="relative w-full py-6">
      <div 
        className="relative w-full max-w-5xl mx-auto"
        style={{
          minHeight: `${480 + (cardData.length - 1) * 36}px`,
        }}
      >
        {cardData.map((card, index) => (
          <div
            key={card.id}
            ref={(el) => (cardRefs.current[index] = el)}
            className="absolute inset-x-0 w-full will-change-transform"
            style={{
              top: `${index * 36}px`,
              zIndex: 10 + index * 5,
            }}
          >
            <ProjectCard
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
