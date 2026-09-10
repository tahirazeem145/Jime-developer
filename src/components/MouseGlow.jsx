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
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden transition-opacity duration-500 opacity-0"
    >
      {/* 1. Subtle Ambient Sapphire Aura (450px) */}
      <div
        ref={outerGlowRef}
        className="absolute top-0 left-0 rounded-full pointer-events-none will-change-transform"
        style={{
          width: '450px',
          height: '450px',
          background: 'radial-gradient(circle, rgba(59, 130, 246, 0.08) 0%, rgba(30, 58, 138, 0.10) 45%, transparent 70%)',
          filter: 'blur(55px)',
        }}
      />

      {/* 2. Soft Electric Blue Spotlight (200px) */}
      <div
        ref={innerGlowRef}
        className="absolute top-0 left-0 rounded-full pointer-events-none will-change-transform"
        style={{
          width: '200px',
          height: '200px',
          background: 'radial-gradient(circle, rgba(96, 165, 250, 0.10) 0%, rgba(59, 130, 246, 0.05) 50%, transparent 75%)',
          filter: 'blur(28px)',
        }}
      />

      {/* 3. Subtle Faint Cursor Center (80px) */}
      <div
        ref={coreGlowRef}
        className="absolute top-0 left-0 rounded-full pointer-events-none will-change-transform"
        style={{
          width: '80px',
          height: '80px',
          background: 'radial-gradient(circle, rgba(147, 197, 253, 0.12) 0%, transparent 80%)',
          filter: 'blur(12px)',
        }}
      />
    </div>
  );
}
