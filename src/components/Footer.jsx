import React from 'react';
import { Instagram, Linkedin } from 'lucide-react';

export default function Footer({ onOpenProjectModal }) {
  return (
    <footer className="relative z-20 w-full bg-[#06090F] border-t border-white/10 pt-16 sm:pt-20 pb-12 px-4 sm:px-6 lg:px-12 select-none">
      <div className="max-w-7xl mx-auto">
        
        {/* TOP SECTION: 4 COLUMNS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 sm:gap-12 pb-14 sm:pb-16 border-b border-white/10">
          
          {/* COLUMN 1: BRAND INFO (Spans 2 columns on large screens) */}
          <div className="lg:col-span-2 flex flex-col items-start text-left max-w-sm">
            {/* Logo */}
            <a href="#" className="inline-block mb-5 transition-transform duration-300 hover:scale-[1.02]">
              <img
                src="/assets/jime-logo-white.png"
                alt="Jime Developers"
                className="h-8 sm:h-9 w-auto object-contain brightness-0 invert drop-shadow-[0_0_15px_rgba(255,255,255,0.15)]"
              />
            </a>

            {/* Studio Description */}
            <p className="text-xs sm:text-sm text-slate-400 font-inter leading-relaxed mb-6">
              A web development studio building websites and apps for founders and small businesses. Based in Tamil Nadu, working with clients across India and Malaysia.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3">
              <a
                href="https://www.instagram.com/jimedevelopers/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-8 h-8 rounded-lg bg-white/[0.04] border border-white/10 hover:border-accent-blue/50 hover:bg-accent-blue/10 flex items-center justify-center text-slate-400 hover:text-accent-blue transition-all duration-300"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/company/jime-developers/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-8 h-8 rounded-lg bg-white/[0.04] border border-white/10 hover:border-accent-blue/50 hover:bg-accent-blue/10 flex items-center justify-center text-slate-400 hover:text-accent-blue transition-all duration-300"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* COLUMN 2: SERVICES */}
          <div className="flex flex-col text-left">
            <h4 className="font-sora font-bold text-xs sm:text-sm tracking-wider uppercase text-white mb-4 sm:mb-5">
              SERVICES
            </h4>
            <ul className="space-y-2.5 sm:space-y-3 text-xs sm:text-sm text-slate-400 font-inter">
              <li>
                <a
                  href="https://www.jimedevelopers.in/web-development"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent-blue transition-colors duration-200"
                >
                  Web Development
                </a>
              </li>
              <li>
                <a
                  href="https://www.jimedevelopers.in/web-development"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent-blue transition-colors duration-200"
                >
                  E-commerce Development
                </a>
              </li>
              <li>
                <a
                  href="https://www.jimedevelopers.in/mobile-app-development"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent-blue transition-colors duration-200"
                >
                  Mobile App Development
                </a>
              </li>
              <li>
                <a
                  href="https://www.jimedevelopers.in/custom-ai-ml"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent-blue transition-colors duration-200"
                >
                  Web App & SaaS
                </a>
              </li>
            </ul>
          </div>

          {/* COLUMN 3: COMPANY */}
          <div className="flex flex-col text-left">
            <h4 className="font-sora font-bold text-xs sm:text-sm tracking-wider uppercase text-white mb-4 sm:mb-5">
              COMPANY
            </h4>
            <ul className="space-y-2.5 sm:space-y-3 text-xs sm:text-sm text-slate-400 font-inter">
              <li>
                <a
                  href="#home"
                  className="hover:text-accent-blue transition-colors duration-200"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="https://www.jimedevelopers.in/blog"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent-blue transition-colors duration-200"
                >
                  Blog
                </a>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => {
                    if (onOpenProjectModal) {
                      onOpenProjectModal();
                    } else {
                      window.dispatchEvent(new CustomEvent('open-project-modal'));
                    }
                  }}
                  className="hover:text-accent-blue transition-colors duration-200 cursor-pointer text-left"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* COLUMN 4: LEGAL */}
          <div className="flex flex-col text-left">
            <h4 className="font-sora font-bold text-xs sm:text-sm tracking-wider uppercase text-white mb-4 sm:mb-5">
              LEGAL
            </h4>
            <ul className="space-y-2.5 sm:space-y-3 text-xs sm:text-sm text-slate-400 font-inter">
              <li>
                <a
                  href="https://www.jimedevelopers.in/privacy-policy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent-blue transition-colors duration-200"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="https://www.jimedevelopers.in/terms"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent-blue transition-colors duration-200"
                >
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* BOTTOM BAR: COPYRIGHT */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-inter text-left">
          <p>© 2026 Jime Developers. All rights reserved.</p>
        </div>

      </div>
    </footer>
  );
}
