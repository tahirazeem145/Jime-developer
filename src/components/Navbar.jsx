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
              {/* Clean JD Monogram Mark */}
              <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-[#1A2E1F] to-[#0E1B12] border border-[#A7F3A0]/30 flex items-center justify-center shadow-[0_0_15px_rgba(167,243,160,0.15)] group-hover:border-[#A7F3A0]/70 group-hover:shadow-lime-glow transition-all duration-300">
                <span className="font-sora font-extrabold text-accent-lime text-base tracking-tighter">
                  JD
                </span>
                <span className="absolute -top-1 -right-1 w-2 h-2 bg-accent-lime rounded-full animate-ping opacity-75" />
                <span className="absolute -top-1 -right-1 w-2 h-2 bg-accent-lime rounded-full" />
              </div>
              <span className="font-sora font-bold text-lg sm:text-xl text-main-text tracking-tight group-hover:text-white transition-colors">
                Jime Developers
              </span>
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
