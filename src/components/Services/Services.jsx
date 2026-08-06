import React from 'react';
import { Globe, Smartphone, Server, Compass, Video, Palette, ArrowUpRight, Sparkles } from 'lucide-react';

export default function Services({ onOpenQuote }) {
  const servicesList = [
    {
      num: '01',
      title: 'Website Development',
      price: 'From $3,000',
      description: 'A website that does more than exist: fast, sharp, and built to convert visitors into customers.',
      tags: ['Astro', 'Next.js', 'SEO Optimization', 'Copywriting'],
      icon: Globe,
      highlight: true
    },
    {
      num: '02',
      title: 'App Development',
      price: 'From $30,000',
      description: 'Mobile apps that feel right and work right for real users on real devices.',
      tags: ['iOS & Android', 'React Native', 'Offline-First', 'Push Notifications'],
      icon: Smartphone,
      highlight: false
    },
    {
      num: '03',
      title: 'Systems Development',
      price: 'From $10,000',
      description: 'Custom portals, dashboards, and workflows built around how your team actually works.',
      tags: ['Admin Dashboards', 'Client Portals', 'Automations', 'Database Architecture'],
      icon: Server,
      highlight: false
    },
    {
      num: '04',
      title: 'IT Consulting',
      price: 'Custom quote',
      description: 'Technology guidance to help you pick the right tools and plan your roadmap without costly mistakes.',
      tags: ['Architecture Audit', 'Tech Stack Selection', 'Security Review', 'Scale Planning'],
      icon: Compass,
      highlight: false
    },
    {
      num: '05',
      title: 'AI Media',
      price: 'Custom quote',
      description: 'AI-generated photos, videos, and hero animations that give your brand a look your competitors cannot replicate.',
      tags: ['3D Hero Renders', 'AI Photorealism', 'Brand Assets', 'Motion Design'],
      icon: Video,
      highlight: false
    },
    {
      num: '06',
      title: 'Brand Identity',
      price: 'Custom quote',
      description: 'Visual identity systems that feel intentional, from logo design to full brand guidelines.',
      tags: ['Logo & Marks', 'Color Palettes', 'Typography Rules', 'Design Systems'],
      icon: Palette,
      highlight: false
    }
  ];

  return (
    <section id="services" style={{ padding: '6rem 0', background: '#0F172A', color: '#ffffff' }}>
      <div className="container">
        
        {/* Header */}
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '4rem', gap: '1.5rem' }}>
          <div>
            <div className="badge-pill" style={{ background: 'rgba(255,255,255,0.1)', color: '#10B981', borderColor: 'transparent', marginBottom: '1rem' }}>
              <Sparkles style={{ width: '0.85rem', height: '0.85rem', color: '#F92C53' }} />
              <span>Capabilities &amp; Offerings</span>
            </div>
            <h2 className="font-heading" style={{ fontSize: '2.5rem', fontWeight: 800, color: '#ffffff', lineHeight: 1.2 }}>
              Design &amp; Engineering <br />
              <span className="text-coral">Built for Growth</span>
            </h2>
          </div>

          <p className="font-sans" style={{ maxWidth: '28rem', color: '#94A3B8', fontSize: '1rem', lineHeight: 1.6 }}>
            From single high-converting landing pages to complex cross-platform ecosystems. 
            Fixed quotes with guaranteed zero surprise fees.
          </p>
        </div>

        {/* Services Cards */}
        <div className="grid-3">
          {servicesList.map((service) => {
            const IconComp = service.icon;
            return (
              <div
                key={service.num}
                className="card-dark"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  borderColor: service.highlight ? '#F92C53' : '#334155',
                  boxShadow: service.highlight ? '0 15px 35px -5px rgba(249, 44, 83, 0.2)' : 'none'
                }}
              >
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                    <span className="font-mono" style={{ fontSize: '0.75rem', color: '#94A3B8', fontWeight: 700 }}>
                      {service.num} / 06
                    </span>
                    <span className="font-mono" style={{
                      fontSize: '0.75rem',
                      fontWeight: 600,
                      padding: '0.3rem 0.75rem',
                      borderRadius: '9999px',
                      background: service.highlight ? '#F92C53' : '#1E293B',
                      color: service.highlight ? '#ffffff' : '#0D9488'
                    }}>
                      {service.price}
                    </span>
                  </div>

                  <div style={{
                    width: '3rem',
                    height: '3rem',
                    borderRadius: '1rem',
                    background: 'rgba(255,255,255,0.05)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#F92C53',
                    marginBottom: '1.5rem'
                  }}>
                    <IconComp style={{ width: '1.4rem', height: '1.4rem' }} />
                  </div>

                  <h3 className="font-heading" style={{ fontSize: '1.4rem', fontWeight: 700, color: '#ffffff', marginBottom: '0.75rem' }}>
                    {service.title}
                  </h3>

                  <p className="font-sans" style={{ fontSize: '0.9rem', color: '#94A3B8', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                    {service.description}
                  </p>
                </div>

                <div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.5rem' }}>
                    {service.tags.map((tag, tIdx) => (
                      <span key={tIdx} className="font-mono" style={{ fontSize: '0.7rem', padding: '0.25rem 0.6rem', borderRadius: '0.35rem', background: '#090D16', color: '#CBD5E1' }}>
                        {tag}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={onOpenQuote}
                    style={{
                      width: '100%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      paddingTop: '1rem',
                      borderTop: '1px solid #334155',
                      fontSize: '0.875rem',
                      fontWeight: 600,
                      color: '#ffffff'
                    }}
                  >
                    <span>Request Quote</span>
                    <ArrowUpRight style={{ width: '1rem', height: '1rem', color: '#F92C53' }} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
