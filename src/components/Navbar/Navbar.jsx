import React, { useState } from 'react';
import { ArrowRight, Menu, X } from 'lucide-react';

export default function Navbar({ onOpenQuote }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Stack', href: '#stack' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Live Demo', href: '#demo' },
  ];

  return (
    <header className="loro-header">
      <div className="container">
        <div className="nav-glass-bar">
          
          {/* Logo */}
          <a href="#hero" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <div className="logo-icon">
              <svg style={{ width: '1.4rem', height: '1.4rem', fill: 'currentColor' }} viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14.5v-9l6 4.5-6 4.5z"/>
              </svg>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span className="font-heading" style={{ fontWeight: 800, color: '#ffffff', fontSize: '1.2rem', letterSpacing: '-0.02em' }}>
                Loro<span className="text-coral">Labs</span>
              </span>
              <span className="font-mono" style={{ fontSize: '9px', color: '#94A3B8', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                Design Studio
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="nav-links" style={{ display: 'flex', alignItems: 'center', gap: '1.75rem' }}>
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="nav-link">
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop Action */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <button onClick={onOpenQuote} className="btn btn-coral">
              <span>Talk to the studio</span>
              <ArrowRight style={{ width: '1rem', height: '1rem' }} />
            </button>
          </div>

        </div>

      </div>
    </header>
  );
}
