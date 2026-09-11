import React, { useState, useEffect, useRef } from 'react';
import { 
  X, 
  ChevronDown, 
  Check, 
  Code, 
  Smartphone, 
  Cpu, 
  TrendingUp, 
  ArrowRight,
  Send,
  CheckCircle2
} from 'lucide-react';
import { gsap } from 'gsap';

export const COUNTRY_CODES = [
  { code: 'IN', dial: '+91', name: 'India', flag: '🇮🇳' },
  { code: 'US', dial: '+1', name: 'United States', flag: '🇺🇸' },
  { code: 'GB', dial: '+44', name: 'United Kingdom', flag: '🇬🇧' },
  { code: 'AE', dial: '+971', name: 'United Arab Emirates', flag: '🇦🇪' },
  { code: 'CA', dial: '+1', name: 'Canada', flag: '🇨🇦' },
  { code: 'AU', dial: '+61', name: 'Australia', flag: '🇦🇺' },
  { code: 'SA', dial: '+966', name: 'Saudi Arabia', flag: '🇸🇦' },
  { code: 'SG', dial: '+65', name: 'Singapore', flag: '🇸🇬' },
  { code: 'DE', dial: '+49', name: 'Germany', flag: '🇩🇪' },
  { code: 'FR', dial: '+33', name: 'France', flag: '🇫🇷' },
  { code: 'MY', dial: '+60', name: 'Malaysia', flag: '🇲🇾' },
  { code: 'QA', dial: '+974', name: 'Qatar', flag: '🇶🇦' },
  { code: 'KW', dial: '+965', name: 'Kuwait', flag: '🇰🇼' },
  { code: 'OM', dial: '+968', name: 'Oman', flag: '🇴🇲' },
  { code: 'NZ', dial: '+64', name: 'New Zealand', flag: '🇳🇿' },
  { code: 'ZA', dial: '+27', name: 'South Africa', flag: '🇿🇦' },
  { code: 'IE', dial: '+353', name: 'Ireland', flag: '🇮🇪' },
  { code: 'NL', dial: '+31', name: 'Netherlands', flag: '🇳🇱' },
  { code: 'CH', dial: '+41', name: 'Switzerland', flag: '🇨🇭' },
  { code: 'SE', dial: '+46', name: 'Sweden', flag: '🇸🇪' },
  { code: 'NO', dial: '+47', name: 'Norway', flag: '🇳🇴' },
  { code: 'JP', dial: '+81', name: 'Japan', flag: '🇯🇵' },
  { code: 'KR', dial: '+82', name: 'South Korea', flag: '🇰🇷' },
  { code: 'BR', dial: '+55', name: 'Brazil', flag: '🇧🇷' },
  { code: 'IT', dial: '+39', name: 'Italy', flag: '🇮🇹' },
  { code: 'ES', dial: '+34', name: 'Spain', flag: '🇪🇸' },
  { code: 'PK', dial: '+92', name: 'Pakistan', flag: '🇵🇰' },
  { code: 'BD', dial: '+880', name: 'Bangladesh', flag: '🇧🇩' },
  { code: 'LK', dial: '+94', name: 'Sri Lanka', flag: '🇱🇰' },
  { code: 'NP', dial: '+977', name: 'Nepal', flag: '🇳🇵' },
];

const SERVICES = [
  { id: 'web', title: 'Web Development', icon: Code, desc: 'Websites & Landing Pages' },
  { id: 'mobile', title: 'Mobile App Development', icon: Smartphone, desc: 'iOS & Android Native Apps' },
  { id: 'ai', title: 'Custom AI & ML', icon: Cpu, desc: 'AI Automation, LLMs & ML' },
  { id: 'marketing', title: 'Digital Marketing', icon: TrendingUp, desc: 'SEO, Ads & Brand Growth' },
];

const BUDGET_OPTIONS = [
  { id: 'less_25k', label: 'Less than 25K', detail: '< ₹25,000' },
  { id: '25k_1l', label: '25K to 1L', detail: '₹25,000 - ₹1,00,000' },
  { id: '1l_5l', label: '1L to 5L', detail: '₹1,00,000 - ₹5,00,000' },
  { id: '5l_plus', label: '5L+', detail: '₹5,00,000+' },
];

