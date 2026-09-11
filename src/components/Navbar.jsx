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
            ? 'bg-slate-900/20 backdrop-blur-sm opacity-100' 
            : 'opacity-0'
        }`} 
      />

      <header className="fixed top-3 sm:top-5 left-0 right-0 z-50 flex justify-center px-3 sm:px-6 pointer-events-none">
        {/* Double-Bezel Outer Shell */}
        <div className={`w-full max-w-6xl p-1 bg-white/80 border border-slate-200/80 hover:border-blue-500/40 shadow-[0_10px_35px_rgba(0,0,0,0.06),0_1px_3px_rgba(0,0,0,0.04)] backdrop-blur-2xl transition-all duration-300 pointer-events-auto ${
          mobileMenuOpen ? 'rounded-2xl sm:rounded-3xl' : 'rounded-full'
        }`}>
          {/* Inner Core Container */}
          <div className={`w-full bg-white/95 px-4 sm:px-6 py-2 sm:py-2.5 shadow-[inset_0_1px_0_rgba(255,255,255,1)] border border-slate-100 transition-all duration-300 ${
            mobileMenuOpen ? 'rounded-xl sm:rounded-2xl' : 'rounded-full'
          }`}>
            <div className="flex items-center justify-between">
              {/* Logo on the left */}
              <div className="flex items-center gap-3">
                <a href="#" className="flex items-center group transition-transform duration-300 hover:scale-[1.02]">
                  <img
                    src="./assets/jime-logo-white.png"
                    alt="Jime Developers"
                    className="h-8 sm:h-9 w-auto object-contain brightness-0 opacity-90 transition-all duration-300"
                  />
                </a>
              </div>

              {/* Desktop Navigation */}
              <nav className="hidden md:flex items-center gap-6 lg:gap-8">
                <a
                  href="#home"
                  className="text-[14px] font-inter font-medium tracking-wide text-slate-600 hover:text-slate-950 transition-colors duration-300 relative py-1 group"
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
                    className="flex items-center gap-1.5 text-[14px] font-inter font-medium tracking-wide text-slate-600 hover:text-slate-950 transition-colors duration-300 focus:outline-none cursor-pointer"
                  >
                    <span className={`transition-colors duration-300 ${servicesHovered ? 'text-accent-blue font-semibold' : ''}`}>
                      Services
                    </span>
                    <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${
                      servicesHovered ? 'rotate-180 text-accent-blue' : 'text-slate-400'
                    }`} />
                  </button>

                  {/* 2x2 Mega Dropdown Menu with Double-Bezel Enclosure */}
                  <div 
                    className={`absolute top-full left-1/2 -translate-x-1/2 pt-3 transition-all duration-300 will-change-transform ${
                      servicesHovered 
                        ? 'opacity-100 translate-y-0 scale-100 pointer-events-auto' 
                        : 'opacity-0 translate-y-3 scale-[0.97] pointer-events-none'
                    }`}
                  >
                    <div className="w-[580px] sm:w-[620px] lg:w-[660px] p-1.5 rounded-2xl bg-white border border-slate-200/90 shadow-[0_25px_60px_rgba(0,0,0,0.12)]">
                      <div className="w-full rounded-[calc(1rem-0.125rem)] bg-white p-4 border border-slate-100">
                        
                        {/* Header bar inside mega menu */}
                        <div className="flex items-center justify-between pb-3 mb-3 border-b px-1 border-slate-100">
                          <span className="text-xs font-sora font-semibold tracking-wider uppercase text-accent-blue">
                            Our Services
                          </span>
                          <span className="text-xs font-inter text-slate-500">
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
                                  className="flex items-start gap-3.5 p-3 rounded-xl border transition-all duration-300 group/item bg-slate-50/60 hover:bg-blue-50/50 border-slate-200/70 hover:border-blue-300 shadow-sm"
                                >
                                  <div className="w-10 h-10 rounded-lg border flex items-center justify-center flex-shrink-0 transition-all duration-300 bg-blue-50 border-blue-100 group-hover/item:border-accent-blue/40 group-hover/item:bg-blue-100">
                                    <Icon className="w-5 h-5 transition-transform duration-300 group-hover/item:scale-110 text-accent-blue" />
                                  </div>
                                  <div className="flex-1 text-left min-w-0">
                                    <div className="font-sora font-semibold text-[14px] transition-colors flex items-center justify-between text-slate-900 group-hover/item:text-accent-blue">
                                      <span className="truncate">{item.title}</span>
                                      <ArrowRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all duration-300 flex-shrink-0 text-accent-blue" />
                                    </div>
                                    <p className="text-[12px] font-inter mt-0.5 line-clamp-2 leading-snug text-slate-500">
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
                                  className="flex items-start gap-3.5 p-3 rounded-xl border transition-all duration-300 group/item bg-slate-50/60 hover:bg-blue-50/50 border-slate-200/70 hover:border-blue-300 shadow-sm"
                                >
                                  <div className="w-10 h-10 rounded-lg border flex items-center justify-center flex-shrink-0 transition-all duration-300 bg-blue-50 border-blue-100 group-hover/item:border-accent-blue/40 group-hover/item:bg-blue-100">
                                    <Icon className="w-5 h-5 transition-transform duration-300 group-hover/item:scale-110 text-accent-blue" />
                                  </div>
                                  <div className="flex-1 text-left min-w-0">
                                    <div className="font-sora font-semibold text-[14px] transition-colors flex items-center justify-between text-slate-900 group-hover/item:text-accent-blue">
                                      <span className="truncate">{item.title}</span>
                                      <ArrowRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all duration-300 flex-shrink-0 text-accent-blue" />
                                    </div>
                                    <p className="text-[12px] font-inter mt-0.5 line-clamp-2 leading-snug text-slate-500">
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
                </div>

                <a
                  href="#projects"
                  className="text-[14px] font-inter font-medium tracking-wide text-slate-600 hover:text-slate-950 transition-colors relative py-1 group"
                >
                  Projects
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-accent-blue transition-all duration-300 ease-out group-hover:w-full rounded-full" />
                </a>

                <a
                  href="#testimonials"
                  className="text-[14px] font-inter font-medium tracking-wide text-slate-600 hover:text-slate-950 transition-colors relative py-1 group"
                >
                  Testimonials
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-accent-blue transition-all duration-300 ease-out group-hover:w-full rounded-full" />
                </a>

                <a
                  href="#faq"
                  className="text-[14px] font-inter font-medium tracking-wide text-slate-600 hover:text-slate-950 transition-colors relative py-1 group"
                >
                  FAQ
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-accent-blue transition-all duration-300 ease-out group-hover:w-full rounded-full" />
                </a>

                <a
                  href="#contact"
                  className="text-[14px] font-inter font-medium tracking-wide text-slate-600 hover:text-slate-950 transition-colors relative py-1 group"
                >
                  Contact
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-accent-blue transition-all duration-300 ease-out group-hover:w-full rounded-full" />
                </a>
              </nav>

              {/* Right Action Button */}
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
                  className="group inline-flex items-center gap-2 pl-4 sm:pl-5 pr-1.5 py-1.5 rounded-full font-sora font-semibold text-xs sm:text-sm tracking-tight bg-slate-950 text-white hover:bg-accent-blue shadow-[0_4px_14px_rgba(15,23,42,0.2)] hover:shadow-[0_4px_20px_rgba(37,99,235,0.35)] active:scale-[0.98] transition-all duration-300 cursor-pointer"
                >
                  <span>Book a free call</span>
                  <div className="w-6 h-6 rounded-full bg-white/20 group-hover:bg-white/30 flex items-center justify-center transition-transform duration-300 group-hover:translate-x-0.5">
                    <ArrowRight className="w-3.5 h-3.5 text-white" />
                  </div>
                </button>
              </div>

              {/* Mobile Menu Toggle Button */}
              <div className="flex md:hidden items-center">
                <button
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className="p-1.5 rounded-full focus:outline-none transition-colors text-slate-600 hover:text-slate-950 hover:bg-slate-100 cursor-pointer"
                  aria-label="Toggle Menu"
                >
                  {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                </button>
              </div>
            </div>

            {/* Mobile Menu Dropdown inside Floating Card */}
            {mobileMenuOpen && (
              <div className="md:hidden mt-3 pt-3 pb-4 px-2 space-y-2.5 border-t border-slate-100 animate-fadeIn text-left">
                <div className="flex flex-col space-y-1">
                  <a
                    href="#home"
                    onClick={() => setMobileMenuOpen(false)}
                    className="px-3 py-2 rounded-lg text-sm font-medium transition-colors text-slate-700 hover:text-slate-950 hover:bg-slate-100"
                  >
                    Home
                  </a>

                  {/* Mobile Services Accordion */}
                  <div>
                    <button
                      type="button"
                      onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                      className="w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm font-medium transition-colors text-slate-700 hover:text-slate-950 hover:bg-slate-100"
                    >
                      <span>Services</span>
                      <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${
                        mobileServicesOpen ? 'rotate-180 text-accent-blue' : 'text-slate-400'
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
                              className="flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs font-medium transition-colors bg-slate-50 text-slate-800 hover:text-accent-blue hover:bg-blue-50/60"
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
                    className="px-3 py-2 rounded-lg text-sm font-medium transition-colors text-slate-700 hover:text-slate-950 hover:bg-slate-100"
                  >
                    Projects
                  </a>

                  <a
                    href="#testimonials"
                    onClick={() => setMobileMenuOpen(false)}
                    className="px-3 py-2 rounded-lg text-sm font-medium transition-colors text-slate-700 hover:text-slate-950 hover:bg-slate-100"
                  >
                    Testimonials
                  </a>

                  <a
                    href="#faq"
                    onClick={() => setMobileMenuOpen(false)}
                    className="px-3 py-2 rounded-lg text-sm font-medium transition-colors text-slate-700 hover:text-slate-950 hover:bg-slate-100"
                  >
                    FAQ
                  </a>

                  <a
                    href="#contact"
                    onClick={() => setMobileMenuOpen(false)}
                    className="px-3 py-2 rounded-lg text-sm font-medium transition-colors text-slate-700 hover:text-slate-950 hover:bg-slate-100"
                  >
                    Contact
                  </a>
                </div>

                <div className="pt-2 border-t border-slate-100">
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
                    className="group w-full flex items-center justify-between pl-5 pr-2 py-2.5 rounded-full font-sora font-semibold text-xs tracking-tight bg-slate-950 text-white hover:bg-accent-blue shadow-[0_4px_14px_rgba(15,23,42,0.2)] cursor-pointer"
                  >
                    <span>Book a free call</span>
                    <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
                      <ArrowRight className="w-3.5 h-3.5 text-white" />
                    </div>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </header>
    </>
  );
}
