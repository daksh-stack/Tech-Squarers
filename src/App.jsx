import React, { useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Services from './components/Services/Services';
import Testimonial from './components/Testimonials/Testimonial';
import TechStack from './components/TechStack/TechStack';
import LoroDifference from './components/LoroDifference/LoroDifference';
import Portfolio from './components/Portfolio/Portfolio';
import Pricing from './components/Pricing/Pricing';
import Industries from './components/Industries/Industries';
import LiveDemo from './components/LiveDemo/LiveDemo';
import QuoteModal from './components/QuoteModal/QuoteModal';
import Footer from './components/Footer/Footer';

export default function App() {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);

  const handleOpenQuote = () => setIsQuoteOpen(true);
  const handleCloseQuote = () => setIsQuoteOpen(false);

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#1E293B] font-sans selection:bg-[#F92C53] selection:text-white">
      {/* Floating Navigation Bar */}
      <Navbar onOpenQuote={handleOpenQuote} />

      <main>
        {/* Hero Section */}
        <Hero onOpenQuote={handleOpenQuote} />

        {/* About Loro Labs */}
        <About />

        {/* Services & Capabilities (01-06) */}
        <Services onOpenQuote={handleOpenQuote} />

        {/* Client Testimonials & Live Stats */}
        <Testimonial />

        {/* Production Stack Marquee & Grid */}
        <TechStack />

        {/* The Loro Difference */}
        <LoroDifference />

        {/* Client Portfolio Showcase */}
        <Portfolio onOpenQuote={handleOpenQuote} />

        {/* Build & Operate Pricing */}
        <Pricing onOpenQuote={handleOpenQuote} />

        {/* Industries Cloud */}
        <Industries />

        {/* Interactive Live Demo Engine */}
        <LiveDemo onOpenQuote={handleOpenQuote} />
      </main>

      {/* Footer */}
      <Footer onOpenQuote={handleOpenQuote} />

      {/* Quote / Talk to the Studio Modal */}
      <QuoteModal isOpen={isQuoteOpen} onClose={handleCloseQuote} />
    </div>
  );
}
