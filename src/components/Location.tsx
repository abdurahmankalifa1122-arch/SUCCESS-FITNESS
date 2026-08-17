import React from 'react';
import { MapPin, Phone, Navigation, ExternalLink, Clock, Car, Compass } from 'lucide-react';
import { BUSINESS_INFO } from '../data/gymData';

export const Location: React.FC = () => {
  return (
    <section id="location" className="py-20 lg:py-28 bg-[#08090C] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#161822] border border-white/10 text-[#E5A93C] text-xs uppercase font-heading tracking-widest mb-3">
            <MapPin className="w-3.5 h-3.5" />
            <span>Facility Location</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white uppercase">
            FIND US IN <span className="text-[#E5A93C]">BOLE, ADDIS ABABA</span>
          </h2>
          <div className="w-16 h-1 bg-[#E5A93C] mx-auto mt-4 mb-4 rounded-full" />
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
            Conveniently situated in Bole Sub-City, Addis Ababa, Ethiopia. Easy access for morning workouts, lunch-hour training, and evening strength sessions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Details and Contact Cards */}
          <div className="lg:col-span-5 space-y-6">
            {/* Primary Address Card */}
            <div className="p-7 rounded-2xl bg-[#10121A] border border-white/10 shadow-xl space-y-6">
              <div>
                <span className="text-xs font-heading font-bold text-[#E5A93C] uppercase tracking-wider">
                  Gym Location
                </span>
                <h3 className="font-heading text-2xl font-bold text-white uppercase mt-1">
                  {BUSINESS_INFO.name}
                </h3>
                <p className="text-sm text-gray-300 mt-2 flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-[#E5A93C] shrink-0 mt-0.5" />
                  <span>{BUSINESS_INFO.location}</span>
                </p>
              </div>

              <div className="pt-4 border-t border-white/5 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-400">Direct Phone:</span>
                  <a
                    href={`tel:${BUSINESS_INFO.phoneRaw}`}
                    className="text-sm font-heading font-bold text-[#E5A93C] hover:underline"
                  >
                    {BUSINESS_INFO.phone}
                  </a>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-400">Region:</span>
                  <span className="text-xs font-semibold text-white">Addis Ababa, Ethiopia</span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-400">District:</span>
                  <span className="text-xs font-semibold text-white">Bole Sub-City</span>
                </div>
              </div>

              {/* Direct Maps CTA Button */}
              <div className="pt-2">
                <a
                  href={BUSINESS_INFO.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="google-maps-cta-btn"
                  className="w-full py-3.5 px-5 rounded-xl bg-[#E5A93C] text-black font-heading font-bold text-xs uppercase tracking-wider hover:bg-[#F2B94F] transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#E5A93C]/20"
                >
                  <Navigation className="w-4 h-4" />
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5 ml-1" />
                </a>
              </div>
            </div>

            {/* Schedule & Transportation Advice Card */}
            <div className="p-6 rounded-2xl bg-[#10121A] border border-white/10 space-y-4">
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-[#E5A93C] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-heading text-sm font-bold text-white uppercase">
                    Operating Schedule
                  </h4>
                  <p className="text-xs text-gray-400 mt-1 leading-relaxed">
                    {BUSINESS_INFO.hoursNotice}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 pt-3 border-t border-white/5">
                <Car className="w-5 h-5 text-[#E5A93C] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-heading text-sm font-bold text-white uppercase">
                    Accessibility & Parking
                  </h4>
                  <p className="text-xs text-gray-400 mt-1 leading-relaxed">
                    Accessible by private vehicle, ride hailing, and public transit across the Bole corridor.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Google Maps Interactive Embed / Visual */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl overflow-hidden bg-[#10121A] border border-white/10 shadow-2xl relative h-[420px] lg:h-[500px] flex flex-col">
              {/* Top Map Header Bar */}
              <div className="p-3.5 bg-[#141622] border-b border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  <span className="ml-2 text-xs font-heading font-semibold text-gray-300 uppercase tracking-wider">
                    Google Maps • Bole, Addis Ababa
                  </span>
                </div>

                <a
                  href={BUSINESS_INFO.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[11px] text-[#E5A93C] hover:underline flex items-center gap-1 font-semibold"
                >
                  <span>Full Screen</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              {/* Map Iframe */}
              <div className="relative flex-1 w-full bg-[#12131A]">
                <iframe
                  title="Success Fitness Center Location Map Bole Addis Ababa"
                  src="https://maps.google.com/maps?q=Bole,%20Addis%20Ababa,%20Ethiopia&t=&z=14&ie=UTF8&iwloc=&output=embed"
                  className="w-full h-full border-0 filter invert-[90%] hue-rotate-180 contrast-125"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />

                {/* Floating Map Pin Overlay */}
                <div className="absolute bottom-4 left-4 right-4 sm:right-auto sm:max-w-sm p-4 rounded-xl bg-[#090A0F]/95 backdrop-blur-md border border-white/15 shadow-2xl">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-[#E5A93C] text-black flex items-center justify-center shrink-0">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-heading text-sm font-bold text-white uppercase leading-tight">
                        Success Fitness Center
                      </h4>
                      <p className="text-xs text-gray-300">
                        Bole, Addis Ababa, Ethiopia
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
