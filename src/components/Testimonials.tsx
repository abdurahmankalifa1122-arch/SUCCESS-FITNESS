import React from 'react';
import { MessageSquareQuote, Star, Edit3, ShieldAlert } from 'lucide-react';
import { TESTIMONIALS } from '../data/gymData';

export const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 lg:py-28 bg-[#0B0C12] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#161822] border border-white/10 text-[#E5A93C] text-xs uppercase font-heading tracking-widest mb-3">
            <MessageSquareQuote className="w-3.5 h-3.5" />
            <span>Member Feedback</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white uppercase">
            MEMBER <span className="text-[#E5A93C]">TESTIMONIALS</span>
          </h2>
          <div className="w-16 h-1 bg-[#E5A93C] mx-auto mt-4 mb-4 rounded-full" />
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
            Verified community feedback from lifters and fitness enthusiasts training at Success Fitness Center in Bole, Addis Ababa.
          </p>
        </div>

        {/* Informational Editable Notice */}
        <div className="max-w-xl mx-auto mb-10 p-3.5 rounded-xl bg-[#141622] border border-[#E5A93C]/20 flex items-center justify-center gap-2 text-center">
          <Edit3 className="w-4 h-4 text-[#E5A93C] shrink-0" />
          <p className="text-xs text-gray-300">
            <strong className="text-white">Admin Note:</strong> Testimonial slots below are ready to be populated with your gym's verified member quotes.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {TESTIMONIALS.map((item, idx) => (
            <div
              key={item.id}
              className="p-7 rounded-2xl bg-[#10121A] border border-white/10 hover:border-[#E5A93C]/40 transition-all flex flex-col justify-between shadow-xl relative group"
            >
              {/* Quote Icon Background */}
              <div className="absolute top-6 right-6 text-white/5 group-hover:text-[#E5A93C]/10 transition-colors pointer-events-none">
                <MessageSquareQuote className="w-12 h-12" />
              </div>

              <div>
                {/* Rating Stars */}
                <div className="flex items-center gap-1 mb-4 text-[#E5A93C]">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#E5A93C]" />
                  ))}
                </div>

                {/* Quote Text */}
                <p className="text-gray-300 text-xs sm:text-sm leading-relaxed italic mb-6">
                  "{item.quote}"
                </p>
              </div>

              {/* Author & Status */}
              <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                <div>
                  <h4 className="font-heading text-sm font-bold text-white uppercase">
                    {item.author}
                  </h4>
                  <span className="text-[11px] text-[#E5A93C] font-semibold">
                    {item.role}
                  </span>
                </div>

                <span className="text-[10px] px-2 py-0.5 rounded bg-[#1A1D2D] text-gray-400 border border-white/5 font-mono">
                  Slot #{idx + 1}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
