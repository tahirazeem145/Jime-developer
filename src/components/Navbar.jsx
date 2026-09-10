import React, { useState, useRef } from 'react';
import { 
  Menu, 
  X, 
  ArrowRight, 
  ChevronDown, 
  Code, 
  TrendingUp, 
  Smartphone, 
  Cpu 
} from 'lucide-react';

export default function Navbar({ onOpenProjectModal }) {
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
      title: 'Digital Marketing',
      href: 'https://www.jimedevelopers.in/digital-marketing',
      icon: TrendingUp,
      desc: 'Data-driven SEO, brand growth & performance marketing'
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
      title: 'Custom AI & ML',
      href: 'https://www.jimedevelopers.in/custom-ai-ml',
      icon: Cpu,
      desc: 'Intelligent AI automation, LLMs & machine learning'
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

      <header className="fixed top-3 sm:top-5 left-0 right-0 z-50 flex justify-center px-3 sm:px-6 pointer-events-none">
        <div className="w-full max-w-6xl bg-[#0B101D]/85 backdrop-blur-2xl border border-white/10 hover:border-accent-blue/30 rounded-full px-4 sm:px-6 py-2 sm:py-2.5 shadow-[0_10px_35px_rgba(0,0,0,0.75),0_0_25px_rgba(59,130,246,0.1)] transition-all duration-300 pointer-events-auto">
          <div className="flex items-center justify-between">
            {/* Logo on the left */}
            <div className="flex items-center gap-3">
              <a href="#" className="flex items-center group transition-transform duration-300 hover:scale-[1.02]">
                <img
                  src="/assets/jime-logo-white.png"
                  alt="Jime Developers"
                  className="h-8 sm:h-9 w-auto object-contain brightness-0 invert transition-all duration-300 drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]"
                />
              </a>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-6 lg:gap-8">
              <a
                href="#home"
                className="text-[14px] font-inter font-medium tracking-wide text-muted-text hover:text-main-text transition-colors duration-300 relative py-1 group"
              >
                Home
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-accent-blue transition-all duration-300 ease-out group-hover:w-full rounded-full" />
              </a>

              {/* Services with Mega-Dropdown */}
              <div 
                className="relative py-2"
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
                  className={`absolute top-full left-1/2 -translate-x-1/2 pt-3 transition-all duration-300 will-change-transform ${
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
              <button
                type="button"
                onClick={() => {
                  if (onOpenProjectModal) {
                    onOpenProjectModal();
                  } else {
                    window.dispatchEvent(new CustomEvent('open-project-modal'));
                  }
                }}
                className="inline-flex items-center gap-1.5 px-4 sm:px-5 py-2 rounded-full font-sora font-semibold text-xs sm:text-sm tracking-tight bg-accent-blue text-white hover:bg-accent-blue-hover shadow-blue-glow hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 cursor-pointer"
              >
                <span>Book a free call</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Mobile Menu Toggle Button */}
            <div className="flex md:hidden items-center">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-1.5 rounded-full focus:outline-none transition-colors text-muted-text hover:text-main-text hover:bg-[#1E293B]/60"
                aria-label="Toggle Menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>

          {/* Mobile Menu Dropdown inside Floating Card */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-3 pt-3 pb-4 px-2 space-y-2.5 border-t border-white/10 animate-fadeIn">
              <div className="flex flex-col space-y-1">
                <a
                  href="#home"
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 rounded-lg text-sm font-medium transition-colors text-muted-text hover:text-main-text hover:bg-white/[0.04]"
                >
                  Home
                </a>

                {/* Mobile Services Accordion */}
                <div>
                  <button
                    type="button"
                    onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                    className="w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm font-medium transition-colors text-muted-text hover:text-main-text hover:bg-white/[0.04]"
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
                            className="flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs font-medium transition-colors bg-white/[0.03] text-main-text hover:text-accent-blue"
                          >
                            <Icon className="w-3.5 h-3.5 flex-shrink-0 text-accent-blue" />
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
                  className="px-3 py-2 rounded-lg text-sm font-medium transition-colors text-muted-text hover:text-main-text hover:bg-white/[0.04]"
                >
                  Projects
                </a>

                <a
                  href="#about"
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 rounded-lg text-sm font-medium transition-colors text-muted-text hover:text-main-text hover:bg-white/[0.04]"
                >
                  About
                </a>

                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 rounded-lg text-sm font-medium transition-colors text-muted-text hover:text-main-text hover:bg-white/[0.04]"
                >
                  Contact
                </a>
              </div>

              <div className="pt-2 border-t border-white/10">
                <button
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    if (onOpenProjectModal) {
                      onOpenProjectModal();
                    } else {
                      window.dispatchEvent(new CustomEvent('open-project-modal'));
                    }
                  }}
                  className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-full font-sora font-semibold text-xs tracking-tight transition-all bg-accent-blue text-white hover:bg-accent-blue-hover shadow-blue-glow cursor-pointer"
                >
                  <span>Book a free call</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          )}
        </div>
      </header>
    </>
  );
}
