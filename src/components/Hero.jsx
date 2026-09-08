import React, { useState, useEffect, useRef } from 'react';
import { Mail, ArrowRight, Star, CheckCircle } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import BackgroundElements from './BackgroundElements';

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const heroRef = useRef(null);
  const heroContentRef = useRef(null);
  const badgeRef = useRef(null);
  const headlineRef = useRef(null);
  const subtitleRef = useRef(null);
  const ctaRef = useRef(null);
  const statsRef = useRef(null);
  const statsItemsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Clean, non-colliding Entrance Timeline on Page Load
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.fromTo(
        badgeRef.current,
        { opacity: 0, y: -20, scale: 0.92 },
        { opacity: 1, y: 0, scale: 1, duration: 0.7, delay: 0.1 }
      )
      .fromTo(
        headlineRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8 },
        '-=0.4'
      )
      .fromTo(
        subtitleRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.7 },
        '-=0.5'
      )
      .fromTo(
        ctaRef.current,
        { opacity: 0, y: 20, scale: 0.98 },
        { opacity: 1, y: 0, scale: 1, duration: 0.7 },
        '-=0.4'
      )
      .fromTo(
        statsItemsRef.current.filter(Boolean),
        { opacity: 0, y: 25 },
        { opacity: 1, y: 0, stagger: 0.12, duration: 0.7 },
        '-=0.3'
      );

      // Pin the Hero screen still when in viewport so it stays locked
      // while the Services section rises up from bottom to top and physically overlaps / replaces it!
      if (heroContentRef.current && heroRef.current) {
        ScrollTrigger.create({
          trigger: heroRef.current,
          start: 'top 80px',
          end: 'bottom 80px',
          pin: heroContentRef.current,
          pinSpacing: false,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        });
      }
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setEmail('');
      }, 4000);
    }
  };

  return (
    <section 
      id="home" 
      ref={heroRef}
      className="relative z-10 w-full min-h-[calc(100vh-80px)] flex flex-col justify-center items-center"
    >
      {/* Hero Inner Content Wrapper (Pinned during curtain scroll) */}
      <div 
        ref={heroContentRef}
        className="relative z-10 w-full flex flex-col justify-center will-change-transform opacity-100 py-6 sm:py-10"
      >
        {/* Background Graphic Visuals scoped strictly to Hero */}
        <BackgroundElements />

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* GOOGLE REVIEW BADGE */}
        <div ref={badgeRef} className="inline-flex items-center justify-center mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-2 sm:gap-2.5 px-4 sm:px-5 py-1.5 sm:py-2 rounded-full bg-[#131D16]/90 border border-[#1D2E22] hover:border-[#A7F3A0]/30 shadow-[0_2px_15px_rgba(0,0,0,0.4)] backdrop-blur-md transition-all">
            {/* Google Icon */}
            <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24">
              <path
                fill="#4285F4"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="#34A853"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="#FBBC05"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
              />
              <path
                fill="#EA4335"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
              />
            </svg>

            {/* Rating Number */}
            <span className="font-inter font-bold text-xs sm:text-sm text-main-text">
              5.0
            </span>

            {/* 5 Gold Stars */}
            <div className="flex items-center gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-3.5 h-3.5 fill-[#FBBF24] text-[#FBBF24] gold-star"
                />
              ))}
            </div>

            {/* Separator Dot */}
            <span className="text-muted-text/80 text-xs sm:text-sm">·</span>

            {/* Reviews Count */}
            <span className="text-xs sm:text-sm font-inter text-muted-text font-normal">
              5 Google reviews
            </span>
          </div>
        </div>

        {/* MAIN HEADLINE */}
        <h1 
          ref={headlineRef}
          className="font-sora font-extrabold text-3xl sm:text-5xl md:text-6xl lg:text-[72px] leading-[1.12] sm:leading-[1.08] tracking-[-0.03em] text-main-text max-w-4xl mx-auto will-change-transform"
        >
          We turn your idea <br className="hidden sm:inline" />
          into a{' '}
          <span className="text-accent-lime italic font-extrabold inline-block tracking-tight drop-shadow-[0_0_20px_rgba(167,243,160,0.2)]">
            real product.
          </span>
        </h1>

        {/* SUBTITLE */}
        <p 
          ref={subtitleRef}
          className="mt-3 sm:mt-6 text-sm sm:text-lg md:text-xl text-muted-text max-w-2xl mx-auto font-inter font-normal leading-relaxed tracking-normal"
        >
          Web and mobile apps, designed and shipped fast.
        </p>

        {/* EMAIL CTA CONTAINER */}
        <div ref={ctaRef} className="mt-6 sm:mt-10 max-w-xl mx-auto w-full">
          {submitted ? (
            <div className="p-4 rounded-full bg-[#131D16]/90 border border-[#A7F3A0]/40 flex items-center justify-center gap-3 text-accent-lime font-inter font-medium text-sm sm:text-base animate-fadeIn shadow-lime-glow">
              <CheckCircle className="w-5 h-5 flex-shrink-0" />
              <span>Thank you! We'll be in touch with your quote shortly.</span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="w-full">
              <div className="relative flex flex-col sm:flex-row items-center p-1.5 sm:p-2 rounded-2xl sm:rounded-full bg-[#131D16]/85 backdrop-blur-xl border border-[#1D2E22] hover:border-[#A7F3A0]/30 focus-within:border-[#A7F3A0]/60 focus-within:shadow-[0_0_30px_rgba(167,243,160,0.18)] transition-all duration-300 gap-2 sm:gap-0">
                {/* Email Input Field */}
                <div className="flex items-center gap-2.5 sm:gap-3 w-full pl-3 sm:pl-4 py-1.5 sm:py-0">
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-muted-text/70 flex-shrink-0" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    required
                    className="w-full bg-transparent text-main-text placeholder:text-muted-text/60 text-sm sm:text-base font-inter focus:outline-none"
                  />
                </div>

                {/* Get a Quote Button */}
                <button
                  type="submit"
                  className="w-full sm:w-auto flex-shrink-0 inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 rounded-xl sm:rounded-full bg-accent-lime text-[#0B0F0C] font-sora font-semibold text-xs sm:text-[15px] tracking-tight hover:bg-accent-lime-hover hover:shadow-lime-glow active:scale-[0.98] transition-all duration-200"
                >
                  <span>Get a quote</span>
                  <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </button>
              </div>
            </form>
          )}
        </div>

        {/* THREE STATS IN A COMPACT HORIZONTAL ROW */}
        <div ref={statsRef} className="mt-8 sm:mt-14 pt-2 sm:pt-6 max-w-3xl mx-auto w-full">
          <div className="grid grid-cols-3 divide-x divide-[#2E4A35]/60 items-center justify-center">
            {/* Stat 1 */}
            <div 
              ref={(el) => (statsItemsRef.current[0] = el)}
              className="flex flex-col items-center text-center px-2 sm:px-6"
            >
              <span className="font-sora font-extrabold text-2xl sm:text-4xl lg:text-[44px] text-accent-lime tracking-tight drop-shadow-[0_0_15px_rgba(167,243,160,0.25)]">
                15+
              </span>
              <span className="mt-0.5 sm:mt-1.5 text-[10px] sm:text-xs md:text-sm text-muted-text font-inter font-medium tracking-wide">
                Products shipped
              </span>
            </div>

            {/* Stat 2 */}
            <div 
              ref={(el) => (statsItemsRef.current[1] = el)}
              className="flex flex-col items-center text-center px-2 sm:px-6"
            >
              <span className="font-sora font-extrabold text-2xl sm:text-4xl lg:text-[44px] text-accent-lime tracking-tight drop-shadow-[0_0_15px_rgba(167,243,160,0.25)]">
                2+
              </span>
              <span className="mt-0.5 sm:mt-1.5 text-[10px] sm:text-xs md:text-sm text-muted-text font-inter font-medium tracking-wide">
                Years in business
              </span>
            </div>

            {/* Stat 3 */}
            <div 
              ref={(el) => (statsItemsRef.current[2] = el)}
              className="flex flex-col items-center text-center px-2 sm:px-6"
            >
              <span className="font-sora font-extrabold text-2xl sm:text-4xl lg:text-[44px] text-accent-lime tracking-tight drop-shadow-[0_0_15px_rgba(167,243,160,0.25)]">
                2
              </span>
              <span className="mt-0.5 sm:mt-1.5 text-[10px] sm:text-xs md:text-sm text-muted-text font-inter font-medium tracking-wide">
                Countries
              </span>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
);
}

