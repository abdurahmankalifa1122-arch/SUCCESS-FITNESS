import React from 'react';
import { Shield, Award, CheckCircle, Phone, UserCheck, Dumbbell } from 'lucide-react';
import { TRAINERS, BUSINESS_INFO } from '../data/gymData';
import { SafeImage } from './SafeImage';

export const Trainers: React.FC = () => {
  return (
    <section id="trainers" className="py-20 lg:py-28 bg-[#08090C] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#161822] border border-white/10 text-[#E5A93C] text-xs uppercase font-heading tracking-widest mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>Coaching & Guidance</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white uppercase">
            TRAINING <span className="text-[#E5A93C]">COACHES & STAFF</span>
          </h2>
          <div className="w-16 h-1 bg-[#E5A93C] mx-auto mt-4 mb-4 rounded-full" />
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
            Personalized guidance, lifting form correction, and dedicated accountability to help you lift heavier, safer, and with disciplined consistency in Bole.
          </p>
        </div>

        {/* Editable Notice Badge */}
        <div className="max-w-xl mx-auto mb-10 p-3 rounded-lg bg-[#141620] border border-white/10 text-center">
          <p className="text-xs text-gray-400">
            <span className="text-[#E5A93C] font-semibold">Staff Consultation:</span> Speak with on-floor coaches at the facility for 1-on-1 personal training packages.
          </p>
        </div>

        {/* Trainers Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {TRAINERS.map((trainer) => (
            <div
              key={trainer.id}
              className="rounded-2xl bg-[#10121A] border border-white/10 hover:border-[#E5A93C]/40 transition-all duration-300 overflow-hidden flex flex-col justify-between group shadow-xl"
            >
              <div>
                {/* Equipment / Strength Image Header */}
                <div className="relative h-64 w-full overflow-hidden bg-[#151722]">
                  <SafeImage
                    src={trainer.imageUrl}
                    alt={trainer.title}
                    containerClassName="w-full h-full"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 brightness-75"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#10121A] via-[#10121A]/30 to-transparent" />
                  
                  {/* Badge */}
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-md bg-[#08090C]/90 backdrop-blur-md border border-white/10 text-[11px] font-heading font-bold text-[#E5A93C] uppercase tracking-wider flex items-center gap-1.5">
                    <Dumbbell className="w-3 h-3" />
                    <span>{trainer.role}</span>
                  </div>
                </div>

                {/* Trainer Details */}
                <div className="p-6">
                  <h3 className="font-heading text-xl font-bold text-white uppercase tracking-wide group-hover:text-[#E5A93C] transition-colors">
                    {trainer.title}
                  </h3>
                  
                  <p className="text-xs text-[#E5A93C] font-semibold uppercase tracking-wider mt-1 mb-3">
                    {trainer.experience}
                  </p>

                  <p className="text-xs text-gray-300 leading-relaxed mb-4">
                    {trainer.specialty}
                  </p>

                  {/* Focus Areas Checklist */}
                  <div className="space-y-1.5 pt-3 border-t border-white/5">
                    <span className="text-[10px] font-heading font-bold uppercase tracking-wider text-gray-400 block mb-1">
                      Key Focus Disciplines:
                    </span>
                    {trainer.focusAreas.map((area, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-gray-400">
                        <CheckCircle className="w-3.5 h-3.5 text-[#E5A93C] shrink-0" />
                        <span>{area}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Inquire with Trainer */}
              <div className="p-6 pt-0">
                <a
                  href={`tel:${BUSINESS_INFO.phoneRaw}`}
                  className="w-full py-2.5 px-4 rounded-xl bg-[#161822] hover:bg-[#E5A93C] text-gray-300 hover:text-black font-heading font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 border border-white/10 hover:border-transparent"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Inquire for Coaching</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
