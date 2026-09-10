import React, { useState, useRef } from 'react';
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
            ? 'bg-[#080B10]/75 backdrop-blur-md opacity-100' 
            : 'opacity-0'
        }`} 
      />

      <header className="fixed top-0 left-0 right-0 z-50 w-full bg-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo on the left */}
            <div className="flex items-center gap-3">
              <a href="#" className="flex items-center group transition-transform duration-300 hover:scale-[1.02]">
                <img
                  src="/assets/jime-logo-brand.png"
                  alt="Jime Developers"
                  className="h-9 sm:h-10 w-auto object-contain transition-all duration-300 drop-shadow-[0_0_15px_rgba(59,130,246,0.35)]"
                />
              </a>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-7 lg:gap-9">
              <a
                href="#home"
                className="text-[14px] font-inter font-medium tracking-wide text-muted-text hover:text-main-text transition-colors duration-300 relative py-1 group"
              >
                Home
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-accent-blue transition-all duration-300 ease-out group-hover:w-full rounded-full" />
              </a>

              {/* Services with Mega-Dropdown */}
              <div 
                className="relative py-5"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  type="button"
                  className="flex items-center gap-1.5 text-[14px] font-inter font-medium tracking-wide text-muted-text hover:text-main-text transition-colors duration-300 focus:outline-none"
                >
                  <span className={`transition-colors duration-300 ${servicesHovered ? 'text-accent-blue font-semibold' : ''}`}>
                    Services
                  </span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${
                    servicesHovered ? 'rotate-180 text-accent-blue' : 'text-muted-text/80'
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
                  <div className="w-[580px] sm:w-[620px] lg:w-[660px] p-4 rounded-2xl backdrop-blur-2xl border bg-[#0B101D]/95 border-[#1E293B] shadow-[0_20px_60px_rgba(0,0,0,0.85),0_0_30px_rgba(59,130,246,0.15)]">
                    
                    {/* Header bar inside mega menu */}
                    <div className="flex items-center justify-between pb-3 mb-3 border-b px-1 border-[#1E293B]/70">
                      <span className="text-xs font-sora font-semibold tracking-wider uppercase text-accent-blue">
                        Our Core Services
                      </span>
                      <span className="text-xs font-inter text-muted-text">
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
                              className="flex items-start gap-3.5 p-3 rounded-xl border transition-all duration-300 group/item bg-[#0F172A]/60 hover:bg-[#1E293B] border-[#1E293B]/80 hover:border-[#3B82F6]/50 hover:shadow-[0_0_20px_rgba(59,130,246,0.12)]"
                            >
                              <div className="w-10 h-10 rounded-lg border flex items-center justify-center flex-shrink-0 transition-all duration-300 bg-[#172554] border-[#1E3A8A] group-hover/item:border-[#3B82F6]/60 group-hover/item:bg-[#1E3A8A] shadow-[0_2px_10px_rgba(0,0,0,0.3)]">
                                <Icon className="w-5 h-5 transition-transform duration-300 group-hover/item:scale-110 text-accent-blue" />
                              </div>
                              <div className="flex-1 text-left min-w-0">
                                <div className="font-sora font-semibold text-[14px] transition-colors flex items-center justify-between text-main-text group-hover/item:text-accent-blue">
                                  <span className="truncate">{item.title}</span>
                                  <ArrowRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all duration-300 flex-shrink-0 text-accent-blue" />
                                </div>
                                <p className="text-[12px] font-inter mt-0.5 line-clamp-2 leading-snug text-muted-text">
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
                              className="flex items-start gap-3.5 p-3 rounded-xl border transition-all duration-300 group/item bg-[#0F172A]/60 hover:bg-[#1E293B] border-[#1E293B]/80 hover:border-[#3B82F6]/50 hover:shadow-[0_0_20px_rgba(59,130,246,0.12)]"
                            >
                              <div className="w-10 h-10 rounded-lg border flex items-center justify-center flex-shrink-0 transition-all duration-300 bg-[#172554] border-[#1E3A8A] group-hover/item:border-[#3B82F6]/60 group-hover/item:bg-[#1E3A8A] shadow-[0_2px_10px_rgba(0,0,0,0.3)]">
                                <Icon className="w-5 h-5 transition-transform duration-300 group-hover/item:scale-110 text-accent-blue" />
                              </div>
                              <div className="flex-1 text-left min-w-0">
                                <div className="font-sora font-semibold text-[14px] transition-colors flex items-center justify-between text-main-text group-hover/item:text-accent-blue">
                                  <span className="truncate">{item.title}</span>
                                  <ArrowRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all duration-300 flex-shrink-0 text-accent-blue" />
                                </div>
                                <p className="text-[12px] font-inter mt-0.5 line-clamp-2 leading-snug text-muted-text">
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
                className="text-[14px] font-inter font-medium tracking-wide text-muted-text hover:text-main-text transition-colors relative py-1 group"
              >
                Projects
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-accent-blue transition-all duration-300 ease-out group-hover:w-full rounded-full" />
              </a>

              <a
                href="#about"
                className="text-[14px] font-inter font-medium tracking-wide text-muted-text hover:text-main-text transition-colors relative py-1 group"
              >
                About
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-accent-blue transition-all duration-300 ease-out group-hover:w-full rounded-full" />
              </a>

              <a
                href="#contact"
                className="text-[14px] font-inter font-medium tracking-wide text-muted-text hover:text-main-text transition-colors relative py-1 group"
              >
                Contact
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-accent-blue transition-all duration-300 ease-out group-hover:w-full rounded-full" />
              </a>
            </nav>

            {/* Right Action Button (Desktop: Turing-style glowing pill button) */}
            <div className="hidden md:flex items-center">
              <a
                href="#book-call"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-sora font-semibold text-sm tracking-tight bg-[#0D1527]/90 text-white border border-[#2563EB]/60 hover:border-[#3B82F6] hover:bg-[#111C3D] shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
              >
                <span>Book a free call</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 text-accent-blue" />
              </a>
            </div>

            {/* Mobile Menu Toggle Button */}
            <div className="flex md:hidden items-center">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg focus:outline-none transition-colors text-muted-text hover:text-main-text hover:bg-[#1E293B]/50"
                aria-label="Toggle Menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden px-4 pt-3 pb-6 space-y-3 transition-all animate-fadeIn bg-[#0B101D]/98 backdrop-blur-xl border-b border-[#1E293B]">
            <div className="flex flex-col space-y-1.5">
              <a
                href="#home"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg text-base font-medium transition-colors text-muted-text hover:text-main-text hover:bg-[#1E293B]/40"
              >
                Home
              </a>

              {/* Mobile Services Accordion */}
              <div>
                <button
                  type="button"
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                  className="w-full flex items-center justify-between px-3 py-2 rounded-lg text-base font-medium transition-colors text-muted-text hover:text-main-text hover:bg-[#1E293B]/40"
                >
                  <span>Services</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${
                    mobileServicesOpen ? 'rotate-180 text-accent-blue' : 'text-muted-text/80'
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
                          className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors bg-[#0F172A]/50 text-main-text hover:text-accent-blue"
                        >
                          <Icon className="w-4 h-4 flex-shrink-0 text-accent-blue" />
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
                className="px-3 py-2 rounded-lg text-base font-medium transition-colors text-muted-text hover:text-main-text hover:bg-[#1E293B]/40"
              >
                Projects
              </a>

              <a
                href="#about"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg text-base font-medium transition-colors text-muted-text hover:text-main-text hover:bg-[#1E293B]/40"
              >
                About
              </a>

              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg text-base font-medium transition-colors text-muted-text hover:text-main-text hover:bg-[#1E293B]/40"
              >
                Contact
              </a>
            </div>

            <div className="pt-2 border-t border-[#1E293B]/60">
              <a
                href="#book-call"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-full font-sora font-semibold text-sm tracking-tight transition-all bg-[#0D1527] text-white border border-[#2563EB]/60 hover:border-[#3B82F6] shadow-[0_0_20px_rgba(59,130,246,0.3)]"
              >
                <span>Book a free call</span>
                <ArrowRight className="w-4 h-4 text-accent-blue" />
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
