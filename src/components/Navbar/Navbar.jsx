import React, { useState } from 'react';
import { ArrowRight, MessageSquare, Menu, X, Shield, Zap } from 'lucide-react';

/* Google Form Placeholder Link */
const GOOGLE_FORM_URL = "https://forms.gle/YOUR_FORM_LINK";
const DISCORD_INVITE_URL = "https://discord.gg/techsquarers";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'Experience', href: '#features' },
    { name: 'Community', href: '#testimonials' },
    { name: 'Contact', href: '#footer' },
  ];

  return (
    <header className="tech-header">
      <div className="container">
        <div className="nav-glass-bar">
          
          {/* Logo */}
          <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <div style={{
              width: '2.5rem',
              height: '2.5rem',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #9B5DE5 0%, #7B2CBF 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#ffffff',
              boxShadow: '0 0 15px rgba(155, 93, 229, 0.4)'
            }}>
              <Zap style={{ width: '1.3rem', height: '1.3rem', fill: '#ffffff' }} />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span className="font-heading" style={{ fontWeight: 800, color: '#ffffff', fontSize: '1.25rem', letterSpacing: '-0.02em' }}>
                Tech<span className="text-purple">Squarers</span>
              </span>
              <span className="font-mono" style={{ fontSize: '9px', color: '#A3A3A3', textTransform: 'uppercase', letterSpacing: '0.12em' }}>
                Vibranium Learning Ecosystem
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

          {/* Action CTAs */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            {/* Google Form Link */}
            <a
              href={GOOGLE_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-purple"
              style={{ padding: '0.6rem 1.25rem', fontSize: '0.85rem' }}
            >
              <span>Enquire Now</span>
              <ArrowRight style={{ width: '0.9rem', height: '0.9rem' }} />
            </a>

            {/* Discord Link */}
            <a
              href={DISCORD_INVITE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-silver"
              style={{ padding: '0.6rem 1.1rem', fontSize: '0.85rem' }}
            >
              <MessageSquare style={{ width: '0.9rem', height: '0.9rem', color: '#9B5DE5' }} />
              <span>Join Discord</span>
            </a>
          </div>

        </div>

      </div>
    </header>
  );
}
