import React, { useEffect, useState } from 'react';

export default function MouseGlow() {
  const [mousePosition, setMousePosition] = useState({ x: -500, y: -500 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    let animationFrame;
    let targetX = -500;
    let targetY = -500;
    let currentX = -500;
    let currentY = -500;

    const handleMouseMove = (e) => {
      targetX = e.clientX;
      targetY = e.clientY;
      setIsHovered(true);
    };

    const handleMouseLeave = () => {
      setIsHovered(false);
    };

    const updatePosition = () => {
      // Smooth lerp interpolation for silky motion
      currentX += (targetX - currentX) * 0.12;
      currentY += (targetY - currentY) * 0.12;
      setMousePosition({ x: currentX, y: currentY });
      animationFrame = requestAnimationFrame(updatePosition);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);
    animationFrame = requestAnimationFrame(updatePosition);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden transition-opacity duration-500"
      style={{ opacity: isHovered ? 1 : 0 }}
    >
      {/* Outer Ambient Lime/Emerald Soft Glow */}
      <div
        className="absolute rounded-full pointer-events-none will-change-transform"
        style={{
          width: '550px',
          height: '550px',
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
          transform: 'translate(-50%, -50%)',
          background: 'radial-gradient(circle, rgba(167, 243, 160, 0.12) 0%, rgba(26, 46, 31, 0.18) 45%, transparent 70%)',
          filter: 'blur(50px)',
        }}
      />

      {/* Inner Subtle Lime Core Glow */}
      <div
        className="absolute rounded-full pointer-events-none will-change-transform"
        style={{
          width: '240px',
          height: '240px',
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
          transform: 'translate(-50%, -50%)',
          background: 'radial-gradient(circle, rgba(167, 243, 160, 0.16) 0%, rgba(167, 243, 160, 0.04) 50%, transparent 80%)',
          filter: 'blur(30px)',
        }}
      />
    </div>
  );
}
