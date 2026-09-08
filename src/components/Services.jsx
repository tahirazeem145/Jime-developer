import React, { useEffect, useRef, useState } from 'react';
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
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const servicesData = [
  {
    id: 'web-dev',
    category: 'web',
    icon: Code,
    badge: 'Performance & SEO',
    title: 'Web Development',
    tagline: 'High-speed, conversion-focused modern websites',
    description: 'We build blazing-fast, responsive web experiences tailored to elevate your brand authority and turn casual visitors into loyal customers.',
    color: 'rgba(37, 99, 235, 0.85)',
    delivery: '1 - 2 Weeks',
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
    description: 'Custom e-commerce platforms engineered for rapid checkouts, seamless payment gateways, and frictionless cross-device shopping experiences.',
    color: 'rgba(2, 132, 199, 0.85)',
    delivery: '2 - 3 Weeks',
    capabilities: [
      'Shopify & Custom Headless Storefronts',
      'Global Multi-Currency Payment Integrations',
      'Real-time Inventory & Order Syncing',
      'Conversion Rate Optimization (CRO)'
    ],
    techStack: ['Shopify', 'WooCommerce', 'Stripe', 'Headless CMS', 'Next.js', 'GraphQL'],
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
    color: 'rgba(79, 70, 229, 0.85)',
    delivery: '3 - 5 Weeks',
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
    color: 'rgba(37, 99, 235, 0.85)',
    delivery: '4 - 8 Weeks',
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

const ServiceCard = React.forwardRef(({ item, index, totalCards }, ref) => {
  const IconComponent = item.icon;
  const cardColor = item.color || 'rgba(37, 99, 235, 0.85)';

  return (
    <div
      ref={ref}
      className="w-full will-change-transform"
      style={{
        transformOrigin: 'center center',
      }}
    >
      <div className="relative w-full rounded-[26px] isolation-auto group">
        {/* Electric Conic Border Glow */}
        <div
          className="absolute -inset-[2px] rounded-[28px] pointer-events-none transition-opacity duration-500"
          style={{
            background: `conic-gradient(
              from 0deg,
              transparent 0deg,
              ${cardColor} 60deg,
              rgba(37, 99, 235, 0.35) 120deg,
              transparent 180deg,
              rgba(56, 189, 248, 0.3) 240deg,
              transparent 360deg
            )`,
            zIndex: -1,
          }}
        />

        {/* Main Card Glass Container in Beige & Blue */}
        <div
          className="relative w-full rounded-[26px] overflow-hidden border border-[#2563EB]/20 transition-all duration-500 shadow-[0_24px_60px_rgba(15,23,42,0.08)]"
          style={{
            background: 'linear-gradient(145deg, rgba(255, 255, 255, 0.94) 0%, rgba(248, 245, 238, 0.98) 100%)',
            backdropFilter: 'blur(32px) saturate(190%)',
            WebkitBackdropFilter: 'blur(32px) saturate(190%)',
            boxShadow: '0 24px 60px rgba(15, 23, 42, 0.08), inset 0 1px 2px rgba(255, 255, 255, 1), inset 0 -1px 0 rgba(226, 232, 240, 0.8)',
          }}
        >
          {/* Top Edge Shine Line */}
          <div
            className="absolute top-0 left-0 right-0 h-[1.5px] pointer-events-none"
            style={{
              background: 'linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.9) 50%, transparent 100%)',
            }}
          />

          {/* Service Content Layout */}
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 min-h-[460px]">
            {/* Left Column: Icon Showcase & Capabilities Checklist (6 Cols) */}
            <div className="lg:col-span-6 p-6 sm:p-8 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-slate-200/80 bg-[#F6F2EA]/70">
              <div>
                <div className="flex items-center justify-between gap-4 mb-6">
                  <div className="w-14 h-14 p-3.5 rounded-2xl bg-white border border-blue-200/80 group-hover:border-blue-400 group-hover:bg-blue-50/50 shadow-[0_4px_20px_rgba(37,99,235,0.12)] group-hover:shadow-[0_0_25px_rgba(37,99,235,0.2)] transition-all duration-300 flex items-center justify-center backdrop-blur-md">
                    <IconComponent className="w-7 h-7 text-[#2563EB] transition-transform duration-300 group-hover:scale-110" />
                  </div>

                  <span className="px-3.5 py-1 rounded-full text-xs font-inter font-semibold text-[#1D4ED8] glass-pill-light">
                    {item.badge}
                  </span>
                </div>

                <h4 className="font-sora font-semibold text-xs text-[#64748B] uppercase tracking-wider mb-3">
                  Core Capabilities & Deliverables
                </h4>

                <div className="space-y-3">
                  {item.capabilities.map((cap, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-[#2563EB] flex-shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm font-inter text-[#334155] font-medium leading-snug">
                        {cap}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Delivery timeline strip */}
              <div className="mt-6 pt-4 border-t border-slate-200/80 flex items-center justify-between text-xs font-inter">
                <span className="text-[#64748B]">Typical Timeline:</span>
                <span className="font-sora font-semibold text-[#2563EB] px-2.5 py-0.5 rounded-md bg-white border border-blue-200 shadow-sm">
                  {item.delivery}
                </span>
              </div>
            </div>

            {/* Right Column: Service Description, Tech Stack & CTA (6 Cols) */}
            <div className="lg:col-span-6 p-6 sm:p-8 flex flex-col justify-between">
              <div>
                {/* Header & Step Tag */}
                <div className="flex items-center justify-between gap-2 mb-3 sm:mb-4">
                  <span className="text-xs font-mono text-[#1D4ED8] px-2.5 py-1 rounded-md bg-blue-50 border border-blue-200/80 font-medium">
                    Service 0{index + 1} / 0{totalCards}
                  </span>
                  <span className="px-3 py-1 rounded-lg text-xs font-inter font-medium text-[#64748B] bg-white border border-slate-200">
                    Production-Ready
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-sora font-bold text-xl sm:text-2xl md:text-3xl text-[#0F172A] group-hover:text-[#2563EB] transition-colors duration-300 leading-snug">
                  {item.title}
                </h3>
                
                {/* Tagline */}
                <p className="font-inter text-xs sm:text-sm font-semibold text-[#2563EB] mt-1 mb-3">
                  {item.tagline}
                </p>

                {/* Description */}
                <p className="text-xs sm:text-sm md:text-[15px] text-[#475569] font-inter leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div>
                {/* Tech stack */}
                {item.techStack && (
                  <div className="flex flex-wrap gap-1.5 sm:gap-2 pt-4 border-t border-slate-200/80 mb-5">
                    {item.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="text-[10px] sm:text-[11px] font-inter font-medium px-2.5 py-1 rounded-md bg-white border border-slate-200 text-[#475569] group-hover:border-blue-300 group-hover:text-[#2563EB] transition-colors shadow-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}

                {/* Actions */}
                <div className="flex items-center justify-between pt-1">
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs sm:text-sm font-sora font-semibold text-[#2563EB] hover:text-[#1D4ED8] transition-colors group/link"
                  >
                    <span>Explore {item.title}</span>
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-1" />
                  </a>

                  <a
                    href="#contact"
                    className="inline-flex items-center gap-1.5 text-xs font-inter text-[#475569] hover:text-[#2563EB] transition-colors px-3 py-1.5 rounded-full bg-white border border-slate-200 hover:border-blue-300 shadow-sm"
                  >
                    <span>Get a Quote</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

ServiceCard.displayName = 'ServiceCard';

export const StackedServices = () => {
  const containerRef = useRef(null);
  const cardsRef = useRef([]);
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const container = containerRef.current;
    const cards = cardsRef.current.filter(Boolean);
    if (!container || cards.length < 2) return;

    const ctx = gsap.context(() => {
      // Card 0 starts placed
      gsap.set(cards[0], {
        yPercent: 0,
        scale: 1,
        opacity: 1,
        autoAlpha: 1,
        filter: 'blur(0px) brightness(1)',
        zIndex: 10,
      });

      // Card 1+ start hidden
      cards.slice(1).forEach((card, i) => {
        gsap.set(card, {
          yPercent: 140,
          scale: 0.98,
          opacity: 0,
          autoAlpha: 0,
          filter: 'blur(0px) brightness(0.98)',
          zIndex: 20 + i * 10,
        });
      });

      // Master scrub timeline
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: 'top top+=70',
          end: `+=${(cards.length - 1) * 750}`,
          pin: true,
          scrub: 0.9,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            const step = Math.min(Math.floor(self.progress * cards.length + 0.05), cards.length - 1);
            setActiveStep(step);
          },
        },
      });

      // Stacking animation
      cards.slice(1).forEach((card, i) => {
        const prevCard = cards[i];

        tl.to(
          card,
          {
            yPercent: 0,
            autoAlpha: 1,
            opacity: 1,
            scale: 1,
            filter: 'blur(0px) brightness(1)',
            ease: 'power2.out',
            duration: 1,
          },
          i
        );

        tl.to(
          prevCard,
          {
            scale: 0.94,
            opacity: 0.35,
            filter: 'blur(8px) brightness(0.95)',
            ease: 'power2.inOut',
            duration: 0.8,
          },
          i + 0.2
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="relative w-full py-4 sm:py-6">
      {/* Visual Navigation Hint & Card Indicator */}
      <div className="flex items-center justify-between max-w-5xl mx-auto px-3 mb-5">
        <div className="flex items-center gap-2 text-xs font-mono text-[#64748B]">
          <Layers className="w-3.5 h-3.5 text-[#2563EB]" />
          <span>Services Stacking Deck</span>
        </div>
        <div className="flex items-center gap-2">
          {servicesData.map((_, idx) => (
            <div
              key={idx}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                activeStep === idx
                  ? 'w-8 bg-[#2563EB] shadow-[0_0_10px_rgba(37,99,235,0.6)]'
                  : 'w-2 bg-slate-300'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Cards Deck Stacking Wrapper */}
      <div className="relative w-full max-w-5xl mx-auto min-h-[640px] sm:min-h-[560px] lg:min-h-[480px]">
        {servicesData.map((service, index) => (
          <div
            key={service.id}
            ref={(el) => (cardsRef.current[index] = el)}
            className="absolute top-0 left-0 right-0 w-full"
            style={{
              zIndex: index === 0 ? 10 : 20 + index * 10,
            }}
          >
            <ServiceCard
              item={service}
              index={index}
              totalCards={servicesData.length}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default function Services() {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const highlightsRef = useRef(null);
  const highlightItemsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header scroll entrance
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

      // Highlights strip scroll entrance
      const validHighlights = highlightItemsRef.current.filter(Boolean);
      if (validHighlights.length > 0) {
        gsap.fromTo(
          validHighlights,
          { opacity: 0, y: 30 },
          {
            scrollTrigger: {
              trigger: highlightsRef.current,
              start: 'top 88%',
              once: true,
            },
            opacity: 1,
            y: 0,
            stagger: 0.12,
            duration: 0.75,
            ease: 'power3.out',
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      id="services" 
      ref={sectionRef}
      className="relative z-10 py-20 sm:py-28 overflow-hidden"
    >
      {/* Subtle Ambient Radial Blue Glows */}
      <div 
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full opacity-20 blur-[130px] pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(37,99,235,0.2) 0%, rgba(56,189,248,0.1) 50%, transparent 80%)'
        }}
      />
      <div 
        className="absolute bottom-10 right-0 w-[500px] h-[500px] rounded-full opacity-15 blur-[120px] pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(37,99,235,0.18) 0%, transparent 70%)'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* SECTION HEADER */}
        <div ref={headerRef} className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          
          {/* Pill Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-pill-light mb-5 animate-fadeIn">
            <Sparkles className="w-3.5 h-3.5 text-[#2563EB] animate-pulse" />
            <span className="font-sora font-semibold text-xs tracking-wider uppercase text-[#1D4ED8]">
              Our Core Services
            </span>
          </div>

          {/* Heading */}
          <h2 className="font-sora font-extrabold text-3xl sm:text-4xl md:text-5xl text-[#0F172A] leading-[1.15] tracking-tight">
            Comprehensive engineering for{' '}
            <span className="text-[#2563EB] italic font-extrabold inline-block drop-shadow-[0_0_20px_rgba(37,99,235,0.25)]">
              ambitious products.
            </span>
          </h2>

          {/* Subtitle */}
          <p className="mt-5 text-base sm:text-lg text-[#475569] font-inter font-normal leading-relaxed">
            Scroll down to explore our core service offerings engineered to deliver market-leading speed, high conversion, and enterprise reliability.
          </p>
        </div>

        {/* GSAP PINNED STACKING SERVICES CARDS */}
        <div className="mb-20 sm:mb-28">
          <StackedServices />
        </div>

        {/* VALUE PROPOSITION / GUARANTEE HIGHLIGHTS */}
        <div ref={highlightsRef} className="rounded-3xl glass-card-light p-6 sm:p-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {highlights.map((item, idx) => {
              const HighlightIcon = item.icon;
              return (
                <div 
                  key={idx} 
                  ref={(el) => (highlightItemsRef.current[idx] = el)}
                  className="flex flex-col items-start gap-3 will-change-transform"
                >
                  <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200/80 flex items-center justify-center text-[#2563EB] shadow-[0_2px_10px_rgba(37,99,235,0.12)] backdrop-blur-md">
                    <HighlightIcon className="w-5 h-5" />
                  </div>
                  <h4 className="font-sora font-semibold text-base text-[#0F172A]">
                    {item.title}
                  </h4>
                  <p className="font-inter text-xs sm:text-sm text-[#475569] leading-relaxed">
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
