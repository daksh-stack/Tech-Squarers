import React, { useState } from 'react';
import { Sparkles, ArrowUpRight } from 'lucide-react';

export default function Portfolio({ onOpenQuote }) {
  const [activeFilter, setActiveFilter] = useState('All');

  const categories = ['All', 'Web', 'Mobile', 'Systems', 'AI Media'];

  const projects = [
    {
      id: 1,
      title: 'Apex Healthcare & Wellness Portal',
      category: 'Systems',
      industry: 'Health & Spa',
      metric: '0.18s Load · 3x Booking Rate',
      desc: 'Bespoke patient management system with integrated telemedicine scheduling, automated SMS reminders, and zero-latency records lookup.',
      image: '/loro_portfolio_showcase.jpg',
      tags: ['Next.js', 'PostgreSQL', 'Tailwind', 'HIPAA Ready']
    },
    {
      id: 2,
      title: 'Aura Beauty E-Commerce Storefront',
      category: 'Web',
      industry: 'Cosmetics & Beauty',
      metric: '99/100 Mobile Score',
      desc: 'Custom headless store built for rapid product Discovery, 3D product preview shaders, and frictionless 1-click checkout integration.',
      image: '/loro_hero_mockup.jpg',
      tags: ['Astro', 'Shopify API', 'Framer Motion', 'Stripe']
    },
    {
      id: 3,
      title: 'OmniTalent APAC Recruitment Engine',
      category: 'Mobile',
      industry: 'Talent & Staffing',
      metric: '50k+ Active Users',
      desc: 'Cross-platform iOS and Android native application connecting top-tier remote talent with global hiring partners across APAC.',
      image: '/loro_portfolio_showcase.jpg',
      tags: ['React Native', 'Supabase', 'Push Engine', 'Tailwind']
    },
    {
      id: 4,
      title: 'EduSphere Interactive Learning Dashboard',
      category: 'Systems',
      industry: 'Schools & Education',
      metric: '100% Uptime',
      desc: 'Intuitive learning management dashboard providing real-time student analytics, automated grade reporting, and video lesson streaming.',
      image: '/loro_hero_mockup.jpg',
      tags: ['React', 'TypeScript', 'Node.js', 'Docker']
    },
    {
      id: 5,
      title: 'Velox Auto Dealership & Service Platform',
      category: 'Web',
      industry: 'Automotive',
      metric: '4.9★ Customer Rating',
      desc: 'Immersive automotive inventory showcase featuring 360-degree vehicle inspection tools and instant financing quote estimators.',
      image: '/loro_portfolio_showcase.jpg',
      tags: ['Next.js', 'Vercel', 'Sanity CMS', 'AI Media']
    },
    {
      id: 6,
      title: 'Connectify Travel eSIM Mobile App',
      category: 'Mobile',
      industry: 'Travel & Telecom',
      metric: 'Instant eSIM Activation',
      desc: 'Global travel connectivity application enabling instant eSIM profile installation and real-time cellular data usage tracking.',
      image: '/loro_hero_mockup.jpg',
      tags: ['React Native', 'Stripe', 'eSIM API', 'Upstash']
    }
  ];

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter(p => p.category === activeFilter);

  return (
    <section id="portfolio" style={{ padding: '6rem 0', background: '#F8FAFC' }}>
      <div className="container">
        
        {/* Header */}
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '3rem', gap: '1.5rem' }}>
          <div>
            <div className="badge-pill" style={{ marginBottom: '0.75rem' }}>
              <Sparkles style={{ width: '0.85rem', height: '0.85rem', color: '#F92C53' }} />
              <span>Client Showcase</span>
            </div>
            <h2 className="font-heading" style={{ fontSize: '2.5rem', fontWeight: 800, color: '#0F172A', lineHeight: 1.2 }}>
              Real Projects <br />
              <span className="text-coral">For Ambitious Teams</span>
            </h2>
          </div>

          {/* Filter Pills */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', background: '#ffffff', padding: '0.4rem', borderRadius: '9999px', border: '1px solid #E2E8F0' }}>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                style={{
                  padding: '0.5rem 1.25rem',
                  borderRadius: '9999px',
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  transition: 'all 0.2s ease',
                  background: activeFilter === cat ? '#F92C53' : 'transparent',
                  color: activeFilter === cat ? '#ffffff' : '#64748B'
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Portfolio Grid */}
        <div className="grid-3">
          {filteredProjects.map((project) => (
            <div key={project.id} className="card-white" style={{ padding: 0, overflow: 'hidden', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                {/* Image */}
                <div style={{ position: 'relative', aspectRatio: '16/10', overflow: 'hidden', background: '#0F172A' }}>
                  <img
                    src={project.image}
                    alt={project.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  <div style={{ position: 'absolute', top: '1rem', left: '1rem' }}>
                    <span className="font-mono" style={{ padding: '0.3rem 0.75rem', borderRadius: '9999px', background: 'rgba(15,23,42,0.85)', color: '#ffffff', fontSize: '0.7rem' }}>
                      {project.industry}
                    </span>
                  </div>
                  <div style={{ position: 'absolute', bottom: '1rem', right: '1rem' }}>
                    <span className="font-mono" style={{ padding: '0.3rem 0.75rem', borderRadius: '9999px', background: '#0D9488', color: '#ffffff', fontSize: '0.7rem', fontWeight: 700 }}>
                      {project.metric}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div style={{ padding: '1.5rem' }}>
                  <h3 className="font-heading" style={{ fontSize: '1.25rem', fontWeight: 700, color: '#0F172A', marginBottom: '0.5rem' }}>
                    {project.title}
                  </h3>
                  <p className="font-sans" style={{ fontSize: '0.875rem', color: '#64748B', lineHeight: 1.6 }}>
                    {project.desc}
                  </p>
                </div>
              </div>

              <div style={{ padding: '1.5rem', paddingTop: 0 }}>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.25rem' }}>
                  {project.tags.map((t, i) => (
                    <span key={i} className="font-mono" style={{ fontSize: '0.65rem', padding: '0.2rem 0.5rem', borderRadius: '0.3rem', background: '#F1F5F9', color: '#475569' }}>
                      {t}
                    </span>
                  ))}
                </div>

                <button
                  onClick={onOpenQuote}
                  className="btn btn-outline"
                  style={{ width: '100%', fontSize: '0.8rem', padding: '0.6rem 1rem' }}
                >
                  <span>Build Similar Solution</span>
                  <ArrowUpRight style={{ width: '0.9rem', height: '0.9rem' }} />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
