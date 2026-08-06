import React from 'react';
import { ArrowRight, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer({ onOpenQuote }) {
  return (
    <footer style={{ background: '#090D16', color: '#ffffff', paddingTop: '5rem', paddingBottom: '3rem', borderTop: '1px solid #1E293B', position: 'relative' }}>
      <div className="container">
        
        {/* Pre-footer Callout Banner */}
        <div style={{
          background: 'linear-gradient(135deg, #0F172A 0%, #1E293B 100%)',
          borderRadius: '1.5rem',
          padding: '2.5rem',
          marginBottom: '5rem',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '1.5rem',
          border: '1px solid #334155'
        }}>
          <div>
            <span className="font-mono text-teal" style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em' }}>
              Ready to start building?
            </span>
            <h3 className="font-heading" style={{ fontSize: '2rem', fontWeight: 800, color: '#ffffff', marginTop: '0.25rem' }}>
              Let’s talk about your project.
            </h3>
            <p className="font-sans text-muted" style={{ fontSize: '0.9rem', marginTop: '0.25rem' }}>
              No pressure, just an honest conversation about what’s possible.
            </p>
          </div>

          <button onClick={onOpenQuote} className="btn btn-coral">
            <span>Talk to the studio</span>
            <ArrowRight style={{ width: '1.1rem', height: '1.1rem' }} />
          </button>
        </div>

        {/* Links */}
        <div className="grid-4" style={{ borderBottom: '1px solid #1E293B', paddingBottom: '3rem', marginBottom: '2rem' }}>
          
          {/* Brand */}
          <div>
            <a href="#hero" style={{ display: 'flex', itemsCenter: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
              <div className="logo-icon">
                <svg style={{ width: '1.4rem', height: '1.4rem', fill: 'currentColor' }} viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14.5v-9l6 4.5-6 4.5z"/>
                </svg>
              </div>
              <span className="font-heading" style={{ fontWeight: 800, color: '#ffffff', fontSize: '1.25rem' }}>
                Loro<span className="text-coral">Labs</span>
              </span>
            </a>

            <p className="font-sans text-muted" style={{ fontSize: '0.85rem', lineHeight: 1.6 }}>
              A design and engineering studio building custom websites, portals, and apps for businesses across APAC. Custom-built and yours to own.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading" style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: '#ffffff', marginBottom: '1rem' }}>
              Quick Links
            </h4>
            <ul className="font-sans" style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.875rem', color: '#94A3B8' }}>
              <li><a href="#hero">Home</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#portfolio">Portfolio</a></li>
              <li><a href="#pricing">Pricing &amp; Packages</a></li>
              <li><a href="#demo">Live Demo Engine</a></li>
            </ul>
          </div>

          {/* Offerings */}
          <div>
            <h4 className="font-heading" style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: '#ffffff', marginBottom: '1rem' }}>
              Studio Offerings
            </h4>
            <ul className="font-sans" style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.875rem', color: '#94A3B8' }}>
              <li><a href="#services">Website Development</a></li>
              <li><a href="#services">App Development</a></li>
              <li><a href="#services">Systems &amp; Platforms</a></li>
              <li><a href="#services">AI Media &amp; 3D Content</a></li>
              <li><a href="#services">IT &amp; Architecture Consulting</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="font-sans" style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.85rem', color: '#94A3B8' }}>
            <h4 className="font-heading" style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: '#ffffff', marginBottom: '0.25rem' }}>
              Contact Studio
            </h4>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Mail style={{ width: '1rem', height: '1rem', color: '#F92C53' }} />
              <a href="mailto:info@lorolabs.ai" style={{ color: '#CBD5E1' }}>info@lorolabs.ai</a>
            </div>
            <div style={{ display: 'flex', itemsCenter: 'center', gap: '0.5rem' }}>
              <Phone style={{ width: '1rem', height: '1rem', color: '#F92C53' }} />
              <a href="tel:+639602778783" style={{ color: '#CBD5E1' }}>+63 960 277 8783</a>
            </div>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.75rem' }}>
              <MapPin style={{ width: '1rem', height: '1rem', color: '#F92C53', flexShrink: 0, marginTop: '0.1rem' }} />
              <span>Unit 111 Spark Place, Quezon City 1109, Philippines</span>
            </div>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="font-mono text-muted" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.75rem', gap: '1rem' }}>
          <div>
            © {new Date().getFullYear()} Loro Labs Technologies Corporation. All rights reserved.
          </div>
          <div>
            “We build with empathy, creativity, and purpose.”
          </div>
        </div>

      </div>
    </footer>
  );
}
