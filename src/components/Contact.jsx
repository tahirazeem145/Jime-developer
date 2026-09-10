import React, { useState, useEffect, useRef } from 'react';
import { 
  Mail, 
  Phone, 
  MessageSquare, 
  Send, 
  CheckCircle2, 
  Sparkles, 
  MapPin, 
  ArrowUpRight, 
  ArrowRight, 
  ChevronUp 
} from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'Web Development',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);

  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const formCardRef = useRef(null);
  const infoCardRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header animation
      if (headerRef.current) {
        gsap.fromTo(
          headerRef.current,
          { opacity: 0, y: 30 },
          {
            scrollTrigger: {
              trigger: headerRef.current,
              start: 'top 85%',
              once: true,
            },
            opacity: 1,
            y: 0,
            duration: 0.75,
            ease: 'power3.out',
          }
        );
      }

      // Cards staggered entrance
      const cards = [formCardRef.current, infoCardRef.current].filter(Boolean);
      if (cards.length > 0) {
        gsap.fromTo(
          cards,
          { opacity: 0, y: 30 },
          {
            scrollTrigger: {
              trigger: formCardRef.current,
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
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);
    setTimeout(() => {
      setIsSending(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', service: 'Web Development', message: '' });
      setTimeout(() => setSubmitted(false), 5000);
    }, 800);
  };

  const scrollToTop = () => {
    if (window.lenis) {
      window.lenis.scrollTo(0, { duration: 1.2 });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="contact" 
      ref={sectionRef}
      className="relative z-30 pt-20 sm:pt-28 pb-12 bg-[#080C0A] text-white border-t border-white/15"
    >
      {/* Anchor point for book-call */}
      <div id="book-call" className="absolute -top-24 left-0 w-full h-1 pointer-events-none" />

      {/* Ambient background glows */}
      <div 
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full opacity-10 blur-[140px] pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(255,255,255,0.18) 0%, transparent 70%)'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* SECTION HEADER */}
        <div ref={headerRef} className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-pill-bw mb-5 animate-fadeIn">
            <Sparkles className="w-3.5 h-3.5 text-white animate-pulse" />
            <span className="font-sora font-semibold text-xs tracking-wider uppercase text-white">
              Get in Touch
            </span>
          </div>

          <h2 className="font-sora font-extrabold text-3xl sm:text-4xl md:text-5xl text-white leading-[1.15] tracking-tight">
            Let's build something{' '}
            <span className="text-white italic font-extrabold inline-block drop-shadow-[0_0_20px_rgba(255,255,255,0.3)]">
              extraordinary together.
            </span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-neutral-400 font-inter font-normal leading-relaxed">
            Have a project in mind or want to explore working together? Send us a message or book a free discovery call.
          </p>
        </div>

        {/* 2-COLUMN CONTACT GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-20">
          
          {/* LEFT: INTERACTIVE CONTACT & QUOTE FORM (7 cols) */}
          <div 
            ref={formCardRef}
            className="lg:col-span-7 rounded-3xl glass-card-bw bg-gradient-to-b from-[#141417]/95 to-[#0C0C0E]/98 p-6 sm:p-9 border border-white/20 shadow-[0_20px_50px_rgba(0,0,0,0.85)]"
          >
            <h3 className="font-sora font-bold text-xl sm:text-2xl text-white mb-2">
              Request a Free Quote / Consultation
            </h3>
            <p className="text-neutral-400 font-inter text-xs sm:text-sm mb-6">
              Fill out the form below and an engineer will respond within 24 hours.
            </p>

            {submitted ? (
              <div className="p-6 rounded-2xl bg-neutral-900/90 border border-white/30 flex flex-col items-center text-center gap-3 animate-fadeIn">
                <CheckCircle2 className="w-10 h-10 text-white animate-bounce" />
                <h4 className="font-sora font-bold text-lg text-white">Message Received!</h4>
                <p className="font-inter text-sm text-neutral-300 max-w-sm">
                  Thank you for reaching out. We will review your requirements and get back to you shortly with next steps.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-inter font-medium text-neutral-300 mb-1.5">
                      Your Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Alex Morgan"
                      className="w-full px-4 py-3 rounded-xl bg-neutral-900/80 border border-white/15 text-white placeholder:text-neutral-500 text-sm font-inter focus:outline-none focus:border-white/50 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-inter font-medium text-neutral-300 mb-1.5">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="alex@example.com"
                      className="w-full px-4 py-3 rounded-xl bg-neutral-900/80 border border-white/15 text-white placeholder:text-neutral-500 text-sm font-inter focus:outline-none focus:border-white/50 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-inter font-medium text-neutral-300 mb-1.5">
                    Service Interested In
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-neutral-900/80 border border-white/15 text-white text-sm font-inter focus:outline-none focus:border-white/50 transition-colors cursor-pointer"
                  >
                    <option value="Web Development" className="bg-neutral-900 text-white">Web Development</option>
                    <option value="E-commerce Development" className="bg-neutral-900 text-white">E-commerce Development</option>
                    <option value="Mobile App Development" className="bg-neutral-900 text-white">Mobile App Development</option>
                    <option value="Web App & SaaS" className="bg-neutral-900 text-white">Web App & SaaS Development</option>
                    <option value="General Inquiry" className="bg-neutral-900 text-white">General Inquiry</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-inter font-medium text-neutral-300 mb-1.5">
                    Project Brief / Details
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project goals, timelines, or requirements..."
                    className="w-full px-4 py-3 rounded-xl bg-neutral-900/80 border border-white/15 text-white placeholder:text-neutral-500 text-sm font-inter focus:outline-none focus:border-white/50 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSending}
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white text-black font-sora font-semibold text-sm hover:bg-neutral-200 hover:shadow-[0_0_20px_rgba(255,255,255,0.4)] hover:scale-[1.01] active:scale-[0.98] transition-all disabled:opacity-50"
                >
                  {isSending ? (
                    <span>Sending inquiry...</span>
                  ) : (
                    <>
                      <span>Send Project Request</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* RIGHT: DIRECT CHANNELS & STUDIO INFO (5 cols) */}
          <div 
            ref={infoCardRef}
            className="lg:col-span-5 flex flex-col gap-6"
          >
            {/* Quick Contact Info */}
            <div className="rounded-3xl glass-card-bw bg-gradient-to-b from-[#141417]/95 to-[#0C0C0E]/98 p-6 sm:p-8 border border-white/20 shadow-xl space-y-5">
              <h3 className="font-sora font-bold text-lg sm:text-xl text-white">
                Direct Channels
              </h3>

              <div className="space-y-4">
                <a
                  href="mailto:contact@jimedevelopers.in"
                  className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-neutral-900/60 border border-white/10 hover:border-white/30 hover:bg-neutral-800/70 transition-all group"
                >
                  <div className="w-10 h-10 rounded-xl bg-neutral-800 flex items-center justify-center text-white group-hover:scale-105 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="block text-[11px] font-mono text-neutral-400">Email Us</span>
                    <span className="block text-xs sm:text-sm font-inter font-medium text-white truncate">
                      contact@jimedevelopers.in
                    </span>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-neutral-400 group-hover:text-white transition-colors" />
                </a>

                <a
                  href="https://wa.me/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-neutral-900/60 border border-white/10 hover:border-white/30 hover:bg-neutral-800/70 transition-all group"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#25D366]/20 border border-[#25D366]/40 flex items-center justify-center text-[#25D366] group-hover:scale-105 transition-transform">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="block text-[11px] font-mono text-neutral-400">Instant Chat</span>
                    <span className="block text-xs sm:text-sm font-inter font-medium text-white truncate">
                      WhatsApp Collaboration
                    </span>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-neutral-400 group-hover:text-white transition-colors" />
                </a>

                <div className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-neutral-900/60 border border-white/10">
                  <div className="w-10 h-10 rounded-xl bg-neutral-800 flex items-center justify-center text-white">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-[11px] font-mono text-neutral-400">Studio Location</span>
                    <span className="block text-xs sm:text-sm font-inter font-medium text-white">
                      Aranthangi, Tamil Nadu, India
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Academy & Mentorship Banner */}
            <div className="rounded-3xl glass-card-bw bg-gradient-to-r from-[#18181c]/95 to-[#121214]/95 p-6 sm:p-7 border border-white/20">
              <div className="flex items-center justify-between gap-2 mb-2">
                <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-400">Learning Platform</span>
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-inter font-semibold bg-white text-black">Live</span>
              </div>
              <h4 className="font-sora font-bold text-base text-white">
                Learn to Code with Jime Developers
              </h4>
              <p className="mt-1 text-xs text-neutral-400 font-inter leading-relaxed">
                Project-based mentorship in Python, React, and Full-Stack Engineering.
              </p>
              <a
                href="https://learn.jimedevelopers.in"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-1.5 text-xs font-sora font-semibold text-white hover:text-neutral-300 transition-colors group/link"
              >
                <span>Visit learn.jimedevelopers.in</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-1" />
              </a>
            </div>

          </div>

        </div>

        {/* FOOTER STRIP */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-inter text-neutral-400">
          <div className="flex items-center gap-3">
            <img
              src="/assets/jime-logo-brand.png"
              alt="Jime Developers"
              className="h-6 w-auto object-contain opacity-80"
            />
            <span>© {new Date().getFullYear()} Jime Developers. All rights reserved.</span>
          </div>

          <div className="flex items-center gap-6">
            <a href="#home" className="hover:text-white transition-colors">Home</a>
            <a href="#services" className="hover:text-white transition-colors">Services</a>
            <a href="#projects" className="hover:text-white transition-colors">Projects</a>
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1 text-neutral-300 hover:text-white transition-colors p-1"
              aria-label="Back to top"
            >
              <span>Back to Top</span>
              <ChevronUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
