import React from 'react';
import { 
  ArrowUpRight, 
  Sparkles, 
  ExternalLink, 
  Globe, 
  ArrowRight,
  School,
  Zap,
  Briefcase,
  Smartphone
} from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      id: 1,
      tag: 'website',
      year: '2026',
      title: 'Brilliant Al Hidhaya School | Best School in Arasarukulam',
      description: 'Rooted in the heart of Arasarkulam since 1995 – a legacy of quality education, community values, and the pursuit of excellence.',
      image: '/assets/al-hidhaya-school.jpg',
      url: 'alhidhayaschool.com',
      techStack: ['React', 'Next.js', 'TailwindCSS', 'SEO Optimization', 'Responsive Design'],
      stats: [
        { label: 'Page Speed', value: '< 0.8s', icon: Zap },
        { label: 'Curriculum', value: 'TN State Board', icon: School }
      ]
    },
    {
      id: 2,
      tag: 'app',
      year: '2025',
      title: 'Tamizha Jobs',
      description: "A job portal built for Tamil Nadu's tier-2/tier-3 towns — telecalling, data entry, system admin, part-time and student jobs — a segment LinkedIn and professional job boards overlook.",
      image: '/assets/tamizha-jobs.png',
      url: 'tamizhajobs.com',
      techStack: ['React', 'Node.js', 'PostgreSQL', 'TailwindCSS', 'Mobile App'],
      stats: [
        { label: 'Target Market', value: 'TN Tier 2/3', icon: Briefcase },
        { label: 'Platform', value: 'Web & Mobile', icon: Smartphone }
      ]
    }
  ];

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
            Discover our latest client deployments engineered with blazing-fast speeds, elegant responsive UI, and high-conversion user journeys.
          </p>
        </div>

        {/* 2 FEATURED PROJECTS GLASS GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 mb-16 sm:mb-20">
          {projects.map((proj) => (
            <div
              key={proj.id}
              className="group relative rounded-3xl glass-card transition-all duration-500 overflow-hidden flex flex-col justify-between hover:-translate-y-1.5"
            >
              {/* Top Ambient Glass Shimmer */}
              <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-white/[0.06] via-[#66FF88]/[0.03] to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <div>
                {/* Browser Window Mockup Frame */}
                <div className="p-5 sm:p-6 bg-[#080C0A]/60 border-b border-white/[0.08]">
                  <div className="rounded-2xl glass-subcard overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.8)] group-hover:border-[#66FF88]/40 transition-all duration-500">
                    
                    {/* Browser Navigation Top Bar */}
                    <div className="px-4 py-2.5 bg-[#0D110F]/80 border-b border-white/[0.08] flex items-center justify-between backdrop-blur-md">
                      <div className="flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-[#EF4444]/80" />
                        <span className="w-2.5 h-2.5 rounded-full bg-[#F59E0B]/80" />
                        <span className="w-2.5 h-2.5 rounded-full bg-[#10B981]/80" />
                      </div>

                      <div className="flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-[#080C0A]/80 border border-white/[0.08] text-[11px] font-mono text-[#9EA8A3]">
                        <Globe className="w-3 h-3 text-[#66FF88]" />
                        <span>{proj.url}</span>
                      </div>

                      <div className="flex items-center gap-1">
                        <span className="w-2 h-2 rounded-full bg-[#66FF88] animate-pulse" />
                        <span className="text-[10px] font-inter font-semibold text-[#66FF88] uppercase tracking-wider hidden sm:inline">
                          Live
                        </span>
                      </div>
                    </div>

                    {/* Screenshot Container with Subtle Zoom on Hover */}
                    <div className="relative overflow-hidden aspect-[16/10] bg-[#080C0A]">
                      <img
                        src={proj.image}
                        alt={proj.title}
                        className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#080C0A]/50 via-transparent to-transparent pointer-events-none" />
                    </div>
                  </div>
                </div>

                {/* Card Content Body */}
                <div className="p-6 sm:p-8">
                  
                  {/* Category Badge + Year Badge Row */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="px-3.5 py-1 rounded-full text-xs font-inter font-semibold text-[#66FF88] glass-pill">
                      {proj.tag}
                    </span>
                    
                    <span className="px-3 py-1 rounded-lg text-xs font-inter font-medium text-[#9EA8A3] bg-[#080C0A]/70 border border-white/[0.08]">
                      {proj.year}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-sora font-bold text-xl sm:text-2xl text-white group-hover:text-[#66FF88] transition-colors duration-300 leading-snug">
                    {proj.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-3 text-sm sm:text-[15px] text-[#9EA8A3] font-inter leading-relaxed font-normal">
                    {proj.description}
                  </p>

                  {/* Stats Pill Row */}
                  <div className="grid grid-cols-2 gap-2.5 mt-5">
                    {proj.stats.map((st, i) => {
                      const StIcon = st.icon;
                      return (
                        <div key={i} className="px-3 py-2 rounded-xl bg-[#080C0A]/60 border border-white/[0.08] flex items-center gap-2 backdrop-blur-sm">
                          <StIcon className="w-3.5 h-3.5 text-[#66FF88] flex-shrink-0" />
                          <div className="min-w-0">
                            <span className="block text-[10px] font-inter text-[#9EA8A3] uppercase tracking-wider leading-none">
                              {st.label}
                            </span>
                            <span className="block text-xs font-sora font-bold text-white mt-0.5 leading-none truncate">
                              {st.value}
                            </span>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                </div>
              </div>

              {/* Card Bottom Area: Tech Tags & Action Footer */}
              <div className="px-6 sm:px-8 pb-6 sm:pb-8 pt-0">
                {/* Tech Stack Tags */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-white/[0.08] mb-5">
                  {proj.techStack.map((tech) => (
                    <span 
                      key={tech} 
                      className="text-[11px] font-inter font-medium px-2.5 py-1 rounded-md bg-[#080C0A]/70 border border-white/[0.08] text-[#9EA8A3] group-hover:border-[#66FF88]/40 group-hover:text-white transition-colors backdrop-blur-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Link Matching Reference */}
                <div className="flex items-center justify-between pt-1">
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 text-sm sm:text-base font-sora font-semibold text-[#66FF88] hover:text-[#4ADE80] transition-colors group/link"
                  >
                    <span>Read Case Study</span>
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-1" />
                  </a>

                  <a
                    href="#contact"
                    className="w-9 h-9 rounded-full bg-[#080C0A]/80 border border-white/[0.08] hover:border-[#66FF88]/50 flex items-center justify-center text-[#9EA8A3] hover:text-[#66FF88] transition-colors backdrop-blur-sm"
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </div>

            </div>
          ))}
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
