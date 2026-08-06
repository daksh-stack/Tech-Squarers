import React from 'react';
import { Target, Compass, ShieldAlert, Sparkles, CheckCircle2 } from 'lucide-react';

export default function About() {
  const problemsAndSolutions = [
    {
      title: 'Scattered & Lonely Learning',
      description: 'Tutorial hell and passive video courses leave learners stuck in isolation without feedback or real guidance.',
      icon: ShieldAlert,
      tag: 'The Problem'
    },
    {
      title: 'Structured Discord Ecosystem',
      description: 'A focused, high-signal Discord community with curated roadmaps, active mentors, and daily accountability.',
      icon: Compass,
      tag: 'Our Solution'
    },
    {
      title: 'Real Practice & Progress',
      description: 'Build real-world projects with peer code reviews and live technical discussions that prepare you for industry roles.',
      icon: Target,
      tag: 'The Outcome'
    }
  ];

  return (
    <section id="about" className="section-padding" style={{ background: '#050505', position: 'relative' }}>
      <div className="container">
        
        {/* Header */}
        <div style={{ maxWidth: '48rem', margin: '0 auto 4rem auto', textAlign: 'center' }}>
          <div className="vibranium-badge" style={{ marginBottom: '1.25rem' }}>
            <Sparkles style={{ width: '0.85rem', height: '0.85rem', color: '#9B5DE5' }} />
            <span>Mission &amp; Purpose</span>
          </div>

          <h2 className="font-heading" style={{ fontSize: 'clamp(2rem, 4vw, 3.25rem)', fontWeight: 800, color: '#ffffff', lineHeight: 1.2, marginBottom: '1.25rem' }}>
            Why <span className="text-purple">TechSquarers</span> Exists
          </h2>

          <p className="font-sans" style={{ fontSize: '1.15rem', color: '#A3A3A3', lineHeight: 1.6 }}>
            Most online learning is scattered, passive, and lonely. You spend hours watching videos, yet struggle to build real projects or debug issues when you get stuck. 
            TechSquarers replaces isolation with a focused, Discord-powered learning environment — combining structured guidance, active mentorship, and accountable peer support.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid-3">
          {problemsAndSolutions.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <div key={idx} className="vibranium-card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
                    <div style={{
                      width: '3rem',
                      height: '3rem',
                      borderRadius: '1rem',
                      background: 'rgba(155, 93, 229, 0.12)',
                      color: '#9B5DE5',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      <IconComp style={{ width: '1.4rem', height: '1.4rem' }} />
                    </div>

                    <span className="font-mono" style={{ fontSize: '0.7rem', padding: '0.25rem 0.75rem', borderRadius: '9999px', background: 'rgba(255,255,255,0.05)', color: '#B77EF0', border: '1px solid rgba(155,93,229,0.2)' }}>
                      {item.tag}
                    </span>
                  </div>

                  <h3 className="font-heading" style={{ fontSize: '1.35rem', fontWeight: 700, color: '#ffffff', marginBottom: '0.75rem' }}>
                    {item.title}
                  </h3>

                  <p className="font-sans" style={{ fontSize: '0.9rem', color: '#A3A3A3', lineHeight: 1.6 }}>
                    {item.description}
                  </p>
                </div>

                <div style={{ marginTop: '2rem', paddingTop: '1rem', borderTop: '1px solid rgba(255,255,255,0.08)', display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#9B5DE5', fontSize: '0.75rem', fontWeight: 600 }}>
                  <CheckCircle2 style={{ width: '1rem', height: '1rem' }} />
                  <span>Verified Learning Standard</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
