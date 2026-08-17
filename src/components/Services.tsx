import React, { useState } from 'react';
import { Dumbbell, Flame, Layers, Activity, Shield, Trophy, Check, ArrowRight, Phone } from 'lucide-react';
import { GYM_SERVICES, BUSINESS_INFO } from '../data/gymData';
import { SafeImage } from './SafeImage';

export const Services: React.FC = () => {
  const [selectedService, setSelectedService] = useState<string | null>(null);

  const getIcon = (name: string) => {
    switch (name) {
      case 'Dumbbell': return <Dumbbell className="w-5 h-5" />;
      case 'Flame': return <Flame className="w-5 h-5" />;
      case 'Layers': return <Layers className="w-5 h-5" />;
      case 'Activity': return <Activity className="w-5 h-5" />;
      case 'Shield': return <Shield className="w-5 h-5" />;
      case 'Trophy': return <Trophy className="w-5 h-5" />;
      default: return <Dumbbell className="w-5 h-5" />;
    }
  };

  const handleInquire = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-20 lg:py-28 bg-[#08090C] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#161822] border border-white/10 text-[#E5A93C] text-xs uppercase font-heading tracking-widest mb-3">
            <Dumbbell className="w-3.5 h-3.5" />
            <span>Training Disciplines</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white uppercase">
            TRAINING <span className="text-[#E5A93C]">SERVICES & ZONES</span>
          </h2>
          <div className="w-16 h-1 bg-[#E5A93C] mx-auto mt-4 mb-4 rounded-full" />
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
            Every zone of Success Fitness Center in Bole is outfitted with high-standard iron and resistance machinery designed to maximize your strength output.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {GYM_SERVICES.map((service) => (
            <div
              key={service.id}
              className="rounded-2xl bg-[#10121A] border border-white/10 hover:border-[#E5A93C]/40 transition-all duration-300 flex flex-col justify-between overflow-hidden group shadow-xl hover:shadow-2xl hover:shadow-black"
            >
              <div>
                {/* Image Banner */}
                <div className="relative h-48 sm:h-52 w-full overflow-hidden">
                  <SafeImage
                    src={service.imageUrl}
                    alt={service.title}
                    containerClassName="w-full h-full"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 brightness-80"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#10121A] via-[#10121A]/40 to-transparent" />
                  
                  {/* Category Pill */}
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-[#08090C]/80 backdrop-blur-md border border-white/10 text-[11px] font-heading font-bold text-[#E5A93C] uppercase tracking-wider">
                    {service.category}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-9 h-9 rounded-lg bg-[#181A25] border border-white/10 text-[#E5A93C] flex items-center justify-center">
                      {getIcon(service.iconName)}
                    </div>
                    <h3 className="font-heading text-xl font-bold text-white uppercase tracking-wide group-hover:text-[#E5A93C] transition-colors">
                      {service.title}
                    </h3>
                  </div>

                  <p className="text-gray-300 text-xs sm:text-sm leading-relaxed mb-4">
                    {service.description}
                  </p>

                  {/* Highlights checklist */}
                  <div className="space-y-1.5 pt-2 border-t border-white/5">
                    {service.highlights.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-gray-400">
                        <Check className="w-3.5 h-3.5 text-[#E5A93C] shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Inquire CTA */}
              <div className="px-6 pb-6 pt-2">
                <button
                  type="button"
                  onClick={handleInquire}
                  className="w-full py-2.5 px-4 rounded-xl bg-[#161824] hover:bg-[#E5A93C] text-gray-300 hover:text-black font-heading font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 border border-white/10 hover:border-transparent cursor-pointer"
                >
                  <span>Inquire For This Service</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Informational Notice Box */}
        <div className="mt-12 p-6 rounded-2xl bg-[#12141F] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h4 className="font-heading text-lg text-white uppercase font-bold">
              Looking for a Customized Workout Program?
            </h4>
            <p className="text-xs sm:text-sm text-gray-400 mt-1">
              Speak with our training desk in Bole for individualized coaching and routine design.
            </p>
          </div>
          <a
            href={`tel:${BUSINESS_INFO.phoneRaw}`}
            className="shrink-0 px-6 py-3 rounded-xl bg-[#E5A93C] text-black font-heading font-bold text-sm uppercase tracking-wider hover:bg-[#F2B94F] transition-all flex items-center gap-2"
          >
            <Phone className="w-4 h-4" />
            <span>Call: {BUSINESS_INFO.phone}</span>
          </a>
        </div>
      </div>
    </section>
  );
};
