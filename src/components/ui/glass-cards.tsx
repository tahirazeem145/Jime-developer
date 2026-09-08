import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { cardData } from '../../lib/utils';

gsap.registerPlugin(ScrollTrigger);

interface CardProps {
  id: number;
  title: string;
  description: string;
  index: number;
  totalCards: number;
  color: string;
  frameColor?: string;
  glowColor?: string;
  borderColor?: string;
}

const Card: React.FC<CardProps> = ({ title, description, index, totalCards, color, frameColor, glowColor, borderColor }) => {
  const finalFrameColor = frameColor || 'rgba(255, 255, 255, 0.8)';
  const finalGlowColor = glowColor || 'rgba(255, 255, 255, 0.2)';

  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        maxWidth: '1000px',
        margin: '0 auto',
        borderRadius: '28px',
        isolation: 'isolate',
      }}
      className="card-content"
    >
      {/* Electric Conic Border Glow Frame */}
      <div
        style={{
          position: 'absolute',
          inset: '-2px',
          borderRadius: '30px',
          background: `conic-gradient(
            from 0deg,
            transparent 0deg,
            ${finalFrameColor} 60deg,
            rgba(255, 255, 255, 0.8) 120deg,
            transparent 180deg,
            ${finalFrameColor} 240deg,
            transparent 360deg
          )`,
          zIndex: -1,
        }}
      />

      {/* Main Card Content (Black Body with Colored Frame) */}
      <div
        style={{
          position: 'relative',
          width: '100%',
          minHeight: '420px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '2.5rem',
          borderRadius: '28px',
          background: 'linear-gradient(145deg, rgba(16, 16, 18, 0.96) 0%, rgba(8, 8, 10, 0.99) 100%)',
          backdropFilter: 'blur(32px) saturate(190%)',
          WebkitBackdropFilter: 'blur(32px) saturate(190%)',
          border: `2px solid ${borderColor || finalFrameColor}`,
          boxShadow: `
            0 30px 70px rgba(0, 0, 0, 0.95),
            0 0 35px ${finalGlowColor},
            0 4px 16px rgba(0, 0, 0, 0.6),
            inset 0 1.5px 2px rgba(255, 255, 255, 0.4),
            inset 0 -1px 0 rgba(255, 255, 255, 0.1)
          `,
          overflow: 'hidden',
        }}
      >
        {/* Top Edge Colored Specular Highlight Line */}
        <div
          style={{
            position: 'absolute',
            top: '8px',
            left: '16px',
            right: '16px',
            height: '2.5px',
            background: `linear-gradient(90deg, transparent 0%, ${color} 25%, #ffffff 50%, ${color} 75%, transparent 100%)`,
            borderRadius: '1px',
            pointerEvents: 'none',
          }}
        />

        {/* Enhanced Glass reflection overlay */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '60%',
            background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0.02) 50%, transparent 100%)',
            pointerEvents: 'none',
            borderRadius: '28px 28px 0 0',
          }}
        />

        {/* Side glass reflection */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '2px',
            height: '100%',
            background: `linear-gradient(180deg, ${color} 0%, transparent 60%)`,
            borderRadius: '28px 0 0 28px',
            pointerEvents: 'none',
          }}
        />

        {/* Frosted glass dot texture */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: `
              radial-gradient(circle at 20% 30%, rgba(255,255,255,0.1) 1px, transparent 2px),
              radial-gradient(circle at 80% 70%, rgba(255,255,255,0.06) 1px, transparent 2px),
              radial-gradient(circle at 40% 80%, rgba(255,255,255,0.04) 1px, transparent 2px)
            `,
            backgroundSize: '30px 30px, 25px 25px, 35px 35px',
            pointerEvents: 'none',
            borderRadius: '28px',
            opacity: 0.3,
          }}
        />

        {/* Card Content Elements */}
        <div style={{ position: 'relative', zIndex: 10 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
            <span style={{
              padding: '0.35rem 0.85rem',
              borderRadius: '9999px',
              fontSize: '0.75rem',
              fontWeight: 600,
              background: 'rgba(0, 0, 0, 0.6)',
              border: `1px solid ${color}80`,
              color: '#ffffff',
            }}>
              <span style={{ display: 'inline-block', width: '6px', height: '6px', borderRadius: '50%', backgroundColor: color, marginRight: '6px' }} />
              0{index + 1} / 0{totalCards}
            </span>
            <span style={{
              fontSize: '0.75rem',
              color: 'rgba(255, 255, 255, 0.7)',
              background: 'rgba(0, 0, 0, 0.4)',
              padding: '0.25rem 0.75rem',
              borderRadius: '8px',
              border: '1px solid rgba(255, 255, 255, 0.15)',
            }}>
              Production-Ready
            </span>
          </div>

          <h2 style={{
            fontSize: '2rem',
            fontWeight: 700,
            color: '#ffffff',
            marginBottom: '1rem',
            lineHeight: 1.2,
          }}>
            {title}
          </h2>

          <p style={{
            fontSize: '0.95rem',
            color: 'rgba(255, 255, 255, 0.75)',
            lineHeight: 1.6,
            maxWidth: '650px',
          }}>
            {description}
          </p>
        </div>

        <div style={{ position: 'relative', zIndex: 10, paddingTop: '1.5rem', borderTop: '1px solid rgba(255, 255, 255, 0.15)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontSize: '0.85rem', color: 'rgba(255, 255, 255, 0.75)', fontWeight: 500 }}>
            Jime Developers
          </span>
          <span style={{ fontSize: '0.85rem', color: '#ffffff', fontWeight: 600 }}>
            Learn More →
          </span>
        </div>
      </div>
    </div>
  );
};

export const StackedCards: React.FC = () => {
  const pinSectionRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const pinSection = pinSectionRef.current;
    const cards = cardRefs.current.filter(Boolean) as HTMLDivElement[];
    if (!pinSection || cards.length === 0) return;

    const ctx = gsap.context(() => {
      // Set initial positions:
      cards.forEach((card, i) => {
        if (i === 0) {
          gsap.set(card, { y: 0, scale: 1, transformOrigin: 'top center' });
        } else {
          gsap.set(card, { y: '100vh', scale: 1.02, transformOrigin: 'top center' });
        }
      });

      // Pinning timeline
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: pinSection,
          start: 'top 85px',
          end: `+=${(cards.length - 1) * 450}`,
          pin: true,
          scrub: 0.5,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      // Animate each subsequent card rising from the bottom (100vh) up to 0
      for (let i = 1; i < cards.length; i++) {
        const timeOffset = (i - 1) * 1;

        tl.to(
          cards[i],
          {
            y: 0,
            scale: 1,
            duration: 1,
            ease: 'power2.out',
          },
          timeOffset
        );

        for (let j = 0; j < i; j++) {
          const depthScale = 1 - (i - j) * 0.025;
          tl.to(
            cards[j],
            {
              scale: depthScale,
              duration: 1,
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
    <div ref={pinSectionRef} style={{ position: 'relative', width: '100%', padding: '1.5rem 0' }}>
      <div 
        style={{
          position: 'relative',
          width: '100%',
          maxWidth: '1000px',
          margin: '0 auto',
          minHeight: `${460 + (cardData.length - 1) * 36}px`,
        }}
      >
        {cardData.map((card, index) => (
          <div
            key={card.id}
            ref={(el) => (cardRefs.current[index] = el)}
            style={{
              position: 'absolute',
              left: 0,
              right: 0,
              top: `${index * 36}px`,
              zIndex: 10 + index * 5,
              willChange: 'transform',
            }}
          >
            <Card
              id={card.id}
              title={card.title}
              description={card.description}
              index={index}
              totalCards={cardData.length}
              color={card.color}
              frameColor={card.frameColor}
              glowColor={card.glowColor}
              borderColor={card.borderColor}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default StackedCards;
