import React from 'react';
import { Phone, Tag } from 'lucide-react';
import { BUSINESS_INFO } from '../data/gymData';

export const QuickCallBar: React.FC = () => {
  const scrollToMembership = () => {
    const el = document.getElementById('membership');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="sm:hidden fixed bottom-0 left-0 right-0 z-40 p-3 bg-[#08090C]/95 backdrop-blur-lg border-t border-white/10 shadow-2xl">
      <div className="grid grid-cols-2 gap-2">
        <button
          type="button"
          onClick={scrollToMembership}
          className="py-3 px-2 rounded-xl bg-[#161824] border border-white/10 text-white font-heading font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-1.5"
        >
          <Tag className="w-3.5 h-3.5 text-[#E5A93C]" />
          <span>Memberships</span>
        </button>

        <a
          href={`tel:${BUSINESS_INFO.phoneRaw}`}
          className="py-3 px-2 rounded-xl bg-[#E5A93C] text-black font-heading font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 shadow-lg shadow-[#E5A93C]/20"
        >
          <Phone className="w-3.5 h-3.5 fill-current" />
          <span>Call: {BUSINESS_INFO.phone}</span>
        </a>
      </div>
    </div>
  );
};
