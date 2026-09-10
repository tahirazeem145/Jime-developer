import React from 'react';
import { SmoothScroll } from './components/ui/smooth-scroll';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ParticleBackground from './components/ParticleBackground';
import MouseGlow from './components/MouseGlow';
import FloatingWhatsApp from './components/FloatingWhatsApp';

export default function App() {
  return (
    <SmoothScroll>
      <div className="relative min-h-screen bg-[#080B10] text-white font-inter flex flex-col justify-between overflow-x-hidden selection:bg-[#3B82F6] selection:text-white">
        {/* Top Sticky/Fixed Header */}
        <Navbar />

        {/* Main Content: Hero Section */}
        <main className="flex-grow pt-20 relative flex flex-col justify-center">
          {/* Interactive Cursor Mouse Glow */}
          <MouseGlow />

          {/* Floating Particles in Hero */}
          <ParticleBackground />

          <Hero />
        </main>

        {/* Floating Action Button */}
        <FloatingWhatsApp />
      </div>
    </SmoothScroll>
  );
}

