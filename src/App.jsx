import React from 'react';
import { SmoothScroll } from './components/ui/smooth-scroll';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BackgroundElements from './components/BackgroundElements';
import ParticleBackground from './components/ParticleBackground';
import MouseGlow from './components/MouseGlow';
import FloatingWhatsApp from './components/FloatingWhatsApp';

export default function App() {
  return (
    <SmoothScroll>
      <div className="relative min-h-screen bg-[#080B10] text-white font-inter flex flex-col justify-center overflow-x-hidden selection:bg-[#3B82F6] selection:text-white">
        {/* Top Fixed Header */}
        <Navbar />

        {/* Main Content: Hero Section */}
        <main className="relative z-10 w-full min-h-screen flex flex-col justify-center items-center">
          {/* Interactive Cursor Mouse Glow */}
          <MouseGlow />

          {/* Floating Particles in Hero */}
          <ParticleBackground />

          {/* 3D Background Elements covering 100% full screen */}
          <BackgroundElements />

          <Hero />
        </main>

        {/* Floating Action Button */}
        <FloatingWhatsApp />
      </div>
    </SmoothScroll>
  );
}

