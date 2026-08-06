import React from 'react';
import { Star, Quote, Award, TrendingUp, Users } from 'lucide-react';

export default function Testimonial() {
  const stats = [
    { number: '50+', label: 'projects delivered for ambitious APAC teams', icon: Award },
    { number: '12+', label: 'industries served across web, app, and AI media', icon: TrendingUp },
    { number: '100%', label: 'projects delivered by our in-house team', icon: Users },
  ];

  return (
    <section style={{ padding: '5rem 0', background: '#090D16', color: '#ffffff' }}>
      <div className="container">
        
        {/* Testimonial Box */}
        <div className="card-dark" style={{ maxWidth: '52rem', margin: '0 auto', textAlign: 'center', position: 'relative', padding: '3rem 2rem' }}>
          <Quote style={{ width: '3.5rem', height: '3.5rem', color: 'rgba(249,44,83,0.15)', position: 'absolute', top: '1.5rem', left: '1.5rem' }} />

          <div style={{ display: 'flex', justifyContent: 'center', gap: '0.25rem', marginBottom: '1.5rem' }}>
            {[...Array(5)].map((_, i) => (
              <Star key={i} style={{ width: '1.25rem', height: '1.25rem', fill: '#F59E0B', color: '#F59E0B' }} />
            ))}
          </div>

          <blockquote className="font-heading" style={{ fontSize: '1.75rem', fontWeight: 700, lineHeight: 1.4, color: '#ffffff', marginBottom: '1.5rem' }}>
            “They didn’t just build a website. They created an online presence that truly represents my brand. Every detail matched my vision.”
          </blockquote>

          <div>
            <div className="font-sans" style={{ fontWeight: 600, color: '#ffffff' }}>Client Partner</div>
            <div className="font-mono text-teal" style={{ fontSize: '0.8rem', marginTop: '0.25rem' }}>Founding Director · APAC Enterprise</div>
          </div>
        </div>

        {/* Stats Row */}
        <div className="grid-3" style={{ marginTop: '4rem', paddingTop: '3rem', borderTop: '1px solid #1E293B' }}>
          {stats.map((stat, idx) => {
            const IconComponent = stat.icon;
            return (
              <div key={idx} style={{ textAlign: 'center', padding: '1.5rem', background: '#0F172A', borderRadius: '1rem', border: '1px solid #1E293B' }}>
                <div style={{ width: '2.5rem', height: '2.5rem', borderRadius: '50%', background: 'rgba(249,44,83,0.1)', color: '#F92C53', display: 'flex', alignItems: 'center', justifyCenter: 'center', justifyContent: 'center', margin: '0 auto 1rem auto' }}>
                  <IconComponent style={{ width: '1.25rem', height: '1.25rem' }} />
                </div>
                <div className="font-heading" style={{ fontSize: '2.75rem', fontWeight: 800, color: '#ffffff', lineHeight: 1 }}>
                  <span className="text-coral">{stat.number.slice(0, -1)}</span>
                  <span>{stat.number.slice(-1)}</span>
                </div>
                <p className="font-sans" style={{ fontSize: '0.875rem', color: '#94A3B8', marginTop: '0.5rem' }}>
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
