import React, { useEffect, useRef } from 'react';
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
    color: '#E11D48',
    frameColor: 'rgba(244, 63, 94, 0.9)',
    glowColor: 'rgba(225, 29, 72, 0.35)',
    borderColor: 'rgba(244, 63, 94, 0.65)',
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
    color: '#2563EB',
    frameColor: 'rgba(59, 130, 246, 0.9)',
    glowColor: 'rgba(37, 99, 235, 0.35)',
    borderColor: 'rgba(59, 130, 246, 0.65)',
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
    color: '#22C55E',
    frameColor: 'rgba(74, 222, 128, 0.9)',
    glowColor: 'rgba(34, 197, 94, 0.35)',
    borderColor: 'rgba(74, 222, 128, 0.65)',
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
    color: '#A855F7',
    frameColor: 'rgba(192, 132, 252, 0.9)',
    glowColor: 'rgba(168, 85, 247, 0.35)',
    borderColor: 'rgba(192, 132, 252, 0.65)',
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

const ServiceCard = ({ item, index, totalCards }) => {
  const IconComponent = item.icon;
  const color = item.color || '#ffffff';
  const frameColor = item.frameColor || 'rgba(255, 255, 255, 0.8)';
  const glowColor = item.glowColor || 'rgba(255, 255, 255, 0.2)';

  return (
    <div className="relative w-full rounded-[28px] isolation-auto group">
      {/* Electric Conic Border Glow Frame */}
      <div
        className="absolute -inset-[2px] rounded-[30px] pointer-events-none transition-opacity duration-500 opacity-90 group-hover:opacity-100"
        style={{
          background: `conic-gradient(
            from 0deg,
            transparent 0deg,
            ${frameColor} 60deg,
            rgba(255, 255, 255, 0.8) 120deg,
            transparent 180deg,
            ${frameColor} 240deg,
            transparent 360deg
          )`,
          zIndex: -1,
        }}
      />

      {/* Main Card Glass Container (Sleek Dark/Black Body with Colored Frame) */}
      <div
        className="relative w-full rounded-[28px] overflow-hidden transition-all duration-500"
        style={{
          background: 'linear-gradient(145deg, rgba(16, 16, 18, 0.96) 0%, rgba(8, 8, 10, 0.99) 100%)',
          backdropFilter: 'blur(32px) saturate(190%)',
          WebkitBackdropFilter: 'blur(32px) saturate(190%)',
          border: `2px solid ${item.borderColor || frameColor}`,
          boxShadow: `
            0 30px 70px rgba(0, 0, 0, 0.95),
            0 0 35px ${glowColor},
            0 4px 16px rgba(0, 0, 0, 0.6),
            inset 0 1.5px 2px rgba(255, 255, 255, 0.4),
            inset 0 -1px 0 rgba(255, 255, 255, 0.1)
          `,
        }}
      >
        {/* Top Edge Colored Specular Highlight Line (Colored Frame Accent) */}
        <div
          className="absolute top-2 left-4 right-4 h-[2.5px] pointer-events-none rounded-full"
          style={{
            background: `linear-gradient(90deg, transparent 0%, ${color} 25%, #ffffff 50%, ${color} 75%, transparent 100%)`,
          }}
        />

        {/* Enhanced Glass reflection overlay */}
        <div
          className="absolute top-0 left-0 right-0 h-3/5 pointer-events-none rounded-t-[28px]"
          style={{
            background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0.02) 50%, transparent 100%)',
          }}
        />

        {/* Side Glass Reflection */}
        <div
          className="absolute top-0 left-0 w-[2px] h-full pointer-events-none rounded-l-[28px]"
          style={{
            background: `linear-gradient(180deg, ${color} 0%, transparent 60%)`,
          }}
        />

        {/* Frosted texture noise overlay */}
        <div
          className="absolute inset-0 pointer-events-none opacity-30 rounded-[28px]"
          style={{
            backgroundImage: `
              radial-gradient(circle at 20% 30%, rgba(255,255,255,0.1) 1px, transparent 2px),
              radial-gradient(circle at 80% 70%, rgba(255,255,255,0.06) 1px, transparent 2px),
              radial-gradient(circle at 40% 80%, rgba(255,255,255,0.04) 1px, transparent 2px)
            `,
            backgroundSize: '30px 30px, 25px 25px, 35px 35px',
          }}
        />

        {/* Service Content Layout */}
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 min-h-[440px] sm:min-h-[460px]">
          {/* Left Column: Icon Showcase & Capabilities Checklist (6 Cols) */}
          <div className="lg:col-span-6 p-6 sm:p-8 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-white/10 bg-[#0C0C0E]/90">
            <div>
              <div className="flex items-center justify-between gap-4 mb-6">
                <div 
                  className="w-14 h-14 p-3.5 rounded-2xl bg-neutral-900 border transition-all duration-300 flex items-center justify-center shadow-[0_4px_20px_rgba(0,0,0,0.5)] group-hover:scale-105"
                  style={{ borderColor: `${color}80` }}
                >
                  <IconComponent className="w-7 h-7 text-white transition-transform duration-300 group-hover:scale-110" />
                </div>

                <span 
                  className="px-3.5 py-1 rounded-full text-xs font-inter font-semibold text-white bg-neutral-900 border"
                  style={{ borderColor: `${color}80` }}
                >
                  <span className="inline-block w-1.5 h-1.5 rounded-full mr-1.5" style={{ backgroundColor: color }} />
                  {item.badge}
                </span>
              </div>

              <h4 className="font-sora font-semibold text-xs text-neutral-400 uppercase tracking-wider mb-3">
                Core Capabilities & Deliverables
              </h4>

              <div className="space-y-3">
                {item.capabilities.map((cap, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 
                      className="w-4 h-4 flex-shrink-0 mt-0.5" 
                      style={{ color: color }}
                    />
                    <span className="text-xs sm:text-sm font-inter text-neutral-200 font-medium leading-snug">
                      {cap}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Delivery timeline strip */}
            <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-inter">
              <span className="text-neutral-400">Typical Timeline:</span>
              <span 
                className="font-sora font-semibold text-white px-2.5 py-0.5 rounded-md bg-neutral-900 border"
                style={{ borderColor: `${color}60` }}
              >
                {item.delivery}
              </span>
            </div>
          </div>

          {/* Right Column: Service Description, Tech Stack & CTA (6 Cols) */}
          <div className="lg:col-span-6 p-6 sm:p-8 flex flex-col justify-between bg-[#0E0E10]/80">
            <div>
              {/* Header & Step Tag */}
              <div className="flex items-center justify-between gap-2 mb-3 sm:mb-4">
                <span 
                  className="text-xs font-mono font-semibold px-2.5 py-1 rounded-md bg-neutral-900 border"
                  style={{ color: color, borderColor: `${color}60` }}
                >
                  Service 0{index + 1} / 0{totalCards}
                </span>
                <span className="px-3 py-1 rounded-lg text-xs font-inter font-medium text-neutral-400 bg-neutral-900/80 border border-white/10">
                  Production-Ready
                </span>
              </div>

              {/* Title */}
              <h3 className="font-sora font-bold text-xl sm:text-2xl md:text-3xl text-white group-hover:text-neutral-100 transition-colors duration-300 leading-snug">
                {item.title}
              </h3>
              
              {/* Tagline */}
              <p className="font-inter text-xs sm:text-sm font-semibold text-neutral-300 mt-1 mb-3">
                {item.tagline}
              </p>

              {/* Description */}
              <p className="text-xs sm:text-sm md:text-[14px] text-neutral-400 font-inter leading-relaxed">
                {item.description}
              </p>
            </div>

            <div>
              {/* Tech stack */}
              {item.techStack && (
                <div className="flex flex-wrap gap-1.5 sm:gap-2 pt-4 border-t border-white/10 mb-5">
                  {item.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="text-[10px] sm:text-[11px] font-inter font-medium px-2.5 py-1 rounded-md bg-neutral-900/70 border border-white/10 text-neutral-300 group-hover:border-white/25 group-hover:text-white transition-colors"
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
                  className="inline-flex items-center gap-2 text-xs sm:text-sm font-sora font-semibold text-white hover:text-neutral-300 transition-colors group/link"
                >
                  <span>Explore {item.title}</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-1" />
                </a>

                <a
                  href="#contact"
                  className="inline-flex items-center gap-1.5 text-xs font-inter text-neutral-300 hover:text-white transition-colors px-3.5 py-1.5 rounded-full bg-neutral-900 border border-white/15 hover:border-white/40"
                  style={{ borderColor: `${color}60` }}
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
  );
};

export const StackedServices = () => {
  const pinSectionRef = useRef(null);
  const cardRefs = useRef([]);

  useEffect(() => {
    const pinSection = pinSectionRef.current;
    const cards = cardRefs.current.filter(Boolean);
    if (!pinSection || cards.length === 0) return;

    const ctx = gsap.context(() => {
      // Set initial positions:
      // Card 0 starts in place at top (y: 0, opacity: 1, scale: 1)
      // Subsequent cards are hidden (opacity: 0, y: 140) so they NEVER peek at the bottom beforehand
      cards.forEach((card, i) => {
        if (i === 0) {
          gsap.set(card, { y: 0, opacity: 1, scale: 1, pointerEvents: 'auto', transformOrigin: 'top center' });
        } else {
          gsap.set(card, { y: 140, opacity: 0, scale: 0.98, pointerEvents: 'none', transformOrigin: 'top center' });
        }
      });

      // Pinning timeline: snappy scroll scrubbing
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: pinSection,
          start: 'top 85px',
          end: `+=${(cards.length - 1) * 360}`,
          pin: true,
          scrub: 0.4,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      // Animate each subsequent card fading in and rising smoothly into place
      for (let i = 1; i < cards.length; i++) {
        const timeOffset = (i - 1) * 0.9;

        // Card i fades in and glides up into place
        tl.to(
          cards[i],
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.85,
            ease: 'power2.out',
            pointerEvents: 'auto',
          },
          timeOffset
        );

        // Previous cards scale down slightly to create physical tabbed deck depth
        for (let j = 0; j < i; j++) {
          const depthScale = 1 - (i - j) * 0.025;
          tl.to(
            cards[j],
            {
              scale: depthScale,
              duration: 0.85,
              ease: 'power2.out',
            },
            timeOffset
          );
        }
      }
    }, pinSection);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={pinSectionRef} className="relative w-full py-6">
      <div 
        className="relative w-full max-w-5xl mx-auto"
        style={{
          minHeight: `${480 + (servicesData.length - 1) * 36}px`,
        }}
      >
        {servicesData.map((service, index) => (
          <div
            key={service.id}
            ref={(el) => (cardRefs.current[index] = el)}
            className="absolute inset-x-0 w-full will-change-transform"
            style={{
              top: `${index * 36}px`,
              zIndex: 10 + index * 5,
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
      {/* Subtle Ambient Radial Glows */}
      <div 
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full opacity-10 blur-[130px] pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(255,255,255,0.15) 0%, transparent 70%)'
        }}
      />
      <div 
        className="absolute bottom-10 right-0 w-[500px] h-[500px] rounded-full opacity-10 blur-[120px] pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(255,255,255,0.12) 0%, transparent 70%)'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* SECTION HEADER */}
        <div ref={headerRef} className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          
          {/* Pill Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-pill-bw mb-5 animate-fadeIn">
            <Sparkles className="w-3.5 h-3.5 text-white animate-pulse" />
            <span className="font-sora font-semibold text-xs tracking-wider uppercase text-white">
              Our Core Services
            </span>
          </div>

          {/* Heading */}
          <h2 className="font-sora font-extrabold text-3xl sm:text-4xl md:text-5xl text-white leading-[1.15] tracking-tight">
            Comprehensive engineering for{' '}
            <span className="text-white italic font-extrabold inline-block drop-shadow-[0_0_20px_rgba(255,255,255,0.3)]">
              ambitious products.
            </span>
          </h2>

          {/* Subtitle */}
          <p className="mt-5 text-base sm:text-lg text-neutral-400 font-inter font-normal leading-relaxed">
            Scroll down to explore our core service offerings engineered to deliver market-leading speed, high conversion, and enterprise reliability.
          </p>
        </div>

        {/* GSAP PINNED STACKING SERVICES CARDS */}
        <div className="mb-20 sm:mb-28">
          <StackedServices />
        </div>

        {/* VALUE PROPOSITION / GUARANTEE HIGHLIGHTS */}
        <div ref={highlightsRef} className="rounded-3xl glass-card-bw p-6 sm:p-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {highlights.map((item, idx) => {
              const HighlightIcon = item.icon;
              return (
                <div 
                  key={idx} 
                  ref={(el) => (highlightItemsRef.current[idx] = el)}
                  className="flex flex-col items-start gap-3 will-change-transform"
                >
                  <div className="w-10 h-10 rounded-xl bg-neutral-900 border border-white/20 flex items-center justify-center text-white shadow-[0_2px_10px_rgba(0,0,0,0.5)] backdrop-blur-md">
                    <HighlightIcon className="w-5 h-5" />
                  </div>
                  <h4 className="font-sora font-semibold text-base text-white">
                    {item.title}
                  </h4>
                  <p className="font-inter text-xs sm:text-sm text-neutral-400 leading-relaxed">
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
