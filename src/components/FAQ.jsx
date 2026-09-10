import React, { useState } from 'react';
import { ChevronDown, HelpCircle, MessageSquare, ArrowRight, Sparkles } from 'lucide-react';

const FAQ_ITEMS = [
  {
    id: 'cost',
    question: 'How much does a website or app cost?',
    answer:
      'Our pricing depends on scope, complexity, and feature set. Typical landing pages and custom websites start from ₹25,000 / $300, while full-stack web platforms, mobile apps, and custom SaaS products range from ₹1,00,000 to ₹5,00,000+. We provide transparent, milestone-based fixed pricing with zero hidden fees.',
  },
  {
    id: 'timeline',
    question: 'How long will my project take?',
    answer:
      'Fast turnaround is one of our core strengths. Standard landing pages and MVP websites are usually designed and deployed within 1 to 2 weeks. Complex full-stack platforms and mobile apps typically take 3 to 6 weeks, structured into transparent weekly sprint milestones.',
  },
  {
    id: 'types',
    question: 'What kind of projects do you take on?',
    answer:
      'We build modern web applications, high-converting marketing websites, cross-platform mobile apps (iOS & Android with React Native / Expo), SaaS tools, custom AI & ML integrations, internal workflow dashboards, and high-performance e-commerce platforms.',
  },
  {
    id: 'ownership',
    question: 'Do I own the code when it\'s done?',
    answer:
      'Yes, 100%. Upon project completion and final payment, full intellectual property rights, source code, design assets, and repository access are transferred directly to you. There are no vendor lock-ins or recurring licensing fees.',
  },
  {
    id: 'redesign',
    question: 'Can you redesign or fix an existing site?',
    answer:
      'Absolutely. We frequently audit, modernize, and refactor legacy codebases, slow WordPress sites, and clunky interfaces into blazing-fast, Awwwards-grade digital products while preserving your existing SEO rankings and customer data.',
  },
  {
    id: 'post-launch',
    question: 'What happens after the site goes live?',
    answer:
      'We include 30 days of complimentary post-launch support and bug fixes with every project. We also offer ongoing maintenance, server monitoring, feature iteration, and retainer support packages to keep your product operating at peak performance.',
  },
  {
    id: 'mobile-speed',
    question: 'Will my site work well on phones and load fast?',
    answer:
      'Yes. Every product we engineer is mobile-first, responsive across all viewports (mobile, tablet, desktop, ultra-wide), and optimized for sub-second load times with 90+ Google Lighthouse performance scores and smooth 60fps animations.',
  },
  {
    id: 'tech-stack',
    question: 'What technology do you build with?',
    answer:
      'We build with the modern industry standard: React, Next.js, TypeScript, TailwindCSS, Node.js, Express, PostgreSQL, Supabase, Firebase, React Native, Expo, and Python for custom AI/ML workflows, deployed on Vercel, AWS, or Cloudflare.',
  },
  {
    id: 'security-data',
    question: 'How do you handle security and my data?',
    answer:
      'We treat client data and intellectual property with strict confidentiality. We sign Non-Disclosure Agreements (NDAs) before starting, enforce SSL/TLS encryption, follow OWASP security best practices, and use environment-isolated credentials.',
  },
  {
    id: 'get-started',
    question: 'How do we get started?',
    answer:
      'Getting started is fast and simple. Click "Start your project" or chat with us on WhatsApp. We\'ll discuss your requirements, propose a clear technical architecture and fixed timeline, and kick off the development sprint.',
  },
];

