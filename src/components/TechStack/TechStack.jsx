import React from 'react';
import { Cpu } from 'lucide-react';

export default function TechStack() {
  const stackItems = [
    { name: 'Astro', category: 'Frontend', desc: 'Blazing Fast Static' },
    { name: 'React', category: 'UI Library', desc: 'Component Architecture' },
    { name: 'Next.js', category: 'Framework', desc: 'SSR & Server Actions' },
    { name: 'TypeScript', category: 'Language', desc: 'Strict Type Safety' },
    { name: 'Vite', category: 'Bundler', desc: 'Instant HMR' },
    { name: 'Tailwind CSS', category: 'Styling', desc: 'Utility-First System' },
    { name: 'shadcn/ui', category: 'Design System', desc: 'Accessible Components' },
    { name: 'GSAP', category: 'Animation', desc: '60fps Canvas & Motion' },
    { name: 'Framer Motion', category: 'Animation', desc: 'Fluid UI Transitions' },
    { name: 'Supabase', category: 'Database', desc: 'PostgreSQL + Auth' },
    { name: 'Docker', category: 'DevOps', desc: 'Container Isolation' },
    { name: 'GitHub', category: 'Version Control', desc: 'CI/CD Pipelines' },
    { name: 'Vercel', category: 'Hosting', desc: 'Global Edge Network' },
    { name: 'Railway', category: 'Infrastructure', desc: 'Backend Cloud Deploy' },
    { name: 'Upstash', category: 'Redis', desc: 'Serverless Caching' },
    { name: 'Node.js', category: 'Runtime', desc: 'Scalable Microservices' },
    { name: 'PostgreSQL', category: 'Database', desc: 'ACID Relational Data' },
  ];

  return (
    <section id="stack" style={{ padding: '6rem 0', background: '#ffffff' }}>
      <div className="container">
        
        {/* Header */}
        <div style={{ maxWidth: '48rem', margin: '0 auto 3.5rem auto', textAlign: 'center' }}>
          <div className="badge-pill" style={{ marginBottom: '1rem' }}>
            <Cpu style={{ width: '0.85rem', height: '0.85rem', color: '#F92C53' }} />
            <span>Infrastructure &amp; Tools</span>
          </div>

          <h2 className="font-heading" style={{ fontSize: '2.5rem', fontWeight: 800, color: '#0F172A', lineHeight: 1.2, marginBottom: '1rem' }}>
            Built With A Modern, <br />
            <span className="text-coral">Production-Grade Stack</span>
          </h2>

          <p className="font-sans text-muted" style={{ fontSize: '1.05rem', lineHeight: 1.6 }}>
            The same frameworks and infrastructure trusted by the best teams in tech, so your product launches fast, scales effortlessly, and never feels outdated.
          </p>
        </div>

        {/* Marquee Banner Track */}
        <div className="marquee-container">
          <div className="marquee-content">
            {stackItems.concat(stackItems).map((tech, i) => (
              <div key={i} className="stack-chip font-sans">
                <div className="font-mono" style={{ width: '2rem', height: '2rem', borderRadius: '0.6rem', background: 'rgba(249,44,83,0.2)', color: '#F92C53', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: '0.75rem' }}>
                  {tech.name.substring(0, 2).toUpperCase()}
                </div>
                <div>
                  <div className="font-heading" style={{ fontSize: '0.875rem', fontWeight: 700 }}>{tech.name}</div>
                  <div className="font-mono" style={{ fontSize: '0.65rem', color: '#94A3B8' }}>{tech.category}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stack Grid Details */}
        <div className="grid-4" style={{ marginTop: '3rem' }}>
          {stackItems.slice(0, 8).map((item, idx) => (
            <div key={idx} className="card-white" style={{ textAlign: 'center', padding: '1.25rem' }}>
              <div className="font-mono text-teal" style={{ fontSize: '0.7rem', marginBottom: '0.25rem' }}>{item.category}</div>
              <div className="font-heading" style={{ fontWeight: 700, color: '#0F172A' }}>{item.name}</div>
              <div className="font-sans" style={{ fontSize: '0.75rem', color: '#64748B', marginTop: '0.25rem' }}>{item.desc}</div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
