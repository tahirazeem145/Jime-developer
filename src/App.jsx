import React, { useEffect } from 'react';
import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Projects from './components/Projects';
import About from './components/About';
import SectionDivider from './components/SectionDivider';
import ParticleBackground from './components/ParticleBackground';
import MouseGlow from './components/MouseGlow';
import FloatingWhatsApp from './components/FloatingWhatsApp';

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  useEffect(() => {
    // Initialize Lenis for buttery-smooth momentum scrolling
    const lenis = new Lenis({
      duration: 1.35,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 0.92,
      touchMultiplier: 1.6,
      infinite: false,
      autoResize: true,
    });

    window.lenis = lenis;

    // Synchronize Lenis with GSAP ScrollTrigger
    lenis.on('scroll', ScrollTrigger.update);

    const tickerCallback = (time) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(tickerCallback);
    gsap.ticker.lagSmoothing(0);

    // Refresh ScrollTrigger pins after layout settles
    const refreshTimer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 250);

    // Smooth Anchor Navigation Handler
    const handleAnchorClick = (e) => {
      const anchor = e.target.closest('a[href^="#"]');
      if (!anchor) return;
      const href = anchor.getAttribute('href');
      if (!href || href === '#' || href.length <= 1) return;

      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        lenis.scrollTo(target, {
          offset: -75,
          duration: 1.5,
          easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        });
      }
    };

    document.addEventListener('click', handleAnchorClick);

    return () => {
      clearTimeout(refreshTimer);
      document.removeEventListener('click', handleAnchorClick);
      gsap.ticker.remove(tickerCallback);
      lenis.destroy();
      delete window.lenis;
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-[#080C0A] text-white font-inter flex flex-col overflow-x-hidden selection:bg-white selection:text-black">
      {/* Top Sticky/Fixed Header */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-grow pt-20">
        
        {/* HERO SECTION: Black & Neon Green Theme */}
        <div className="relative bg-[#080C0A] text-white selection:bg-[#66FF88] selection:text-[#080C0A] overflow-hidden">
          {/* Interactive Cursor Mouse Glow */}
          <MouseGlow />

          {/* Floating Particles in Hero */}
          <ParticleBackground />

          <Hero />
          <SectionDivider variant="dark-to-bw" />
        </div>

        {/* ALL OTHER SECTIONS: Black & Pure White Monochrome Theme */}
        <div className="relative bg-[#080C0A] text-white selection:bg-white selection:text-black overflow-hidden">
          <Services />
          <SectionDivider variant="black-white" />
          <Projects />
          <SectionDivider variant="black-white" />
          <About />
        </div>

      </main>

      {/* Floating Action Button */}
      <FloatingWhatsApp />
    </div>
  );
}
