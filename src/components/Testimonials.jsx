import React from 'react';
import { Star, CheckCircle2, ArrowUpRight, Sparkles } from 'lucide-react';

const TESTIMONIALS_DATA = [
  {
    id: 'praveen',
    featured: true,
    name: 'Praveen Raj',
    role: 'Client & Researcher',
    location: 'Kuala Lumpur, Malaysia',
    flag: '🇲🇾',
    project: 'Byte-Level Malware Detection Using Patch Byte Transformer with ROI Visualization',
    quote:
      'I had an excellent experience working with this project developer. He completed my project within a short period of time and delivered it in a very professional and impressive way. The project was handled perfectly, from the technical implementation to the explanation and support given throughout the process.\n\nHe was very kind, patient, helpful, and always ready to guide me whenever I needed clarification. Even though I am from Malaysia and he is from India, the communication was smooth and trustworthy from beginning to end. I truly appreciate his dedication, honesty, and commitment to delivering quality work. I am fully satisfied with the final outcome and would highly recommend him to anyone looking for reliable, skilled, and professional project development support.\n\nThank you so much for your great work and continuous support!',
    rating: 5,
    verifiedLink: 'https://share.google/G9mZSLmXs8PfOT4VF',
    verifiedSource: 'Google Review',
  },
  {
    id: 'ansari',
    featured: false,
    name: 'Ansari Jr',
    location: 'Tamil Nadu, India',
    flag: '🇮🇳',
    quote: 'The website was absolutely fantastic and launched on time.',
    rating: 5,
    verifiedSource: 'Verified Client',
  },
  {
    id: 'suriyaprakash',
    featured: false,
    name: 'Suriyaprakash Mahendran',
    location: 'Kuala Lumpur, Malaysia',
    flag: '🇲🇾',
    quote: 'Affordable, fast delivery, and customer-friendly.',
    rating: 5,
    verifiedSource: 'Verified Client',
  },
  {
    id: 'winne',
    featured: false,
    name: 'Winne',
    location: 'Kuala Lumpur, Malaysia',
    flag: '🇲🇾',
    quote: 'Excellent service and project delivered on time. Highly recommend!',
    rating: 5,
    verifiedSource: 'Verified Client',
  },
];

