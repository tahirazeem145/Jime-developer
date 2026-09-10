import React, { useEffect, useRef } from 'react';

export default function MouseGlow() {
  const outerGlowRef = useRef(null);
  const innerGlowRef = useRef(null);
  const coreGlowRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    // Disable on touch devices for performance
    if (window.matchMedia('(pointer: coarse)').matches) {
      return;
    }

    let animationFrame;
    let targetX = -500;
    let targetY = -500;
    let currentX = -500;
    let currentY = -500;
    let isVisible = false;

    const handleMouseMove = (e) => {
      targetX = e.clientX;
      targetY = e.clientY;
      if (!isVisible && containerRef.current) {
        isVisible = true;
        containerRef.current.style.opacity = '1';
      }
    };

    const handleMouseLeave = () => {
      isVisible = false;
      if (containerRef.current) {
        containerRef.current.style.opacity = '0';
      }
    };

    const updatePosition = () => {
      // Smooth lerp interpolation for silky motion
      currentX += (targetX - currentX) * 0.15;
      currentY += (targetY - currentY) * 0.15;

      const transformStr = `translate3d(${currentX}px, ${currentY}px, 0) translate(-50%, -50%)`;

      // Pure direct GPU transforms without triggering React state re-renders
      if (outerGlowRef.current) {
        outerGlowRef.current.style.transform = transformStr;
      }
      if (innerGlowRef.current) {
        innerGlowRef.current.style.transform = transformStr;
      }
      if (coreGlowRef.current) {
        coreGlowRef.current.style.transform = transformStr;
      }

      animationFrame = requestAnimationFrame(updatePosition);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave, { passive: true });
    animationFrame = requestAnimationFrame(updatePosition);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="pointer-events-none fixed inset-0 z-20 overflow-hidden transition-opacity duration-500 opacity-0 mix-blend-screen"
    >
      {/* 1. Large Ambient Atmospheric Sapphire Glow (700px) */}
      <div
        ref={outerGlowRef}
        className="absolute top-0 left-0 rounded-full pointer-events-none will-change-transform"
        style={{
          width: '700px',
          height: '700px',
          background: 'radial-gradient(circle, rgba(59, 130, 246, 0.15) 0%, rgba(30, 58, 138, 0.22) 40%, rgba(8, 11, 16, 0) 70%)',
          filter: 'blur(60px)',
        }}
      />

      {/* 2. Medium Electric Blue Spotlight (350px) */}
      <div
        ref={innerGlowRef}
        className="absolute top-0 left-0 rounded-full pointer-events-none will-change-transform"
        style={{
          width: '350px',
          height: '350px',
          background: 'radial-gradient(circle, rgba(96, 165, 250, 0.22) 0%, rgba(59, 130, 246, 0.16) 45%, transparent 75%)',
          filter: 'blur(35px)',
        }}
      />

      {/* 3. Concentrated Soft Cursor Core (120px) */}
      <div
        ref={coreGlowRef}
        className="absolute top-0 left-0 rounded-full pointer-events-none will-change-transform"
        style={{
          width: '120px',
          height: '120px',
          background: 'radial-gradient(circle, rgba(147, 197, 253, 0.28) 0%, rgba(59, 130, 246, 0.12) 55%, transparent 80%)',
          filter: 'blur(15px)',
        }}
      />
    </div>
  );
}
