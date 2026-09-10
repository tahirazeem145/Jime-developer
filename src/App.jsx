import React, { useState, useEffect } from 'react';
import { SmoothScroll } from './components/ui/smooth-scroll';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import TrustedBy from './components/TrustedBy';
import BackgroundElements from './components/BackgroundElements';
import ParticleBackground from './components/ParticleBackground';
import MouseGlow from './components/MouseGlow';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import ProjectModal from './components/ProjectModal';

export default function App() {
  const [isProjectModalOpen, setIsProjectModalOpen] = useState(false);

  useEffect(() => {
    const handleOpenModal = () => setIsProjectModalOpen(true);
    window.addEventListener('open-project-modal', handleOpenModal);
    return () => window.removeEventListener('open-project-modal', handleOpenModal);
  }, []);

  return (
    <SmoothScroll>
      <div className="relative min-h-screen bg-[#080B10] text-white font-inter flex flex-col overflow-x-hidden selection:bg-[#3B82F6] selection:text-white">
        {/* Top Fixed Header */}
        <Navbar onOpenProjectModal={() => setIsProjectModalOpen(true)} />

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
            <Hero onOpenProjectModal={() => setIsProjectModalOpen(true)} />
          </div>

          {/* 2nd SECTION: Projects Section */}
          <Projects />

          {/* 3rd SECTION: Proudly Worked With / Client Trust Marquee */}
          <TrustedBy />
        </main>

        {/* Floating Action Button */}
        <FloatingWhatsApp />

        {/* Start Your Project Modal */}
        <ProjectModal 
          isOpen={isProjectModalOpen} 
          onClose={() => setIsProjectModalOpen(false)} 
        />
      </div>
    </SmoothScroll>
  );
}


