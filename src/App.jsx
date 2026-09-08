import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import BackgroundElements from './components/BackgroundElements';
import ParticleBackground from './components/ParticleBackground';
import MouseGlow from './components/MouseGlow';
import FloatingWhatsApp from './components/FloatingWhatsApp';

export default function App() {
  return (
    <div className="relative min-h-screen bg-background text-main-text font-inter flex flex-col selection:bg-accent-lime selection:text-background overflow-x-hidden">
      {/* Interactive Cursor Mouse Glow */}
      <MouseGlow />

      {/* Background Graphic Visuals, Glows and Grid */}
      <BackgroundElements />

      {/* Subtle Floating Ambient Particles */}
      <ParticleBackground />

      {/* Top Sticky/Fixed Header */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-grow pt-20">
        <Hero />
        <Services />
      </main>

      {/* Floating Action Button */}
      <FloatingWhatsApp />
    </div>
  );
}