export default function FAQ({ onOpenProjectModal }) {
  const [openIndex, setOpenIndex] = useState(0); // Open the first item by default

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section id="faq" className="relative w-full bg-[#080B10] py-20 sm:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden select-none border-t border-white/5">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-accent-blue/5 blur-[150px] pointer-events-none -z-10" />
      <div className="absolute bottom-1/3 left-1/4 w-[450px] h-[450px] rounded-full bg-primary-blue/5 blur-[130px] pointer-events-none -z-10" />

      <div className="max-w-4xl mx-auto relative z-10 text-center">
        
        {/* Eyebrow badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 hover:border-accent-blue/40 shadow-sm backdrop-blur-md transition-all mb-3.5">
          <Sparkles className="w-3.5 h-3.5 text-accent-blue" />
          <span className="text-xs font-sora font-semibold tracking-wider uppercase text-accent-blue">
            FAQ
          </span>
        </div>

        {/* Section Headline */}
        <h2 className="font-sora font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-[48px] leading-[1.12] text-white tracking-tight">
          Frequently Asked{' '}
          <span className="text-accent-blue italic drop-shadow-[0_0_25px_rgba(59,130,246,0.35)]">
            Questions.
          </span>
        </h2>
        
        <p className="mt-3.5 text-sm sm:text-base text-muted-text font-inter max-w-xl mx-auto leading-relaxed">
          Everything you need to know about our engineering process, pricing, timelines, and post-launch support.
        </p>

        {/* ACCORDION LIST (DOPPELRAND DOUBLE-BEZEL CARDS) */}
        <div className="mt-12 sm:mt-16 space-y-3.5 text-left">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={item.id}
                className={`p-1 rounded-2xl transition-all duration-300 ${
                  isOpen
                    ? 'bg-white/[0.05] border border-accent-blue/40 shadow-[0_10px_30px_rgba(59,130,246,0.12)]'
                    : 'bg-white/[0.02] border border-white/10 hover:border-white/20 hover:bg-white/[0.03]'
                }`}
              >
                {/* Inner Core Container */}
                <div className="rounded-[calc(1rem-0.125rem)] bg-[#0B101D]/85 overflow-hidden transition-colors">
                  <button
                    type="button"
                    onClick={() => toggleFAQ(index)}
                    className="w-full flex items-center justify-between gap-4 px-5 sm:px-6 py-4 sm:py-5 text-left focus:outline-none cursor-pointer group"
                    aria-expanded={isOpen}
                  >
                    <div className="flex items-center gap-3.5 min-w-0">
                      <span className="font-sora text-xs font-bold text-accent-blue/80 min-w-[24px]">
                        {index + 1 < 10 ? `0${index + 1}` : index + 1}
                      </span>
                      <span className={`font-sora text-sm sm:text-base font-semibold transition-colors duration-300 ${
                        isOpen ? 'text-accent-blue' : 'text-white group-hover:text-[#93C5FD]'
                      }`}>
                        {item.question}
                      </span>
                    </div>

                    <div className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                      isOpen
                        ? 'bg-accent-blue text-white rotate-180 shadow-[0_0_12px_rgba(59,130,246,0.5)]'
                        : 'bg-white/[0.06] text-muted-text group-hover:text-white group-hover:bg-white/[0.12]'
                    }`}>
                      <ChevronDown className="w-4 h-4 transition-transform duration-300" />
                    </div>
                  </button>

                  {/* Expandable Answer Block with Custom Animation */}
                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-5 sm:pb-6 pt-1 text-xs sm:text-sm text-slate-300 font-inter leading-relaxed pl-12 sm:pl-14 border-t border-white/5 animate-fadeIn">
                      <p>{item.answer}</p>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* BOTTOM CALLOUT / CONTACT PROMPT */}
        <div className="mt-14 sm:mt-18 p-1 sm:p-1.5 rounded-3xl bg-white/[0.03] border border-white/10 backdrop-blur-md max-w-2xl mx-auto shadow-[0_15px_40px_rgba(0,0,0,0.6)]">
          <div className="rounded-[calc(1.5rem-0.25rem)] bg-[#0B101D]/90 p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-5 text-center sm:text-left shadow-[inset_0_1px_1px_rgba(255,255,255,0.08)]">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-accent-blue/15 border border-accent-blue/30 flex items-center justify-center text-accent-blue flex-shrink-0 shadow-blue-glow">
                <MessageSquare className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-sora font-bold text-base sm:text-lg text-white">
                  Still have questions?
                </h3>
                <p className="text-xs sm:text-sm text-muted-text font-inter mt-0.5">
                  We're ready to answer your specific technical requirements.
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={() => {
                if (onOpenProjectModal) {
                  onOpenProjectModal();
                } else {
                  window.dispatchEvent(new CustomEvent('open-project-modal'));
                }
              }}
              className="group inline-flex items-center justify-between gap-3 pl-5 pr-1.5 py-2 rounded-full bg-accent-blue hover:bg-accent-blue-hover text-white font-sora font-semibold text-xs sm:text-sm tracking-tight shadow-[0_0_20px_rgba(59,130,246,0.45)] hover:shadow-[0_0_30px_rgba(59,130,246,0.7)] active:scale-[0.98] transition-all duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] cursor-pointer flex-shrink-0 w-full sm:w-auto"
            >
              <span>Get in touch</span>
              <div className="w-7 h-7 rounded-full bg-white/20 group-hover:bg-white/30 flex items-center justify-center transition-transform duration-300 group-hover:translate-x-0.5">
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
