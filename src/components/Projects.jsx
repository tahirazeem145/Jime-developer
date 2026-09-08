import React, { useState } from 'react';
import { 
  ArrowUpRight, 
  Sparkles, 
  ExternalLink, 
  Layers, 
  ShoppingBag, 
  Smartphone, 
  Globe, 
  TrendingUp, 
  ShieldCheck, 
  Zap, 
  CheckCircle2,
  ChevronRight,
  ArrowRight
} from 'lucide-react';

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'saas', label: 'Web Apps & SaaS', icon: Layers },
    { id: 'ecommerce', label: 'E-commerce', icon: ShoppingBag },
    { id: 'mobile', label: 'Mobile Apps', icon: Smartphone },
    { id: 'website', label: 'Websites & Landing Pages', icon: Globe },
  ];

  const projects = [
    {
      id: 1,
      title: 'Nexora Cloud',
      category: 'saas',
      categoryLabel: 'Web Apps & SaaS',
      tagline: 'Enterprise Revenue & Telemetry Intelligence Platform',
      description: 'A high-throughput multi-tenant SaaS analytics dashboard delivering sub-second real-time metrics, automated reporting, and granular role-based access control.',
      metric: '50k+ Active Users',
      metricIcon: TrendingUp,
      techStack: ['Next.js 14', 'TypeScript', 'PostgreSQL', 'TailwindCSS', 'AWS', 'Redis'],
      previewGradient: 'from-[#102418] via-[#0E1A13] to-[#080C0A]',
      href: 'https://www.jimedevelopers.in/saas-development',
      stats: [
        { label: 'Latency', value: '< 120ms' },
        { label: 'Uptime', value: '99.99%' },
        { label: 'Security', value: 'SOC-2 Ready' }
      ]
    },
    {
      id: 2,
      title: 'Aurum Luxe',
      category: 'ecommerce',
      categoryLabel: 'E-commerce',
      tagline: 'Headless High-Converting Designer Fashion Store',
      description: 'A bespoke luxury e-commerce storefront engineered with instant client-side page transitions, global multi-currency checkout, and integrated 3D product previews.',
      metric: '+280% Sales Growth',
      metricIcon: Zap,
      techStack: ['Shopify Plus', 'Hydrogen', 'React', 'Stripe', 'TailwindCSS'],
      previewGradient: 'from-[#14281B] via-[#0F1E14] to-[#080C0A]',
      href: 'https://www.jimedevelopers.in/ecommerce-development',
      stats: [
        { label: 'Conversion Rate', value: '4.8%' },
        { label: 'Checkout Speed', value: '1.2s' },
        { label: 'Global Sales', value: '45+ Countries' }
      ]
    },
    {
      id: 3,
      title: 'Veloce Pay',
      category: 'mobile',
      categoryLabel: 'Mobile Apps',
      tagline: 'Next-Gen Cross-Platform FinTech Mobile Wallet',
      description: 'A frictionless iOS & Android mobile banking application featuring biometric FaceID login, real-time peer-to-peer payments, and offline-first transactions.',
      metric: '4.9★ App Store Rating',
      metricIcon: ShieldCheck,
      techStack: ['React Native', 'Expo', 'Node.js', 'Biometrics', 'TailwindCSS'],
      previewGradient: 'from-[#112619] via-[#0E1D13] to-[#080C0A]',
      href: 'https://www.jimedevelopers.in/mobile-app-development',
      stats: [
        { label: 'Downloads', value: '120k+' },
        { label: 'Crash-Free', value: '99.9%' },
        { label: 'App Rating', value: '4.9 / 5.0' }
      ]
    },
    {
      id: 4,
      title: 'Apex Health',
      category: 'saas',
      categoryLabel: 'Web Apps & SaaS',
      tagline: 'AI-Powered Telehealth & Medical Records Portal',
      description: 'A HIPAA-compliant clinical care platform with encrypted video consultations, smart doctor appointment scheduling, and automated patient record sync.',
      metric: '99.99% Cloud Uptime',
      metricIcon: ShieldCheck,
      techStack: ['Next.js', 'WebRTC', 'PostgreSQL', 'Docker', 'TailwindCSS'],
      previewGradient: 'from-[#102418] via-[#0E1B13] to-[#080C0A]',
      href: 'https://www.jimedevelopers.in/saas-development',
      stats: [
        { label: 'Consultations', value: '35k+' },
        { label: 'Compliance', value: 'HIPAA & GDPR' },
        { label: 'Avg Wait', value: '< 2 mins' }
      ]
    },
    {
      id: 5,
      title: 'Studio Forma',
      category: 'website',
      categoryLabel: 'Websites & Landing Pages',
      tagline: 'Award-Winning Architectural Studio & Portfolio',
      description: 'An immersive digital presence built with smooth kinetic interactions, fluid responsive typography, and sub-second page loads engineered for high client inbound.',
      metric: '100/100 Lighthouse Speed',
      metricIcon: Zap,
      techStack: ['React', 'TailwindCSS', 'Vite', 'SEO', 'Framer Motion'],
      previewGradient: 'from-[#13281B] via-[#0F1E14] to-[#080C0A]',
      href: 'https://www.jimedevelopers.in/web-development',
      stats: [
        { label: 'Load Time', value: '0.48s' },
        { label: 'SEO Score', value: '100 / 100' },
        { label: 'Inbound Growth', value: '+310%' }
      ]
    },
    {
      id: 6,
      title: 'Krave Direct',
      category: 'mobile',
      categoryLabel: 'Mobile Apps',
      tagline: 'On-Demand Hyperlocal Food & Grocery Logistics App',
      description: 'High-speed delivery application with interactive live driver GPS tracking, automated micro-fulfillment dispatching, and dynamic in-app push notifications.',
      metric: '15-Min Live Tracking',
      metricIcon: TrendingUp,
      techStack: ['Flutter', 'Firebase', 'Google Maps API', 'Node.js', 'Socket.io'],
      previewGradient: 'from-[#112619] via-[#0E1D13] to-[#080C0A]',
      href: 'https://www.jimedevelopers.in/mobile-app-development',
      stats: [
        { label: 'Daily Orders', value: '18k+' },
        { label: 'Dispatch Time', value: '90 secs' },
        { label: 'Driver Rating', value: '4.85 ★' }
      ]
    }
  ];

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <section id="projects" className="relative z-10 py-20 sm:py-28 overflow-hidden">
      {/* Subtle Background Glows */}
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
              Featured Work & Case Studies
            </span>
          </div>

          {/* Heading */}
          <h2 className="font-sora font-extrabold text-3xl sm:text-4xl md:text-5xl text-white leading-[1.15] tracking-tight">
            Engineered for speed, built for{' '}
            <span className="text-[#66FF88] italic font-extrabold inline-block drop-shadow-[0_0_20px_rgba(102,255,136,0.25)]">
              real-world impact.
            </span>
          </h2>

          {/* Subtitle */}
          <p className="mt-5 text-base sm:text-lg text-[#9EA8A3] font-inter font-normal leading-relaxed">
            Take a look at how we help venture-backed startups and industry leaders launch high-performance digital products, scalable SaaS platforms, and revenue-driving mobile applications.
          </p>
        </div>

        {/* CATEGORY FILTER TABS */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12 sm:mb-16">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full font-sora text-xs sm:text-sm font-semibold transition-all duration-300 flex items-center gap-2 ${
                  isActive
                    ? 'bg-[#66FF88] text-[#080C0A] shadow-[0_0_20px_rgba(102,255,136,0.35)] scale-[1.02]'
                    : 'bg-[#0D110F] text-[#9EA8A3] hover:text-white border border-[#1A221E] hover:border-[#66FF88]/40'
                }`}
              >
                {cat.icon && <cat.icon className={`w-3.5 h-3.5 ${isActive ? 'text-[#080C0A]' : 'text-[#66FF88]'}`} />}
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* PROJECTS GRID - 2 COLUMNS ON DESKTOP */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 mb-16 sm:mb-20">
          {filteredProjects.map((project) => {
            const MetricIcon = project.metricIcon;
            return (
              <div
                key={project.id}
                className="group relative rounded-3xl bg-[#0D110F] border border-[#1A221E] hover:border-[#66FF88]/50 transition-all duration-500 overflow-hidden flex flex-col justify-between shadow-[0_15px_40px_rgba(0,0,0,0.85)] hover:shadow-[0_25px_60px_rgba(0,0,0,0.95),0_0_35px_rgba(102,255,136,0.15)] hover:-translate-y-1.5"
              >
                {/* Visual Mockup Header Area */}
                <div className={`relative h-60 sm:h-72 w-full bg-gradient-to-br ${project.previewGradient} p-6 overflow-hidden border-b border-[#1A221E] flex flex-col justify-between`}>
                  
                  {/* Subtle Grid Pattern Overlay */}
                  <div 
                    className="absolute inset-0 opacity-20 pointer-events-none" 
                    style={{
                      backgroundImage: 'radial-gradient(rgba(102,255,136,0.3) 1px, transparent 1px)',
                      backgroundSize: '24px 24px'
                    }}
                  />

                  {/* Top Bar: Category Pill + Metric Pill */}
                  <div className="relative z-10 flex items-center justify-between gap-3">
                    <span className="px-3 py-1 rounded-full text-xs font-inter font-medium text-[#66FF88] bg-[#080C0A]/90 border border-[#1A221E] backdrop-blur-md">
                      {project.categoryLabel}
                    </span>

                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#080C0A]/90 border border-[#1D3A26] text-[#66FF88] text-xs font-inter font-semibold backdrop-blur-md shadow-sm">
                      <MetricIcon className="w-3.5 h-3.5 text-[#66FF88]" />
                      <span>{project.metric}</span>
                    </div>
                  </div>

                  {/* Center Interface Graphic Element */}
                  <div className="relative z-10 my-auto transform transition-transform duration-500 group-hover:scale-[1.03]">
                    <div className="max-w-md mx-auto rounded-2xl bg-[#080C0A]/90 border border-[#1A221E] p-4 shadow-[0_10px_30px_rgba(0,0,0,0.9)] backdrop-blur-xl">
                      
                      {/* Window Header Dots */}
                      <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#1A221E]">
                        <div className="flex items-center gap-1.5">
                          <span className="w-2.5 h-2.5 rounded-full bg-[#EF4444]/70" />
                          <span className="w-2.5 h-2.5 rounded-full bg-[#F59E0B]/70" />
                          <span className="w-2.5 h-2.5 rounded-full bg-[#10B981]/70" />
                        </div>
                        <span className="text-[11px] font-mono text-[#9EA8A3]">
                          {project.title.toLowerCase().replace(/\s+/g, '')}.app
                        </span>
                        <div className="w-4 h-4 rounded bg-[#121B15] flex items-center justify-center">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#66FF88]" />
                        </div>
                      </div>

                      {/* Stat Metrics Row Inside Window */}
                      <div className="grid grid-cols-3 gap-2">
                        {project.stats.map((stat, i) => (
                          <div key={i} className="p-2 rounded-lg bg-[#0D110F] border border-[#1A221E] text-center">
                            <span className="block text-[10px] font-inter text-[#9EA8A3] uppercase tracking-wider">
                              {stat.label}
                            </span>
                            <span className="block text-xs sm:text-sm font-sora font-bold text-[#66FF88] mt-0.5">
                              {stat.value}
                            </span>
                          </div>
                        ))}
                      </div>

                    </div>
                  </div>

                  {/* Bottom Corner Subtle Hint */}
                  <div className="relative z-10 flex items-center justify-between text-[11px] font-inter text-[#9EA8A3]">
                    <span>Live Architecture</span>
                    <span className="flex items-center gap-1 text-[#66FF88] font-medium">
                      Case Study Available <ChevronRight className="w-3 h-3" />
                    </span>
                  </div>

                </div>

                {/* Content Section */}
                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-sora font-bold text-2xl text-white group-hover:text-[#66FF88] transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="font-inter text-xs sm:text-sm font-medium text-[#66FF88]/90 mt-1 mb-3">
                      {project.tagline}
                    </p>
                    <p className="text-sm sm:text-[15px] text-[#9EA8A3] font-inter leading-relaxed mb-6 font-normal">
                      {project.description}
                    </p>
                  </div>

                  <div>
                    {/* Tech Stack Tags */}
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

                    {/* Action Links */}
                    <div className="pt-2 flex items-center justify-between">
                      <a
                        href={project.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-xs sm:text-sm font-sora font-semibold text-[#66FF88] hover:text-[#4ADE80] transition-colors group/link"
                      >
                        <span>View Project Details</span>
                        <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover/link:translate-x-1" />
                      </a>

                      <a
                        href={project.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-8 h-8 rounded-full bg-[#080C0A] border border-[#1A2E1F] hover:border-[#66FF88]/50 flex items-center justify-center text-[#9EA8A3] hover:text-[#66FF88] transition-colors"
                      >
                        <ArrowUpRight className="w-4 h-4" />
                      </a>
                    </div>
                  </div>

                </div>

              </div>
            );
          })}
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
              <span className="font-sora font-extrabold text-3xl sm:text-4xl text-[#66FF88] drop-shadow-[0_0_15px_rgba(102,255,136,0.25)]">
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
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#080C0A] border border-[#1A221E] hover:border-[#66FF88]/50 text-white font-sora font-semibold text-sm hover:bg-[#121B15] transition-all duration-200"
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
