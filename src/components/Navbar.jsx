import React, { useState } from 'react';
import { Menu, X, ArrowRight, Sparkles } from 'lucide-react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Why Us?', href: '#why-us' },
    { label: 'Blog', href: '#blog' },
    { label: 'Courses', href: '#courses' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Verify Certificate', href: '#verify-certificate' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-md border-b border-[#1A2E1F]/70 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo on the left */}
          <div className="flex items-center gap-3">
            <a href="#" className="flex items-center gap-3 group">
              {/* Fluid JD Ribbon Monogram Mark */}
              <div className="flex items-center justify-center">
                <svg className="w-9 h-9" viewBox="0 0 36 36" fill="none">
                  <path
                    d="M12 8C7.58 8 4 11.58 4 16C4 20.42 7.58 24 12 24H18V12C18 9.79 19.79 8 22 8C24.21 8 26 9.79 26 12V24C26 26.21 24.21 28 22 28H12C5.37 28 0 22.63 0 16C0 9.37 5.37 4 12 4H22C28.63 4 34 9.37 34 16C34 22.63 28.63 28 22 28V24C26.42 24 30 20.42 30 16C30 11.58 26.42 8 22 8H12Z"
                    fill="url(#jdLogoGradient)"
                  />
                  <defs>
                    <linearGradient id="jdLogoGradient" x1="0" y1="4" x2="34" y2="28" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#A7F3A0" />
                      <stop offset="50%" stopColor="#6BC27B" />
                      <stop offset="100%" stopColor="#D2FAD0" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <div className="flex flex-col text-left">
                <span className="font-sora font-bold text-[17px] leading-[1.15] text-main-text tracking-tight group-hover:text-white transition-colors">
                  Jime
                </span>
                <span className="font-sora font-semibold text-[14px] leading-[1.15] text-main-text/90 tracking-tight">
                  Developers
                </span>
              </div>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-7 lg:gap-9">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-muted-text hover:text-main-text text-[14px] font-inter font-medium tracking-wide transition-colors relative py-1 group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-accent-lime transition-all duration-300 group-hover:w-full rounded-full" />
              </a>
            ))}
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
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2.5 rounded-lg text-muted-text hover:text-main-text hover:bg-[#1A2E1F]/40 text-base font-medium transition-colors"
              >
                {link.label}
              </a>
            ))}
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
