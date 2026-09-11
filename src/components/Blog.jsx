import React, { useState } from 'react';
import { ArrowRight, X } from 'lucide-react';

const BLOG_POSTS = [
  {
    id: 'duns-number',
    badge: 'PUBLISHING TIPS',
    category: 'PUBLISHING TIPS',
    title: 'Get a Free D-U-N-S Number – No 30-Day Waiting Period',
    excerpt:
      'Need a free D-U-N-S Number for Google Play or Apple Developer Organization enrollment? Learn how to fast-track verification without paying expensive expediting fees.',
    author: 'Jime Developers',
    date: 'Jun 20, 2026',
    readTime: '2 min read',
    content: `
      ### Why You Need a D-U-N-S Number
      To publish apps under an Organization account on the **Apple App Store** or **Google Play Store**, both platforms require a 9-digit D-U-N-S (Data Universal Numbering System) number issued by Dun & Bradstreet (D&B).

      ### The Common Trap: Paying for Expedited Service
      D&B often pitches expedited fees ranging from $300 to $800 to process the number in 5 days. However, **you can get it 100% free** through Apple's or Google's official developer partner portal.

      ### Step-by-Step Free Fast-Track Method:
      1. **Check Existing Listing**: Visit Apple's D-U-N-S Look-up tool (even if deploying to Google). Often your registered business already has a profile.
      2. **Submit Via Apple/Google Partner Form**: If not found, submit your business registration, utility bill, and trade license through the developer portal directly.
      3. **Verification Call/Email**: D&B will email you within 3–5 business days for identity confirmation. Respond promptly to receive your 9-digit number with zero cost.
    `,
  },
];

export default function Blog({ onOpenProjectModal }) {
  const [selectedArticle, setSelectedArticle] = useState(null);

  return (
    <section id="blog" className="relative z-10 w-full bg-transparent pt-20 sm:pt-28 pb-48 sm:pb-64 md:pb-80 px-4 sm:px-6 lg:px-8 overflow-hidden select-none border-t border-white/5">
      <div className="max-w-7xl mx-auto relative z-20">
        
        {/* SECTION HEADER */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="max-w-2xl text-left">
            {/* Eyebrow badge */}
            <span className="text-xs sm:text-sm font-sora font-semibold tracking-wider uppercase text-accent-cyan block mb-2">
              FROM THE BLOG
            </span>

            {/* Section Headline matching screenshot */}
            <h2 className="font-sora font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-[46px] leading-[1.15] text-white tracking-tight">
              Guides for getting your idea built
            </h2>
          </div>

          {/* View all blogs CTA link */}
          <a
            href="https://www.jimedevelopers.in/blog"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm sm:text-base font-sora font-semibold text-accent-blue hover:text-accent-cyan transition-colors cursor-pointer group flex-shrink-0 self-start md:self-end"
          >
            <span>View all blogs</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>

        {/* BLOG CARD (Exact visual match from user reference) */}
        <div className="flex justify-start relative z-20">
          {BLOG_POSTS.map((post) => (
            <article
              key={post.id}
              onClick={() => setSelectedArticle(post)}
              className="group flex flex-col w-full max-w-[340px] sm:max-w-[360px] rounded-2xl bg-white border border-slate-200/80 hover:border-accent-blue/60 overflow-hidden transition-all duration-300 hover:shadow-[0_20px_40px_rgba(59,130,246,0.22)] hover:-translate-y-1.5 cursor-pointer shadow-[0_10px_30px_rgba(0,0,0,0.4)]"
            >
              {/* Card Image / Banner Header matching screenshot */}
              <div className="relative w-full h-44 sm:h-48 bg-gradient-to-r from-[#0F3A4E] via-[#0369A1] to-[#0284C7] p-6 flex flex-col justify-center items-center text-center overflow-hidden rounded-t-2xl">
                {/* Center Badge Typography */}
                <span className="font-sora font-bold text-xs sm:text-sm tracking-wider uppercase text-white drop-shadow-md">
                  {post.badge}
                </span>

                {/* Subtle light glint animation on hover */}
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/15 to-transparent" />
              </div>

              {/* Card Content Body */}
              <div className="p-5 sm:p-6 flex flex-col justify-between flex-grow text-left bg-white">
                <div>
                  {/* Category Tag */}
                  <span className="text-[11px] sm:text-xs font-sora font-semibold tracking-wider uppercase text-[#0284C7] block mb-2.5">
                    {post.category}
                  </span>

                  {/* Title */}
                  <h3 className="font-sora font-extrabold text-lg sm:text-xl text-[#0F172A] leading-snug group-hover:text-[#0284C7] transition-colors duration-200">
                    {post.title}
                  </h3>

                  {/* Excerpt Snippet */}
                  <p className="mt-3 text-xs sm:text-sm text-slate-600 font-inter leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>

                {/* Card Meta Footer */}
                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-[11px] sm:text-xs text-slate-500 font-inter">
                  <span className="font-medium text-slate-700">{post.author}</span>
                  <span>{post.date} · {post.readTime}</span>
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>

      {/* ARTICLE READER MODAL */}
      {selectedArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-fadeIn">
          <div className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-2xl bg-[#0B101D] border border-accent-blue/30 shadow-[0_20px_60px_rgba(0,0,0,0.9)] p-6 sm:p-8 text-left">
            
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setSelectedArticle(null)}
              className="absolute top-5 right-5 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Modal Content */}
            <span className="text-xs font-sora font-bold tracking-wider uppercase text-accent-cyan">
              {selectedArticle.category}
            </span>

            <h2 className="font-sora font-extrabold text-2xl sm:text-3xl text-white mt-2 leading-snug">
              {selectedArticle.title}
            </h2>

            <div className="flex items-center gap-3 text-xs text-muted-text mt-3 pb-4 border-b border-white/10">
              <span>{selectedArticle.author}</span>
              <span>•</span>
              <span>{selectedArticle.date}</span>
              <span>•</span>
              <span>{selectedArticle.readTime}</span>
            </div>

            <div className="mt-6 text-sm text-slate-300 font-inter leading-relaxed space-y-4">
              <p className="text-base text-white font-medium">
                {selectedArticle.excerpt}
              </p>
              <div 
                className="prose prose-invert max-w-none text-slate-300 whitespace-pre-line text-sm leading-relaxed"
                dangerouslySetInnerHTML={{ __html: selectedArticle.content.trim().replace(/^### (.*$)/gim, '<h4 class="font-sora font-bold text-base text-white mt-4 mb-2">$1</h4>').replace(/^- (.*$)/gim, '<li class="ml-4 list-disc">$1</li>') }}
              />
            </div>

            <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs text-muted-text">
                Need expert engineering for your project?
              </span>
              <button
                type="button"
                onClick={() => {
                  setSelectedArticle(null);
                  if (onOpenProjectModal) {
                    onOpenProjectModal();
                  } else {
                    window.dispatchEvent(new CustomEvent('open-project-modal'));
                  }
                }}
                className="px-5 py-2.5 rounded-full bg-accent-blue hover:bg-accent-blue-hover text-white font-sora font-semibold text-xs transition-colors cursor-pointer shadow-blue-glow w-full sm:w-auto text-center"
              >
                Start your project
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}
