import React, { useEffect, useRef } from 'react';

export default function MouseGlow() {
  const outerGlowRef = useRef(null);
  const innerGlowRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
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

      // Pure direct GPU transforms without triggering React state re-renders
      if (outerGlowRef.current) {
        outerGlowRef.current.style.transform = `translate3d(${currentX}px, ${currentY}px, 0) translate(-50%, -50%)`;
      }
      if (innerGlowRef.current) {
        innerGlowRef.current.style.transform = `translate3d(${currentX}px, ${currentY}px, 0) translate(-50%, -50%)`;
      }

      animationFrame = requestAnimationFrame(updatePosition);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mouseleave', handleMouseLeave, { passive: true });
    animationFrame = requestAnimationFrame(updatePosition);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden transition-opacity duration-500 opacity-0"
    >
      {/* Outer Ambient Lime/Emerald Soft Glow */}
      <div
        ref={outerGlowRef}
        className="absolute top-0 left-0 rounded-full pointer-events-none will-change-transform"
        style={{
          width: '550px',
          height: '550px',
          background: 'radial-gradient(circle, rgba(167, 243, 160, 0.12) 0%, rgba(26, 46, 31, 0.18) 45%, transparent 70%)',
          filter: 'blur(50px)',
        }}
      />

      {/* Inner Subtle Lime Core Glow */}
      <div
        ref={innerGlowRef}
        className="absolute top-0 left-0 rounded-full pointer-events-none will-change-transform"
        style={{
          width: '240px',
          height: '240px',
          background: 'radial-gradient(circle, rgba(167, 243, 160, 0.16) 0%, rgba(167, 243, 160, 0.04) 50%, transparent 80%)',
          filter: 'blur(30px)',
        }}
      />
    </div>
  );
}
