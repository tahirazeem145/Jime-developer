import React, { useState } from 'react';
import { Mail, ArrowRight, Star, CheckCircle } from 'lucide-react';

export default function Hero() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

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
    <section className="relative z-10 pt-10 sm:pt-14 md:pt-18 pb-16 sm:pb-24 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* REVIEW BADGE */}
        <div className="inline-flex items-center justify-center mb-6 sm:mb-8 animate-fadeIn">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#131D16]/90 border border-[#2E6B3F]/70 shadow-[0_0_15px_rgba(167,243,160,0.12)] backdrop-blur-md">
            {/* Green Starburst Icon */}
            <svg className="w-4 h-4 text-accent-lime flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 1.5L13.8 7.2L19.5 5.5L16.2 10.5L22 12L16.2 13.5L19.5 18.5L13.8 16.8L12 22.5L10.2 16.8L4.5 18.5L7.8 13.5L2 12L7.8 10.5L4.5 5.5L10.2 7.2L12 1.5Z" />
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

            {/* Subtle Divider */}
            <div className="w-[1px] h-3.5 bg-[#8B9A8F]/40" />

            {/* Reviews Count */}
            <span className="text-xs sm:text-sm font-inter text-muted-text font-normal">
              5,600+ reviews
            </span>
          </div>
        </div>

        {/* MAIN HEADLINE */}
        <h1 className="font-sora font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-[72px] leading-[1.08] tracking-[-0.03em] text-main-text max-w-4xl mx-auto">
          We turn your idea <br className="hidden sm:inline" />
          into a{' '}
          <span className="text-accent-lime italic font-extrabold inline-block tracking-tight drop-shadow-[0_0_20px_rgba(167,243,160,0.2)]">
            real product.
          </span>
        </h1>

        {/* SUBTITLE */}
        <p className="mt-6 sm:mt-7 text-base sm:text-lg md:text-xl text-muted-text max-w-2xl mx-auto font-inter font-normal leading-relaxed tracking-normal">
          Web and mobile apps, designed and shipped fast.
        </p>

        {/* EMAIL CTA CONTAINER */}
        <div className="mt-8 sm:mt-11 max-w-xl mx-auto w-full">
          {submitted ? (
            <div className="p-4 rounded-full bg-[#131D16]/90 border border-[#A7F3A0]/40 flex items-center justify-center gap-3 text-accent-lime font-inter font-medium text-sm sm:text-base animate-fadeIn shadow-lime-glow">
              <CheckCircle className="w-5 h-5 flex-shrink-0" />
              <span>Thank you! We'll be in touch with your quote shortly.</span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="w-full">
              <div className="relative flex flex-col sm:flex-row items-center p-1.5 sm:p-2 rounded-2xl sm:rounded-full bg-[#131D16]/85 backdrop-blur-xl border border-[#1D2E22] hover:border-[#A7F3A0]/30 focus-within:border-[#A7F3A0]/60 focus-within:shadow-[0_0_30px_rgba(167,243,160,0.18)] transition-all duration-300 gap-2 sm:gap-0">
                {/* Email Input Field */}
                <div className="flex items-center gap-3 w-full pl-4 py-2 sm:py-0">
                  <Mail className="w-5 h-5 text-muted-text/70 flex-shrink-0" />
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
                  className="w-full sm:w-auto flex-shrink-0 inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl sm:rounded-full bg-accent-lime text-[#0B0F0C] font-sora font-semibold text-sm sm:text-[15px] tracking-tight hover:bg-accent-lime-hover hover:shadow-lime-glow active:scale-[0.98] transition-all duration-200"
                >
                  <span>Get a quote</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </form>
          )}
        </div>

        {/* THREE STATS */}
        <div className="mt-14 sm:mt-18 pt-6 max-w-3xl mx-auto w-full">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-0">
            {/* Stat 1 */}
            <div className="flex-1 flex flex-col items-center text-center px-4 sm:px-6">
              <span className="font-sora font-extrabold text-3xl sm:text-4xl lg:text-[44px] text-accent-lime tracking-tight drop-shadow-[0_0_15px_rgba(167,243,160,0.25)]">
                15+
              </span>
              <span className="mt-1.5 text-xs sm:text-sm text-muted-text font-inter font-medium tracking-wide whitespace-nowrap">
                Products shipped
              </span>
            </div>

            {/* Vertical Divider 1 */}
            <div className="hidden sm:block w-[1px] h-12 bg-gradient-to-b from-transparent via-[#2E4A35] to-transparent flex-shrink-0" />

            {/* Stat 2 */}
            <div className="flex-1 flex flex-col items-center text-center px-4 sm:px-6">
              <span className="font-sora font-extrabold text-3xl sm:text-4xl lg:text-[44px] text-accent-lime tracking-tight drop-shadow-[0_0_15px_rgba(167,243,160,0.25)]">
                2+
              </span>
              <span className="mt-1.5 text-xs sm:text-sm text-muted-text font-inter font-medium tracking-wide whitespace-nowrap">
                Years in business
              </span>
            </div>

            {/* Vertical Divider 2 */}
            <div className="hidden sm:block w-[1px] h-12 bg-gradient-to-b from-transparent via-[#2E4A35] to-transparent flex-shrink-0" />

            {/* Stat 3 */}
            <div className="flex-1 flex flex-col items-center text-center px-4 sm:px-6">
              <span className="font-sora font-extrabold text-3xl sm:text-4xl lg:text-[44px] text-accent-lime tracking-tight drop-shadow-[0_0_15px_rgba(167,243,160,0.25)]">
                2
              </span>
              <span className="mt-1.5 text-xs sm:text-sm text-muted-text font-inter font-medium tracking-wide whitespace-nowrap">
                Countries
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
