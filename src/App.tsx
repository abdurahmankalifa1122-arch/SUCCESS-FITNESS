import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Membership } from './components/Membership';
import { Trainers } from './components/Trainers';
import { Gallery } from './components/Gallery';
import { WhyUs } from './components/WhyUs';
import { Testimonials } from './components/Testimonials';
import { Location } from './components/Location';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { QuickCallBar } from './components/QuickCallBar';

export default function App() {
  return (
    <div className="min-h-screen bg-[#08090C] text-[#E2E8F0] flex flex-col font-sans selection:bg-[#E5A93C] selection:text-black">
      {/* Sticky Header Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-grow">
        <Hero />
        <About />
        <Services />
        <Membership />
        <Trainers />
        <Gallery />
        <WhyUs />
        <Testimonials />
        <Location />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Mobile Floating Action Call Bar */}
      <QuickCallBar />
    </div>
  );
}
