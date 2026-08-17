import React, { useState } from 'react';
import { Phone, MapPin, Send, CheckCircle2, MessageSquare, AlertCircle, Clock, ChevronDown, ChevronUp } from 'lucide-react';
import { BUSINESS_INFO, FAQ_ITEMS } from '../data/gymData';

export const Contact: React.FC = () => {
  const [name, setName] = useState('');
  const [userPhone, setUserPhone] = useState('');
  const [interest, setInterest] = useState('Monthly Membership');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;
    setSubmitted(true);
    setTimeout(() => {
      // Keep confirmation state
    }, 4000);
  };

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-[#0B0C12] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#161822] border border-white/10 text-[#E5A93C] text-xs uppercase font-heading tracking-widest mb-3">
            <Phone className="w-3.5 h-3.5" />
            <span>Direct Inquiries</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white uppercase">
            CONTACT <span className="text-[#E5A93C]">SUCCESS FITNESS CENTER</span>
          </h2>
          <div className="w-16 h-1 bg-[#E5A93C] mx-auto mt-4 mb-4 rounded-full" />
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
            Ready to train? Call us directly at <strong className="text-white">{BUSINESS_INFO.phone}</strong> or send an inquiry below. We look forward to seeing you on the gym floor in Bole.
          </p>
        </div>

        {/* Highlighted Direct Call Banner */}
        <div className="mb-14 p-8 rounded-3xl bg-gradient-to-r from-[#181B2B] via-[#151724] to-[#181B2B] border-2 border-[#E5A93C]/40 shadow-2xl shadow-black flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="space-y-1">
            <span className="text-xs font-heading font-bold text-[#E5A93C] uppercase tracking-widest">
              Direct Phone Line • Call For Instant Assistance
            </span>
            <h3 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
              {BUSINESS_INFO.phone}
            </h3>
            <p className="text-xs sm:text-sm text-gray-400">
              Location: Bole, Addis Ababa, Ethiopia • Memberships in Ethiopian Birr (ETB)
            </p>
          </div>

          <a
            href={`tel:${BUSINESS_INFO.phoneRaw}`}
            id="contact-call-now-main-btn"
            className="shrink-0 px-8 py-4 rounded-xl bg-[#E5A93C] text-black font-heading font-bold text-base uppercase tracking-wider hover:bg-[#F2B94F] active:scale-95 transition-all flex items-center gap-3 shadow-xl shadow-[#E5A93C]/25"
          >
            <Phone className="w-5 h-5 fill-current" />
            <span>Call Now</span>
          </a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Quick Inquiry Form (Self-Contained / Static Safe) */}
          <div className="lg:col-span-6">
            <div className="p-7 sm:p-8 rounded-2xl bg-[#10121A] border border-white/10 shadow-xl">
              <div className="flex items-center gap-2 mb-2 text-[#E5A93C]">
                <MessageSquare className="w-5 h-5" />
                <h3 className="font-heading text-xl font-bold text-white uppercase">
                  Send a Membership Inquiry
                </h3>
              </div>
              <p className="text-xs text-gray-400 mb-6">
                Fill in your details below to prepare your workout inquiry for our Bole team.
              </p>

              {submitted ? (
                <div className="p-6 rounded-xl bg-[#141E1A] border border-emerald-500/40 text-center space-y-3 animate-in fade-in">
                  <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto" />
                  <h4 className="font-heading text-lg font-bold text-white uppercase">
                    Inquiry Prepared!
                  </h4>
                  <p className="text-xs text-gray-300">
                    Thank you, <strong className="text-white">{name}</strong>. For the fastest response, please call our reception directly at{' '}
                    <a href={`tel:${BUSINESS_INFO.phoneRaw}`} className="text-[#E5A93C] font-bold underline">
                      {BUSINESS_INFO.phone}
                    </a>.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setName('');
                      setUserPhone('');
                      setMessage('');
                    }}
                    className="mt-2 px-4 py-2 rounded-lg bg-[#18231E] text-xs font-heading font-bold uppercase tracking-wider text-emerald-400 hover:bg-emerald-950 transition-colors"
                  >
                    Send Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-heading font-bold uppercase tracking-wider text-gray-300 mb-1.5">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Dawit Kebede"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-[#161824] border border-white/10 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-[#E5A93C] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-heading font-bold uppercase tracking-wider text-gray-300 mb-1.5">
                      Your Phone Number
                    </label>
                    <input
                      type="tel"
                      placeholder="e.g. +251 9XX XX XX XX"
                      value={userPhone}
                      onChange={(e) => setUserPhone(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-[#161824] border border-white/10 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-[#E5A93C] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-heading font-bold uppercase tracking-wider text-gray-300 mb-1.5">
                      Interested In
                    </label>
                    <select
                      value={interest}
                      onChange={(e) => setInterest(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-[#161824] border border-white/10 text-white text-sm focus:outline-none focus:border-[#E5A93C] transition-colors cursor-pointer"
                    >
                      <option value="Monthly Membership">Monthly Membership</option>
                      <option value="3-Month Membership">3-Month Membership (Popular)</option>
                      <option value="Personal Training">Personal Training / 1-on-1 Coaching</option>
                      <option value="Single Day Pass">Single Day Session / Drop-in</option>
                      <option value="General Question">General Facility Inquiry</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-heading font-bold uppercase tracking-wider text-gray-300 mb-1.5">
                      Additional Message (Optional)
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Write any questions regarding your training goals or schedule..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-[#161824] border border-white/10 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-[#E5A93C] transition-colors resize-none"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      id="contact-submit-btn"
                      className="w-full py-3.5 px-6 rounded-xl bg-[#E5A93C] text-black font-heading font-bold text-xs uppercase tracking-wider hover:bg-[#F2B94F] active:scale-95 transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#E5A93C]/20 cursor-pointer"
                    >
                      <Send className="w-4 h-4" />
                      <span>Submit Inquiry</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>

          {/* Right Column: FAQ Accordion */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <h3 className="font-heading text-2xl font-bold text-white uppercase">
                FREQUENTLY ASKED <span className="text-[#E5A93C]">QUESTIONS</span>
              </h3>
              <p className="text-xs text-gray-400 mt-1">
                Helpful details about joining and working out at Success Fitness Center in Bole.
              </p>
            </div>

            <div className="space-y-3">
              {FAQ_ITEMS.map((faq, idx) => (
                <div
                  key={idx}
                  className="rounded-xl bg-[#10121A] border border-white/10 overflow-hidden transition-all"
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(idx)}
                    className="w-full p-4 text-left flex items-center justify-between gap-3 focus:outline-none cursor-pointer hover:bg-[#141724]"
                  >
                    <span className="font-heading text-sm font-bold text-white uppercase tracking-wide">
                      {faq.question}
                    </span>
                    {openFaq === idx ? (
                      <ChevronUp className="w-4 h-4 text-[#E5A93C] shrink-0" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-gray-400 shrink-0" />
                    )}
                  </button>
                  {openFaq === idx && (
                    <div className="px-4 pb-4 pt-1 text-xs text-gray-300 leading-relaxed border-t border-white/5 bg-[#0D0E15]">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Quick Visit Summary */}
            <div className="p-5 rounded-xl bg-[#12141F] border border-white/10 space-y-2">
              <div className="flex items-center gap-2 text-[#E5A93C]">
                <MapPin className="w-4 h-4" />
                <span className="font-heading text-xs font-bold uppercase tracking-wider">Facility Address</span>
              </div>
              <p className="text-xs text-white font-medium">
                Success Fitness Center — Bole, Addis Ababa, Ethiopia
              </p>
              <p className="text-xs text-gray-400">
                Call <strong className="text-white">{BUSINESS_INFO.phone}</strong> for instant assistance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
