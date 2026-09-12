import React, { useState, useEffect } from 'react';
import { SmoothScroll } from './components/ui/smooth-scroll';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import TrustedBy from './components/TrustedBy';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Blog from './components/Blog';
import ContactCTA from './components/ContactCTA';
import Footer from './components/Footer';
import BackgroundElements from './components/BackgroundElements';
import PostHeroDesignElements from './components/PostHeroDesignElements';
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
      <div className="relative min-h-screen bg-[#FFFFFF] text-slate-900 font-inter flex flex-col overflow-x-hidden selection:bg-[#2563EB] selection:text-white">
        {/* Top Fixed Header */}
        <Navbar onOpenProjectModal={() => setIsProjectModalOpen(true)} />

        {/* Main Content */}
        <main className="relative z-10 w-full flex-grow flex flex-col">
          {/* Interactive Cursor Mouse Glow */}
          <MouseGlow />

          {/* Floating Particles */}
          <ParticleBackground />

          {/* 1st SECTION: Hero Section (with its own dedicated 3D elements) */}
          <div className="relative w-full min-h-screen flex flex-col justify-center items-center">
            {/* 3D Background Elements for Hero only */}
            <BackgroundElements />
            <Hero onOpenProjectModal={() => setIsProjectModalOpen(true)} />
          </div>

          {/* POST-HERO WRAPPER WITH 3D BLUE BACKGROUND DESIGN ELEMENTS */}
          <div className="relative w-full overflow-hidden">
            {/* 3D Blue Waves, Isometric Boxes, Spheres & Spotlights (ONLY AFTER HERO) */}
            <PostHeroDesignElements />

            {/* 2nd SECTION: Proudly Worked With / Client Trust Marquee */}
            <TrustedBy />

            {/* 3rd SECTION: Projects Section */}
            <Projects />

            {/* 4th SECTION: Verified Client Testimonials */}
            <Testimonials />

            {/* 5th SECTION: Frequently Asked Questions */}
            <FAQ onOpenProjectModal={() => setIsProjectModalOpen(true)} />

            {/* 6th SECTION: Guides & From The Blog */}
            <Blog onOpenProjectModal={() => setIsProjectModalOpen(true)} />

            {/* 7th SECTION: Contact Us CTA */}
            <ContactCTA />
          </div>

          {/* 8th SECTION: Footer */}
          <Footer onOpenProjectModal={() => setIsProjectModalOpen(true)} />
        </main>

        {/* Floating Action Button */}
        <FloatingWhatsApp />

        {/* 3D Interactive Scroll Progress Ball (Moves down to FAQ) */}
        <ScrollProgressBall />

        {/* Start Your Project Modal */}
        <ProjectModal 
          isOpen={isProjectModalOpen} 
          onClose={() => setIsProjectModalOpen(false)} 
        />
      </div>
    </SmoothScroll>
  );
}


