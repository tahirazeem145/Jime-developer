import React from 'react';
import { 
  ArrowUpRight, 
  Sparkles, 
  ExternalLink, 
  Globe, 
  CheckCircle2, 
  ArrowRight,
  School,
  Zap,
  ShieldCheck,
  Smartphone
} from 'lucide-react';

export default function Projects() {
  const project = {
    tag: 'website',
    year: '2026',
    title: 'Brilliant Al Hidhaya School | Best School in Arasarukulam',
    description: 'Rooted in the heart of Arasarkulam since 1995 – a legacy of quality education, community values, and the pursuit of excellence.',
    image: '/assets/al-hidhaya-school.jpg',
    capabilities: [
      'Streamlined Online Admissions & Parent Enrollment',
      'Interactive Academic Programs & Curriculum Guide',
      'High-Resolution Campus Life & Activities Gallery',
      'Sub-Second Page Speeds & 100% Mobile Responsiveness'
    ],
    techStack: ['React', 'Next.js', 'TailwindCSS', 'SEO Optimization', 'Responsive Design', 'Fast CDN'],
    stats: [
      { label: 'Page Speed', value: '< 0.8s', icon: Zap },
      { label: 'Curriculum', value: 'TN State Board', icon: School },
      { label: 'Mobile UX', value: '100% Fluid', icon: Smartphone },
      { label: 'Client Rating', value: '5.0 / 5.0', icon: ShieldCheck }
    ]
  };

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
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0D110F] border border-[#1A221E] text-[#66FF88] shadow-[0_2px_15px_rgba(0,0,0,0.5)] backdrop-blur-md mb-5 animate-fadeIn">
            <Sparkles className="w-3.5 h-3.5 animate-pulse text-[#66FF88]" />
            <span className="font-sora font-semibold text-xs tracking-wider uppercase">
              Featured Client Project
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
            Discover our latest bespoke deployment engineered with blazing-fast speeds, elegant responsive UI, and high-conversion user journeys.
          </p>
        </div>

        {/* SINGLE FEATURED PROJECT SHOWCASE CARD */}
        <div className="group relative rounded-3xl bg-[#0D110F] border border-[#1A221E] hover:border-[#66FF88]/50 transition-all duration-500 overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.9)] hover:shadow-[0_25px_60px_rgba(0,0,0,0.95),0_0_35px_rgba(102,255,136,0.15)] mb-16 sm:mb-20">
          
          {/* Top Subtle Ambient Glow */}
          <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-[#66FF88]/10 via-[#162E1F]/10 to-transparent opacity-40 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 relative z-10">
            
            {/* LEFT COLUMN: LIVE PROJECT MOCKUP BROWSER (7 Cols) */}
            <div className="lg:col-span-7 p-6 sm:p-8 lg:p-10 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-[#1A221E] bg-[#080C0A]/60">
              
              {/* Browser Frame */}
              <div className="rounded-2xl bg-[#080C0A] border border-[#1A221E] overflow-hidden shadow-[0_15px_35px_rgba(0,0,0,0.8)] group-hover:border-[#66FF88]/40 transition-all duration-500">
                
                {/* Browser Top Navigation Bar */}
                <div className="px-4 py-3 bg-[#0D110F] border-b border-[#1A221E] flex items-center justify-between">
                  {/* Traffic Light Dots */}
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#EF4444]/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#F59E0B]/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#10B981]/80" />
                  </div>

                  {/* Browser URL Pill */}
                  <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-[#080C0A] border border-[#1A221E] text-[11px] font-mono text-[#9EA8A3]">
                    <Globe className="w-3 h-3 text-[#66FF88]" />
                    <span className="truncate max-w-[180px] sm:max-w-xs">alhidhayaschool.com</span>
                  </div>

                  {/* Live Status Pip */}
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#66FF88] animate-pulse" />
                    <span className="text-[10px] font-inter font-semibold text-[#66FF88] uppercase tracking-wider hidden sm:inline">
                      Live
                    </span>
                  </div>
                </div>

                {/* Screenshot Container with Subtle Zoom on Hover */}
                <div className="relative overflow-hidden aspect-[16/9] sm:aspect-[16/10] bg-[#080C0A]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  />
                  
                  {/* Subtle Gradient Shadow Overlay on Bottom of Image */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#080C0A]/60 via-transparent to-transparent pointer-events-none" />
                </div>
              </div>

              {/* 4 Stats Grid Below Mockup */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-6">
                {project.stats.map((stat, i) => {
                  const StatIcon = stat.icon;
                  return (
                    <div key={i} className="p-3 rounded-xl bg-[#0D110F] border border-[#1A221E] text-center flex flex-col items-center justify-center">
                      <StatIcon className="w-4 h-4 text-[#66FF88] mb-1" />
                      <span className="text-[10px] font-inter text-[#9EA8A3] uppercase tracking-wider">
                        {stat.label}
                      </span>
                      <span className="text-xs sm:text-sm font-sora font-bold text-white mt-0.5">
                        {stat.value}
                      </span>
                    </div>
                  );
                })}
              </div>

            </div>

            {/* RIGHT COLUMN: EXACT PROJECT DETAILS (5 Cols) */}
            <div className="lg:col-span-5 p-6 sm:p-8 lg:p-10 flex flex-col justify-between bg-[#0D110F]">
              
              <div>
                {/* Top Row: website badge & 2026 year badge */}
                <div className="flex items-center justify-between gap-2 mb-5">
                  <span className="px-3.5 py-1 rounded-full text-xs font-inter font-semibold text-[#66FF88] bg-[#132218] border border-[#1D3A26]">
                    {project.tag}
                  </span>
                  
                  <span className="px-3 py-1 rounded-lg text-xs font-inter font-medium text-[#9EA8A3] bg-[#080C0A] border border-[#1A221E]">
                    {project.year}
                  </span>
                </div>

                {/* Main Project Headline */}
                <h3 className="font-sora font-bold text-2xl sm:text-[26px] text-white group-hover:text-[#66FF88] transition-colors duration-300 leading-snug">
                  {project.title}
                </h3>

                {/* Exact Description */}
                <p className="mt-4 text-sm sm:text-[15px] text-[#9EA8A3] font-inter leading-relaxed font-normal">
                  {project.description}
                </p>

                {/* Capabilities List */}
                <div className="space-y-2.5 pt-6 border-t border-[#1A221E] mt-6 mb-6">
                  {project.capabilities.map((cap, i) => (
                    <div key={i} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#66FF88] flex-shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm font-inter text-[#E2E8E4] font-medium leading-snug">
                        {cap}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-2 pt-2 border-t border-[#1A221E] mb-6">
                  {project.techStack.map((tech) => (
                    <span 
                      key={tech} 
                      className="text-[11px] font-inter font-medium px-2.5 py-1 rounded-md bg-[#080C0A] border border-[#1A221E] text-[#9EA8A3] group-hover:border-[#66FF88]/40 group-hover:text-white transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Link Matching Reference */}
                <div className="pt-2 flex items-center justify-between">
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 text-sm sm:text-base font-sora font-semibold text-[#66FF88] hover:text-[#4ADE80] transition-colors group/link"
                  >
                    <span>Read Case Study</span>
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-1" />
                  </a>

                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#132218] border border-[#1D3A26] hover:border-[#66FF88]/50 text-white font-sora font-semibold text-xs transition-all duration-200"
                  >
                    <span>Get a Quote</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#66FF88]" />
                  </a>
                </div>
              </div>

            </div>

          </div>

        </div>

        {/* BOTTOM METRICS STRIP */}
        <div className="rounded-3xl bg-[#0D110F] border border-[#1A221E] p-6 sm:p-10 mb-16 shadow-[0_15px_45px_rgba(0,0,0,0.85)]">
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
        <div className="relative rounded-3xl bg-gradient-to-r from-[#122216] via-[#0E1B13] to-[#122216] border border-[#1A2E1F] p-8 sm:p-12 text-center overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
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
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#080C0A] border border-[#1A2E1F] hover:border-[#66FF88]/50 text-white font-sora font-semibold text-sm hover:bg-[#121B15] transition-all duration-200"
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
