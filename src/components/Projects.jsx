import React from 'react';
import { 
  Sparkles, 
  ExternalLink, 
  ArrowRight
} from 'lucide-react';
import StackedCards from './ui/glass-cards';

export default function Projects() {
  return (
    <section id="projects" className="relative z-10 py-20 sm:py-28 overflow-hidden">
      {/* Subtle Ambient Radial Glows */}
      <div 
        className="absolute top-1/3 right-1/4 w-[700px] h-[450px] rounded-full opacity-15 blur-[140px] pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(102,255,136,0.2) 0%, rgba(22,46,31,0.5) 60%, transparent 80%)'
        }}
      />
      <div 
        className="absolute bottom-20 left-10 w-[550px] h-[550px] rounded-full opacity-10 blur-[130px] pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(102,255,136,0.25) 0%, transparent 75%)'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          
          {/* Pill Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-pill mb-5 animate-fadeIn">
            <Sparkles className="w-3.5 h-3.5 animate-pulse text-[#66FF88]" />
            <span className="font-sora font-semibold text-xs tracking-wider uppercase text-[#66FF88]">
              Featured Client Projects
            </span>
          </div>

          {/* Heading */}
          <h2 className="font-sora font-extrabold text-3xl sm:text-4xl md:text-5xl text-white leading-[1.15] tracking-tight">
            Crafted for speed, built for{' '}
            <span className="text-[#66FF88] italic font-extrabold inline-block drop-shadow-[0_0_20px_rgba(102,255,136,0.25)]">
              real-world impact.
            </span>
          </h2>

          {/* Subtitle */}
          <p className="mt-5 text-base sm:text-lg text-[#9EA8A3] font-inter font-normal leading-relaxed">
            Scroll down to explore our latest client deployments engineered with blazing-fast speeds, elegant responsive UI, and high-conversion user journeys.
          </p>
        </div>

        {/* GSAP STACKING GLASS CARDS */}
        <div className="mb-20 sm:mb-28">
          <StackedCards />
        </div>

        {/* BOTTOM METRICS STRIP */}
        <div className="rounded-3xl glass-card p-6 sm:p-10 mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 text-center">
            
            <div className="flex flex-col items-center">
              <span className="font-sora font-extrabold text-3xl sm:text-4xl text-[#66FF88] drop-shadow-[0_0_15px_rgba(102,255,136,0.25)]">
                15+
              </span>
              <span className="mt-1 text-xs sm:text-sm font-inter text-[#9EA8A3] font-medium">
                Shipped Products
              </span>
            </div>

            <div className="flex flex-col items-center">
              <span className="font-sora font-extrabold text-3xl sm:text-4xl text-accent-lime drop-shadow-[0_0_15px_rgba(102,255,136,0.25)]">
                99.8%
              </span>
              <span className="mt-1 text-xs sm:text-sm font-inter text-[#9EA8A3] font-medium">
                On-Time Delivery
              </span>
            </div>

            <div className="flex flex-col items-center">
              <span className="font-sora font-extrabold text-3xl sm:text-4xl text-[#66FF88] drop-shadow-[0_0_15px_rgba(102,255,136,0.25)]">
                100%
              </span>
              <span className="mt-1 text-xs sm:text-sm font-inter text-[#9EA8A3] font-medium">
                Code Ownership
              </span>
            </div>

            <div className="flex flex-col items-center">
              <span className="font-sora font-extrabold text-3xl sm:text-4xl text-[#66FF88] drop-shadow-[0_0_15px_rgba(102,255,136,0.25)]">
                5.0 ★
              </span>
              <span className="mt-1 text-xs sm:text-sm font-inter text-[#9EA8A3] font-medium">
                Client Rating
              </span>
            </div>

          </div>
        </div>

        {/* BOTTOM CTA CALLOUT */}
        <div className="relative rounded-3xl glass-card bg-gradient-to-r from-[#122216]/80 via-[#0E1B13]/80 to-[#122216]/80 p-8 sm:p-12 text-center overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(102,255,136,0.12)_0%,transparent_70%)] pointer-events-none" />
          
          <div className="relative z-10 max-w-2xl mx-auto">
            <h3 className="font-sora font-bold text-2xl sm:text-3xl text-white">
              Have a project you want to bring to life?
            </h3>
            <p className="mt-3 text-sm sm:text-base text-[#9EA8A3] font-inter">
              We turn concepts into market-dominating web platforms, applications, and e-commerce stores with agile velocity.
            </p>
            
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#book-call"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-[#66FF88] text-[#080C0A] font-sora font-semibold text-sm sm:text-[15px] hover:bg-[#4ADE80] hover:shadow-[0_0_25px_rgba(102,255,136,0.4)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
              >
                <span>Start Your Project</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              
              <a
                href="https://wa.me/919999999999" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#080C0A]/80 border border-white/[0.08] hover:border-[#66FF88]/50 text-white font-sora font-semibold text-sm hover:bg-[#121B15] transition-all duration-200 backdrop-blur-sm"
              >
                <span>Chat on WhatsApp</span>
                <ExternalLink className="w-4 h-4 text-[#66FF88]" />
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
