import React, { useState, useEffect, useRef } from 'react';
import { 
  ArrowUpRight, 
  Sparkles, 
  ExternalLink, 
  Layers, 
  Code2, 
  CheckCircle2, 
  ArrowRight 
} from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('all');
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const cardsRef = useRef([]);

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'saas', label: 'Web Apps & SaaS' },
    { id: 'portal', label: 'EdTech & Portals' },
    { id: 'ecommerce', label: 'E-Commerce' },
  ];

  const projectsData = [
    {
      id: 'tamizha-jobs',
      category: 'saas',
      categoryLabel: 'SaaS & Talent Platform',
      title: 'Tamizha Jobs',
      headline: 'AI-Powered Career & Recruitment Ecosystem',
      description: 'A scalable recruitment platform engineered for speed, offering real-time applicant tracking, intelligent resume screening, and sub-100ms job search.',
      image: '/assets/tamizha-jobs.png',
      tags: ['React', 'Node.js', 'PostgreSQL', 'TailwindCSS'],
      metrics: [
        { label: 'Monthly Active', value: '100k+' },
        { label: 'Search Latency', value: '<80ms' },
        { label: 'Uptime', value: '99.99%' },
      ],
      link: '#',
      featured: true,
    },
    {
      id: 'al-hidhaya',
      category: 'portal',
      categoryLabel: 'EdTech & Web Portal',
      title: 'Al-Hidhaya Academy',
      headline: 'Next-Gen Educational Management & Portal',
      description: 'Unified cloud school management system featuring automated gradebooks, attendance sync, parent-teacher live communication, and exam evaluation.',
      image: '/assets/al-hidhaya-school.jpg',
      tags: ['Next.js', 'TypeScript', 'Supabase', 'TailwindCSS'],
      metrics: [
        { label: 'Enrolled Students', value: '5,000+' },
        { label: 'Digital Workflow', value: '100%' },
        { label: 'Daily Reports', value: 'Instant' },
      ],
      link: '#',
      featured: false,
    },
    {
      id: 'nexus-commerce',
      category: 'ecommerce',
      categoryLabel: 'E-Commerce & Fintech',
      title: 'Nexus Modern Storefront',
      headline: 'High-Conversion Headless Commerce & Checkout',
      description: 'Ultra-fast luxury e-commerce engine with frictionless 1-click checkout, multi-currency localization, and live inventory intelligence.',
      image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1200&q=80',
      tags: ['React', 'Stripe API', 'GraphQL', 'TailwindCSS'],
      metrics: [
        { label: 'Conversion Lift', value: '+42%' },
        { label: 'Load Time', value: '0.6s' },
        { label: 'Checkout Abandon', value: '-35%' },
      ],
      link: '#',
      featured: false,
    },
    {
      id: 'pulse-ai',
      category: 'saas',
      categoryLabel: 'Enterprise AI Cloud',
      title: 'Pulse Intelligence Workspace',
      headline: 'Workflow Automation & Smart Document Copilot',
      description: 'Enterprise AI workspace that analyzes unstructured data, creates automated summaries, and orchestrates cross-team workflows.',
      image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80',
      tags: ['Python', 'FastAPI', 'React', 'OpenAI API'],
      metrics: [
        { label: 'Time Saved', value: '65%' },
        { label: 'Security', value: 'SOC2 Ready' },
        { label: 'Accuracy', value: '99.4%' },
      ],
      link: '#',
      featured: false,
    },
  ];

  const filteredProjects = activeFilter === 'all'
    ? projectsData
    : projectsData.filter((p) => p.category === activeFilter);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header entrance
      if (headerRef.current) {
        gsap.fromTo(
          headerRef.current,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: headerRef.current,
              start: 'top 85%',
              toggleActions: 'play none none none',
            },
          }
        );
      }

      // Cards staggered reveal
      cardsRef.current.forEach((card, index) => {
        if (card) {
          gsap.fromTo(
            card,
            { opacity: 0, y: 50 },
            {
              opacity: 1,
              y: 0,
              duration: 0.7,
              delay: (index % 2) * 0.15,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: card,
                start: 'top 88%',
                toggleActions: 'play none none none',
              },
            }
          );
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [filteredProjects]);

  return (
    <section 
      id="projects" 
      ref={sectionRef}
      className="relative z-10 w-full py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#080B10]"
    >
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] rounded-full bg-primary-blue/15 blur-[140px] pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] rounded-full bg-accent-blue/10 blur-[150px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto">
        {/* SECTION HEADER */}
        <div ref={headerRef} className="text-center max-w-3xl mx-auto mb-14 sm:mb-20">
          {/* Badge */}
          <div className="inline-flex items-center justify-center mb-4">
            <div className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/10 hover:border-accent-blue/40 shadow-sm backdrop-blur-md transition-all">
              <Sparkles className="w-3.5 h-3.5 text-accent-blue" />
              <span className="text-xs sm:text-sm font-inter font-medium text-main-text tracking-wide">
                Selected Case Studies
              </span>
            </div>
          </div>

          {/* Headline */}
          <h2 className="font-sora font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-[52px] leading-[1.15] text-main-text tracking-tight">
            Transforming ideas into{' '}
            <span className="text-accent-blue italic drop-shadow-[0_0_25px_rgba(59,130,246,0.35)]">
              high-impact products.
            </span>
          </h2>

          {/* Subtitle */}
          <p className="mt-4 sm:mt-5 text-sm sm:text-base md:text-lg text-muted-text font-inter font-normal leading-relaxed">
            A curated showcase of custom web apps, scalable portals, and high-performance digital platforms we have built.
          </p>

          {/* FILTER PILLS (Turing Aesthetic) */}
          <div className="mt-8 sm:mt-10 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            {filters.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id)}
                type="button"
                className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-inter font-medium transition-all duration-300 ${
                  activeFilter === tab.id
                    ? 'bg-accent-blue text-white shadow-blue-glow scale-105'
                    : 'bg-white/[0.04] text-muted-text hover:text-white border border-white/10 hover:border-white/25 hover:bg-white/[0.08]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* PROJECTS GRID (2 Columns with Modern Cards) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10">
          {filteredProjects.map((project, idx) => (
            <div
              key={project.id}
              ref={(el) => (cardsRef.current[idx] = el)}
              className="group relative flex flex-col rounded-3xl overflow-hidden bg-[#0B101D]/75 backdrop-blur-xl border border-white/10 hover:border-accent-blue/50 shadow-[0_10px_40px_rgba(0,0,0,0.6)] hover:shadow-[0_20px_50px_rgba(59,130,246,0.18)] transition-all duration-500"
            >
              {/* Card Image Container */}
              <div className="relative w-full h-56 sm:h-72 overflow-hidden bg-[#06080D]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105 opacity-90 group-hover:opacity-100"
                  loading="lazy"
                />
                
                {/* Gradient scrim for text contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B101D] via-[#0B101D]/30 to-transparent pointer-events-none" />

                {/* Top Category Badge */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-inter font-semibold bg-[#080B10]/85 backdrop-blur-md text-accent-blue border border-[#1E293B] shadow-sm">
                    <Layers className="w-3 h-3 text-accent-blue" />
                    {project.categoryLabel}
                  </span>
                </div>

                {/* Top Right External Link Arrow */}
                <div className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-[#080B10]/85 backdrop-blur-md border border-white/15 flex items-center justify-center text-white group-hover:text-accent-blue group-hover:border-accent-blue/60 group-hover:bg-accent-blue/10 transition-all duration-300">
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6 sm:p-8 flex flex-col flex-grow justify-between">
                <div>
                  <h3 className="font-sora font-bold text-xl sm:text-2xl text-main-text group-hover:text-accent-blue transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="mt-1.5 text-xs sm:text-sm font-medium text-accent-cyan">
                    {project.headline}
                  </p>
                  <p className="mt-3 text-xs sm:text-sm text-muted-text font-inter leading-relaxed line-clamp-3">
                    {project.description}
                  </p>
                </div>

                {/* Metrics Highlight Row */}
                <div className="mt-6 pt-5 border-t border-white/10 grid grid-cols-3 gap-2">
                  {project.metrics.map((metric) => (
                    <div key={metric.label} className="text-left">
                      <div className="font-sora font-bold text-base sm:text-lg text-white group-hover:text-accent-blue transition-colors">
                        {metric.value}
                      </div>
                      <div className="text-[10px] sm:text-xs text-muted-text font-inter font-medium truncate">
                        {metric.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Tech Tags & CTA Link */}
                <div className="mt-6 pt-4 border-t border-white/5 flex flex-wrap items-center justify-between gap-3">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-md text-[11px] font-inter font-medium bg-white/[0.04] text-slate-300 border border-white/10"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <a
                    href={project.link}
                    className="inline-flex items-center gap-1.5 text-xs font-sora font-semibold text-white group-hover:text-accent-blue transition-colors"
                  >
                    <span>View Project</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* BOTTOM CTA BANNER (Turing Inspiration) */}
        <div className="mt-16 sm:mt-24 p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-[#0D1527] via-[#0B101D] to-[#0A1224] border border-[#1E3A8A]/40 shadow-[0_15px_50px_rgba(0,0,0,0.7)] flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div>
            <span className="text-xs font-sora font-semibold tracking-wider uppercase text-accent-blue">
              Start Your Journey
            </span>
            <h3 className="font-sora font-bold text-2xl sm:text-3xl text-main-text mt-1.5">
              Have a project in mind? Let's build it together.
            </h3>
            <p className="text-xs sm:text-sm text-muted-text font-inter mt-1 max-w-xl">
              From MVP in weeks to full-scale SaaS platforms, we bring engineering precision to your vision.
            </p>
          </div>

          <a
            href="#book-call"
            className="flex-shrink-0 inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 rounded-full bg-accent-blue text-white font-sora font-semibold text-sm tracking-tight hover:bg-accent-blue-hover shadow-blue-glow hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
          >
            <span>Book a free consultation</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
}
