import React from 'react';
import { HeartPulse, Sparkles, Briefcase, GraduationCap, ShoppingBag, Car, Globe2, Hammer, Laptop } from 'lucide-react';

export default function Industries() {
  const list = [
    { name: 'Health & Spa', desc: 'Wellness & Clinics', icon: HeartPulse },
    { name: 'Beauty', desc: 'Hair Salons & Stylists', icon: Sparkles },
    { name: 'Recruitment', desc: 'Talent & Staffing', icon: Briefcase },
    { name: 'Education', desc: 'Schools & Education', icon: GraduationCap },
    { name: 'E-Commerce', desc: 'Cosmetics & Retail', icon: ShoppingBag },
    { name: 'Automotive', desc: 'Dealers & Services', icon: Car },
    { name: 'Travel & Telecom', desc: 'Mobility & Connectivity', icon: Globe2 },
    { name: 'Construction', desc: 'Build & Trades', icon: Hammer },
    { name: 'Software & Tech', desc: 'Products & Platforms', icon: Laptop },
  ];

  return (
    <section style={{ padding: '5rem 0', background: '#ffffff' }}>
      <div className="container">
        
        <div style={{ maxWidth: '42rem', margin: '0 auto 3rem auto', textAlign: 'center' }}>
          <span className="font-mono text-coral" style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em' }}>Industries</span>
          <h2 className="font-heading" style={{ fontSize: '2.25rem', fontWeight: 800, color: '#0F172A', marginTop: '0.25rem' }}>
            Built for <span className="text-coral">every business</span>
          </h2>
          <p className="font-sans text-muted" style={{ fontSize: '1rem', marginTop: '0.5rem' }}>
            Real projects for real businesses, from healthcare to e-commerce and everything in between.
          </p>
        </div>

        <div className="grid-3">
          {list.map((ind, idx) => {
            const IconComp = ind.icon;
            return (
              <div key={idx} className="card-white" style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '1.25rem' }}>
                <div style={{
                  width: '3rem',
                  height: '3rem',
                  borderRadius: '0.85rem',
                  background: 'rgba(249,44,83,0.1)',
                  color: '#F92C53',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  <IconComp style={{ width: '1.4rem', height: '1.4rem' }} />
                </div>
                <div>
                  <h3 className="font-heading" style={{ fontSize: '1rem', fontWeight: 700, color: '#0F172A' }}>
                    {ind.name}
                  </h3>
                  <p className="font-sans" style={{ fontSize: '0.75rem', color: '#64748B' }}>{ind.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
