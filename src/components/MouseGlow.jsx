import React, { useEffect, useRef } from 'react';

export default function MouseGlow() {
  const outerGlowRef = useRef(null);
  const innerGlowRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    // Disable on touch / mobile devices for maximum performance
    if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) {
      return;
    }

    let animationFrame = null;
    let targetX = -500;
    let targetY = -500;
    let currentX = -500;
    let currentY = -500;
    let isVisible = false;
    let isRunning = false;

    const updatePosition = () => {
      // Smooth lerp interpolation for silky, responsive motion
      const dx = targetX - currentX;
      const dy = targetY - currentY;
      currentX += dx * 0.12;
      currentY += dy * 0.12;

      // Pure direct GPU transforms without triggering React state re-renders
      if (outerGlowRef.current) {
        outerGlowRef.current.style.transform = `translate3d(${currentX}px, ${currentY}px, 0) translate(-50%, -50%)`;
      }
      if (innerGlowRef.current) {
        innerGlowRef.current.style.transform = `translate3d(${currentX}px, ${currentY}px, 0) translate(-50%, -50%)`;
      }

      // If close to destination, sleep RAF loop to save 100% idle CPU/GPU cycles
      if (Math.abs(dx) > 0.1 || Math.abs(dy) > 0.1) {
        animationFrame = requestAnimationFrame(updatePosition);
      } else {
        isRunning = false;
      }
    };

    const startLoop = () => {
      if (!isRunning) {
        isRunning = true;
        animationFrame = requestAnimationFrame(updatePosition);
      }
    };

    const handleMouseMove = (e) => {
      targetX = e.clientX;
      targetY = e.clientY;

      if (!isVisible && containerRef.current) {
        isVisible = true;
        containerRef.current.style.opacity = '1';
      }

      startLoop();
    };

    const handleMouseLeave = () => {
      isVisible = false;
      if (containerRef.current) {
        containerRef.current.style.opacity = '0';
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mouseleave', handleMouseLeave, { passive: true });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      if (animationFrame) cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden transition-opacity duration-500 opacity-0"
    >
      {/* Outer Ambient Lime/Emerald Soft Glow (Hardware accelerated) */}
      <div
        ref={outerGlowRef}
        className="absolute top-0 left-0 rounded-full pointer-events-none will-change-transform"
        style={{
          width: '560px',
          height: '560px',
          background: 'radial-gradient(circle, rgba(102, 255, 136, 0.12) 0%, rgba(26, 46, 31, 0.18) 35%, rgba(8, 12, 10, 0.05) 60%, transparent 75%)',
          filter: 'blur(24px)',
          transform: 'translate3d(-500px, -500px, 0)',
        }}
      />

      {/* Inner Subtle Lime Core Glow */}
      <div
        ref={innerGlowRef}
        className="absolute top-0 left-0 rounded-full pointer-events-none will-change-transform"
        style={{
          width: '240px',
          height: '240px',
          background: 'radial-gradient(circle, rgba(167, 243, 160, 0.2) 0%, rgba(102, 255, 136, 0.08) 45%, transparent 75%)',
          filter: 'blur(16px)',
          transform: 'translate3d(-500px, -500px, 0)',
        }}
      />
    </div>
  );
}
