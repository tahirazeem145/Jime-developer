import React, { useEffect } from 'react';
import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Projects from './components/Projects';
import SectionDivider from './components/SectionDivider';
import ParticleBackground from './components/ParticleBackground';
import MouseGlow from './components/MouseGlow';
import FloatingWhatsApp from './components/FloatingWhatsApp';

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  useEffect(() => {
    // Initialize Lenis for buttery smooth scrolling
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 2.0,
      infinite: false,
    });

    // Synchronize Lenis with GSAP ScrollTrigger
    lenis.on('scroll', ScrollTrigger.update);

    const tickerCallback = (time) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(tickerCallback);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(tickerCallback);
      lenis.destroy();
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-background text-main-text font-inter flex flex-col selection:bg-accent-lime selection:text-background overflow-x-hidden">
      {/* Interactive Cursor Mouse Glow */}
      <MouseGlow />

      {/* Subtle Floating Ambient Particles */}
      <ParticleBackground />

      {/* Top Sticky/Fixed Header */}
      <Navbar />

      {/* Main Content Sections with Divider Lines */}
      <main className="flex-grow pt-20">
        <Hero />
        <SectionDivider />
        <Services />
        <SectionDivider />
        <Projects />
      </main>

      {/* Floating Action Button */}
      <FloatingWhatsApp />
    </div>
  );
}


