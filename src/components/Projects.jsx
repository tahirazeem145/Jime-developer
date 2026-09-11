import React, { useState, useEffect, useRef } from 'react';
import { 
  ArrowUpRight, 
  Sparkles, 
  Layers, 
  ArrowRight,
  ChevronRight
} from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('all');

  const sectionRef = useRef(null);
  const trackRef = useRef(null);
  const headerRef = useRef(null);
  const progressBarRef = useRef(null);
  const progressTextRef = useRef(null);

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'saas', label: 'Web Apps & SaaS' },
    { id: 'ecommerce', label: 'E-Commerce' },
    { id: 'app', label: 'Mobile Apps & Portals' },
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
      category: 'app',
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
      id: 'affylix-store',
      category: 'saas',
      categoryLabel: 'SaaS & Social Commerce',
      title: 'Affylix Store',
      headline: 'One Link. Sell Anything Effortlessly.',
      description: 'A mobile-first social commerce storefront that helps creators turn one link into a scalable income stream.',
      image: '/assets/affylix-store.png',
      tags: ['React', 'Node.js', 'Social Commerce', 'TailwindCSS'],
      metrics: [
        { label: 'Monthly Active', value: '50k+' },
        { label: 'Conversion', value: '+38%' },
        { label: 'Setup Time', value: '<2 mins' },
      ],
      link: '#',
      featured: false,
    },
    {
      id: 'unknownrx',
      category: 'ecommerce',
      categoryLabel: 'E-Commerce & Streetwear',
      title: 'UnknownRx',
      headline: 'Premium Streetwear E-Commerce Platform',
      description: 'A bold WooCommerce-powered streetwear store designed for performance, branding, and seamless shopping.',
      image: '/assets/unknownrx.png',
      tags: ['WooCommerce', 'WordPress', 'React', 'Stripe'],
      metrics: [
        { label: 'Sales Growth', value: '+120%' },
        { label: 'Page Speed', value: '0.7s' },
        { label: 'Cart Abandon', value: '-28%' },
      ],
      link: '#',
      featured: false,
    },
    {
      id: 'fun-math',
      category: 'app',
      categoryLabel: 'Mobile App & EdTech',
      title: 'Fun Math',
      headline: 'Interactive Math Learning App for Kids',
      description: 'A bilingual, gamified math learning app built with React Native and Expo to make arithmetic fun and interactive for kids.',
      image: '/assets/fun-math.png',
      tags: ['React Native', 'Expo', 'TypeScript', 'Gamification'],
      metrics: [
        { label: 'Downloads', value: '25k+' },
        { label: 'Rating', value: '4.9 ★' },
        { label: 'Daily Active', value: '10k+' },
      ],
      link: '#',
      featured: false,
    },
  ];

  const filteredProjects = activeFilter === 'all'
    ? projectsData
    : projectsData.filter((p) => p.category === activeFilter);

  // GSAP ScrollTrigger Pinned Horizontal Scrolling
  useEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return;

    const ctx = gsap.context(() => {
      // Calculate exact distance required to bring the last card completely inside the screen
      const getScrollDistance = () => {
        if (!track || !track.lastElementChild) return 0;
        const lastCard = track.lastElementChild;
        const currentTransform = gsap.getProperty(track, 'x') || 0;
        const lastCardRect = lastCard.getBoundingClientRect();
        const naturalRight = lastCardRect.right - Number(currentTransform);
        const targetMargin = window.innerWidth < 768 ? 24 : 64;
        const targetRight = window.innerWidth - targetMargin;
        return Math.max(0, naturalRight - targetRight);
      };

      const distance = getScrollDistance();
      const shouldPin = distance > 50 && filteredProjects.length >= 2;

      if (shouldPin) {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: 'top top',
            end: () => `+=${getScrollDistance() + 450}`,
            pin: true,
            pinSpacing: true,
            scrub: 1.0,
            invalidateOnRefresh: true,
            anticipatePin: 1,
            onUpdate: (self) => {
              // Update live progress bar
              if (progressBarRef.current) {
                progressBarRef.current.style.width = `${Math.min(100, Math.max(5, self.progress * 100))}%`;
              }
              // Update live counter (01 / 05)
              if (progressTextRef.current) {
                const total = filteredProjects.length;
                const current = Math.min(total, Math.max(1, Math.ceil(self.progress * total)));
                progressTextRef.current.innerText = `0${current} / 0${total}`;
              }
            },
          },
        });

        // Smooth horizontal translation of the project cards track so last card lands fully inside viewport
        tl.to(track, {
          x: () => -getScrollDistance(),
          ease: 'none',
        });
      } else {
        // If cards already fit on screen, scroll normally without pinning!
        gsap.set(track, { x: 0 });
        if (progressBarRef.current) {
          progressBarRef.current.style.width = '100%';
        }
        if (progressTextRef.current) {
          progressTextRef.current.innerText = `0${filteredProjects.length} / 0${filteredProjects.length}`;
        }
      }
    }, sectionRef);

    const refreshTimer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 200);

    return () => {
      clearTimeout(refreshTimer);
      ctx.revert();
    };
  }, [filteredProjects, activeFilter]);

  return (
    <div className="relative w-full bg-transparent">
      {/* 1. PINNED HORIZONTAL SCROLL SHOWCASE SECTION */}
      <section 
        id="projects" 
        ref={sectionRef}
        className="relative z-10 w-full min-h-screen flex flex-col justify-between py-6 sm:py-8 px-4 sm:px-6 lg:px-10 overflow-hidden"
      >
        {/* Ambient background glows */}
        <div className="absolute top-1/4 left-0 w-[500px] h-[500px] rounded-full bg-primary-blue/10 blur-[150px] pointer-events-none -z-10" />
        <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] rounded-full bg-accent-blue/10 blur-[150px] pointer-events-none -z-10" />

        <div className="w-full max-w-7xl mx-auto flex flex-col justify-between flex-grow">
          {/* SECTION HEADER */}
          <div ref={headerRef} className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-4 sm:mb-6">
            <div className="max-w-2xl">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.04] border border-white/10 hover:border-accent-blue/40 shadow-sm backdrop-blur-md transition-all mb-2.5">
                <Sparkles className="w-3.5 h-3.5 text-accent-blue" />
                <span className="text-xs font-inter font-medium text-main-text tracking-wide">
                  Featured Case Studies
                </span>
              </div>

              {/* Headline */}
              <h2 className="font-sora font-extrabold text-2xl sm:text-3xl md:text-4xl lg:text-[42px] leading-[1.15] text-main-text tracking-tight">
                Transforming ideas into{' '}
                <span className="text-accent-blue italic drop-shadow-[0_0_25px_rgba(59,130,246,0.35)]">
                  high-impact products.
                </span>
              </h2>
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center gap-2 self-start md:self-end">
              {filters.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveFilter(tab.id)}
                  type="button"
                  className={`px-3.5 sm:px-4 py-1.5 rounded-full text-xs sm:text-sm font-inter font-medium transition-all duration-300 ${
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

          {/* HORIZONTAL MOVING TRACK (GSAP PINNED RIGHT-TO-LEFT SCROLL) */}
          <div className="w-full overflow-visible py-2 sm:py-4 my-auto">
            <div
              ref={trackRef}
              className="flex gap-6 sm:gap-8 will-change-transform items-stretch"
            >
              {filteredProjects.map((project) => (
                <div
                  key={project.id}
                  className="project-card group relative flex-shrink-0 w-[300px] sm:w-[360px] md:w-[400px] lg:w-[430px] flex flex-col p-1.5 sm:p-2 rounded-[2rem] bg-white/[0.03] border border-white/10 hover:border-accent-blue/50 shadow-[0_20px_50px_rgba(0,0,0,0.8)] hover:shadow-[0_25px_60px_rgba(59,130,246,0.22)] transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] select-none"
                >
                  {/* Inner Core Container (Concentric Math Radius) */}
                  <div className="rounded-[calc(2rem-0.375rem)] bg-[#0B101D]/90 overflow-hidden flex flex-col flex-grow justify-between shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)]">
                    
                    {/* Card Image Banner */}
                    <div className="relative w-full h-48 sm:h-56 overflow-hidden bg-[#06080D]">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105 opacity-90 group-hover:opacity-100"
                        loading="lazy"
                        draggable={false}
                      />
                      
                      {/* Gradient scrim */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0B101D] via-[#0B101D]/30 to-transparent pointer-events-none" />

                      {/* Top Category Badge */}
                      <div className="absolute top-3.5 left-3.5 z-10">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-inter font-semibold bg-[#080B10]/85 backdrop-blur-md text-accent-blue border border-[#1E293B] shadow-sm">
                          <Layers className="w-3 h-3 text-accent-blue" />
                          {project.categoryLabel}
                        </span>
                      </div>

                      {/* Top Right Link Icon */}
                      <div className="absolute top-3.5 right-3.5 z-10 w-8 sm:w-9 h-8 sm:h-9 rounded-full bg-[#080B10]/85 backdrop-blur-md border border-white/15 flex items-center justify-center text-white group-hover:text-accent-blue group-hover:border-accent-blue/60 group-hover:bg-accent-blue/10 transition-all duration-300">
                        <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </div>
                    </div>

                    {/* Card Body Content */}
                    <div className="p-5 sm:p-6 flex flex-col flex-grow justify-between">
                      <div>
                        <h3 className="font-sora font-bold text-lg sm:text-xl text-main-text group-hover:text-accent-blue transition-colors duration-300">
                          {project.title}
                        </h3>
                        <p className="mt-1 text-xs sm:text-sm font-medium text-[#F8FAFC]">
                          {project.headline}
                        </p>
                        <p className="mt-2 text-xs sm:text-sm text-muted-text font-inter leading-relaxed line-clamp-3">
                          {project.description}
                        </p>
                      </div>

                      {/* Metrics Row */}
                      <div className="mt-4 pt-3.5 border-t border-white/10 grid grid-cols-3 gap-2">
                        {project.metrics.map((metric) => (
                          <div key={metric.label} className="text-left">
                            <div className="font-sora font-bold text-sm sm:text-base text-white group-hover:text-accent-blue transition-colors">
                              {metric.value}
                            </div>
                            <div className="text-[10px] sm:text-[11px] text-muted-text font-inter font-medium truncate">
                              {metric.label}
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Tech Tags & Button-in-Button CTA Link */}
                      <div className="mt-4 pt-3.5 border-t border-white/5 flex flex-wrap items-center justify-between gap-2">
                        <div className="flex flex-wrap gap-1.5">
                          {project.tags.slice(0, 3).map((tag) => (
                            <span
                              key={tag}
                              className="px-2 py-0.5 rounded-md text-[10px] sm:text-[11px] font-inter font-medium bg-white/[0.04] text-slate-300 border border-white/10"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        <a
                          href={project.link}
                          className="inline-flex items-center gap-1.5 pl-3 pr-1.5 py-1 rounded-full bg-white/[0.05] group-hover:bg-accent-blue text-xs font-sora font-semibold text-white transition-all duration-300"
                        >
                          <span>View Project</span>
                          <div className="w-5 h-5 rounded-full bg-white/15 flex items-center justify-center transition-transform group-hover:translate-x-0.5">
                            <ArrowRight className="w-3 h-3" />
                          </div>
                        </a>
                      </div>
                    </div>

                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* BOTTOM CONTROLS & PRIMARY ACTION BUTTON ROW */}
          <div className="mt-4 sm:mt-6 pt-3 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            {/* Live Progress Bar & Counter */}
            <div className="flex items-center gap-3 w-full sm:w-auto">
              <span 
                ref={progressTextRef}
                className="font-sora text-xs font-semibold text-accent-blue min-w-[50px]"
              >
                01 / 0{filteredProjects.length}
              </span>
              <div className="w-32 sm:w-48 h-1.5 rounded-full bg-white/10 overflow-hidden">
                <div 
                  ref={progressBarRef}
                  className="h-full bg-accent-blue rounded-full transition-all duration-100 ease-out shadow-blue-glow"
                  style={{ width: '20%' }}
                />
              </div>
              <span className="text-[11px] text-muted-text font-inter hidden sm:inline">
                Scroll to explore
              </span>
            </div>

            {/* Primary Action Button: "View all the projects" (Button-in-Button Architecture) */}
            <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
              <a
                href="#all-projects"
                className="group inline-flex items-center justify-between gap-3 pl-6 pr-2 py-2 rounded-full bg-accent-blue hover:bg-accent-blue-hover text-white font-sora font-semibold text-xs sm:text-sm tracking-tight shadow-[0_0_20px_rgba(59,130,246,0.4)] hover:shadow-[0_0_35px_rgba(59,130,246,0.7)] active:scale-[0.98] transition-all duration-300 ease-[cubic-bezier(0.32,0.72,0,1)]"
              >
                <span>View all the projects</span>
                <div className="w-7 h-7 rounded-full bg-white/20 group-hover:bg-white/30 flex items-center justify-center transition-transform duration-300 group-hover:translate-x-0.5">
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
