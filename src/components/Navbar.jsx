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
    return () => {
      if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
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
      {/* Silky 2-Second Full-Screen Backdrop Blur */}
      <div 
        className={`fixed inset-0 bg-[#0B0F0C]/75 backdrop-blur-md z-40 transition-all duration-[2000ms] ease-[cubic-bezier(0.16,1,0.3,1)] pointer-events-none ${
          servicesHovered ? 'opacity-100' : 'opacity-0'
        }`} 
      />

      <header className="fixed top-0 left-0 right-0 z-50 w-full bg-background/80 backdrop-blur-md border-b border-[#1A2E1F]/70 transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo on the left */}
            <div className="flex items-center gap-3">
              <a href="#" className="flex items-center group transition-transform duration-300 hover:scale-[1.02]">
                <img
                  src="/assets/jime-logo-brand.png"
                  alt="Jime Developers"
                  className="h-9 sm:h-10 w-auto object-contain drop-shadow-[0_0_15px_rgba(167,243,160,0.25)]"
                />
              </a>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-7 lg:gap-9">
              <a
                href="#home"
                className="text-muted-text hover:text-main-text text-[14px] font-inter font-medium tracking-wide transition-colors duration-300 relative py-1 group"
              >
                Home
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-accent-lime transition-all duration-500 ease-out group-hover:w-full rounded-full" />
              </a>

              {/* Services with 2x2 Mega-Dropdown & Controlled Smooth Hover */}
              <div 
                className="relative py-5"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  type="button"
                  className="flex items-center gap-1.5 text-muted-text hover:text-main-text text-[14px] font-inter font-medium tracking-wide transition-colors duration-500 focus:outline-none"
                >
                  <span className={`transition-colors duration-500 ${servicesHovered ? 'text-accent-lime font-semibold' : ''}`}>
                    Services
                  </span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-[2000ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${servicesHovered ? 'rotate-180 text-accent-lime' : 'text-muted-text/80'}`} />
                </button>

                {/* Big 2x2 Mega Dropdown Menu with 2-Second Silky Smooth Eased Animation */}
                <div 
                  className={`absolute top-full left-1/2 -translate-x-1/2 pt-2 transition-all duration-[2000ms] ease-[cubic-bezier(0.16,1,0.3,1)] will-change-transform ${
                    servicesHovered 
                      ? 'opacity-100 translate-y-0 scale-100 pointer-events-auto' 
                      : 'opacity-0 translate-y-4 scale-[0.97] pointer-events-none'
                  }`}
                >
                  <div className="w-[580px] sm:w-[620px] lg:w-[660px] p-4 rounded-2xl bg-[#0E1711]/95 backdrop-blur-2xl border border-[#1A2E1F] shadow-[0_20px_60px_rgba(0,0,0,0.85),0_0_30px_rgba(167,243,160,0.1)]">
                    
                    {/* Header bar inside mega menu */}
                    <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#1A2E1F]/70 px-1">
                      <span className="text-xs font-sora font-semibold text-accent-lime tracking-wider uppercase">
                        Our Core Services
                      </span>
                      <span className="text-xs text-muted-text font-inter">
                        Custom Web & App Engineering
                      </span>
                    </div>

                    {/* 2 on Left and 2 on Right Grid */}
                    <div className="grid grid-cols-2 gap-3">
                      {/* Left Column (2 items) */}
                      <div className="space-y-3">
                        {leftServices.map((item) => {
                          const Icon = item.icon;
                          return (
                            <a
                              key={item.title}
                              href={item.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-start gap-3.5 p-3 rounded-xl bg-[#121E15]/60 hover:bg-[#16291C] border border-[#1A2E1F]/80 hover:border-[#A7F3A0]/40 transition-all duration-300 group/item hover:shadow-[0_0_20px_rgba(167,243,160,0.08)]"
                            >
                              <div className="w-10 h-10 rounded-lg bg-[#152B1B] border border-[#1E3E27] flex items-center justify-center flex-shrink-0 group-hover/item:border-[#A7F3A0]/50 group-hover/item:bg-[#1D4726] shadow-[0_2px_10px_rgba(0,0,0,0.3)] transition-all duration-300">
                                <Icon className="w-5 h-5 text-accent-lime transition-transform duration-300 group-hover/item:scale-110" />
                              </div>
                              <div className="flex-1 text-left min-w-0">
                                <div className="font-sora font-semibold text-[14px] text-main-text group-hover/item:text-accent-lime transition-colors flex items-center justify-between">
                                  <span className="truncate">{item.title}</span>
                                  <ArrowRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all duration-300 text-accent-lime flex-shrink-0" />
                                </div>
                                <p className="text-[12px] text-muted-text font-inter mt-0.5 line-clamp-2 leading-snug">
                                  {item.desc}
                                </p>
                              </div>
                            </a>
                          );
                        })}
                      </div>

                      {/* Right Column (2 items) */}
                      <div className="space-y-3">
                        {rightServices.map((item) => {
                          const Icon = item.icon;
                          return (
                            <a
                              key={item.title}
                              href={item.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-start gap-3.5 p-3 rounded-xl bg-[#121E15]/60 hover:bg-[#16291C] border border-[#1A2E1F]/80 hover:border-[#A7F3A0]/40 transition-all duration-300 group/item hover:shadow-[0_0_20px_rgba(167,243,160,0.08)]"
                            >
                              <div className="w-10 h-10 rounded-lg bg-[#152B1B] border border-[#1E3E27] flex items-center justify-center flex-shrink-0 group-hover/item:border-[#A7F3A0]/50 group-hover/item:bg-[#1D4726] shadow-[0_2px_10px_rgba(0,0,0,0.3)] transition-all duration-300">
                                <Icon className="w-5 h-5 text-accent-lime transition-transform duration-300 group-hover/item:scale-110" />
                              </div>
                              <div className="flex-1 text-left min-w-0">
                                <div className="font-sora font-semibold text-[14px] text-main-text group-hover/item:text-accent-lime transition-colors flex items-center justify-between">
                                  <span className="truncate">{item.title}</span>
                                  <ArrowRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all duration-300 text-accent-lime flex-shrink-0" />
                                </div>
                                <p className="text-[12px] text-muted-text font-inter mt-0.5 line-clamp-2 leading-snug">
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
                className="text-muted-text hover:text-main-text text-[14px] font-inter font-medium tracking-wide transition-colors relative py-1 group"
              >
                Projects
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-accent-lime transition-all duration-300 group-hover:w-full rounded-full" />
              </a>

              <a
                href="#about"
                className="text-muted-text hover:text-main-text text-[14px] font-inter font-medium tracking-wide transition-colors relative py-1 group"
              >
                About
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-accent-lime transition-all duration-300 group-hover:w-full rounded-full" />
              </a>

              <a
                href="#contact"
                className="text-muted-text hover:text-main-text text-[14px] font-inter font-medium tracking-wide transition-colors relative py-1 group"
              >
                Contact
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-accent-lime transition-all duration-300 group-hover:w-full rounded-full" />
              </a>
            </nav>

            {/* Right Action Button (Desktop) */}
            <div className="hidden md:flex items-center">
              <a
                href="#book-call"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-accent-lime text-[#0B0F0C] font-sora font-semibold text-sm tracking-tight hover:bg-accent-lime-hover hover:shadow-lime-glow hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
              >
                <span>Book a free call</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              </a>
            </div>

            {/* Mobile Menu Toggle Button */}
            <div className="flex md:hidden items-center">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg text-muted-text hover:text-main-text hover:bg-[#1A2E1F]/50 focus:outline-none transition-colors"
                aria-label="Toggle Menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden border-b border-[#1A2E1F] bg-[#0B0F0C]/95 backdrop-blur-xl px-4 pt-3 pb-6 space-y-3 transition-all animate-fadeIn">
            <div className="flex flex-col space-y-1.5">
              <a
                href="#home"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg text-muted-text hover:text-main-text hover:bg-[#1A2E1F]/40 text-base font-medium transition-colors"
              >
                Home
              </a>

              {/* Mobile Services Accordion */}
              <div>
                <button
                  type="button"
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                  className="w-full flex items-center justify-between px-3 py-2 rounded-lg text-muted-text hover:text-main-text hover:bg-[#1A2E1F]/40 text-base font-medium transition-colors"
                >
                  <span>Services</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${mobileServicesOpen ? 'rotate-180 text-accent-lime' : ''}`} />
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
                          className="flex items-center gap-3 px-3 py-2 rounded-lg bg-[#142318]/50 text-sm font-medium text-main-text hover:text-accent-lime transition-colors"
                        >
                          <Icon className="w-4 h-4 text-accent-lime flex-shrink-0" />
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
                className="px-3 py-2 rounded-lg text-muted-text hover:text-main-text hover:bg-[#1A2E1F]/40 text-base font-medium transition-colors"
              >
                Projects
              </a>

              <a
                href="#about"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg text-muted-text hover:text-main-text hover:bg-[#1A2E1F]/40 text-base font-medium transition-colors"
              >
                About
              </a>

              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg text-muted-text hover:text-main-text hover:bg-[#1A2E1F]/40 text-base font-medium transition-colors"
              >
                Contact
              </a>
            </div>

            <div className="pt-2 border-t border-[#1A2E1F]/60">
              <a
                href="#book-call"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-accent-lime text-[#0B0F0C] font-sora font-semibold text-sm tracking-tight hover:bg-accent-lime-hover shadow-lime-glow transition-all"
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
