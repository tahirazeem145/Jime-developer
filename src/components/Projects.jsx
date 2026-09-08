import React, { useEffect, useRef } from 'react';
import { 
  Sparkles, 
  ExternalLink, 
  ArrowRight
} from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import StackedCards from './ui/glass-cards';

gsap.registerPlugin(ScrollTrigger);

export default function Projects() {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const metricsRef = useRef(null);
  const metricItemsRef = useRef([]);
  const ctaBannerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header scroll animation
      if (headerRef.current?.children) {
        gsap.fromTo(
          headerRef.current.children,
          { opacity: 0, y: 35 },
          {
            scrollTrigger: {
              trigger: headerRef.current,
              start: 'top 85%',
              once: true,
            },
            opacity: 1,
            y: 0,
            stagger: 0.15,
            duration: 0.8,
            ease: 'power3.out',
          }
        );
      }

      // Bottom Metrics Strip staggered scroll animation
      const validMetrics = metricItemsRef.current.filter(Boolean);
      if (validMetrics.length > 0) {
        gsap.fromTo(
          validMetrics,
          { opacity: 0, y: 35, scale: 0.95 },
          {
            scrollTrigger: {
              trigger: metricsRef.current,
              start: 'top 85%',
              once: true,
            },
            opacity: 1,
            y: 0,
            scale: 1,
            stagger: 0.12,
            duration: 0.8,
            ease: 'power3.out',
          }
        );
      }

      // Bottom CTA Callout scroll entrance
      if (ctaBannerRef.current) {
        gsap.fromTo(
          ctaBannerRef.current,
          { opacity: 0, y: 40, scale: 0.97 },
          {
            scrollTrigger: {
              trigger: ctaBannerRef.current,
              start: 'top 85%',
              once: true,
            },
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.85,
            ease: 'power3.out',
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      id="projects" 
      ref={sectionRef}
      className="relative z-10 py-20 sm:py-28 overflow-hidden"
    >
      {/* Subtle Ambient Radial White Glows */}
      <div 
        className="absolute top-1/3 right-1/4 w-[700px] h-[450px] rounded-full opacity-10 blur-[140px] pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(255,255,255,0.15) 0%, transparent 70%)'
        }}
      />
      <div 
        className="absolute bottom-20 left-10 w-[550px] h-[550px] rounded-full opacity-10 blur-[130px] pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(255,255,255,0.12) 0%, transparent 70%)'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* SECTION HEADER */}
        <div ref={headerRef} className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          
          {/* Pill Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-pill-bw mb-5 animate-fadeIn">
            <Sparkles className="w-3.5 h-3.5 animate-pulse text-white" />
            <span className="font-sora font-semibold text-xs tracking-wider uppercase text-white">
              Featured Client Projects
            </span>
          </div>

          {/* Heading */}
          <h2 className="font-sora font-extrabold text-3xl sm:text-4xl md:text-5xl text-white leading-[1.15] tracking-tight">
            Crafted for speed, built for{' '}
            <span className="text-white italic font-extrabold inline-block drop-shadow-[0_0_20px_rgba(255,255,255,0.3)]">
              real-world impact.
            </span>
          </h2>

          {/* Subtitle */}
          <p className="mt-5 text-base sm:text-lg text-neutral-400 font-inter font-normal leading-relaxed">
            Scroll down to explore our latest client deployments engineered with blazing-fast speeds, elegant responsive UI, and high-conversion user journeys.
          </p>
        </div>

        {/* GSAP STACKING GLASS CARDS */}
        <div className="mb-20 sm:mb-28">
          <StackedCards />
        </div>

        {/* BOTTOM METRICS STRIP */}
        <div ref={metricsRef} className="rounded-3xl glass-card-bw p-6 sm:p-10 mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 text-center">
            
            <div 
              ref={(el) => (metricItemsRef.current[0] = el)}
              className="flex flex-col items-center will-change-transform"
            >
              <span className="font-sora font-extrabold text-3xl sm:text-4xl text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">
                15+
              </span>
              <span className="mt-1 text-xs sm:text-sm font-inter text-neutral-400 font-medium">
                Shipped Products
              </span>
            </div>

            <div 
              ref={(el) => (metricItemsRef.current[1] = el)}
              className="flex flex-col items-center will-change-transform"
            >
              <span className="font-sora font-extrabold text-3xl sm:text-4xl text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">
                99.8%
              </span>
              <span className="mt-1 text-xs sm:text-sm font-inter text-neutral-400 font-medium">
                On-Time Delivery
              </span>
            </div>

            <div 
              ref={(el) => (metricItemsRef.current[2] = el)}
              className="flex flex-col items-center will-change-transform"
            >
              <span className="font-sora font-extrabold text-3xl sm:text-4xl text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">
                100%
              </span>
              <span className="mt-1 text-xs sm:text-sm font-inter text-neutral-400 font-medium">
                Code Ownership
              </span>
            </div>

            <div 
              ref={(el) => (metricItemsRef.current[3] = el)}
              className="flex flex-col items-center will-change-transform"
            >
              <span className="font-sora font-extrabold text-3xl sm:text-4xl text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">
                5.0 ★
              </span>
              <span className="mt-1 text-xs sm:text-sm font-inter text-neutral-400 font-medium">
                Client Rating
              </span>
            </div>

          </div>
        </div>

        {/* BOTTOM CTA CALLOUT */}
        <div 
          ref={ctaBannerRef}
          className="relative rounded-3xl glass-card-bw bg-gradient-to-r from-[#141414]/90 via-[#202020]/90 to-[#141414]/90 p-8 sm:p-12 text-center text-white overflow-hidden border border-white/20 shadow-[0_25px_60px_rgba(0,0,0,0.9)] will-change-transform"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.12)_0%,transparent_70%)] pointer-events-none" />
          
          <div className="relative z-10 max-w-2xl mx-auto">
            <h3 className="font-sora font-bold text-2xl sm:text-3xl text-white">
              Have a project you want to bring to life?
            </h3>
            <p className="mt-3 text-sm sm:text-base text-neutral-300 font-inter">
              We turn concepts into market-dominating web platforms, applications, and e-commerce stores with agile velocity.
            </p>
            
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#book-call"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-white text-black font-sora font-semibold text-sm sm:text-[15px] hover:bg-neutral-200 hover:shadow-[0_0_25px_rgba(255,255,255,0.4)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
              >
                <span>Start Your Project</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              
              <a
                href="https://wa.me/919999999999" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-neutral-900 border border-white/20 hover:border-white/50 text-white font-sora font-semibold text-sm hover:bg-neutral-800 transition-all duration-200 backdrop-blur-sm"
              >
                <span>Chat on WhatsApp</span>
                <ExternalLink className="w-4 h-4 text-neutral-300" />
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
