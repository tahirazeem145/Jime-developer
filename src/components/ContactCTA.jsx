import React, { useState } from 'react';
import { 
  Star, 
  Send, 
  CheckCircle2, 
  MessageCircle, 
  Instagram, 
  Linkedin, 
  Phone, 
  Mail, 
  User, 
  MessageSquare,
  Sparkles,
  ArrowRight
} from 'lucide-react';

export default function ContactCTA() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const WHATSAPP_URL = "https://api.whatsapp.com/send/?phone=918610647763&text=Hi+Jime+Developers%2C+I%27d+like+to+talk+about+a+project.&type=phone_number&app_absent=0";
  const INSTAGRAM_URL = "https://www.instagram.com/jime_developers/";
  const LINKEDIN_URL = "https://www.linkedin.com/company/jime-developers/?originalSubdomain=in";

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Format message to send directly via WhatsApp
    const messageText = `*New Project Inquiry - Jime Developers*%0A%0A*Name:* ${encodeURIComponent(formData.name)}%0A*Email:* ${encodeURIComponent(formData.email)}%0A*Phone:* ${encodeURIComponent(formData.phone)}${formData.message ? `%0A*Message:* ${encodeURIComponent(formData.message)}` : ''}`;
    const dynamicWhatsAppUrl = `https://api.whatsapp.com/send/?phone=918610647763&text=${messageText}&type=phone_number&app_absent=0`;

    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
      window.open(dynamicWhatsAppUrl, '_blank', 'noopener,noreferrer');
    }, 600);
  };

  return (
    <section id="contact" className="relative z-10 w-full bg-transparent pt-10 sm:pt-14 pb-20 sm:pb-28 px-4 sm:px-6 lg:px-8 overflow-hidden select-none border-t border-white/5">
      <div className="max-w-7xl mx-auto relative z-20">
        
        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-20">
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 hover:border-accent-blue/40 shadow-sm backdrop-blur-md transition-all mb-3.5">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-blue opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-blue shadow-[0_0_8px_rgba(59,130,246,0.9)]"></span>
            </span>
            <span className="text-xs font-sora font-semibold tracking-wider uppercase text-accent-blue">
              CONTACT US
            </span>
          </div>

          <h2 className="font-sora font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-[48px] leading-[1.15] text-white tracking-tight">
            Let's build your next{' '}
            <span className="text-accent-blue italic drop-shadow-[0_0_25px_rgba(59,130,246,0.35)]">
              digital product.
            </span>
          </h2>

          <p className="mt-4 text-sm sm:text-base text-muted-text font-inter max-w-xl mx-auto leading-relaxed">
            Tell us about your project vision, timeline, and requirements. We'll reply with a clear technical roadmap and estimate within 24 hours.
          </p>
        </div>

        {/* 2-COLUMN LAYOUT: (Left: Trust, Google Rating, Testimonial & WhatsApp | Right: Contact Form) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* LEFT COLUMN: SOCIAL PROOF & QUICK CONNECT (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-6 text-left">
            
            {/* 1. GOOGLE 5-STAR RATING CARD */}
            <div className="p-1 rounded-2xl bg-white/[0.04] border border-white/10 shadow-lg backdrop-blur-md">
              <div className="p-5 sm:p-6 rounded-[calc(1rem-0.125rem)] bg-[#0B101D]/90 flex items-center justify-between gap-4">
                <div>
                  <div className="flex items-center gap-1.5 mb-1.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400 drop-shadow-[0_0_8px_rgba(251,191,36,0.5)]" />
                    ))}
                  </div>
                  <span className="font-sora font-bold text-sm sm:text-base text-white block">
                    5.0 Google Rating
                  </span>
                  <span className="text-xs text-muted-text font-inter">
                    Verified client reviews across India & Malaysia
                  </span>
                </div>

                {/* Google Brand Badge */}
                <div className="w-12 h-12 rounded-xl bg-white/[0.06] border border-white/10 flex items-center justify-center flex-shrink-0 shadow-sm">
                  <svg className="w-6 h-6" viewBox="0 0 24 24">
                    <path
                      fill="#4285F4"
                      d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.66-5.17 3.66-9.17Z"
                    />
                    <path
                      fill="#34A853"
                      d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.34 24 12 24Z"
                    />
                    <path
                      fill="#FBBC05"
                      d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.16 0 9.94 0 12s.45 3.84 1.25 5.42l4.03-3.15Z"
                    />
                    <path
                      fill="#EA4335"
                      d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.34 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98Z"
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* 2. SHORT TESTIMONIAL CARD */}
            <div className="p-1 rounded-2xl bg-white/[0.04] border border-white/10 shadow-lg backdrop-blur-md">
              <div className="p-5 sm:p-6 rounded-[calc(1rem-0.125rem)] bg-[#0B101D]/90">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-accent-blue/20 border border-accent-blue/40 flex items-center justify-center text-accent-blue font-sora font-bold text-sm">
                    PR
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5">
                      <h4 className="font-sora font-bold text-sm text-white">
                        Praveen Raj
                      </h4>
                      <span className="text-xs" title="Malaysia">🇲🇾</span>
                    </div>
                    <span className="text-[11px] text-muted-text font-inter">
                      Client & Researcher · Kuala Lumpur
                    </span>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 font-inter leading-relaxed italic">
                  "Completed my project within a short period of time and delivered it in a very professional way. Highly recommend for skilled and reliable engineering support."
                </p>

                <div className="mt-3 pt-3 border-t border-white/5 flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-[11px] text-emerald-400 font-inter font-medium flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3" />
                    Verified Project
                  </span>
                </div>
              </div>
            </div>

            {/* 3. DIRECT WHATSAPP BUTTON CARD */}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1 rounded-2xl bg-gradient-to-r from-emerald-500/30 to-emerald-600/10 border border-emerald-500/40 shadow-[0_10px_30px_rgba(16,185,129,0.15)] hover:shadow-[0_15px_40px_rgba(16,185,129,0.25)] transition-all duration-300 group block cursor-pointer"
            >
              <div className="p-4 sm:p-5 rounded-[calc(1rem-0.125rem)] bg-[#0B101D]/90 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3.5">
                  <div className="w-11 h-11 rounded-xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform duration-300 shadow-[0_0_15px_rgba(16,185,129,0.4)]">
                    <MessageCircle className="w-5 h-5 fill-emerald-400/20" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-sora font-bold text-sm text-white group-hover:text-emerald-300 transition-colors">
                        Chat on WhatsApp
                      </span>
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    </div>
                    <span className="text-xs text-muted-text font-inter">
                      +91 86106 47763 · Usually replies in minutes
                    </span>
                  </div>
                </div>

                <div className="w-8 h-8 rounded-full bg-white/[0.06] group-hover:bg-emerald-500 group-hover:text-white flex items-center justify-center text-slate-400 transition-all duration-300 flex-shrink-0">
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                </div>
              </div>
            </a>

            {/* 4. SOCIAL MEDIA CHANNELS */}
            <div className="flex items-center justify-between p-4 rounded-xl bg-white/[0.03] border border-white/10">
              <span className="text-xs font-sora font-medium text-slate-300">
                Follow our updates & work:
              </span>
              <div className="flex items-center gap-2.5">
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="w-9 h-9 rounded-lg bg-white/[0.06] hover:bg-gradient-to-tr hover:from-amber-500 hover:via-pink-500 hover:to-purple-600 border border-white/10 hover:border-transparent flex items-center justify-center text-slate-300 hover:text-white transition-all duration-300 shadow-sm"
                  title="Instagram"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href={LINKEDIN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="w-9 h-9 rounded-lg bg-white/[0.06] hover:bg-[#0A66C2] border border-white/10 hover:border-transparent flex items-center justify-center text-slate-300 hover:text-white transition-all duration-300 shadow-sm"
                  title="LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: CONTACT FORM (7 cols) */}
          <div className="lg:col-span-7">
            <div className="p-1 sm:p-1.5 rounded-3xl bg-white/[0.04] border border-white/10 backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.8),0_0_30px_rgba(59,130,246,0.08)]">
              <div className="p-6 sm:p-8 md:p-10 rounded-[calc(1.5rem-0.375rem)] bg-[#0B101D]/95 text-left border border-white/5 shadow-[inset_0_1px_1px_rgba(255,255,255,0.08)]">
                
                <h3 className="font-sora font-bold text-xl sm:text-2xl text-white mb-2">
                  Send us a message
                </h3>
                <p className="text-xs sm:text-sm text-muted-text font-inter mb-6 sm:mb-8">
                  Fill in your details below and we'll connect with you right away.
                </p>

                {isSubmitted ? (
                  <div className="p-8 text-center rounded-2xl bg-white/[0.02] border border-emerald-500/30 animate-fadeIn space-y-4">
                    <div className="w-14 h-14 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 mx-auto shadow-lg">
                      <CheckCircle2 className="w-7 h-7" />
                    </div>
                    <h4 className="font-sora font-bold text-lg text-white">
                      Inquiry Sent Successfully!
                    </h4>
                    <p className="text-xs sm:text-sm text-muted-text font-inter max-w-md mx-auto">
                      Thank you for reaching out. We have opened WhatsApp with your message and our team will get back to you shortly.
                    </p>
                    <button
                      type="button"
                      onClick={() => setIsSubmitted(false)}
                      className="px-5 py-2 text-xs font-sora font-semibold text-accent-blue hover:text-white transition-colors"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                    
                    {/* 1. NAME FIELD */}
                    <div>
                      <label className="block text-xs font-sora font-semibold text-slate-300 uppercase tracking-wider mb-2">
                        Your Name <span className="text-accent-blue">*</span>
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-muted-text">
                          <User className="w-4 h-4" />
                        </div>
                        <input
                          type="text"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="e.g. Rahul Sharma"
                          className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 hover:border-white/20 focus:border-accent-blue focus:bg-white/[0.05] focus:outline-none text-sm text-white placeholder-slate-500 font-inter transition-all duration-200"
                        />
                      </div>
                    </div>

                    {/* 2. EMAIL & PHONE ROW */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* EMAIL FIELD */}
                      <div>
                        <label className="block text-xs font-sora font-semibold text-slate-300 uppercase tracking-wider mb-2">
                          Email Address <span className="text-accent-blue">*</span>
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-muted-text">
                            <Mail className="w-4 h-4" />
                          </div>
                          <input
                            type="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="you@example.com"
                            className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 hover:border-white/20 focus:border-accent-blue focus:bg-white/[0.05] focus:outline-none text-sm text-white placeholder-slate-500 font-inter transition-all duration-200"
                          />
                        </div>
                      </div>

                      {/* PHONE NUMBER FIELD */}
                      <div>
                        <label className="block text-xs font-sora font-semibold text-slate-300 uppercase tracking-wider mb-2">
                          Phone Number <span className="text-accent-blue">*</span>
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-muted-text">
                            <Phone className="w-4 h-4" />
                          </div>
                          <input
                            type="tel"
                            name="phone"
                            required
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="+91 98765 43210"
                            className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 hover:border-white/20 focus:border-accent-blue focus:bg-white/[0.05] focus:outline-none text-sm text-white placeholder-slate-500 font-inter transition-all duration-200"
                          />
                        </div>
                      </div>
                    </div>

                    {/* 3. MESSAGE FIELD (OPTIONAL) */}
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <label className="text-xs font-sora font-semibold text-slate-300 uppercase tracking-wider">
                          Project Details
                        </label>
                        <span className="text-[11px] text-muted-text font-inter">
                          Optional
                        </span>
                      </div>
                      <div className="relative">
                        <textarea
                          name="message"
                          rows={3}
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="Briefly describe your project requirements, features, or timeline..."
                          className="w-full p-3.5 rounded-xl bg-white/[0.03] border border-white/10 hover:border-white/20 focus:border-accent-blue focus:bg-white/[0.05] focus:outline-none text-sm text-white placeholder-slate-500 font-inter transition-all duration-200 resize-none"
                        />
                      </div>
                    </div>

                    {/* 4. SUBMIT BUTTON */}
                    <button
                      type="submit"
                      disabled={isLoading}
                      className="w-full py-3.5 px-6 rounded-xl bg-accent-blue hover:bg-accent-blue-hover text-white font-sora font-semibold text-sm tracking-wide shadow-[0_0_25px_rgba(59,130,246,0.45)] hover:shadow-[0_0_35px_rgba(59,130,246,0.7)] active:scale-[0.99] transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer mt-2 disabled:opacity-50"
                    >
                      {isLoading ? (
                        <span>Sending message...</span>
                      ) : (
                        <>
                          <span>Submit & Chat on WhatsApp</span>
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>

                    <p className="text-[11px] text-muted-text text-center font-inter pt-1">
                      🔒 Zero spam. We sign non-disclosure agreements (NDAs) upon request.
                    </p>

                  </form>
                )}

              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
