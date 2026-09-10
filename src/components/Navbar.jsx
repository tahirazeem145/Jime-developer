import React, { useState, useRef, useEffect } from 'react';
import { 
  Menu, 
  X, 
  ArrowRight, 
  ChevronDown, 
  Code, 
  ShoppingBag, 
  Smartphone, 
  Layers 
} from 'lucide-react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [servicesHovered, setServicesHovered] = useState(false);
  const [isPastHero, setIsPastHero] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const hoverTimeoutRef = useRef(null);

  const handleMouseEnter = () => {
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    setServicesHovered(true);
  };

  const handleMouseLeave = () => {
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    hoverTimeoutRef.current = setTimeout(() => {
      setServicesHovered(false);
    }, 150);
  };

  useEffect(() => {
    let ticking = false;

    const sections = ['home', 'services', 'projects', 'about', 'contact'];

    const checkScrollPosition = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const heroEl = document.getElementById('home');
          const past = heroEl ? heroEl.getBoundingClientRect().bottom <= 90 : window.scrollY > 550;
          setIsPastHero((prev) => (prev !== past ? past : prev));

          // Calculate active section based on viewport center
          const scrollPosition = window.scrollY + 180;
          for (let i = sections.length - 1; i >= 0; i--) {
            const section = document.getElementById(sections[i]);
            if (section && section.offsetTop <= scrollPosition) {
              setActiveSection(sections[i]);
              break;
            }
          }

          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', checkScrollPosition, { passive: true });
    checkScrollPosition();

    return () => {
      if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
      window.removeEventListener('scroll', checkScrollPosition);
    };
  }, []);

  // 2 on left, 2 on right
  const leftServices = [
    {
      title: 'Web Development',
      href: 'https://www.jimedevelopers.in/web-development',
      icon: Code,
      desc: 'High-performance modern websites & landing pages'
    },
    {
      title: 'E-commerce Development',
      href: 'https://www.jimedevelopers.in/ecommerce-development',
      icon: ShoppingBag,
      desc: 'High-converting online stores built to scale'
    },
  ];

  const rightServices = [
    {
      title: 'Mobile App Development',
      href: 'https://www.jimedevelopers.in/mobile-app-development',
      icon: Smartphone,
      desc: 'Cross-platform iOS & Android native apps'
    },
    {
      title: 'Web App & SaaS',
      href: 'https://www.jimedevelopers.in/saas-development',
      icon: Layers,
      desc: 'Custom web software & scalable cloud platforms'
    },
  ];

  const allServices = [...leftServices, ...rightServices];

  return (
    <>
      {/* Full-Screen Backdrop Blur when mega-dropdown is open */}
      <div 
        className={`fixed inset-0 z-40 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] pointer-events-none ${
          servicesHovered 
            ? 'bg-[#0B0F0C]/75 backdrop-blur-md opacity-100' 
            : 'opacity-0'
        }`} 
      />

      <header 
        className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${
          isPastHero
            ? 'bg-[#080C0A]/90 backdrop-blur-xl border-b border-white/10 shadow-[0_4px_25px_rgba(0,0,0,0.8)]'
            : 'bg-[#080C0A]/80 backdrop-blur-md border-b border-[#1A2E1F]/70'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo on the left */}
            <div className="flex items-center gap-3">
              <a href="#" className="flex items-center group transition-transform duration-300 hover:scale-[1.02]">
                <img
                  src="/assets/jime-logo-brand.png"
                  alt="Jime Developers"
                  className={`h-9 sm:h-10 w-auto object-contain transition-all duration-300 ${
                    isPastHero 
                      ? 'drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]' 
                      : 'drop-shadow-[0_0_15px_rgba(167,243,160,0.25)]'
                  }`}
                />
              </a>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-7 lg:gap-9">
              <a
                href="#home"
                className={`text-[14px] font-inter font-medium tracking-wide transition-colors duration-300 relative py-1 group ${
                  isPastHero 
                    ? 'text-neutral-300 hover:text-white' 
                    : 'text-muted-text hover:text-main-text'
                }`}
              >
                Home
                <span 
                  className={`absolute bottom-0 left-0 w-0 h-[2px] transition-all duration-300 ease-out group-hover:w-full rounded-full ${
                    isPastHero ? 'bg-white' : 'bg-accent-lime'
                  }`} 
                />
              </a>

              {/* Services with Mega-Dropdown */}
              <div 
                className="relative py-5"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  type="button"
                  className={`flex items-center gap-1.5 text-[14px] font-inter font-medium tracking-wide transition-colors duration-300 focus:outline-none ${
                    isPastHero 
                      ? 'text-neutral-300 hover:text-white' 
                      : 'text-muted-text hover:text-main-text'
                  }`}
                >
                  <span className={`transition-colors duration-300 ${
                    servicesHovered 
                      ? isPastHero ? 'text-white font-semibold' : 'text-accent-lime font-semibold' 
                      : ''
                  }`}>
                    Services
                  </span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${
                    servicesHovered 
                      ? isPastHero ? 'rotate-180 text-white' : 'rotate-180 text-accent-lime' 
                      : isPastHero ? 'text-neutral-400' : 'text-muted-text/80'
                  }`} />
                </button>

                {/* 2x2 Mega Dropdown Menu */}
                <div 
                  className={`absolute top-full left-1/2 -translate-x-1/2 pt-2 transition-all duration-300 will-change-transform ${
                    servicesHovered 
                      ? 'opacity-100 translate-y-0 scale-100 pointer-events-auto' 
                      : 'opacity-0 translate-y-3 scale-[0.97] pointer-events-none'
                  }`}
                >
                  <div className={`w-[580px] sm:w-[620px] lg:w-[660px] p-4 rounded-2xl backdrop-blur-2xl border transition-all ${
                    isPastHero
                      ? 'bg-[#0F0F0F]/98 border-white/15 shadow-[0_20px_60px_rgba(0,0,0,0.9),0_0_30px_rgba(255,255,255,0.05)]'
                      : 'bg-[#0E1711]/95 border-[#1A2E1F] shadow-[0_20px_60px_rgba(0,0,0,0.85),0_0_30px_rgba(167,243,160,0.1)]'
                  }`}>
                    
                    {/* Header bar inside mega menu */}
                    <div className={`flex items-center justify-between pb-3 mb-3 border-b px-1 ${
                      isPastHero ? 'border-white/10' : 'border-[#1A2E1F]/70'
                    }`}>
                      <span className={`text-xs font-sora font-semibold tracking-wider uppercase ${
                        isPastHero ? 'text-white' : 'text-accent-lime'
                      }`}>
                        Our Core Services
                      </span>
                      <span className={`text-xs font-inter ${
                        isPastHero ? 'text-neutral-400' : 'text-muted-text'
                      }`}>
                        Custom Web & App Engineering
                      </span>
                    </div>

                    {/* 2 on Left and 2 on Right Grid */}
                    <div className="grid grid-cols-2 gap-3">
                      {/* Left Column */}
                      <div className="space-y-3">
                        {leftServices.map((item) => {
                          const Icon = item.icon;
                          return (
                            <a
                              key={item.title}
                              href={item.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className={`flex items-start gap-3.5 p-3 rounded-xl border transition-all duration-300 group/item ${
                                isPastHero
                                  ? 'bg-neutral-900/60 hover:bg-neutral-800/80 border-white/10 hover:border-white/30 shadow-sm'
                                  : 'bg-[#121E15]/60 hover:bg-[#16291C] border-[#1A2E1F]/80 hover:border-[#A7F3A0]/40 hover:shadow-[0_0_20px_rgba(167,243,160,0.08)]'
                              }`}
                            >
                              <div className={`w-10 h-10 rounded-lg border flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                                isPastHero
                                  ? 'bg-neutral-900 border-white/15 group-hover/item:border-white/40 group-hover/item:bg-neutral-800 shadow-sm'
                                  : 'bg-[#152B1B] border-[#1E3E27] group-hover/item:border-[#A7F3A0]/50 group-hover/item:bg-[#1D4726] shadow-[0_2px_10px_rgba(0,0,0,0.3)]'
                              }`}>
                                <Icon className={`w-5 h-5 transition-transform duration-300 group-hover/item:scale-110 ${
                                  isPastHero ? 'text-white' : 'text-accent-lime'
                                }`} />
                              </div>
                              <div className="flex-1 text-left min-w-0">
                                <div className={`font-sora font-semibold text-[14px] transition-colors flex items-center justify-between ${
                                  isPastHero 
                                    ? 'text-white group-hover/item:text-neutral-200' 
                                    : 'text-main-text group-hover/item:text-accent-lime'
                                }`}>
                                  <span className="truncate">{item.title}</span>
                                  <ArrowRight className={`w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all duration-300 flex-shrink-0 ${
                                    isPastHero ? 'text-white' : 'text-accent-lime'
                                  }`} />
                                </div>
                                <p className={`text-[12px] font-inter mt-0.5 line-clamp-2 leading-snug ${
                                  isPastHero ? 'text-neutral-400' : 'text-muted-text'
                                }`}>
                                  {item.desc}
                                </p>
                              </div>
                            </a>
                          );
                        })}
                      </div>

                      {/* Right Column */}
                      <div className="space-y-3">
                        {rightServices.map((item) => {
                          const Icon = item.icon;
                          return (
                            <a
                              key={item.title}
                              href={item.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className={`flex items-start gap-3.5 p-3 rounded-xl border transition-all duration-300 group/item ${
                                isPastHero
                                  ? 'bg-neutral-900/60 hover:bg-neutral-800/80 border-white/10 hover:border-white/30 shadow-sm'
                                  : 'bg-[#121E15]/60 hover:bg-[#16291C] border-[#1A2E1F]/80 hover:border-[#A7F3A0]/40 hover:shadow-[0_0_20px_rgba(167,243,160,0.08)]'
                              }`}
                            >
                              <div className={`w-10 h-10 rounded-lg border flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                                isPastHero
                                  ? 'bg-neutral-900 border-white/15 group-hover/item:border-white/40 group-hover/item:bg-neutral-800 shadow-sm'
                                  : 'bg-[#152B1B] border-[#1E3E27] group-hover/item:border-[#A7F3A0]/50 group-hover/item:bg-[#1D4726] shadow-[0_2px_10px_rgba(0,0,0,0.3)]'
                              }`}>
                                <Icon className={`w-5 h-5 transition-transform duration-300 group-hover/item:scale-110 ${
                                  isPastHero ? 'text-white' : 'text-accent-lime'
                                }`} />
                              </div>
                              <div className="flex-1 text-left min-w-0">
                                <div className={`font-sora font-semibold text-[14px] transition-colors flex items-center justify-between ${
                                  isPastHero 
                                    ? 'text-white group-hover/item:text-neutral-200' 
                                    : 'text-main-text group-hover/item:text-accent-lime'
                                }`}>
                                  <span className="truncate">{item.title}</span>
                                  <ArrowRight className={`w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all duration-300 flex-shrink-0 ${
                                    isPastHero ? 'text-white' : 'text-accent-lime'
                                  }`} />
                                </div>
                                <p className={`text-[12px] font-inter mt-0.5 line-clamp-2 leading-snug ${
                                  isPastHero ? 'text-neutral-400' : 'text-muted-text'
                                }`}>
                                  {item.desc}
                                </p>
                              </div>
                            </a>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <a
                href="#projects"
                className={`text-[14px] font-inter font-medium tracking-wide transition-colors relative py-1 group ${
                  isPastHero 
                    ? 'text-neutral-300 hover:text-white' 
                    : 'text-muted-text hover:text-main-text'
                }`}
              >
                Projects
                <span 
                  className={`absolute bottom-0 left-0 w-0 h-[2px] transition-all duration-300 ease-out group-hover:w-full rounded-full ${
                    isPastHero ? 'bg-white' : 'bg-accent-lime'
                  }`} 
                />
              </a>

              <a
                href="#about"
                className={`text-[14px] font-inter font-medium tracking-wide transition-colors relative py-1 group ${
                  isPastHero 
                    ? 'text-neutral-300 hover:text-white' 
                    : 'text-muted-text hover:text-main-text'
                }`}
              >
                About
                <span 
                  className={`absolute bottom-0 left-0 w-0 h-[2px] transition-all duration-300 ease-out group-hover:w-full rounded-full ${
                    isPastHero ? 'bg-white' : 'bg-accent-lime'
                  }`} 
                />
              </a>

              <a
                href="#contact"
                className={`text-[14px] font-inter font-medium tracking-wide transition-colors relative py-1 group ${
                  isPastHero 
                    ? 'text-neutral-300 hover:text-white' 
                    : 'text-muted-text hover:text-main-text'
                }`}
              >
                Contact
                <span 
                  className={`absolute bottom-0 left-0 w-0 h-[2px] transition-all duration-300 ease-out group-hover:w-full rounded-full ${
                    isPastHero ? 'bg-white' : 'bg-accent-lime'
                  }`} 
                />
              </a>
            </nav>

            {/* Right Action Button (Desktop) */}
            <div className="hidden md:flex items-center">
              <a
                href="#book-call"
                className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-sora font-semibold text-sm tracking-tight transition-all duration-200 ${
                  isPastHero
                    ? 'bg-white text-black hover:bg-neutral-200 shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:scale-[1.02] active:scale-[0.98]'
                    : 'bg-accent-lime text-[#0B0F0C] hover:bg-accent-lime-hover hover:shadow-lime-glow hover:scale-[1.02] active:scale-[0.98]'
                }`}
              >
                <span>Book a free call</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              </a>
            </div>

            {/* Mobile Menu Toggle Button */}
            <div className="flex md:hidden items-center">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className={`p-2 rounded-lg focus:outline-none transition-colors ${
                  isPastHero
                    ? 'text-neutral-300 hover:text-white hover:bg-neutral-800'
                    : 'text-muted-text hover:text-main-text hover:bg-[#1A2E1F]/50'
                }`}
                aria-label="Toggle Menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div className={`md:hidden border-b px-4 pt-3 pb-6 space-y-3 transition-all animate-fadeIn ${
            isPastHero
              ? 'bg-[#0B0B0B]/98 backdrop-blur-xl border-white/10 shadow-xl'
              : 'bg-[#0B0F0C]/95 backdrop-blur-xl border-[#1A2E1F]'
          }`}>
            <div className="flex flex-col space-y-1.5">
              <a
                href="#home"
                onClick={() => setMobileMenuOpen(false)}
                className={`px-3 py-2 rounded-lg text-base font-medium transition-colors ${
                  isPastHero
                    ? 'text-neutral-300 hover:text-white hover:bg-neutral-900'
                    : 'text-muted-text hover:text-main-text hover:bg-[#1A2E1F]/40'
                }`}
              >
                Home
              </a>

              {/* Mobile Services Accordion */}
              <div>
                <button
                  type="button"
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                  className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-base font-medium transition-colors ${
                    isPastHero
                      ? 'text-neutral-300 hover:text-white hover:bg-neutral-900'
                      : 'text-muted-text hover:text-main-text hover:bg-[#1A2E1F]/40'
                  }`}
                >
                  <span>Services</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${
                    mobileServicesOpen 
                      ? isPastHero ? 'rotate-180 text-white' : 'rotate-180 text-accent-lime' 
                      : ''
                  }`} />
                </button>

                {mobileServicesOpen && (
                  <div className="pl-3 pr-1 py-1 space-y-1">
                    {allServices.map((item) => {
                      const Icon = item.icon;
                      return (
                        <a
                          key={item.title}
                          href={item.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={() => setMobileMenuOpen(false)}
                          className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                            isPastHero
                              ? 'bg-neutral-900/60 text-neutral-200 hover:text-white'
                              : 'bg-[#142318]/50 text-main-text hover:text-accent-lime'
                          }`}
                        >
                          <Icon className={`w-4 h-4 flex-shrink-0 ${
                            isPastHero ? 'text-white' : 'text-accent-lime'
                          }`} />
                          <span>{item.title}</span>
                        </a>
                      );
                    })}
                  </div>
                )}
              </div>

              <a
                href="#projects"
                onClick={() => setMobileMenuOpen(false)}
                className={`px-3 py-2 rounded-lg text-base font-medium transition-colors ${
                  isPastHero
                    ? 'text-neutral-300 hover:text-white hover:bg-neutral-900'
                    : 'text-muted-text hover:text-main-text hover:bg-[#1A2E1F]/40'
                }`}
              >
                Projects
              </a>

              <a
                href="#about"
                onClick={() => setMobileMenuOpen(false)}
                className={`px-3 py-2 rounded-lg text-base font-medium transition-colors ${
                  isPastHero
                    ? 'text-neutral-300 hover:text-white hover:bg-neutral-900'
                    : 'text-muted-text hover:text-main-text hover:bg-[#1A2E1F]/40'
                }`}
              >
                About
              </a>

              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className={`px-3 py-2 rounded-lg text-base font-medium transition-colors ${
                  isPastHero
                    ? 'text-neutral-300 hover:text-white hover:bg-neutral-900'
                    : 'text-muted-text hover:text-main-text hover:bg-[#1A2E1F]/40'
                }`}
              >
                Contact
              </a>
            </div>

            <div className={`pt-2 border-t ${
              isPastHero ? 'border-white/10' : 'border-[#1A2E1F]/60'
            }`}>
              <a
                href="#book-call"
                onClick={() => setMobileMenuOpen(false)}
                className={`w-full flex items-center justify-center gap-2 px-5 py-3 rounded-full font-sora font-semibold text-sm tracking-tight transition-all ${
                  isPastHero
                    ? 'bg-white text-black hover:bg-neutral-200 shadow-[0_0_20px_rgba(255,255,255,0.3)]'
                    : 'bg-accent-lime text-[#0B0F0C] hover:bg-accent-lime-hover shadow-lime-glow'
                }`}
              >
                <span>Book a free call</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
