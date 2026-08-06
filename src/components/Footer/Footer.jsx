import React from 'react';
import { Zap, MessageSquare, Mail, Heart } from 'lucide-react';

const DISCORD_INVITE_URL = "https://discord.gg/techsquarers";

export default function Footer() {
  return (
    <footer id="footer" style={{ background: '#050505', color: '#ffffff', paddingTop: '4.5rem', paddingBottom: '2.5rem', borderTop: '1px solid rgba(255,255,255,0.08)', position: 'relative' }}>
      <div className="container">
        
        <div className="grid-4" style={{ borderBottom: '1px solid rgba(255,255,255,0.08)', paddingBottom: '3rem', marginBottom: '2rem' }}>
          
          {/* Col 1: Brand */}
          <div>
            <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
              <div style={{
                width: '2.25rem',
                height: '2.25rem',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #9B5DE5 0%, #7B2CBF 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#ffffff'
              }}>
                <Zap style={{ width: '1.2rem', height: '1.2rem', fill: '#ffffff' }} />
              </div>
              <span className="font-heading" style={{ fontWeight: 800, color: '#ffffff', fontSize: '1.25rem' }}>
                Tech<span className="text-purple">Squarers</span>
              </span>
            </a>

            <p className="font-sans" style={{ fontSize: '0.875rem', color: '#A3A3A3', lineHeight: 1.6, maxWidth: '18rem' }}>
              A focused Discord-powered learning community designed for serious learners who want structured guidance, real practice, and accountable progress.
            </p>
          </div>

          {/* Col 2: Navigation */}
          <div>
            <h4 className="font-heading" style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#ffffff', marginBottom: '1rem' }}>
              Navigation
            </h4>
            <ul className="font-sans" style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.875rem', color: '#A3A3A3' }}>
              <li><a href="#about" style={{ hover: { color: '#ffffff' } }}>About Mission</a></li>
              <li><a href="#how-it-works">How It Works</a></li>
              <li><a href="#features">Experience Inside</a></li>
              <li><a href="#testimonials">Community Reviews</a></li>
            </ul>
          </div>

          {/* Col 3: Community */}
          <div>
            <h4 className="font-heading" style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#ffffff', marginBottom: '1rem' }}>
              Community Hub
            </h4>
            <ul className="font-sans" style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.875rem', color: '#A3A3A3' }}>
              <li><a href={DISCORD_INVITE_URL} target="_blank" rel="noopener noreferrer">Discord Server</a></li>
              <li><a href="#features">Study Tracks</a></li>
              <li><a href="#features">Mentorship Program</a></li>
              <li><a href="#features">Code Review Sprints</a></li>
            </ul>
          </div>

          {/* Col 4: Contact */}
          <div className="font-sans" style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', fontSize: '0.875rem', color: '#A3A3A3' }}>
            <h4 className="font-heading" style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#ffffff', marginBottom: '0.25rem' }}>
              Connect
            </h4>
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
              <MessageSquare style={{ width: '1rem', height: '1rem', color: '#9B5DE5' }} />
              <a href={DISCORD_INVITE_URL} target="_blank" rel="noopener noreferrer" style={{ color: '#E5E5E5' }}>Discord Community</a>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
              <Mail style={{ width: '1rem', height: '1rem', color: '#9B5DE5' }} />
              <a href="mailto:hello@techsquarers.com" style={{ color: '#E5E5E5' }}>hello@techsquarers.com</a>
            </div>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="font-mono" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.75rem', color: '#6B6B6B', gap: '1rem' }}>
          <div>
            © {new Date().getFullYear()} TechSquarers. All rights reserved.
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#A3A3A3' }}>
            <Heart style={{ width: '0.85rem', height: '0.85rem', color: '#9B5DE5', fill: '#9B5DE5' }} />
            <span>Built for serious learners.</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
