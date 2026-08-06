import React from 'react';
import { Feather, Lock, Zap, Users, Sparkles, CheckCircle2 } from 'lucide-react';

export default function About() {
  const pillars = [
    {
      icon: Zap,
      title: 'Uncompromised Speed',
      description: 'Zero bloatware. We build with Astro, Next.js, and Vite to deliver 0.2s average load speeds and 100/100 Lighthouse performance scores.',
      tag: '0.2s Load Time'
    },
    {
      icon: Lock,
      title: '100% Code Ownership',
      description: 'No subscription traps or proprietary locked platforms. Every line of code, design file, and database is handed over and 100% yours to keep.',
      tag: 'Zero Lock-in'
    },
    {
      icon: Feather,
      title: 'Bespoke Design Systems',
      description: 'Zero generic templates. We sculpt unique visual identities with micro-interactions, dark modes, and organic rounded aesthetics tailored to your vision.',
      tag: 'Custom Craft'
    },
    {
      icon: Users,
      title: 'Direct Engineer Access',
      description: 'No middle managers or ticket system delays. You talk directly with the founders and lead engineers building your product every step of the way.',
      tag: 'Direct Team'
    }
  ];

  return (
    <section id="about" style={{ padding: '6rem 0', background: '#ffffff' }}>
      <div className="container">
        
        {/* Section Header */}
        <div style={{ maxWidth: '48rem', margin: '0 auto 4rem auto', textAlign: 'center' }}>
          <div className="badge-pill" style={{ marginBottom: '1rem' }}>
            <Sparkles style={{ width: '0.85rem', height: '0.85rem', color: '#F92C53' }} />
            <span>About Loro Labs</span>
          </div>

          <h2 className="font-heading" style={{ fontSize: '2.5rem', fontWeight: 800, color: '#0F172A', lineHeight: 1.2, marginBottom: '1rem' }}>
            Inspired by Flight <br />
            <span className="text-coral">&amp; Fueled by Imagination</span>
          </h2>

          <p className="font-sans text-muted" style={{ fontSize: '1.1rem', lineHeight: 1.6 }}>
            As a design engineering studio, we bridge the gap between premium visual design and technical excellence, 
            ensuring your project looks stunning and performs flawlessly.
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid-4">
          {pillars.map((pillar, idx) => {
            const IconComp = pillar.icon;
            return (
              <div key={idx} className="card-white" style={{ display: 'flex', flexDirection: 'column', justifyBetween: 'space-between' }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyBetween: 'space-between', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
                    <div style={{
                      width: '3rem',
                      height: '3rem',
                      borderRadius: '1rem',
                      background: 'rgba(249, 44, 83, 0.1)',
                      color: '#F92C53',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      <IconComp style={{ width: '1.4rem', height: '1.4rem' }} />
                    </div>

                    <span className="font-mono" style={{ fontSize: '0.7rem', padding: '0.25rem 0.65rem', borderRadius: '9999px', background: '#F1F5F9', color: '#334155', fontWeight: 600 }}>
                      {pillar.tag}
                    </span>
                  </div>

                  <h3 className="font-heading" style={{ fontSize: '1.2rem', fontWeight: 700, color: '#0F172A', marginBottom: '0.75rem' }}>
                    {pillar.title}
                  </h3>

                  <p className="font-sans" style={{ fontSize: '0.875rem', color: '#64748B', lineHeight: 1.6 }}>
                    {pillar.description}
                  </p>
                </div>

                <div style={{ marginTop: '1.5rem', paddingTop: '1rem', borderTop: '1px solid #E2E8F0', display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#0D9488', fontSize: '0.75rem', fontWeight: 600 }}>
                  <CheckCircle2 style={{ width: '1rem', height: '1rem' }} />
                  <span>Guaranteed Studio Standard</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
