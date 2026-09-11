import React, { useEffect, useRef } from 'react';

export default function LiquidWaveBottom() {
  const svgRef = useRef(null);
  const pathFgRef = useRef(null);
  const pathBgRef = useRef(null);
  const pathRimRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    // Number of simulation nodes across the 1440 width
    const NUM_POINTS = 32;
    const WIDTH = 1440;
    const HEIGHT = 360;
    const SPACING = WIDTH / (NUM_POINTS - 1);

    // Baseline wave curves
    const baseFg = (x) => 230 + Math.sin(x * 0.003) * 35 + Math.cos(x * 0.006) * 20;
    const baseBg = (x) => 180 + Math.sin(x * 0.0025 + 1.2) * 45 + Math.cos(x * 0.005) * 25;

    // Physical spring nodes for foreground wave
    const pointsFg = [];
    const pointsBg = [];

    for (let i = 0; i < NUM_POINTS; i++) {
      const x = i * SPACING;
      pointsFg.push({
        x,
        y: baseFg(x),
        targetY: baseFg(x),
        vy: 0,
      });
      pointsBg.push({
        x,
        y: baseBg(x),
        targetY: baseBg(x),
        vy: 0,
      });
    }

    let mouseX = -1000;
    let mouseY = -1000;
    let prevMouseX = -1000;
    let prevMouseY = -1000;
    let isHovered = false;
    let time = 0;
    let rafId = null;

    // Build smooth cubic Bezier curve path string from point array
    const buildPath = (pts, isFill = true) => {
      let d = `M 0 ${pts[0].y.toFixed(1)}`;
      for (let i = 0; i < pts.length - 1; i++) {
        const p0 = pts[i];
        const p1 = pts[i + 1];
        const cpx = (p0.x + p1.x) / 2;
        const cpy = (p0.y + p1.y) / 2;
        d += ` Q ${p0.x.toFixed(1)} ${p0.y.toFixed(1)}, ${cpx.toFixed(1)} ${cpy.toFixed(1)}`;
      }
      const last = pts[pts.length - 1];
      d += ` L ${last.x.toFixed(1)} ${last.y.toFixed(1)}`;
      if (isFill) {
        d += ` L ${WIDTH} ${HEIGHT} L 0 ${HEIGHT} Z`;
      }
      return d;
    };

    const animate = () => {
      time += 0.025;

      // Calculate mouse velocity for interactive ripple impulse
      const mouseSpeed = Math.hypot(mouseX - prevMouseX, mouseY - prevMouseY);
      prevMouseX = mouseX;
      prevMouseY = mouseY;

      // 1. Update Base undulating motion & Mouse interactions
      for (let i = 0; i < NUM_POINTS; i++) {
        const pFg = pointsFg[i];
        const pBg = pointsBg[i];
        const x = pFg.x;

        // Idle organic liquid breathing
        const idleWaveFg = Math.sin(time * 1.6 + i * 0.35) * 7 + Math.cos(time * 0.9 + i * 0.2) * 5;
        const idleWaveBg = Math.sin(time * 1.3 + i * 0.28 + 1.5) * 8 + Math.cos(time * 0.7 + i * 0.18) * 6;

        pFg.targetY = baseFg(x) + idleWaveFg;
        pBg.targetY = baseBg(x) + idleWaveBg;

        // Mouse hover ripple interaction
        if (isHovered) {
          const dist = Math.abs(x - mouseX);
          const maxDist = 240;
          if (dist < maxDist) {
            const force = (1 - dist / maxDist);
            const impulse = Math.sin((time * 4) + (dist * 0.04)) * Math.min(mouseSpeed * 0.6 + 12, 45) * force;
            pFg.vy += impulse * 0.2;
            pBg.vy += impulse * 0.14;
          }
        }

        // Spring physics: F = -k * x - c * v
        const tension = 0.038;
        const damping = 0.88;

        const dyFg = pFg.targetY - pFg.y;
        pFg.vy += dyFg * tension;
        pFg.vy *= damping;
        pFg.y += pFg.vy;

        const dyBg = pBg.targetY - pBg.y;
        pBg.vy += dyBg * (tension * 0.85);
        pBg.vy *= damping;
        pBg.y += pBg.vy;
      }

      // 2. Wave propagation (passing momentum to neighboring points for liquid surface tension)
      const SPREAD = 0.22;
      for (let pass = 0; pass < 3; pass++) {
        for (let i = 0; i < NUM_POINTS; i++) {
          if (i > 0) {
            pointsFg[i - 1].vy += (pointsFg[i].y - pointsFg[i - 1].y) * SPREAD;
            pointsBg[i - 1].vy += (pointsBg[i].y - pointsBg[i - 1].y) * (SPREAD * 0.7);
          }
          if (i < NUM_POINTS - 1) {
            pointsFg[i + 1].vy += (pointsFg[i].y - pointsFg[i + 1].y) * SPREAD;
            pointsBg[i + 1].vy += (pointsBg[i].y - pointsBg[i + 1].y) * (SPREAD * 0.7);
          }
        }
      }

      // 3. Render paths to SVG
      if (pathBgRef.current) {
        pathBgRef.current.setAttribute('d', buildPath(pointsBg, true));
      }
      if (pathFgRef.current) {
        pathFgRef.current.setAttribute('d', buildPath(pointsFg, true));
      }
      if (pathRimRef.current) {
        pathRimRef.current.setAttribute('d', buildPath(pointsFg, false));
      }

      rafId = requestAnimationFrame(animate);
    };

    // Track mouse position over container
    const handleMouseMove = (e) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const relativeX = (e.clientX - rect.left) / rect.width;
      const relativeY = (e.clientY - rect.top) / rect.height;
      mouseX = relativeX * WIDTH;
      mouseY = relativeY * HEIGHT;
      isHovered = true;
    };

    const handleMouseEnter = () => {
      isHovered = true;
    };

    const handleMouseLeave = () => {
      isHovered = false;
      mouseX = -1000;
      mouseY = -1000;
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('mousemove', handleMouseMove);
      container.addEventListener('mouseenter', handleMouseEnter);
      container.addEventListener('mouseleave', handleMouseLeave);
      // Window level fallback for natural fluid tracking
      window.addEventListener('mousemove', (e) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        if (
          e.clientY >= rect.top - 120 &&
          e.clientY <= rect.bottom + 80 &&
          e.clientX >= rect.left &&
          e.clientX <= rect.right
        ) {
          const relativeX = (e.clientX - rect.left) / rect.width;
          const relativeY = (e.clientY - rect.top) / rect.height;
          mouseX = relativeX * WIDTH;
          mouseY = relativeY * HEIGHT;
          isHovered = true;
        }
      });
    }

    rafId = requestAnimationFrame(animate);

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      if (container) {
        container.removeEventListener('mousemove', handleMouseMove);
        container.removeEventListener('mouseenter', handleMouseEnter);
        container.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute bottom-0 left-0 right-0 w-full h-[220px] sm:h-[300px] md:h-[360px] pointer-events-auto cursor-pointer z-10 overflow-visible"
    >
      <svg
        ref={svgRef}
        viewBox="0 0 1440 360"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full object-cover object-bottom"
        preserveAspectRatio="none"
      >
        <defs>
          {/* Primary Sapphire Gradient */}
          <linearGradient id="liquidBottomWave1" x1="720" y1="40" x2="720" y2="360" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#1E3A8A" stopOpacity="0.65" />
            <stop offset="50%" stopColor="#0F172A" stopOpacity="0.88" />
            <stop offset="100%" stopColor="#080B10" stopOpacity="0.98" />
          </linearGradient>

          {/* Secondary Azure Gradient */}
          <linearGradient id="liquidBottomWave2" x1="720" y1="90" x2="720" y2="360" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#2563EB" stopOpacity="0.6" />
            <stop offset="60%" stopColor="#1E3A8A" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#080B10" stopOpacity="0.98" />
          </linearGradient>

          {/* Glowing Cyan Rim Light */}
          <linearGradient id="liquidBottomRimGlow" x1="0" y1="0" x2="1440" y2="0" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#3B82F6" stopOpacity="0" />
            <stop offset="15%" stopColor="#60A5FA" stopOpacity="0.75" />
            <stop offset="50%" stopColor="#E0F2FE" stopOpacity="1" />
            <stop offset="85%" stopColor="#60A5FA" stopOpacity="0.75" />
            <stop offset="100%" stopColor="#3B82F6" stopOpacity="0" />
          </linearGradient>

          {/* Liquid Rim Glow Filter */}
          <filter id="liquidGlow" x="-20%" y="-30%" width="140%" height="160%">
            <feGaussianBlur stdDeviation="5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* 1. Background Liquid Dune Wave */}
        <path
          ref={pathBgRef}
          d="M 0 200 Q 360 120, 720 200 Q 1080 140, 1440 180 L 1440 360 L 0 360 Z"
          fill="url(#liquidBottomWave1)"
        />

        {/* 2. Foreground Liquid Dune Wave */}
        <path
          ref={pathFgRef}
          d="M 0 250 Q 360 180, 720 250 Q 1080 200, 1440 240 L 1440 360 L 0 360 Z"
          fill="url(#liquidBottomWave2)"
        />

        {/* 3. Glowing Electric Cyan Liquid Rim Edge */}
        <path
          ref={pathRimRef}
          d="M 0 250 Q 360 180, 720 250 Q 1080 200, 1440 240"
          stroke="url(#liquidBottomRimGlow)"
          strokeWidth="3.2"
          strokeLinecap="round"
          filter="url(#liquidGlow)"
        />
      </svg>
    </div>
  );
}
