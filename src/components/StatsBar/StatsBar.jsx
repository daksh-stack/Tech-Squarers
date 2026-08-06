import React from 'react';
import { Users, Award, Heart, ShieldCheck } from 'lucide-react';

export default function StatsBar() {
  const stats = [
    { number: '500+', label: 'Members in community', icon: Users },
    { number: '1,200+', label: 'Learning sessions completed', icon: Award },
    { number: '98%', label: 'Average satisfaction', icon: Heart },
    { number: '25+', label: 'Active mentors', icon: ShieldCheck },
  ];

  return (
    <section style={{ padding: '4rem 0', background: '#0A0A0A', borderTop: '1px solid rgba(255,255,255,0.06)', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
      <div className="container">
        <div className="grid-4">
          {stats.map((stat, idx) => {
            const IconComponent = stat.icon;
            return (
              <div key={idx} style={{
                textAlign: 'center',
                padding: '1.75rem 1.25rem',
                background: '#111111',
                borderRadius: '1.25rem',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                boxShadow: 'var(--shadow-card)',
                transition: 'all 0.3s ease'
              }} className="vibranium-card">
                <div style={{
                  width: '2.5rem',
                  height: '2.5rem',
                  borderRadius: '50%',
                  background: 'rgba(155, 93, 229, 0.12)',
                  color: '#9B5DE5',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 1rem auto'
                }}>
                  <IconComponent style={{ width: '1.25rem', height: '1.25rem' }} />
                </div>

                <div className="font-heading" style={{ fontSize: '2.5rem', fontWeight: 800, color: '#ffffff', lineHeight: 1 }}>
                  <span className="text-purple">{stat.number.slice(0, -1)}</span>
                  <span>{stat.number.slice(-1)}</span>
                </div>

                <p className="font-sans" style={{ fontSize: '0.875rem', color: '#A3A3A3', marginTop: '0.5rem' }}>
                  {stat.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
