import React from 'react';
import { Dumbbell, MapPin, Phone, ArrowUp } from 'lucide-react';
import { BUSINESS_INFO } from '../data/gymData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#06070A] border-t border-white/10 text-gray-400 pt-16 pb-24 sm:pb-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/5">
          {/* Column 1: Brand & Slogan */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 flex items-center justify-center flex-shrink-0">
                <img
                  src={BUSINESS_INFO.logoUrl || "./logo.png"}
                  alt="Success Fitness Center Logo"
                  className="w-full h-full object-contain filter drop-shadow"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    const fallback = e.currentTarget.parentElement?.querySelector('.footer-logo-fallback');
                    if (fallback) (fallback as HTMLElement).style.display = 'flex';
                  }}
                />
                <div className="footer-logo-fallback hidden w-full h-full rounded-lg bg-gradient-to-br from-[#E5A93C] to-[#B37E22] items-center justify-center text-black font-extrabold">
                  <Dumbbell className="w-5 h-5 stroke-[2.5]" />
                </div>
              </div>
              <div>
                <span className="font-heading text-lg font-bold tracking-wider text-white block leading-none">
                  SUCCESS <span className="text-[#E5A93C]">FITNESS</span>
                </span>
                <span className="text-[10px] text-gray-400 tracking-widest uppercase">
                  Bole • Addis Ababa
                </span>
              </div>
            </div>

            <p className="text-xs text-gray-400 leading-relaxed">
              Addis Ababa’s premier gym for strength training, heavy resistance, and athletic discipline in Bole. Train Hard. Live Strong.
            </p>

            <div className="pt-1">
              <span className="inline-block px-3 py-1 rounded-md bg-[#12141F] border border-white/10 text-[11px] font-heading font-bold text-[#E5A93C] uppercase tracking-wider">
                Currency: ETB (Ethiopian Birr)
              </span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-3">
            <h4 className="font-heading text-sm font-bold text-white uppercase tracking-wider">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a
                  href="#hero"
                  onClick={(e) => handleNavClick(e, '#hero')}
                  className="hover:text-[#E5A93C] transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  onClick={(e) => handleNavClick(e, '#about')}
                  className="hover:text-[#E5A93C] transition-colors"
                >
                  About Gym
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  onClick={(e) => handleNavClick(e, '#services')}
                  className="hover:text-[#E5A93C] transition-colors"
                >
                  Services & Zones
                </a>
              </li>
              <li>
                <a
                  href="#membership"
                  onClick={(e) => handleNavClick(e, '#membership')}
                  className="hover:text-[#E5A93C] transition-colors"
                >
                  Membership Plans (ETB)
                </a>
              </li>
              <li>
                <a
                  href="#trainers"
                  onClick={(e) => handleNavClick(e, '#trainers')}
                  className="hover:text-[#E5A93C] transition-colors"
                >
                  Training Staff
                </a>
              </li>
              <li>
                <a
                  href="#gallery"
                  onClick={(e) => handleNavClick(e, '#gallery')}
                  className="hover:text-[#E5A93C] transition-colors"
                >
                  Equipment Gallery
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Location & Phone */}
          <div className="space-y-3">
            <h4 className="font-heading text-sm font-bold text-white uppercase tracking-wider">
              Gym Location & Line
            </h4>
            <div className="space-y-2 text-xs">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#E5A93C] shrink-0 mt-0.5" />
                <span>{BUSINESS_INFO.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#E5A93C] shrink-0" />
                <a
                  href={`tel:${BUSINESS_INFO.phoneRaw}`}
                  className="text-white hover:text-[#E5A93C] font-semibold transition-colors"
                >
                  {BUSINESS_INFO.phone}
                </a>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={BUSINESS_INFO.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-xs font-heading font-bold text-[#E5A93C] hover:underline uppercase tracking-wider"
              >
                View on Google Maps →
              </a>
            </div>
          </div>

          {/* Column 4: Operational Note */}
          <div className="space-y-3">
            <h4 className="font-heading text-sm font-bold text-white uppercase tracking-wider">
              Membership Inquiries
            </h4>
            <p className="text-xs text-gray-400 leading-relaxed">
              For current membership plans, daily pass inquiries, or personal training bookings, please contact or visit our front desk in Bole.
            </p>
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#151722] hover:bg-[#E5A93C] text-white hover:text-black font-heading font-bold text-xs uppercase tracking-wider border border-white/10 transition-all"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Call +251 967 28 12 46</span>
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <p>
            © {new Date().getFullYear()} {BUSINESS_INFO.name}. All rights reserved. Bole, Addis Ababa, Ethiopia.
          </p>

          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-gray-400 hover:text-[#E5A93C] transition-colors font-heading uppercase tracking-wider text-xs cursor-pointer"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
