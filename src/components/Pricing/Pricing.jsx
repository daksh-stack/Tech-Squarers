import React, { useState } from 'react';
import { Check, Sparkles, ArrowRight } from 'lucide-react';

export default function Pricing({ onOpenQuote }) {
  const [tab, setTab] = useState('build'); // 'build' | 'operate'

  const buildTiers = [
    {
      name: 'Website — Landing Page',
      price: '$3,000',
      period: 'one-time',
      popular: false,
      desc: 'Bespoke single-page experience built to convert visitors into loyal clients.',
      features: [
        'Fast 2–3 week turnaround',
        'Custom Astro or React build',
        '0.2s Avg Lighthouse performance',
        'SEO & Analytics pre-configured',
        '100% Full source-code ownership',
        '30 days post-launch support'
      ]
    },
    {
      name: 'Website — Multipage',
      price: '$5,000',
      period: 'one-time',
      popular: false,
      desc: 'Complete multi-page web presence for growing companies expanding their footprint.',
      features: [
        '3–5 custom designed pages',
        'Headless CMS content management',
        'Bespoke micro-animations',
        'High-converting copywriting framework',
        '100% Full source-code ownership',
        '30 days post-launch support'
      ]
    },
    {
      name: 'Platform MVP — Web',
      price: '$10,000',
      period: 'one-time',
      popular: false,
      desc: 'Custom web application with database, authentication, and admin workflow engine.',
      features: [
        'Relational Database & Auth',
        'Custom Admin Dashboard',
        'Payment gateway integration',
        'API & Third-party integrations',
        'Full security audit & SSL',
        '30 days post-launch support'
      ]
    },
    {
      name: 'Platform + Mobile',
      price: '$30,000',
      period: 'one-time',
      popular: true,
      desc: 'Comprehensive web platform plus cross-platform native iOS & Android applications.',
      features: [
        'Web Platform + iOS & Android Apps',
        'Real-time data synchronization',
        'Push notification engine',
        'App Store & Play Store publishing',
        'Full IP and source code transfer',
        '60 days post-launch support'
      ]
    },
    {
      name: 'Full Custom Platform',
      price: '$60,000',
      period: 'one-time',
      popular: false,
      desc: 'Enterprise multi-tenant ecosystem built for high scale, security, and AI media workflows.',
      features: [
        'Multi-tenant SaaS Architecture',
        'Custom AI model integrations',
        'Dedicated DevOps & Docker setup',
        'High-concurrency load testing',
        'Full security compliance audit',
        'Dedicated SLA & retainer options'
      ]
    }
  ];

  return (
    <section id="pricing" style={{ padding: '6rem 0', background: '#0F172A', color: '#ffffff' }}>
      <div className="container">
        
        {/* Header */}
        <div style={{ maxWidth: '48rem', margin: '0 auto 3rem auto', textAlign: 'center' }}>
          <div className="badge-pill" style={{ background: 'rgba(255,255,255,0.1)', color: '#10B981', borderColor: 'transparent', marginBottom: '1rem' }}>
            <Sparkles style={{ width: '0.85rem', height: '0.85rem', color: '#F92C53' }} />
            <span>Transparent Pricing</span>
          </div>

          <h2 className="font-heading" style={{ fontSize: '2.5rem', fontWeight: 800, lineHeight: 1.2, color: '#ffffff' }}>
            Build &amp; <span className="text-coral">Operate</span>
          </h2>

          <p className="font-sans" style={{ color: '#94A3B8', marginTop: '1rem', fontSize: '1.05rem', lineHeight: 1.6 }}>
            Choose a build tier for a bespoke website, custom web platform, or web plus native mobile. 
            Then let us operate it for you. Priced in USD; you own everything we build.
          </p>

          {/* Toggle Switch */}
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '1.5rem' }}>
            <div style={{ display: 'inline-flex', padding: '0.35rem', borderRadius: '9999px', background: '#090D16', border: '1px solid #334155' }}>
              <button
                onClick={() => setTab('build')}
                style={{
                  padding: '0.6rem 1.5rem',
                  borderRadius: '9999px',
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  transition: 'all 0.2s ease',
                  background: tab === 'build' ? '#F92C53' : 'transparent',
                  color: tab === 'build' ? '#ffffff' : '#94A3B8'
                }}
              >
                Build Tiers (One-Time)
              </button>
              <button
                onClick={() => setTab('operate')}
                style={{
                  padding: '0.6rem 1.5rem',
                  borderRadius: '9999px',
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  transition: 'all 0.2s ease',
                  background: tab === 'operate' ? '#F92C53' : 'transparent',
                  color: tab === 'operate' ? '#ffffff' : '#94A3B8'
                }}
              >
                Operate Care (Monthly)
              </button>
            </div>
          </div>
        </div>

        {tab === 'build' ? (
          <div className="grid-3">
            {buildTiers.map((tier, idx) => (
              <div
                key={idx}
                className="card-dark"
                style={{
                  position: 'relative',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  borderColor: tier.popular ? '#F92C53' : '#334155',
                  boxShadow: tier.popular ? '0 15px 35px -5px rgba(249, 44, 83, 0.25)' : 'none'
                }}
              >
                {tier.popular && (
                  <div className="font-mono" style={{
                    position: 'absolute',
                    top: '-0.85rem',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    padding: '0.25rem 1rem',
                    borderRadius: '9999px',
                    background: '#F92C53',
                    color: '#ffffff',
                    fontSize: '0.65rem',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em'
                  }}>
                    Most Popular Choice
                  </div>
                )}

                <div>
                  <h3 className="font-heading" style={{ fontSize: '1.25rem', fontWeight: 700, color: '#ffffff', marginBottom: '0.5rem' }}>
                    {tier.name}
                  </h3>
                  <p className="font-sans" style={{ fontSize: '0.8rem', color: '#94A3B8', marginBottom: '1.5rem', minHeight: '2.5rem' }}>
                    {tier.desc}
                  </p>

                  <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.3rem', marginBottom: '1.5rem' }}>
                    <span className="font-mono" style={{ fontSize: '0.75rem', color: '#94A3B8' }}>From</span>
                    <span className="font-heading" style={{ fontSize: '2.25rem', fontWeight: 800, color: '#ffffff' }}>{tier.price}</span>
                    <span className="font-mono" style={{ fontSize: '0.75rem', color: '#94A3B8' }}>/{tier.period}</span>
                  </div>

                  <div style={{ paddingTop: '1rem', borderTop: '1px solid #334155', marginBottom: '2rem' }}>
                    {tier.features.map((feat, fIdx) => (
                      <div key={fIdx} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.8rem', color: '#CBD5E1', marginBottom: '0.6rem' }}>
                        <div style={{ width: '1rem', height: '1rem', borderRadius: '50%', background: 'rgba(13,148,136,0.2)', color: '#0D9488', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                          <Check style={{ width: '0.7rem', height: '0.7rem' }} />
                        </div>
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  onClick={onOpenQuote}
                  className={tier.popular ? 'btn btn-coral' : 'btn btn-outline'}
                  style={{ width: '100%', color: tier.popular ? '#ffffff' : '#ffffff', borderColor: tier.popular ? 'transparent' : '#334155' }}
                >
                  <span>Select Plan</span>
                  <ArrowRight style={{ width: '1rem', height: '1rem' }} />
                </button>
              </div>
            ))}
          </div>
        ) : (
          <div className="card-dark" style={{ maxWidth: '48rem', margin: '0 auto', padding: '2.5rem' }}>
            <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '2rem' }}>
              <div>
                <span className="font-mono" style={{ padding: '0.25rem 0.75rem', borderRadius: '9999px', background: 'rgba(13,148,136,0.2)', color: '#0D9488', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase' }}>
                  Full Service Care &amp; Growth
                </span>
                <h3 className="font-heading" style={{ fontSize: '1.75rem', fontWeight: 800, color: '#ffffff', marginTop: '0.75rem' }}>
                  Operate — We build it &amp; run it
                </h3>
                <p className="font-sans" style={{ color: '#94A3B8', fontSize: '0.875rem', marginTop: '0.5rem', maxWidth: '28rem' }}>
                  Let us handle continuous server maintenance, security audits, lighthouse performance monitoring, and small monthly feature enhancements.
                </p>
              </div>

              <div style={{ padding: '1.5rem', borderRadius: '1rem', background: '#090D16', border: '1px solid #334155', textAlign: 'center', minWidth: '16rem' }}>
                <span className="font-mono" style={{ fontSize: '0.75rem', color: '#94A3B8' }}>Starting at</span>
                <div className="font-heading" style={{ fontSize: '2.5rem', fontWeight: 800, color: '#ffffff', margin: '0.25rem 0' }}>$500<span className="font-mono" style={{ fontSize: '0.875rem', color: '#94A3B8' }}>/mo</span></div>
                
                <button onClick={onOpenQuote} className="btn btn-coral" style={{ width: '100%', marginTop: '1rem', fontSize: '0.85rem' }}>
                  Add Operate Plan
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
