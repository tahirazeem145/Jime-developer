import React from 'react';
import { SmoothScroll } from './components/ui/smooth-scroll';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';
import SectionDivider from './components/SectionDivider';
import ParticleBackground from './components/ParticleBackground';
import MouseGlow from './components/MouseGlow';
import FloatingWhatsApp from './components/FloatingWhatsApp';

export default function App() {
  return (
    <SmoothScroll>
      <div className="relative min-h-screen bg-[#080C0A] text-white font-inter flex flex-col overflow-x-hidden selection:bg-white selection:text-black">
        {/* Top Sticky/Fixed Header */}
        <Navbar />

        {/* Main Content */}
        <main className="flex-grow pt-20">
          
          {/* HERO SECTION: Black & Neon Green Theme */}
          <div className="relative bg-[#080C0A] text-white selection:bg-[#66FF88] selection:text-[#080C0A]">
            {/* Interactive Cursor Mouse Glow */}
            <MouseGlow />

            {/* Floating Particles in Hero */}
            <ParticleBackground />

            <Hero />
          </div>

          {/* ALL OTHER SECTIONS: Black & Pure White Monochrome Theme */}
          <div className="relative bg-[#080C0A] text-white selection:bg-white selection:text-black">
            <Services />
            <SectionDivider variant="black-white" />
            <Projects />
            <About />
            <SectionDivider variant="black-white" />
            <Contact />
          </div>

        </main>

        {/* Floating Action Button */}
        <FloatingWhatsApp />
      </div>
    </SmoothScroll>
  );
}