export default function ProjectModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    service: '',
    budget: '',
  });

  const [selectedCountry, setSelectedCountry] = useState(COUNTRY_CODES[0]); // Default India +91
  const [countryDropdownOpen, setCountryDropdownOpen] = useState(false);
  const [countrySearch, setCountrySearch] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const modalOverlayRef = useRef(null);
  const modalCardRef = useRef(null);
  const countryDropdownRef = useRef(null);

  // Auto-detect user country via IP
  useEffect(() => {
    let isMounted = true;
    const detectCountry = async () => {
      try {
        const res = await fetch('https://ipapi.co/json/');
        if (res.ok) {
          const data = await res.json();
          if (isMounted && data && data.country_code) {
            const found = COUNTRY_CODES.find((c) => c.code === data.country_code);
            if (found) {
              setSelectedCountry(found);
            } else if (data.country_calling_code) {
              const dialCode = data.country_calling_code.startsWith('+')
                ? data.country_calling_code
                : `+${data.country_calling_code}`;
              setSelectedCountry({
                code: data.country_code,
                dial: dialCode,
                name: data.country_name || data.country_code,
                flag: '🌐',
              });
            }
          }
        }
      } catch (e) {
        // Fallback silently
      }
    };

    detectCountry();
    return () => {
      isMounted = false;
    };
  }, []);

  // GSAP Entrance / Exit Animation & Scroll Lock
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      if (window.lenis) {
        window.lenis.stop();
      }
      
      const ctx = gsap.context(() => {
        gsap.fromTo(
          modalOverlayRef.current,
          { opacity: 0 },
          { opacity: 1, duration: 0.35, ease: 'power2.out' }
        );
        gsap.fromTo(
          modalCardRef.current,
          { opacity: 0, scale: 0.9, y: 30 },
          { opacity: 1, scale: 1, y: 0, duration: 0.45, ease: 'back.out(1.5)', delay: 0.05 }
        );
      });

      return () => {
        document.body.style.overflow = '';
        if (window.lenis) {
          window.lenis.start();
        }
        ctx.revert();
      };
    } else {
      document.body.style.overflow = '';
      if (window.lenis) {
        window.lenis.start();
      }
    }
  }, [isOpen]);

  // Close country dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (countryDropdownRef.current && !countryDropdownRef.current.contains(e.target)) {
        setCountryDropdownOpen(false);
      }
    };
    if (countryDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [countryDropdownOpen]);

  // Handle ESC key to close
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        handleClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  const handleClose = () => {
    if (modalCardRef.current && modalOverlayRef.current) {
      gsap.to(modalCardRef.current, {
        opacity: 0,
        scale: 0.94,
        y: 20,
        duration: 0.25,
        ease: 'power2.in',
      });
      gsap.to(modalOverlayRef.current, {
        opacity: 0,
        duration: 0.25,
        ease: 'power2.in',
        onComplete: () => {
          onClose();
          if (window.lenis) {
            window.lenis.start();
          }
          setTimeout(() => {
            setIsSuccess(false);
          }, 300);
        },
      });
    } else {
      onClose();
      if (window.lenis) {
        window.lenis.start();
      }
      setIsSuccess(false);
    }
  };

  // Calculate Form Completion Progress Percentage
  const calculateProgress = () => {
    let score = 0;
    if (formData.name.trim().length > 1) score += 20;
    if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) score += 20;
    if (formData.phone.trim().length >= 7) score += 20;
    if (formData.service) score += 20;
    if (formData.budget) score += 20;
    return score;
  };

  const progressPercentage = calculateProgress();

  const filteredCountries = COUNTRY_CODES.filter(
    (c) =>
      c.name.toLowerCase().includes(countrySearch.toLowerCase()) ||
      c.dial.includes(countrySearch) ||
      c.code.toLowerCase().includes(countrySearch.toLowerCase())
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone || !formData.service || !formData.budget) {
      return;
    }

    setIsSubmitting(true);

    // Simulate clean submission with direct WhatsApp preparation
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 900);
  };

  if (!isOpen) return null;

  return (
    <div 
      ref={modalOverlayRef}
      data-lenis-prevent="true"
      data-lenis-prevent-touch="true"
      onWheel={(e) => e.stopPropagation()}
      onTouchMove={(e) => e.stopPropagation()}
      className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-4 md:p-6 bg-slate-950/40 backdrop-blur-md overflow-hidden"
      onClick={(e) => {
        if (e.target === modalOverlayRef.current) {
          handleClose();
        }
      }}
    >
      {/* Modal Dialog Card */}
      <div 
        ref={modalCardRef}
        data-lenis-prevent="true"
        data-lenis-prevent-touch="true"
        onWheel={(e) => e.stopPropagation()}
        onTouchMove={(e) => e.stopPropagation()}
        className="relative w-full max-w-2xl p-1.5 sm:p-2 rounded-3xl sm:rounded-[2rem] bg-slate-50 border border-slate-200 shadow-2xl flex flex-col max-h-[90vh] overflow-hidden my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Inner Core Container */}
        <div className="w-full rounded-[calc(1.5rem-0.25rem)] sm:rounded-[calc(2rem-0.375rem)] bg-white border border-slate-100 flex flex-col flex-1 overflow-hidden shadow-sm">
          
          {/* TOP PROGRESS BAR */}
          <div className="w-full bg-slate-100 h-1.5 relative overflow-hidden">
            <div 
              className="h-full bg-accent-blue transition-all duration-500 ease-out shadow-sm"
              style={{ width: `${progressPercentage}%` }}
            />
          </div>

          {/* Modal Header */}
          <div className="flex items-center justify-between px-5 sm:px-8 pt-5 pb-3 border-b border-slate-100">
            <div className="flex items-center gap-3">
              <div className="flex items-center">
                <img
                  src="./assets/jime-logo-white.png"
                  alt="Jime Developers"
                  className="h-7 w-auto object-contain brightness-0 opacity-90"
                />
              </div>
              <div className="text-left">
                <h2 className="font-sora font-bold text-lg sm:text-xl text-slate-950">
                  Start Your Project
                </h2>
                <p className="text-xs text-slate-500 font-inter">
                  Tell us about your vision & get a rapid roadmap
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              {/* Live Progress Tag */}
              <span className="hidden sm:inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-sora font-semibold bg-blue-50 border border-blue-200 text-accent-blue">
                {progressPercentage}% Completed
              </span>

              {/* Close Button */}
              <button
                type="button"
                onClick={handleClose}
                className="p-2 rounded-full text-slate-500 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 border border-slate-200 transition-all duration-200 cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Modal Content */}
          <div 
            data-lenis-prevent="true"
            data-lenis-prevent-touch="true"
            onWheel={(e) => e.stopPropagation()}
            onTouchMove={(e) => e.stopPropagation()}
            className="p-5 sm:p-8 overflow-y-auto flex-1 custom-scrollbar overscroll-contain"
          >
            {isSuccess ? (
              /* SUCCESS CONFIRMATION STATE */
              <div className="py-8 text-center flex flex-col items-center animate-fadeIn">
                <div className="w-16 h-16 rounded-full bg-blue-50 border-2 border-accent-blue flex items-center justify-center text-accent-blue mb-5 shadow-sm">
                  <CheckCircle2 className="w-8 h-8" />
                </div>

                <h3 className="font-sora font-bold text-2xl text-slate-950 tracking-tight mb-2">
                  Thank You, {formData.name}!
                </h3>
                
                <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed mb-6 font-inter">
                  We've received your project request for{' '}
                  <span className="text-accent-blue font-semibold">
                    {SERVICES.find(s => s.id === formData.service)?.title || 'your product'}
                  </span>
                  . Our engineering team will review it and get in touch within 24 hours.
                </p>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-left max-w-md w-full mb-6 space-y-2 text-xs font-inter">
                  <div className="flex justify-between text-slate-500">
                    <span>Client:</span>
                    <span className="text-slate-900 font-semibold">{formData.name}</span>
                  </div>
                  <div className="flex justify-between text-slate-500">
                    <span>Contact:</span>
                    <span className="text-slate-900 font-semibold">{selectedCountry.dial} {formData.phone}</span>
                  </div>
                  <div className="flex justify-between text-slate-500">
                    <span>Selected Budget:</span>
                    <span className="text-accent-blue font-bold">
                      {BUDGET_OPTIONS.find(b => b.id === formData.budget)?.detail}
                    </span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-center gap-3 w-full max-w-md">
                  <a
                    href={`https://wa.me/?text=${encodeURIComponent(
                      `Hi Jime Developers! I submitted a project request for ${
                        SERVICES.find((s) => s.id === formData.service)?.title || 'my project'
                      }. My name is ${formData.name}.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-slate-950 text-white font-sora font-semibold text-xs sm:text-sm tracking-tight hover:bg-accent-blue shadow-md transition-all"
                  >
                    <span>Connect on WhatsApp Now</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>

                  <button
                    type="button"
                    onClick={handleClose}
                    className="w-full sm:w-auto inline-flex items-center justify-center px-5 py-3 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-200 text-xs sm:text-sm font-sora font-medium transition-all cursor-pointer"
                  >
                    Done
                  </button>
                </div>
              </div>
            ) : (
              /* PROJECT DETAILS FORM */
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* 1. FULL NAME */}
                <div className="space-y-2 text-left">
                  <label className="block font-sora font-semibold text-xs sm:text-sm text-slate-800">
                    Full Name <span className="text-accent-blue">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 sm:px-5 py-3.5 sm:py-4 rounded-xl sm:rounded-2xl bg-slate-50 border border-slate-200 hover:border-slate-300 focus:border-accent-blue focus:bg-white focus:outline-none text-slate-900 text-sm sm:text-base font-inter placeholder:text-slate-400 transition-all duration-200"
                  />
                </div>

                {/* 2. COMPANY (OPTIONAL) */}
                <div className="space-y-2 text-left">
                  <label className="block font-sora font-semibold text-xs sm:text-sm text-slate-800">
                    Company (Optional)
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your company name"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full px-4 sm:px-5 py-3.5 sm:py-4 rounded-xl sm:rounded-2xl bg-slate-50 border border-slate-200 hover:border-slate-300 focus:border-accent-blue focus:bg-white focus:outline-none text-slate-900 text-sm sm:text-base font-inter placeholder:text-slate-400 transition-all duration-200"
                  />
                </div>

                {/* 3. EMAIL ADDRESS */}
                <div className="space-y-2 text-left">
                  <label className="block font-sora font-semibold text-xs sm:text-sm text-slate-800">
                    Email Address <span className="text-accent-blue">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="Enter your email address"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 sm:px-5 py-3.5 sm:py-4 rounded-xl sm:rounded-2xl bg-slate-50 border border-slate-200 hover:border-slate-300 focus:border-accent-blue focus:bg-white focus:outline-none text-slate-900 text-sm sm:text-base font-inter placeholder:text-slate-400 transition-all duration-200"
                  />
                </div>

                {/* 4. PHONE NUMBER WITH AUTO IP-DETECTED COUNTRY CODE */}
                <div className="space-y-2 text-left">
                  <label className="block font-sora font-semibold text-xs sm:text-sm text-slate-800">
                    Phone Number <span className="text-accent-blue">*</span>
                  </label>

                  <div className="flex items-center gap-2.5">
                    {/* Country Selector Dropdown */}
                    <div className="relative flex-shrink-0" ref={countryDropdownRef}>
                      <button
                        type="button"
                        onClick={() => setCountryDropdownOpen(!countryDropdownOpen)}
                        className="flex items-center gap-2 px-3.5 sm:px-4 py-3.5 sm:py-4 rounded-xl sm:rounded-2xl bg-slate-50 border border-slate-200 hover:border-accent-blue/40 text-slate-900 text-sm sm:text-base font-inter focus:outline-none transition-all cursor-pointer"
                      >
                        <span className="text-lg">{selectedCountry.flag}</span>
                        <span className="font-semibold text-accent-blue font-sora text-xs sm:text-sm">
                          {selectedCountry.dial}
                        </span>
                        <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${
                          countryDropdownOpen ? 'rotate-180' : ''
                        }`} />
                      </button>

                      {/* Dropdown Menu */}
                      {countryDropdownOpen && (
                        <div className="absolute top-full left-0 mt-2 w-64 max-h-56 overflow-y-auto rounded-2xl bg-white border border-slate-200 shadow-xl z-50 p-2 custom-scrollbar animate-fadeIn">
                          <input
                            type="text"
                            placeholder="Search country..."
                            value={countrySearch}
                            onChange={(e) => setCountrySearch(e.target.value)}
                            className="w-full px-3 py-2 mb-2 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs placeholder:text-slate-400 focus:outline-none focus:border-accent-blue"
                            autoFocus
                          />
                          <div className="space-y-0.5">
                            {filteredCountries.map((c) => (
                              <button
                                key={`${c.code}-${c.dial}`}
                                type="button"
                                onClick={() => {
                                  setSelectedCountry(c);
                                  setCountryDropdownOpen(false);
                                  setCountrySearch('');
                                }}
                                className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-inter transition-colors ${
                                  selectedCountry.code === c.code && selectedCountry.dial === c.dial
                                    ? 'bg-blue-50 text-accent-blue font-semibold'
                                    : 'text-slate-700 hover:bg-slate-50'
                                }`}
                              >
                                <div className="flex items-center gap-2 truncate">
                                  <span>{c.flag}</span>
                                  <span className="truncate">{c.name}</span>
                                </div>
                                <span className="text-slate-400 font-sora text-[11px] ml-2">
                                  {c.dial}
                                </span>
                              </button>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Phone input field */}
                    <div className="relative flex-1 min-w-0">
                      <input
                        type="tel"
                        required
                        placeholder="Enter your phone number"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 sm:px-5 py-3.5 sm:py-4 rounded-xl sm:rounded-2xl bg-slate-50 border border-slate-200 hover:border-slate-300 focus:border-accent-blue focus:bg-white focus:outline-none text-slate-900 text-sm sm:text-base font-inter placeholder:text-slate-400 transition-all duration-200"
                      />
                    </div>
                  </div>
                </div>

                {/* 3. WHAT SERVICE THEY WANT */}
                <div className="space-y-2 text-left">
                  <label className="block text-xs font-sora font-semibold text-slate-800">
                    What service do you need? <span className="text-accent-blue">*</span>
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {SERVICES.map((s) => {
                      const Icon = s.icon;
                      const isSelected = formData.service === s.id;
                      return (
                        <button
                          key={s.id}
                          type="button"
                          onClick={() => setFormData({ ...formData, service: s.id })}
                          className={`flex items-start gap-3 p-3 rounded-xl border text-left transition-all duration-200 group cursor-pointer ${
                            isSelected
                              ? 'bg-blue-50/80 border-accent-blue text-slate-950 shadow-sm'
                              : 'bg-slate-50 border-slate-200 hover:border-slate-300 text-slate-700'
                          }`}
                        >
                          <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors ${
                            isSelected 
                              ? 'bg-accent-blue text-white' 
                              : 'bg-white border border-slate-200 text-accent-blue group-hover:bg-blue-50'
                          }`}>
                            <Icon className="w-4 h-4" />
                          </div>
                          <div className="min-w-0 flex-1">
                            <div className="text-xs font-sora font-semibold text-slate-900 flex items-center justify-between">
                              <span className="truncate">{s.title}</span>
                              {isSelected && <Check className="w-3.5 h-3.5 text-accent-blue flex-shrink-0" />}
                            </div>
                            <p className="text-[11px] text-slate-500 font-inter mt-0.5 line-clamp-1">
                              {s.desc}
                            </p>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* 4. BUDGET OPTIONS */}
                <div className="space-y-2 text-left">
                  <label className="block text-xs font-sora font-semibold text-slate-800">
                    Estimated Project Budget <span className="text-accent-blue">*</span>
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {BUDGET_OPTIONS.map((b) => {
                      const isSelected = formData.budget === b.id;
                      return (
                        <button
                          key={b.id}
                          type="button"
                          onClick={() => setFormData({ ...formData, budget: b.id })}
                          className={`p-3 rounded-xl border text-center transition-all duration-200 cursor-pointer ${
                            isSelected
                              ? 'bg-blue-50/80 border-accent-blue text-accent-blue shadow-sm'
                              : 'bg-slate-50 border-slate-200 hover:border-slate-300 text-slate-700'
                          }`}
                        >
                          <div className={`text-xs font-sora font-bold ${isSelected ? 'text-accent-blue' : 'text-slate-900'}`}>
                            {b.label}
                          </div>
                          <div className="text-[10px] text-slate-500 font-inter mt-0.5">
                            {b.detail}
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* SUBMIT BUTTON */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="group w-full inline-flex items-center justify-between pl-6 pr-2 py-2.5 rounded-full bg-slate-950 hover:bg-accent-blue text-white font-sora font-semibold text-sm tracking-tight shadow-md hover:shadow-lg active:scale-[0.99] disabled:opacity-50 disabled:pointer-events-none transition-all duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] cursor-pointer"
                  >
                    {isSubmitting ? (
                      <div className="w-full flex items-center justify-center py-1">
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      </div>
                    ) : (
                      <>
                        <span>Submit Project Details</span>
                        <div className="w-8 h-8 rounded-full bg-white/20 group-hover:bg-white/30 flex items-center justify-center transition-transform duration-300 group-hover:translate-x-0.5">
                          <Send className="w-4 h-4 text-white" />
                        </div>
                      </>
                    )}
                  </button>
                </div>

              </form>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}
