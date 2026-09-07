import React, { useState } from 'react';
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

  const serviceItems = [
    {
      title: 'Web Development',
      href: 'https://www.jimedevelopers.in/web-development',
      icon: Code,
      desc: 'High-performance modern websites'
    },
    {
      title: 'E-commerce Development',
      href: 'https://www.jimedevelopers.in/ecommerce-development',
      icon: ShoppingBag,
      desc: 'Online stores built to scale'
    },
    {
      title: 'Mobile App Development',
      href: 'https://www.jimedevelopers.in/mobile-app-development',
      icon: Smartphone,
      desc: 'iOS & Android native apps'
    },
    {
      title: 'Web App & SaaS',
      href: 'https://www.jimedevelopers.in/saas-development',
      icon: Layers,
      desc: 'Scalable cloud applications'
    },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full bg-background/80 backdrop-blur-md border-b border-[#1A2E1F]/70 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo on the left */}
          <div className="flex items-center gap-3">
            <a href="#" className="flex items-center group transition-transform duration-200 hover:scale-[1.02]">
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
              className="text-muted-text hover:text-main-text text-[14px] font-inter font-medium tracking-wide transition-colors relative py-1 group"
            >
              Home
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-accent-lime transition-all duration-300 group-hover:w-full rounded-full" />
            </a>

            {/* Services with Smooth Animated Dropdown */}
            <div className="relative group py-5">
              <button
                type="button"
                className="flex items-center gap-1.5 text-muted-text group-hover:text-main-text text-[14px] font-inter font-medium tracking-wide transition-colors focus:outline-none"
              >
                <span>Services</span>
                <ChevronDown className="w-4 h-4 text-muted-text/80 transition-transform duration-300 group-hover:rotate-180 group-hover:text-accent-lime" />
              </button>

              {/* Animated Dropdown Menu */}
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 opacity-0 translate-y-3 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-300 ease-out">
                <div className="w-80 p-2.5 rounded-2xl bg-[#0E1711]/95 backdrop-blur-2xl border border-[#1A2E1F] shadow-[0_15px_40px_rgba(0,0,0,0.8),0_0_20px_rgba(167,243,160,0.08)] space-y-1">
                  {serviceItems.map((item) => {
                    const Icon = item.icon;
                    return (
                      <a
                        key={item.title}
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3.5 p-2.5 rounded-xl hover:bg-[#142619]/80 border border-transparent hover:border-[#1A3822] transition-all duration-200 group/item"
                      >
                        <div className="w-9 h-9 rounded-lg bg-[#142318] border border-[#1E3825] flex items-center justify-center flex-shrink-0 group-hover/item:border-[#A7F3A0]/40 group-hover/item:bg-[#1A3822] shadow-[0_0_10px_rgba(0,0,0,0.3)] transition-all duration-200">
                          <Icon className="w-4.5 h-4.5 text-accent-lime transition-transform duration-200 group-hover/item:scale-110" />
                        </div>
                        <div className="flex-1 text-left min-w-0">
                          <div className="font-sora font-semibold text-[13.5px] text-main-text group-hover/item:text-accent-lime transition-colors flex items-center justify-between">
                            <span className="truncate">{item.title}</span>
                            <ArrowRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all duration-200 text-accent-lime" />
                          </div>
                          <p className="text-[11.5px] text-muted-text/80 font-inter truncate">
                            {item.desc}
                          </p>
                        </div>
                      </a>
                    );
                  })}
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
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${mobileServicesOpen ? 'rotate-180 text-accent-lime' : ''}`} />
              </button>

              {mobileServicesOpen && (
                <div className="pl-3 pr-1 py-1 space-y-1">
                  {serviceItems.map((item) => {
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
  );
}
