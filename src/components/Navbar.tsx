import React, { useState, useEffect } from 'react';
import { Phone, Menu, X, Dumbbell, MapPin } from 'lucide-react';
import { BUSINESS_INFO } from '../data/gymData';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Membership', href: '#membership' },
    { name: 'Trainers', href: '#trainers' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Location', href: '#location' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#08090C]/95 backdrop-blur-md py-3 border-b border-white/10 shadow-2xl shadow-black/80'
          : 'bg-gradient-to-b from-black/90 via-black/50 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, '#hero')}
            className="flex items-center gap-3 group focus:outline-none"
            id="nav-logo"
          >
            <div className="relative w-[80px] h-[80px] flex items-center justify-center transition-transform group-hover:scale-105 flex-shrink-0">
              <img
                src={BUSINESS_INFO.logoUrl}
                alt="Success Fitness Center Logo"
                referrerPolicy="no-referrer"
                style={{ width: '80px', height: '80px' }}
                className="w-[80px] h-[80px] object-contain drop-shadow-md"
                onError={(e) => {
                  // Fallback if image fails to load
                  e.currentTarget.style.display = 'none';
                  const fallback = e.currentTarget.parentElement?.querySelector('.logo-fallback');
                  if (fallback) (fallback as HTMLElement).style.display = 'flex';
                }}
              />
              <div className="logo-fallback hidden w-full h-full rounded-lg bg-gradient-to-br from-[#E5A93C] to-[#B37E22] items-center justify-center text-black font-extrabold">
                <Dumbbell className="w-8 h-8 stroke-[2.5]" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-heading text-lg sm:text-xl font-bold tracking-wider text-white leading-tight group-hover:text-white">
                SUCCESS <span className="text-[#E5A93C]">FITNESS</span>
              </span>
              <span className="text-[10px] sm:text-xs font-semibold tracking-widest text-[#94A3B8] uppercase flex items-center gap-1">
                <MapPin className="w-3 h-3 text-[#E5A93C]" />
                Bole • Addis Ababa
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7" id="desktop-nav-menu">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-xs xl:text-sm uppercase tracking-wider font-semibold text-gray-300 hover:text-[#E5A93C] transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-[#E5A93C] after:scale-x-0 hover:after:scale-x-100 after:transition-transform"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Direct Phone Call Button */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              id="header-call-btn"
              className="inline-flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 rounded-lg bg-[#E5A93C] text-black font-heading font-bold text-sm tracking-wider uppercase hover:bg-[#F2B94F] active:scale-95 transition-all shadow-lg shadow-[#E5A93C]/20"
            >
              <Phone className="w-4 h-4" />
              <span>{BUSINESS_INFO.phone}</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="sm:hidden p-2 rounded-lg bg-[#E5A93C]/20 border border-[#E5A93C]/40 text-[#E5A93C]"
              aria-label="Call Success Fitness Center"
            >
              <Phone className="w-5 h-5" />
            </a>
            <button
              type="button"
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-[#141620] border border-white/10 text-gray-300 hover:text-white hover:border-[#E5A93C]/40 focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div
            id="mobile-nav-drawer"
            className="lg:hidden mt-3 pt-4 pb-6 px-4 rounded-xl bg-[#0F1017] border border-white/10 shadow-2xl shadow-black space-y-3"
          >
            <div className="grid grid-cols-2 gap-2 pb-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="px-3 py-2 rounded-md bg-[#161822] text-sm font-semibold text-gray-200 hover:bg-[#E5A93C]/10 hover:text-[#E5A93C] transition-colors border border-white/5"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="pt-2 border-t border-white/10 flex flex-col gap-2">
              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-lg bg-[#E5A93C] text-black font-heading font-bold text-base tracking-wider uppercase shadow-md shadow-[#E5A93C]/20"
              >
                <Phone className="w-4 h-4" />
                <span>Call Now: {BUSINESS_INFO.phone}</span>
              </a>
              <p className="text-center text-[11px] text-gray-400">
                Bole, Addis Ababa, Ethiopia • ETB Pricing
              </p>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
