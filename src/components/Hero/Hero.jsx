import React from 'react';
import { ArrowRight, MessageSquare, ShieldCheck, Zap, Users, Code, Sparkles, CheckCircle2 } from 'lucide-react';

/* Google Form Placeholder Link */
const GOOGLE_FORM_URL = "https://forms.gle/YOUR_FORM_LINK";
const DISCORD_INVITE_URL = "https://discord.gg/techsquarers";

export default function Hero() {
  return (
    <section id="hero" style={{ position: 'relative', paddingTop: '9.5rem', paddingBottom: '6rem', overflow: 'hidden', background: '#050505' }}>
      {/* Vibranium Ambient Background Glow */}
      <div className="bg-vibranium-glow-top" />

      <div className="container" style={{ position: 'relative', zIndex: 10, textAlign: 'center' }}>
        <div style={{ maxWidth: '54rem', margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.75rem' }}>
          
          {/* Vibranium Badge */}
          <div className="vibranium-badge">
            <span style={{ display: 'inline-block', width: '8px', height: '8px', borderRadius: '50%', background: '#9B5DE5' }} className="animate-pulse" />
            <span>Structured Discord Learning Ecosystem</span>
            <Sparkles style={{ width: '0.9rem', height: '0.9rem', color: '#9B5DE5' }} />
          </div>

          {/* Main Headline */}
          <h1 className="font-heading" style={{ fontSize: 'clamp(2.5rem, 5.5vw, 4.75rem)', fontWeight: 800, color: '#ffffff', lineHeight: 1.1 }}>
            Master Tech Skills. <br />
            <span style={{
              background: 'linear-gradient(135deg, #ffffff 0%, #9B5DE5 50%, #7B2CBF 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>
              Build Real Confidence.
            </span>
          </h1>

          {/* Subheadline */}
          <p className="font-sans" style={{ fontSize: '1.15rem', color: '#A3A3A3', maxWidth: '42rem', lineHeight: 1.6 }}>
            Join a focused Discord-powered learning community designed for serious learners who want structured guidance, real practice, and accountable progress.
          </p>

          {/* Supporting line */}
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '0.4rem 1rem',
            borderRadius: '9999px',
            background: 'rgba(155, 93, 229, 0.1)',
            border: '1px solid rgba(155, 93, 229, 0.25)',
            color: '#B77EF0',
            fontSize: '0.85rem',
            fontWeight: 500
          }}>
            <ShieldCheck style={{ width: '1rem', height: '1rem' }} />
            <span>Currently everything happens inside our Discord community.</span>
          </div>

          {/* Dual CTAs */}
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem', marginTop: '0.5rem' }}>
            {/* Primary Google Form Link */}
            <a
              href={GOOGLE_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-purple"
              style={{ padding: '0.95rem 2.25rem', fontSize: '1rem' }}
            >
              <span>Enquire / Join Now</span>
              <ArrowRight style={{ width: '1.1rem', height: '1.1rem' }} />
            </a>

            {/* Secondary Discord Link */}
            <a
              href={DISCORD_INVITE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-silver"
              style={{ padding: '0.95rem 2rem', fontSize: '1rem' }}
            >
              <MessageSquare style={{ width: '1.1rem', height: '1.1rem', color: '#9B5DE5' }} />
              <span>Join Our Discord</span>
            </a>
          </div>

          {/* Trust Indicators */}
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '1.75rem',
            marginTop: '1rem',
            paddingTop: '1.5rem',
            borderTop: '1px solid rgba(255, 255, 255, 0.08)',
            fontSize: '0.825rem',
            color: '#A3A3A3'
          }} className="font-mono">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <CheckCircle2 style={{ width: '1rem', height: '1rem', color: '#9B5DE5' }} />
              <span>Active Discord community</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <CheckCircle2 style={{ width: '1rem', height: '1rem', color: '#9B5DE5' }} />
              <span>Mentorship-driven</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <CheckCircle2 style={{ width: '1rem', height: '1rem', color: '#9B5DE5' }} />
              <span>Real projects</span>
            </div>
          </div>

        </div>

        {/* Vibranium Community Preview Mockup */}
        <div style={{
          marginTop: '4rem',
          maxWidth: '60rem',
          marginLeft: 'auto',
          marginRight: 'auto',
          borderRadius: '1.5rem',
          overflow: 'hidden',
          background: '#0D0D0D',
          border: '1px solid rgba(155, 93, 229, 0.3)',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.8), 0 0 30px rgba(155, 93, 229, 0.15)'
        }}>
          {/* Header Window Bar */}
          <div style={{ background: '#111111', padding: '0.75rem 1.5rem', borderBottom: '1px solid rgba(255, 255, 255, 0.08)', display: 'flex', alignItems: 'center', justifyBetween: 'space-between', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', gap: '0.4rem' }}>
              <div style={{ width: '0.75rem', height: '0.75rem', borderRadius: '50%', background: '#F43F5E' }} />
              <div style={{ width: '0.75rem', height: '0.75rem', borderRadius: '50%', background: '#F59E0B' }} />
              <div style={{ width: '0.75rem', height: '0.75rem', borderRadius: '50%', background: '#10B981' }} />
            </div>

            <div className="font-mono text-purple" style={{ fontSize: '0.75rem', background: 'rgba(155, 93, 229, 0.1)', padding: '0.25rem 1rem', borderRadius: '9999px', border: '1px solid rgba(155, 93, 229, 0.2)' }}>
              #techsquarers — Discord Learning Hub
            </div>

            <div className="font-mono text-silver" style={{ fontSize: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <Zap style={{ width: '0.85rem', height: '0.85rem', color: '#9B5DE5' }} />
              Active Hub
            </div>
          </div>

          {/* Generated Hero Showcase Graphic */}
          <div style={{ position: 'relative', width: '100%', aspectRatio: '16/8', overflow: 'hidden', background: '#050505' }}>
            <img
              src="/loro_hero_mockup.jpg"
              alt="TechSquarers Discord Community Hub Preview"
              style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.85 }}
            />
            <div style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(180deg, transparent 40%, rgba(5,5,5,0.95) 100%)'
            }} />

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
                background: 'rgba(17, 17, 17, 0.92)',
                backdropFilter: 'blur(12px)',
                border: '1px solid rgba(155, 93, 229, 0.3)',
                padding: '0.75rem 1.25rem',
                borderRadius: '1rem',
                color: '#ffffff',
                textAlign: 'left'
              }}>
                <div style={{ fontSize: '0.75rem', color: '#A3A3A3' }}>Discord Peer Mentorship</div>
                <div className="font-mono" style={{ fontSize: '0.875rem', fontWeight: 700, color: '#B77EF0' }}>Guided Paths &amp; 1-on-1 Help</div>
              </div>

              <div style={{
                background: 'rgba(17, 17, 17, 0.92)',
                backdropFilter: 'blur(12px)',
                border: '1px solid rgba(155, 93, 229, 0.3)',
                padding: '0.75rem 1.25rem',
                borderRadius: '1rem',
                color: '#ffffff',
                textAlign: 'left'
              }}>
                <div style={{ fontSize: '0.75rem', color: '#A3A3A3' }}>Accountability Sprints</div>
                <div className="font-mono" style={{ fontSize: '0.875rem', fontWeight: 700, color: '#ffffff' }}>Weekly Practice &amp; Code Reviews</div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
