import React from 'react';
import { ArrowRight, MessageSquare, ShieldCheck, Sparkles } from 'lucide-react';

/* Google Form Placeholder Link */
const GOOGLE_FORM_URL = "https://forms.gle/YOUR_FORM_LINK";
const DISCORD_INVITE_URL = "https://discord.gg/techsquarers";

export default function FinalCTA() {
  return (
    <section className="section-padding" style={{ background: '#050505', position: 'relative', overflow: 'hidden' }}>
      {/* Background Glow */}
      <div className="bg-vibranium-glow-center" />

      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        
        <div style={{
          maxWidth: '56rem',
          margin: '0 auto',
          background: 'linear-gradient(135deg, #111111 0%, #161616 50%, #111111 100%)',
          border: '1px solid rgba(155, 93, 229, 0.35)',
          borderRadius: '2rem',
          padding: '3.5rem 2rem',
          textAlign: 'center',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.9), 0 0 35px rgba(155, 93, 229, 0.2)'
        }}>
          
          <div className="vibranium-badge" style={{ marginBottom: '1.25rem' }}>
            <Sparkles style={{ width: '0.85rem', height: '0.85rem', color: '#9B5DE5' }} />
            <span>Join TechSquarers Today</span>
          </div>

          <h2 className="font-heading" style={{ fontSize: 'clamp(2.25rem, 4.5vw, 3.5rem)', fontWeight: 800, color: '#ffffff', lineHeight: 1.15, marginBottom: '1.25rem' }}>
            Ready to start learning <br />
            <span className="text-purple">the right way?</span>
          </h2>

          <p className="font-sans" style={{ fontSize: '1.1rem', color: '#A3A3A3', maxWidth: '38rem', margin: '0 auto 1.5rem auto', lineHeight: 1.6 }}>
            Stop struggling in isolation with passive video courses. Join our Discord community today for structured guidance, active mentors, and genuine peer progress.
          </p>

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
            marginBottom: '2rem'
          }}>
            <ShieldCheck style={{ width: '1rem', height: '1rem' }} />
            <span>All learning tracks &amp; sessions live directly inside our Discord server.</span>
          </div>

          {/* Dual CTAs */}
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem' }}>
            <a
              href={GOOGLE_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-purple"
              style={{ padding: '1rem 2.5rem', fontSize: '1.05rem' }}
            >
              <span>Enquire / Join Now</span>
              <ArrowRight style={{ width: '1.2rem', height: '1.2rem' }} />
            </a>

            <a
              href={DISCORD_INVITE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-silver"
              style={{ padding: '1rem 2.25rem', fontSize: '1.05rem' }}
            >
              <MessageSquare style={{ width: '1.2rem', height: '1.2rem', color: '#9B5DE5' }} />
              <span>Join Discord Hub</span>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
