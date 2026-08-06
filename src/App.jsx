import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import StatsBar from './components/StatsBar/StatsBar';
import About from './components/About/About';
import HowItWorks from './components/HowItWorks/HowItWorks';
import Features from './components/Features/Features';
import Testimonials from './components/Testimonials/Testimonials';
import FinalCTA from './components/FinalCTA/FinalCTA';
import Footer from './components/Footer/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#050505] text-[#E5E5E5] font-sans selection:bg-[#9B5DE5] selection:text-white">
      {/* 1. Sticky / Floating Header */}
      <Navbar />

      <main>
        {/* 2. Hero Section */}
        <Hero />

        {/* 3. Stats / Social Proof Bar */}
        <StatsBar />

        {/* 4. About / Mission Section */}
        <About />

        {/* 5. How It Works Section */}
        <HowItWorks />

        {/* 6. What You'll Experience Inside / Features */}
        <Features />

        {/* 7. What Our Community Says / Testimonials */}
        <Testimonials />

        {/* 8. Final CTA Section */}
        <FinalCTA />
      </main>

      {/* 9. Footer */}
      <Footer />
    </div>
  );
}
