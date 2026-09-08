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
      gradient: 'from-emerald-500/20 via-accent-lime/10 to-transparent',
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
      gradient: 'from-accent-lime/20 via-emerald-600/10 to-transparent',
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
      gradient: 'from-emerald-400/20 via-[#1A2E1F] to-transparent',
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
      gradient: 'from-[#1A2E1F] via-accent-lime/15 to-transparent',
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
      {/* Subtle Background Glows */}
      <div 
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full opacity-15 blur-[120px] pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(167,243,160,0.25) 0%, rgba(26,46,31,0.5) 60%, transparent 80%)'
        }}
      />
      <div 
        className="absolute bottom-10 right-0 w-[500px] h-[500px] rounded-full opacity-10 blur-[130px] pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(167,243,160,0.3) 0%, transparent 70%)'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          
          {/* Pill Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#131D16]/90 border border-[#1D2E22] text-accent-lime shadow-[0_2px_15px_rgba(0,0,0,0.4)] backdrop-blur-md mb-5 animate-fadeIn">
            <Sparkles className="w-3.5 h-3.5 animate-pulse text-accent-lime" />
            <span className="font-sora font-semibold text-xs tracking-wider uppercase">
              Our Core Services
            </span>
          </div>

          {/* Heading */}
          <h2 className="font-sora font-extrabold text-3xl sm:text-4xl md:text-5xl text-main-text leading-[1.15] tracking-tight">
            Comprehensive engineering for{' '}
            <span className="text-accent-lime italic font-extrabold inline-block drop-shadow-[0_0_20px_rgba(167,243,160,0.25)]">
              ambitious products.
            </span>
          </h2>

          {/* Subtitle */}
          <p className="mt-5 text-base sm:text-lg text-muted-text font-inter font-normal leading-relaxed">
            Whether you need a high-converting website, a scalable mobile application, or an enterprise SaaS platform, we design, engineer, and deploy digital products that drive measurable business growth.
          </p>
        </div>

        {/* 2x2 SERVICES GRID - PREMIUM OBSIDIAN BLACK CARDS */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-16 sm:mb-20">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={service.id}
                className="group relative rounded-3xl bg-[#0D130F]/95 backdrop-blur-xl border border-[#1D2E22] hover:border-accent-lime/50 transition-all duration-500 overflow-hidden flex flex-col justify-between shadow-[0_15px_40px_rgba(0,0,0,0.7)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.85),0_0_30px_rgba(167,243,160,0.18)] hover:-translate-y-1.5"
              >
                {/* Top Subtle Ambient Card Gradient */}
                <div 
                  className={`absolute top-0 left-0 right-0 h-40 bg-gradient-to-b ${service.gradient} opacity-40 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} 
                />

                {/* Card Corner Index Indicator */}
                <div className="absolute top-6 right-6 font-sora font-extrabold text-xs text-muted-text/30 group-hover:text-accent-lime/70 transition-colors">
                  0{index + 1}
                </div>

                <div className="relative p-6 sm:p-8 md:p-9 z-10">
                  
                  {/* Top Row: Icon + Badge */}
                  <div className="flex items-center justify-between gap-4 mb-6">
                    <div className="w-13 h-13 p-3 rounded-2xl bg-[#152B1B] border border-[#1E3E27] group-hover:border-accent-lime/50 group-hover:bg-[#1D4726] shadow-[0_4px_20px_rgba(0,0,0,0.3)] group-hover:shadow-[0_0_20px_rgba(167,243,160,0.25)] transition-all duration-300 flex items-center justify-center">
                      <IconComponent className="w-6 h-6 text-accent-lime transition-transform duration-300 group-hover:scale-110" />
                    </div>

                    <span className="px-3 py-1 rounded-full text-xs font-inter font-medium text-accent-lime bg-[#1A2E1F]/70 border border-[#2E4A35] backdrop-blur-sm">
                      {service.badge}
                    </span>
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="font-sora font-bold text-2xl sm:text-[26px] text-main-text group-hover:text-accent-lime transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="font-inter text-xs sm:text-sm font-medium text-accent-lime/85 mt-1 mb-4">
                    {service.tagline}
                  </p>

                  {/* Description */}
                  <p className="text-sm sm:text-[15px] text-muted-text font-inter leading-relaxed mb-6 font-normal">
                    {service.description}
                  </p>

                  {/* Capabilities List */}
                  <div className="space-y-2.5 pt-4 border-t border-[#1D2E22]/80 mb-6">
                    {service.capabilities.map((cap, i) => (
                      <div key={i} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-accent-lime flex-shrink-0 mt-0.5" />
                        <span className="text-xs sm:text-sm font-inter text-main-text/90 leading-snug">
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
                        className="text-[11px] font-inter font-medium px-2.5 py-1 rounded-md bg-[#131D16] border border-[#1D2E22] text-muted-text group-hover:border-[#2E4A35] group-hover:text-main-text transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                </div>

                {/* Card Action Footer */}
                <div className="relative px-6 sm:px-8 py-4 bg-[#090E0B]/95 border-t border-[#1D2E22] flex items-center justify-between z-10 group-hover:bg-[#0D1610]/95 transition-colors duration-300">
                  <a
                    href={service.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs sm:text-sm font-sora font-semibold text-accent-lime hover:text-accent-lime-hover transition-colors group/link"
                  >
                    <span>Explore {service.title}</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover/link:translate-x-1" />
                  </a>

                  <a
                    href="#contact"
                    className="inline-flex items-center gap-1.5 text-xs font-inter text-muted-text hover:text-main-text transition-colors"
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
        <div className="rounded-3xl bg-[#0D130F]/90 border border-[#1D2E22] p-6 sm:p-10 shadow-[0_15px_40px_rgba(0,0,0,0.5)] backdrop-blur-md">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {highlights.map((item, idx) => {
              const HighlightIcon = item.icon;
              return (
                <div key={idx} className="flex flex-col items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#152B1B] border border-[#1E3E27] flex items-center justify-center text-accent-lime shadow-[0_2px_10px_rgba(0,0,0,0.3)]">
                    <HighlightIcon className="w-5 h-5" />
                  </div>
                  <h4 className="font-sora font-semibold text-base text-main-text">
                    {item.title}
                  </h4>
                  <p className="font-inter text-xs sm:text-sm text-muted-text leading-relaxed">
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
