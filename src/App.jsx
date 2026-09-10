import React from 'react';
import { SmoothScroll } from './components/ui/smooth-scroll';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import BackgroundElements from './components/BackgroundElements';
import ParticleBackground from './components/ParticleBackground';
import MouseGlow from './components/MouseGlow';
import FloatingWhatsApp from './components/FloatingWhatsApp';

export default function App() {
  return (
    <SmoothScroll>
      <div className="relative min-h-screen bg-[#080B10] text-white font-inter flex flex-col overflow-x-hidden selection:bg-[#3B82F6] selection:text-white">
        {/* Top Fixed Header */}
        <Navbar />

        {/* Main Content */}
        <main className="relative z-10 w-full flex-grow flex flex-col">
          {/* Interactive Cursor Mouse Glow */}
          <MouseGlow />

          {/* Floating Particles */}
          <ParticleBackground />

          {/* 1st SECTION: Hero Section */}
          <div className="relative w-full min-h-screen flex flex-col justify-center items-center">
            {/* 3D Background Elements */}
            <BackgroundElements />
            <Hero />
          </div>

          {/* 2nd SECTION: Projects Section */}
          <Projects />
        </main>

        {/* Floating Action Button */}
        <FloatingWhatsApp />
      </div>
    </SmoothScroll>
  );
}

