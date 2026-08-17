import React from 'react';
import { Check, Phone, ShieldCheck, CreditCard, HelpCircle, Sparkles } from 'lucide-react';
import { MEMBERSHIP_PLANS, BUSINESS_INFO } from '../data/gymData';

export const Membership: React.FC = () => {
  return (
    <section id="membership" className="py-20 lg:py-28 bg-[#0B0C12] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#161822] border border-white/10 text-[#E5A93C] text-xs uppercase font-heading tracking-widest mb-3">
            <CreditCard className="w-3.5 h-3.5" />
            <span>Ethiopian Birr (ETB)</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white uppercase">
            MEMBERSHIP <span className="text-[#E5A93C]">PLANS & PACKAGES</span>
          </h2>
          <div className="w-16 h-1 bg-[#E5A93C] mx-auto mt-4 mb-4 rounded-full" />
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
            Straightforward and transparent membership tiers in Ethiopian Birr (ETB). Contact the gym directly at <strong className="text-white">{BUSINESS_INFO.phone}</strong> for current promotional rates and enrollment.
          </p>
        </div>

        {/* Currency & Direct Enrollment Notice */}
        <div className="mb-10 p-4 rounded-xl bg-[#141622] border border-[#E5A93C]/30 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-[#E5A93C]/10 text-[#E5A93C] flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <p className="text-sm font-semibold text-white">
                Official Currency: <span className="text-[#E5A93C]">Ethiopian Birr (ETB)</span>
              </p>
              <p className="text-xs text-gray-400">
                In-person registration & inquiries available at our Bole facility front desk.
              </p>
            </div>
          </div>
          <a
            href={`tel:${BUSINESS_INFO.phoneRaw}`}
            className="text-xs font-heading font-bold uppercase tracking-wider text-[#E5A93C] hover:underline flex items-center gap-1 shrink-0"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>Call to Confirm Rates</span>
          </a>
        </div>

        {/* Membership Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {MEMBERSHIP_PLANS.map((plan) => (
            <div
              key={plan.id}
              className={`rounded-2xl flex flex-col justify-between p-6 sm:p-7 relative transition-all duration-300 ${
                plan.isPopular
                  ? 'bg-gradient-to-b from-[#181B2B] via-[#12141F] to-[#0E1018] border-2 border-[#E5A93C] shadow-2xl shadow-[#E5A93C]/10 transform lg:-translate-y-2'
                  : 'bg-[#10121A] border border-white/10 hover:border-white/20'
              }`}
            >
              {/* Popular Badge */}
              {plan.badge && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span
                    className={`px-3 py-1 rounded-full text-[10px] font-heading font-black tracking-widest uppercase shadow-md ${
                      plan.isPopular
                        ? 'bg-[#E5A93C] text-black'
                        : 'bg-[#1E2130] text-gray-300 border border-white/10'
                    }`}
                  >
                    {plan.badge}
                  </span>
                </div>
              )}

              <div>
                {/* Plan Header */}
                <div className="mb-4 pt-2">
                  <h3 className="font-heading text-xl font-bold text-white uppercase tracking-wide">
                    {plan.name}
                  </h3>
                  <p className="text-xs text-gray-400 mt-1 min-h-[32px]">
                    {plan.description}
                  </p>
                </div>

                {/* Price Display */}
                <div className="py-4 my-2 border-y border-white/10">
                  <div className="flex items-baseline gap-1">
                    <span className="font-heading text-2xl sm:text-3xl font-black text-white tracking-tight">
                      {plan.priceDisplay}
                    </span>
                  </div>
                  <span className="text-[11px] font-semibold text-[#E5A93C] uppercase tracking-wider block mt-1">
                    {plan.currency} • {plan.billingPeriod}
                  </span>
                </div>

                {/* Features List */}
                <div className="space-y-3 my-6">
                  <span className="text-[11px] font-heading font-bold uppercase tracking-wider text-gray-400 block">
                    Included Benefits:
                  </span>
                  {plan.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-gray-300">
                      <Check className={`w-4 h-4 shrink-0 mt-0.5 ${plan.isPopular ? 'text-[#E5A93C]' : 'text-gray-400'}`} />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-4 border-t border-white/5">
                <a
                  href={`tel:${BUSINESS_INFO.phoneRaw}`}
                  className={`w-full py-3 px-4 rounded-xl font-heading font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-md ${
                    plan.isPopular
                      ? 'bg-[#E5A93C] text-black hover:bg-[#F2B94F]'
                      : 'bg-[#181A26] text-white hover:bg-[#E5A93C] hover:text-black border border-white/10 hover:border-transparent'
                  }`}
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>{plan.ctaText}</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Informational Guidance Footer */}
        <div className="mt-14 p-6 rounded-2xl bg-[#10121A] border border-white/10 text-center max-w-2xl mx-auto">
          <div className="flex items-center justify-center gap-2 text-[#E5A93C] mb-2">
            <HelpCircle className="w-4 h-4" />
            <span className="font-heading text-xs uppercase tracking-wider font-bold">Registration Note</span>
          </div>
          <p className="text-xs text-gray-400 leading-relaxed">
            All membership registrations and payments are processed directly at the gym reception desk in Bole. No online payment processing is required. Call <strong className="text-white">{BUSINESS_INFO.phone}</strong> for instant assistance.
          </p>
        </div>
      </div>
    </section>
  );
};