export default function Testimonials() {
  const featuredReview = TESTIMONIALS_DATA.find((t) => t.featured);
  const otherReviews = TESTIMONIALS_DATA.filter((t) => !t.featured);

  return (
    <section id="testimonials" className="relative w-full bg-transparent py-20 sm:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden select-none">
      {/* Ambient background glows */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] rounded-full bg-blue-500/5 blur-[140px] pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-blue-600/5 blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* SECTION HEADER & METRIC STATS ROW */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12 sm:mb-16">
          <div className="max-w-2xl text-left">
            {/* Eyebrow badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 hover:border-accent-blue/40 shadow-sm backdrop-blur-md transition-all mb-3.5">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-blue opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-blue shadow-[0_0_8px_rgba(37,99,235,0.8)]"></span>
              </span>
              <span className="text-xs font-sora font-semibold tracking-wider uppercase text-accent-blue">
                Testimonials
              </span>
            </div>

            {/* Main Title */}
            <h2 className="font-sora font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-[50px] leading-[1.12] text-slate-950 tracking-tight">
              Don't take our word{' '}
              <span className="text-accent-blue italic">
                for it.
              </span>
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-500 font-inter max-w-xl leading-relaxed">
              Read direct feedback from founders and engineering leaders across India and Malaysia who built and shipped with Jime Developers.
            </p>
          </div>

          {/* TWO HIGHLIGHT METRIC PILLS */}
          <div className="flex flex-wrap sm:flex-nowrap items-center gap-3.5 sm:gap-4 self-start lg:self-end">
            {/* Stat Pill 1: 15+ Projects delivered */}
            <div className="p-1 rounded-2xl bg-slate-50 border border-slate-200 shadow-sm">
              <div className="rounded-[calc(1rem-0.125rem)] bg-white px-4 py-3 sm:px-5 sm:py-3.5 flex items-center gap-3 border border-slate-100">
                <div className="font-sora font-extrabold text-2xl sm:text-3xl text-accent-blue tracking-tight">
                  15+
                </div>
                <div className="text-left">
                  <div className="text-xs sm:text-sm font-sora font-bold text-slate-900 leading-tight">
                    Projects
                  </div>
                  <div className="text-[11px] text-slate-500 font-inter font-medium">
                    Delivered with excellence
                  </div>
                </div>
              </div>
            </div>

            {/* Stat Pill 2: 100% Launched on schedule */}
            <div className="p-1 rounded-2xl bg-slate-50 border border-slate-200 shadow-sm">
              <div className="rounded-[calc(1rem-0.125rem)] bg-white px-4 py-3 sm:px-5 sm:py-3.5 flex items-center gap-3 border border-slate-100">
                <div className="font-sora font-extrabold text-2xl sm:text-3xl text-emerald-600 tracking-tight">
                  100%
                </div>
                <div className="text-left">
                  <div className="text-xs sm:text-sm font-sora font-bold text-slate-900 leading-tight">
                    On Schedule
                  </div>
                  <div className="text-[11px] text-slate-500 font-inter font-medium">
                    Reliable milestone delivery
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ASYMMETRICAL BENTO GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* FEATURED LEFT HERO TESTIMONIAL CARD (col-span-7) */}
          {featuredReview && (
            <div className="lg:col-span-7 p-1.5 sm:p-2 rounded-[2rem] bg-slate-50 border border-slate-200 hover:border-accent-blue/40 shadow-[0_10px_30px_rgba(15,23,42,0.04)] transition-all duration-500 flex flex-col">
              <div className="rounded-[calc(2rem-0.375rem)] bg-white p-6 sm:p-8 flex flex-col justify-between flex-grow border border-slate-100 shadow-sm text-left">
                
                <div>
                  {/* Top Bar: Stars + Verified Google Review Badge */}
                  <div className="flex flex-wrap items-center justify-between gap-3 pb-5 border-b border-slate-100">
                    <div className="flex items-center gap-1">
                      {[...Array(featuredReview.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400 gold-star" />
                      ))}
                      <span className="ml-2 font-sora font-bold text-sm text-slate-900">5.0</span>
                    </div>

                    <a
                      href={featuredReview.verifiedLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/link inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 hover:bg-blue-100 border border-blue-200 text-xs font-inter font-semibold text-blue-700 transition-all duration-300 shadow-sm"
                    >
                      <svg className="w-3.5 h-3.5 flex-shrink-0" viewBox="0 0 24 24">
                        <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                        <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                        <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
                        <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
                      </svg>
                      <span>Verified Google Review</span>
                      <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 text-blue-600" />
                    </a>
                  </div>

                  {/* Project Tag Mention */}
                  <div className="mt-4 flex items-center gap-2 max-w-full px-3 py-1.5 rounded-lg bg-blue-50 border border-blue-200 text-blue-800 text-xs font-inter font-semibold min-w-0 overflow-hidden">
                    <CheckCircle2 className="w-3.5 h-3.5 flex-shrink-0 text-accent-blue" />
                    <span className="truncate min-w-0 flex-1">{featuredReview.project}</span>
                  </div>

                  {/* Detailed Review Quote */}
                  <div className="mt-5">
                    <div className="space-y-3.5 font-inter text-sm sm:text-[15px] text-slate-700 leading-relaxed pl-4 border-l-2 border-accent-blue">
                      {featuredReview.quote.split('\n\n').map((paragraph, idx) => (
                        <p key={idx}>{paragraph}</p>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Author Profile Footer */}
                <div className="mt-8 pt-5 border-t border-slate-100 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3.5">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent-blue to-blue-700 flex items-center justify-center font-sora font-extrabold text-white text-base shadow-sm">
                      PR
                    </div>
                    <div>
                      <div className="font-sora font-bold text-base text-slate-900 flex items-center gap-1.5">
                        <span>{featuredReview.name}</span>
                        <span className="text-sm">{featuredReview.flag}</span>
                      </div>
                      <div className="text-xs text-slate-500 font-inter font-medium">
                        {featuredReview.location}
                      </div>
                    </div>
                  </div>

                  {/* External Review CTA */}
                  <a
                    href={featuredReview.verifiedLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/btn inline-flex items-center gap-2 pl-4 pr-1.5 py-1.5 rounded-full bg-slate-100 hover:bg-accent-blue text-xs font-sora font-semibold text-slate-800 hover:text-white border border-slate-200 hover:border-transparent transition-all duration-300 shadow-sm"
                  >
                    <span className="hidden sm:inline">View on Google</span>
                    <div className="w-6 h-6 rounded-full bg-white/80 group-hover/btn:bg-white/20 flex items-center justify-center transition-transform duration-300 group-hover/btn:translate-x-0.5">
                      <ArrowUpRight className="w-3.5 h-3.5 text-slate-700 group-hover/btn:text-white" />
                    </div>
                  </a>
                </div>

              </div>
            </div>
          )}

          {/* RIGHT COLUMN STACKED TESTIMONIAL CARDS (col-span-5) */}
          <div className="lg:col-span-5 flex flex-col gap-5 justify-between">
            {otherReviews.map((review) => (
              <div
                key={review.id}
                className="p-1.5 rounded-2xl bg-slate-50 border border-slate-200 hover:border-accent-blue/35 shadow-[0_4px_15px_rgba(15,23,42,0.03)] transition-all duration-300 flex flex-col flex-1"
              >
                <div className="rounded-[calc(1rem-0.125rem)] bg-white p-5 sm:p-6 flex flex-col justify-between flex-grow border border-slate-100 shadow-sm text-left">
                  
                  <div>
                    {/* Stars + Verified Tag */}
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-0.5">
                        {[...Array(review.rating)].map((_, i) => (
                          <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400 gold-star" />
                        ))}
                      </div>
                      <span className="text-[11px] font-inter font-semibold text-slate-600 px-2 py-0.5 rounded-md bg-slate-100 border border-slate-200">
                        {review.verifiedSource}
                      </span>
                    </div>

                    {/* Short Quote */}
                    <p className="font-inter text-sm sm:text-base text-slate-800 leading-relaxed font-medium">
                      "{review.quote}"
                    </p>
                  </div>

                  {/* Author Bar */}
                  <div className="mt-4 pt-3.5 border-t border-slate-100 flex items-center justify-between">
                    <div>
                      <div className="font-sora font-bold text-sm text-slate-900 flex items-center gap-1.5">
                        <span>{review.name}</span>
                        <span className="text-xs">{review.flag}</span>
                      </div>
                      <div className="text-[11px] text-slate-500 font-inter font-medium">
                        {review.location}
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
