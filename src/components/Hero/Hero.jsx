import React from 'react';
import { ArrowRight, Play, Zap, ShieldCheck, Sparkles } from 'lucide-react';

export default function Hero({ onOpenQuote }) {
  return (
    <section id="hero" className="hero-section">
      <div className="ambient-glow" />

      <div className="container" style={{ position: 'relative', zIndex: 10, textAlign: 'center' }}>
        <div style={{ maxWidth: '52rem', margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.75rem' }}>
          
          {/* Top Pill Badge */}
          <div className="badge-pill">
            <span style={{ display: 'inline-block', width: '8px', height: '8px', borderRadius: '50%', background: '#F92C53' }} className="animate-pulse" />
            <span>Design engineering for ambitious brands</span>
            <Sparkles style={{ width: '0.9rem', height: '0.9rem', color: '#F92C53' }} />
          </div>

          {/* Title */}
          <h1 className="hero-title font-heading">
            Design engineering <br />
            <span className="hero-title-gradient">for ambitious brands.</span>
          </h1>

          {/* Subtitle */}
          <p className="hero-subtitle font-sans">
            We design and build custom websites, portals, and apps with uncompromised performance. 
            From the Philippines to ambitious brands across Asia-Pacific.
          </p>

          {/* Tagline Badge */}
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '0.4rem 1rem',
            borderRadius: '9999px',
            background: '#E6FFFA',
            color: '#0D9488',
            fontSize: '0.85rem',
            fontWeight: 600,
            border: '1px solid rgba(13, 148, 136, 0.2)'
          }}>
            <ShieldCheck style={{ width: '1rem', height: '1rem' }} />
            <span>Tech crafted with empathy · Purpose in every pixel</span>
          </div>

          {/* CTA Action Buttons */}
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem', marginTop: '0.5rem' }}>
            <a href="#pricing" className="btn btn-coral">
              <span>View Packages</span>
              <ArrowRight style={{ width: '1.1rem', height: '1.1rem' }} />
            </a>

            <a href="#portfolio" className="btn btn-dark">
              <Play style={{ width: '0.9rem', height: '0.9rem', fill: '#ffffff' }} />
              <span>See Our Work</span>
            </a>
          </div>

        </div>

        {/* Hero Interactive Showcase Card */}
        <div className="hero-mockup-box">
          <div className="mockup-header-bar">
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              <div className="dot-red" />
              <div className="dot-yellow" />
              <div className="dot-green" />
            </div>

            <div className="font-mono text-muted" style={{ fontSize: '0.75rem', background: 'rgba(255,255,255,0.05)', padding: '0.25rem 1rem', borderRadius: '9999px' }}>
              lorolabs.ai/demo — Live Studio Engine
            </div>

            <div className="font-mono text-teal" style={{ fontSize: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <Zap style={{ width: '0.85rem', height: '0.85rem' }} />
              99/100 Speed
            </div>
          </div>

          {/* Showcase Image */}
          <div style={{ position: 'relative', width: '100%', aspectRatio: '16/9', overflow: 'hidden' }}>
            <img
              src="/loro_hero_mockup.jpg"
              alt="Loro Labs Engine Showcase"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />

            {/* Overlaid Badges */}
            <div style={{
              position: 'absolute',
              bottom: '1.5rem',
              left: '1.5rem',
              right: '1.5rem',
              display: 'flex',
              flexWrap: 'wrap',
              justify: 'space-between',
              gap: '1rem'
            }}>
              <div style={{
                background: 'rgba(15, 23, 42, 0.9)',
                backdropFilter: 'blur(12px)',
                border: '1px solid rgba(255,255,255,0.15)',
                padding: '0.65rem 1.25rem',
                borderRadius: '1rem',
                color: '#ffffff',
                textAlign: 'left'
              }}>
                <div style={{ fontSize: '0.75rem', color: '#94A3B8' }}>Lighthouse Performance</div>
                <div className="font-mono" style={{ fontSize: '0.875rem', fontWeight: 700, color: '#10B981' }}>0.2s Load · 100/100 SEO</div>
              </div>

              <div style={{
                background: 'rgba(15, 23, 42, 0.9)',
                backdropFilter: 'blur(12px)',
                border: '1px solid rgba(255,255,255,0.15)',
                padding: '0.65rem 1.25rem',
                borderRadius: '1rem',
                color: '#ffffff',
                textAlign: 'left'
              }}>
                <div style={{ fontSize: '0.75rem', color: '#94A3B8' }}>Source Code Ownership</div>
                <div className="font-mono" style={{ fontSize: '0.875rem', fontWeight: 700, color: '#ffffff' }}>100% Yours to keep</div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
