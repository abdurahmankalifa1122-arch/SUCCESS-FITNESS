import React from 'react';
import { Target, Dumbbell, MapPin, ShieldCheck, CreditCard, Users, CheckCircle2, ArrowRight } from 'lucide-react';
import { WHY_US_BENEFITS, BUSINESS_INFO } from '../data/gymData';

export const WhyUs: React.FC = () => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Target': return <Target className="w-6 h-6" />;
      case 'Dumbbell': return <Dumbbell className="w-6 h-6" />;
      case 'MapPin': return <MapPin className="w-6 h-6" />;
      case 'ShieldCheck': return <ShieldCheck className="w-6 h-6" />;
      case 'CreditCard': return <CreditCard className="w-6 h-6" />;
      case 'Users': return <Users className="w-6 h-6" />;
      default: return <CheckCircle2 className="w-6 h-6" />;
    }
  };

  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="why-us" className="py-20 lg:py-28 bg-[#08090C] relative border-t border-white/5 overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#E5A93C]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#161822] border border-white/10 text-[#E5A93C] text-xs uppercase font-heading tracking-widest mb-3">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>The Success Advantage</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white uppercase">
            WHY TRAIN AT <span className="text-[#E5A93C]">SUCCESS FITNESS CENTER</span>
          </h2>
          <div className="w-16 h-1 bg-[#E5A93C] mx-auto mt-4 mb-4 rounded-full" />
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
            Built for lifters, athletes, and anyone striving for tangible physical transformation in Addis Ababa. Here is what defines our training philosophy.
          </p>
        </div>

        {/* Benefits 6-card Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_US_BENEFITS.map((benefit, idx) => (
            <div
              key={benefit.id}
              className="p-7 rounded-2xl bg-[#10121A] border border-white/10 hover:border-[#E5A93C]/40 transition-all duration-300 group flex flex-col justify-between shadow-xl"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-[#181B28] border border-white/10 text-[#E5A93C] flex items-center justify-center group-hover:bg-[#E5A93C] group-hover:text-black transition-colors shadow-md">
                    {getIcon(benefit.iconName)}
                  </div>
                  <span className="font-heading font-black text-2xl text-white/20 group-hover:text-[#E5A93C]/30 transition-colors">
                    0{idx + 1}
                  </span>
                </div>

                <h3 className="font-heading text-xl font-bold text-white uppercase tracking-wide group-hover:text-[#E5A93C] transition-colors mb-2">
                  {benefit.title}
                </h3>

                <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                  {benefit.description}
                </p>
              </div>

              <div className="pt-5 mt-5 border-t border-white/5 flex items-center gap-2 text-xs font-semibold text-[#E5A93C] uppercase tracking-wider">
                <span>Standard of Excellence</span>
              </div>
            </div>
          ))}
        </div>

        {/* Callout Strip */}
        <div className="mt-14 p-8 rounded-2xl bg-gradient-to-r from-[#141624] via-[#161828] to-[#141624] border border-white/10 flex flex-col lg:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="space-y-1 text-center lg:text-left">
            <h3 className="font-heading text-2xl sm:text-3xl font-bold text-white uppercase">
              Ready to Begin Your Training in Bole?
            </h3>
            <p className="text-xs sm:text-sm text-gray-300">
              Join a gym dedicated to heavy iron, discipline, and daily personal victories.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 w-full lg:w-auto">
            <button
              type="button"
              onClick={() => handleScrollTo('membership')}
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-[#E5A93C] text-black font-heading font-bold text-xs uppercase tracking-wider hover:bg-[#F2B94F] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-[#E5A93C]/20"
            >
              <span>Explore Memberships</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-[#1D2030] text-white font-heading font-bold text-xs uppercase tracking-wider hover:bg-[#25293E] border border-white/10 transition-all flex items-center justify-center gap-2 text-center"
            >
              <span>Call: {BUSINESS_INFO.phone}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
