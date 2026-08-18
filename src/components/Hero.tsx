import React from 'react';
import { Phone, ArrowRight, ShieldCheck, Dumbbell, MapPin, Award } from 'lucide-react';
import { BUSINESS_INFO, CORE_PILLARS } from '../data/gymData';
import { SafeImage } from './SafeImage';

export const Hero: React.FC = () => {
  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 overflow-hidden bg-[#08090C]">
      {/* Background Gym Image with Natural Exposure */}
      <div className="absolute inset-0 z-0">
        <SafeImage
          src={BUSINESS_INFO.heroImage}
          alt="Success Fitness Center Bole Addis Ababa Athlete Training"
          containerClassName="w-full h-full"
          className="w-full h-full object-cover object-center brightness-90 contrast-105 saturate-105 scale-105 transition-all duration-700"
        />
        {/* Subtle dark gradient overlay for text readability without obscuring gym scene */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#08090C] via-[#08090C]/60 to-black/40" />
        <div className="absolute inset-0 bg-radial-at-c from-transparent via-[#08090C]/40 to-[#08090C]" />
      </div>

      {/* Grid line accent overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none z-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">
        {/* Brand Logo & Location Badge */}
        <div className="flex flex-col items-center justify-center gap-4 mb-6">
          <div className="w-32 h-32 sm:w-44 sm:h-44 flex items-center justify-center hover:scale-105 transition-transform duration-300">
            <img
              src={BUSINESS_INFO.logoUrl}
              alt="Success Fitness Center Official Logo"
              referrerPolicy="no-referrer"
              className="w-full h-full object-contain"
            />
          </div>

          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#161822]/90 border border-[#E5A93C]/40 backdrop-blur-md shadow-lg shadow-black/60">
            <span className="w-2 h-2 rounded-full bg-[#E5A93C] animate-pulse" />
            <MapPin className="w-3.5 h-3.5 text-[#E5A93C]" />
            <span className="text-xs sm:text-sm font-semibold tracking-widest text-gray-200 uppercase">
              BOLE • ADDIS ABABA, ETHIOPIA
            </span>
          </div>
        </div>

        {/* Primary Gym Title */}
        <h2 className="font-display text-base sm:text-xl lg:text-2xl text-[#E5A93C] tracking-[0.2em] uppercase font-bold mb-3">
          SUCCESS FITNESS CENTER
        </h2>

        {/* Dramatic Slogan Headline */}
        <h1 className="font-heading text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-white uppercase leading-[0.95] max-w-5xl mx-auto drop-shadow-2xl">
          TRAIN HARD. <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#F3F4F6] to-[#E5A93C]">
            LIVE STRONG.
          </span>
        </h1>

        {/* Supporting Copy */}
        <p className="mt-6 text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto font-normal leading-relaxed">
          Addis Ababa’s premier fitness facility built for strength, discipline, and consistent physical excellence. Heavy iron, high-grade resistance machines, and a focused training atmosphere in Bole.
        </p>

        {/* Action Buttons */}
        <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
          <button
            type="button"
            id="hero-explore-membership-btn"
            onClick={() => handleScrollTo('membership')}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-[#E5A93C] text-black font-heading font-bold text-base tracking-wider uppercase hover:bg-[#F2B94F] active:scale-95 transition-all shadow-xl shadow-[#E5A93C]/25 cursor-pointer"
          >
            <span>Explore Membership</span>
            <ArrowRight className="w-5 h-5" />
          </button>

          <a
            href={`tel:${BUSINESS_INFO.phoneRaw}`}
            id="hero-call-now-btn"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl bg-[#141622] hover:bg-[#1A1D2D] text-white font-heading font-bold text-base tracking-wider uppercase border border-white/15 hover:border-[#E5A93C]/50 active:scale-95 transition-all shadow-xl shadow-black/50"
          >
            <Phone className="w-5 h-5 text-[#E5A93C]" />
            <span>Contact: {BUSINESS_INFO.phone}</span>
          </a>
        </div>

        {/* Quick Highlights Bar */}
        <div className="mt-14 sm:mt-16 pt-8 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto text-left">
          <div className="p-4 rounded-xl bg-[#10121A]/80 border border-white/5 backdrop-blur-sm">
            <div className="flex items-center gap-2 text-[#E5A93C] mb-1">
              <Dumbbell className="w-4 h-4" />
              <span className="font-heading text-xs uppercase tracking-wider font-bold">Heavy Iron</span>
            </div>
            <p className="text-xs text-gray-400">Complete barbells, racks & dumbbell range</p>
          </div>

          <div className="p-4 rounded-xl bg-[#10121A]/80 border border-white/5 backdrop-blur-sm">
            <div className="flex items-center gap-2 text-[#E5A93C] mb-1">
              <MapPin className="w-4 h-4" />
              <span className="font-heading text-xs uppercase tracking-wider font-bold">Prime Bole Location</span>
            </div>
            <p className="text-xs text-gray-400">Central & accessible in Addis Ababa</p>
          </div>

          <div className="p-4 rounded-xl bg-[#10121A]/80 border border-white/5 backdrop-blur-sm">
            <div className="flex items-center gap-2 text-[#E5A93C] mb-1">
              <ShieldCheck className="w-4 h-4" />
              <span className="font-heading text-xs uppercase tracking-wider font-bold">Serious Atmosphere</span>
            </div>
            <p className="text-xs text-gray-400">Pure focus on discipline & progress</p>
          </div>

          <div className="p-4 rounded-xl bg-[#10121A]/80 border border-white/5 backdrop-blur-sm">
            <div className="flex items-center gap-2 text-[#E5A93C] mb-1">
              <Award className="w-4 h-4" />
              <span className="font-heading text-xs uppercase tracking-wider font-bold">ETB Pricing</span>
            </div>
            <p className="text-xs text-gray-400">Transparent rates for members</p>
          </div>
        </div>
      </div>
    </section>
  );
};
