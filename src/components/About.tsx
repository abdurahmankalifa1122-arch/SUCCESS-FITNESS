import React from 'react';
import { Shield, Dumbbell, Flame, CheckCircle, MapPin, Zap } from 'lucide-react';
import { BUSINESS_INFO, CORE_PILLARS } from '../data/gymData';
import { SafeImage } from './SafeImage';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 lg:py-28 bg-[#0B0C11] relative overflow-hidden border-t border-white/5">
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#E5A93C]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-900/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#161822] border border-white/10 text-[#E5A93C] text-xs uppercase font-heading tracking-widest mb-3">
            <Zap className="w-3.5 h-3.5" />
            <span>Built For True Strength</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white uppercase">
            ABOUT <span className="text-[#E5A93C]">SUCCESS FITNESS CENTER</span>
          </h2>
          <div className="w-16 h-1 bg-[#E5A93C] mx-auto mt-4 mb-4 rounded-full" />
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
            Success Fitness Center is Bole's dedicated destination for serious strength conditioning, bodybuilding, and athletic discipline. We provide a distraction-free environment where goals are forged with iron and consistency.
          </p>
        </div>

        {/* Two-column Feature & Story Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-20">
          {/* Left Column: Image showcase with dark masculine border */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-black group">
              <SafeImage
                src="https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?auto=format&fit=crop&w=1000&q=80"
                alt="Success Fitness Center Heavy Dumbbells"
                containerClassName="w-full h-80 sm:h-96"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-105 contrast-105 saturate-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#090A0F]/80 via-transparent to-transparent" />
              
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-[#12141F]/90 backdrop-blur-md border border-white/10">
                <p className="font-heading text-white text-base uppercase font-bold flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#E5A93C]" />
                  Bole, Addis Ababa, Ethiopia
                </p>
                <p className="text-xs text-gray-400 mt-0.5">
                  Professional gym environment equipped with heavy free weights and selectorized equipment.
                </p>
              </div>
            </div>

            {/* Accent badge */}
            <div className="hidden sm:flex absolute -top-5 -left-5 p-4 rounded-xl bg-[#E5A93C] text-black shadow-xl shadow-[#E5A93C]/20 flex-col items-center justify-center font-heading font-black">
              <span className="text-2xl leading-none">100%</span>
              <span className="text-[10px] tracking-wider uppercase font-bold">Focus & Grit</span>
            </div>
          </div>

          {/* Right Column: Narrative & Values */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-4 text-gray-300 text-sm sm:text-base leading-relaxed">
              <p>
                At <strong className="text-white">Success Fitness Center</strong>, we believe fitness is not a temporary pursuit—it is an uncompromising discipline. Located centrally in <strong className="text-[#E5A93C]">Bole, Addis Ababa</strong>, our facility is engineered for those who demand real progress from every repetition and set.
              </p>
              <p>
                Whether your target is muscle hypertrophy, powerlifting, cardiovascular endurance, or functional conditioning, our training floor is stocked with high-caliber equipment to support your athletic ambitions.
              </p>
            </div>

            {/* Key Gym Pillars Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#12131C] border border-white/5">
                <CheckCircle className="w-5 h-5 text-[#E5A93C] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-heading text-sm font-bold text-white uppercase">Heavy Free Weights</h4>
                  <p className="text-xs text-gray-400 mt-0.5">Olympic bars, bumper plates, and comprehensive dumbbell range.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#12131C] border border-white/5">
                <CheckCircle className="w-5 h-5 text-[#E5A93C] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-heading text-sm font-bold text-white uppercase">Precision Machines</h4>
                  <p className="text-xs text-gray-400 mt-0.5">Plate-loaded and pin-selected resistance stations.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#12131C] border border-white/5">
                <CheckCircle className="w-5 h-5 text-[#E5A93C] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-heading text-sm font-bold text-white uppercase">Dedicated Atmosphere</h4>
                  <p className="text-xs text-gray-400 mt-0.5">High-energy, focused environment free from distractions.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* The 5 Core Pillars Grid */}
        <div className="pt-8">
          <div className="text-center mb-8">
            <h3 className="font-heading text-xl sm:text-2xl text-white uppercase tracking-wider">
              OUR CORE <span className="text-[#E5A93C]">TRAINING PILLARS</span>
            </h3>
            <p className="text-xs sm:text-sm text-gray-400 mt-1">The foundation of everything we do at Success Fitness Center</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {CORE_PILLARS.map((pillar, idx) => (
              <div
                key={pillar.title}
                className="p-5 rounded-xl bg-[#12141F] border border-white/10 hover:border-[#E5A93C]/40 transition-all group flex flex-col justify-between shadow-lg"
              >
                <div>
                  <div className="w-10 h-10 rounded-lg bg-[#191C2B] border border-white/10 text-[#E5A93C] flex items-center justify-center font-heading font-black text-base group-hover:bg-[#E5A93C] group-hover:text-black transition-colors mb-3">
                    0{idx + 1}
                  </div>
                  <h4 className="font-heading text-lg font-bold text-white uppercase tracking-wide group-hover:text-[#E5A93C] transition-colors">
                    {pillar.title}
                  </h4>
                  <p className="text-[11px] font-semibold text-[#E5A93C]/90 uppercase tracking-wider mt-0.5 mb-2">
                    {pillar.subtitle}
                  </p>
                  <p className="text-xs text-gray-400 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
