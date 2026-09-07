import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BackgroundElements from './components/BackgroundElements';
import FloatingWhatsApp from './components/FloatingWhatsApp';

export default function App() {
  return (
    <div className="relative min-h-screen bg-background text-main-text font-inter flex flex-col selection:bg-accent-lime selection:text-background overflow-x-hidden">
      {/* Background Graphic Visuals, Glows and Grid */}
      <BackgroundElements />

      {/* Top Sticky/Fixed Header */}
      <Navbar />

      {/* Main Hero Section */}
      <main className="flex-grow flex items-center justify-center">
        <Hero />
      </main>

      {/* Floating Action Button */}
      <FloatingWhatsApp />
    </div>
  );
}
