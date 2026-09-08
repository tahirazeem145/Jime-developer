import React from 'react';
import { 
  Code, 
  ShoppingBag, 
  Smartphone, 
  Layers, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles, 
  Zap, 
  ShieldCheck, 
  Clock, 
  ChevronRight
} from 'lucide-react';

export default function Services() {
  const services = [
    {
      id: 'web-dev',
      category: 'web',
      icon: Code,
      badge: 'Performance & SEO',
      title: 'Web Development',
      tagline: 'High-speed, conversion-focused modern websites',
      description: 'We build blazing-fast, responsive web experiences tailored to elevate your brand authority and turn casual visitors into loyal customers.',
      capabilities: [
        'Custom Responsive & Dynamic Web Design',
        'Next.js, React & Tailwind CSS Architecture',
        'Lighthouse 95+ Speed & Technical SEO',
        'Interactive Animations & High-Converting UX'
      ],
      techStack: ['React', 'Next.js', 'TailwindCSS', 'TypeScript', 'Vite', 'SEO'],
      href: 'https://www.jimedevelopers.in/web-development',
    },
    {
      id: 'ecommerce',
      category: 'ecommerce',
      icon: ShoppingBag,
      badge: 'High Conversion',
      title: 'E-commerce Development',
      tagline: 'Scalable online stores designed to maximize revenue',
      description: 'Custom e-commerce platforms engineered for rapid checkouts, seamless payment gateways, and frictionless cross-device shopping.',
      capabilities: [
        'Shopify & Custom Headless Storefronts',
        'Global Multi-Currency Payment Integrations',
        'Real-time Inventory & Order Syncing',
        'Conversion Rate Optimization (CRO)'
      ],
      techStack: ['Shopify', 'WooCommerce', 'Stripe', 'Headless CMS', 'Next.js'],
      href: 'https://www.jimedevelopers.in/ecommerce-development',
    },
    {
      id: 'mobile-app',
      category: 'mobile',
      icon: Smartphone,
      badge: 'iOS & Android',
      title: 'Mobile App Development',
      tagline: 'Native performance with cross-platform velocity',
      description: 'Intuitive, fluid mobile apps built for seamless user retention, high store ratings, and lightning-fast responsiveness on both iOS and Android.',
      capabilities: [
        'Cross-Platform React Native & Flutter Apps',
        'Offline-First Sync & Background Processing',
        'Push Notifications & Secure Biometrics',
        'Full App Store & Google Play Launch Support'
      ],
      techStack: ['React Native', 'Flutter', 'iOS', 'Android', 'Firebase', 'REST API'],
      href: 'https://www.jimedevelopers.in/mobile-app-development',
    },
    {
      id: 'saas-cloud',
      category: 'saas',
      icon: Layers,
      badge: 'Cloud & SaaS',
      title: 'Web App & SaaS Development',
      tagline: 'Engineered for high concurrency and enterprise scale',
      description: 'Complex web platforms, multi-tenant SaaS systems, custom internal tools, and robust backend APIs crafted to handle heavy workloads with ease.',
      capabilities: [
        'Multi-Tenant SaaS & Subscription Billing',
        'Scalable RESTful & GraphQL Cloud APIs',
        'Real-Time Dashboards & Data Analytics',
        'Enterprise Security & Automated DevOps'
      ],
      techStack: ['Node.js', 'PostgreSQL', 'Docker', 'AWS', 'GraphQL', 'Redis'],
      href: 'https://www.jimedevelopers.in/saas-development',
    }
  ];

  const highlights = [
    {
      icon: Zap,
      title: 'Rapid Turnaround',
      desc: 'Agile sprints delivering functional MVPs & full builds in record time.'
    },
    {
      icon: ShieldCheck,
      title: 'Production-Ready Quality',
      desc: 'Clean, secure, test-covered code built for long-term scalability.'
    },
    {
      icon: Clock,
      title: 'End-to-End Ownership',
      desc: 'From initial wireframes and UI design to deployment and 24/7 care.'
    },
    {
      icon: Sparkles,
      title: 'Modern Aesthetics',
      desc: 'Bespoke UI/UX engineered to impress visitors and outshine competitors.'
    }
  ];

  return (
    <section id="services" className="relative z-10 py-20 sm:py-28 overflow-hidden">
      {/* Subtle Ambient Radial Glows */}
      <div 
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full opacity-15 blur-[120px] pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(102,255,136,0.2) 0%, rgba(22,46,31,0.5) 60%, transparent 80%)'
        }}
      />
      <div 
        className="absolute bottom-10 right-0 w-[500px] h-[500px] rounded-full opacity-10 blur-[130px] pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(102,255,136,0.25) 0%, transparent 70%)'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          
          {/* Pill Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0D110F] border border-[#1A221E] text-[#66FF88] shadow-[0_2px_15px_rgba(0,0,0,0.5)] backdrop-blur-md mb-5 animate-fadeIn">
            <Sparkles className="w-3.5 h-3.5 animate-pulse text-[#66FF88]" />
            <span className="font-sora font-semibold text-xs tracking-wider uppercase">
              Our Core Services
            </span>
          </div>

          {/* Heading */}
          <h2 className="font-sora font-extrabold text-3xl sm:text-4xl md:text-5xl text-white leading-[1.15] tracking-tight">
            Comprehensive engineering for{' '}
            <span className="text-[#66FF88] italic font-extrabold inline-block drop-shadow-[0_0_20px_rgba(102,255,136,0.25)]">
              ambitious products.
            </span>
          </h2>

          {/* Subtitle */}
          <p className="mt-5 text-base sm:text-lg text-[#9EA8A3] font-inter font-normal leading-relaxed">
            Whether you need a high-converting website, a scalable mobile application, or an enterprise SaaS platform, we design, engineer, and deploy digital products that drive measurable business growth.
          </p>
        </div>

        {/* 2x2 SERVICES GRID - REFINED CHARCOAL & ELECTRIC MINT */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-16 sm:mb-20">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={service.id}
                className="group relative rounded-3xl bg-[#0D110F] border border-[#1A221E] hover:border-[#66FF88]/50 transition-all duration-500 overflow-hidden flex flex-col justify-between shadow-[0_15px_40px_rgba(0,0,0,0.85)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.95),0_0_30px_rgba(102,255,136,0.15)] hover:-translate-y-1.5"
              >
                {/* Card Corner Index Indicator */}
                <div className="absolute top-6 right-6 font-sora font-extrabold text-xs text-[#9EA8A3]/30 group-hover:text-[#66FF88]/70 transition-colors">
                  0{index + 1}
                </div>

                <div className="relative p-6 sm:p-8 md:p-9 z-10">
                  
                  {/* Top Row: Icon + Badge */}
                  <div className="flex items-center justify-between gap-4 mb-6">
                    <div className="w-13 h-13 p-3 rounded-2xl bg-[#121B15] border border-[#1E2D23] group-hover:border-[#66FF88]/40 group-hover:bg-[#16291F] shadow-[0_4px_20px_rgba(0,0,0,0.4)] group-hover:shadow-[0_0_20px_rgba(102,255,136,0.2)] transition-all duration-300 flex items-center justify-center">
                      <IconComponent className="w-6 h-6 text-[#66FF88] transition-transform duration-300 group-hover:scale-110" />
                    </div>

                    <span className="px-3 py-1 rounded-full text-xs font-inter font-medium text-[#66FF88] bg-[#132218] border border-[#1D3A26]">
                      {service.badge}
                    </span>
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="font-sora font-bold text-2xl sm:text-[26px] text-white group-hover:text-[#66FF88] transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="font-inter text-xs sm:text-sm font-medium text-[#66FF88]/90 mt-1 mb-4">
                    {service.tagline}
                  </p>

                  {/* Description */}
                  <p className="text-sm sm:text-[15px] text-[#9EA8A3] font-inter leading-relaxed mb-6 font-normal">
                    {service.description}
                  </p>

                  {/* Capabilities List */}
                  <div className="space-y-2.5 pt-4 border-t border-[#1A221E] mb-6">
                    {service.capabilities.map((cap, i) => (
                      <div key={i} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-[#66FF88] flex-shrink-0 mt-0.5" />
                        <span className="text-xs sm:text-sm font-inter text-[#E2E8E4] font-medium leading-snug">
                          {cap}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {service.techStack.map((tech) => (
                      <span 
                        key={tech} 
                        className="text-[11px] font-inter font-medium px-2.5 py-1 rounded-md bg-[#080C0A] border border-[#1A221E] text-[#9EA8A3] group-hover:border-[#66FF88]/40 group-hover:text-white transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                </div>

                {/* Card Action Footer */}
                <div className="relative px-6 sm:px-8 py-4 bg-[#080C0A] border-t border-[#1A221E] flex items-center justify-between z-10 group-hover:bg-[#0B100D] transition-colors duration-300">
                  <a
                    href={service.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs sm:text-sm font-sora font-semibold text-[#66FF88] hover:text-[#4ADE80] transition-colors group/link"
                  >
                    <span>Explore {service.title}</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover/link:translate-x-1" />
                  </a>

                  <a
                    href="#contact"
                    className="inline-flex items-center gap-1.5 text-xs font-inter text-[#9EA8A3] hover:text-white transition-colors"
                  >
                    <span>Get a Quote</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </a>
                </div>

              </div>
            );
          })}
        </div>

        {/* VALUE PROPOSITION / GUARANTEE HIGHLIGHTS */}
        <div className="rounded-3xl bg-[#0D110F] border border-[#1A221E] p-6 sm:p-10 shadow-[0_15px_40px_rgba(0,0,0,0.8)]">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {highlights.map((item, idx) => {
              const HighlightIcon = item.icon;
              return (
                <div key={idx} className="flex flex-col items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#121B15] border border-[#1E2D23] flex items-center justify-center text-[#66FF88] shadow-[0_2px_10px_rgba(0,0,0,0.4)]">
                    <HighlightIcon className="w-5 h-5" />
                  </div>
                  <h4 className="font-sora font-semibold text-base text-white">
                    {item.title}
                  </h4>
                  <p className="font-inter text-xs sm:text-sm text-[#9EA8A3] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
