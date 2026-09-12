import React, { useEffect, useRef } from 'react';

export default function ScrollProgressLine() {
  const lineRef = useRef(null);
  const glowRef = useRef(null);

  useEffect(() => {
    let rafId = null;

    const updateScrollProgress = () => {
      if (!lineRef.current) return;
      
      const scrollY = window.lenis != null ? window.lenis.scroll : (window.scrollY || document.documentElement.scrollTop || 0);
      const totalScrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
      
      const progress = totalScrollableHeight > 0 
        ? Math.min(Math.max(scrollY / totalScrollableHeight, 0), 1) 
        : 0;

      const heightPercent = progress * 100;
      lineRef.current.style.height = `${heightPercent}%`;
      
      if (glowRef.current) {
        glowRef.current.style.top = `${heightPercent}%`;
        glowRef.current.style.opacity = progress > 0.005 ? '1' : '0';
      }
    };

    const onScroll = () => {
      if (rafId) cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(updateScrollProgress);
    };

    // Initial update
    updateScrollProgress();

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });

    if (window.lenis) {
      window.lenis.on('scroll', onScroll);
    }

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (window.lenis) {
        window.lenis.off('scroll', onScroll);
      }
    };
  }, []);

  return (
    <div 
      className="fixed top-0 right-0 bottom-0 w-[3px] sm:w-[3.5px] z-50 pointer-events-none"
      aria-hidden="true"
    >
      {/* Background Track */}
      <div className="absolute inset-0 bg-slate-200/50" />

      {/* Dynamic Progress Fill Line */}
      <div
        ref={lineRef}
        className="w-full bg-gradient-to-b from-blue-600 via-accent-blue to-cyan-400 rounded-b-full shadow-[0_0_8px_rgba(37,99,235,0.6)] will-change-[height]"
        style={{ height: '0%' }}
      />

      {/* Leading Edge Glow Point */}
      <div 
        ref={glowRef}
        className="absolute right-0 -translate-x-[2px] -translate-y-1/2 w-2 h-2 rounded-full bg-cyan-400 blur-[0.5px] shadow-[0_0_8px_#38bdf8] transition-opacity duration-200 opacity-0"
        style={{ top: '0%' }}
      />
    </div>
  );
}
