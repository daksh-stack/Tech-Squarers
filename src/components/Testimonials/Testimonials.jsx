import React from 'react';
import { Star, Quote, Sparkles } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      quote: "I was skeptical at first because everything happens on Discord, but the structured learning paths and active mentors made a real difference. Already feeling more confident with the concepts.",
      author: "Priya S.",
      role: "Computer Science student"
    },
    {
      quote: "Best decision I made this semester. The community is small enough that you actually get answers, and the vibe is supportive instead of competitive.",
      author: "Rahul M.",
      role: "Aspiring full-stack developer"
    },
    {
      quote: "Finally found a place that doesn't just throw random resources at you. The guided discussions and peer accountability keep me consistent.",
      author: "Ananya K.",
      role: "Career switcher"
    },
    {
      quote: "Joined for the tech content, stayed for the people. The Discord is active and the team actually listens to feedback.",
      author: "Devansh T.",
      role: "Final-year engineering student"
    },
    {
      quote: "Clear explanations + real practice problems + people who care. Exactly what I needed after trying bigger platforms that felt impersonal.",
      author: "Sneha R.",
      role: "Self-taught developer"
    }
  ];

  return (
    <section id="testimonials" className="section-padding" style={{ background: '#0A0A0A', position: 'relative' }}>
      <div className="container">
        
        {/* Section Header */}
        <div style={{ maxWidth: '48rem', margin: '0 auto 4rem auto', textAlign: 'center' }}>
          <div className="vibranium-badge" style={{ marginBottom: '1.25rem' }}>
            <Sparkles style={{ width: '0.85rem', height: '0.85rem', color: '#9B5DE5' }} />
            <span>Member Feedback</span>
          </div>

          <h2 className="font-heading" style={{ fontSize: 'clamp(2rem, 4vw, 3.25rem)', fontWeight: 800, color: '#ffffff', lineHeight: 1.2, marginBottom: '1.25rem' }}>
            What Our Community <span className="text-purple">Says</span>
          </h2>

          <p className="font-sans" style={{ fontSize: '1.1rem', color: '#A3A3A3', lineHeight: 1.6 }}>
            Hear from computer science students, career switchers, and aspiring developers building real progress inside our Discord hub.
          </p>
        </div>

        {/* Testimonial Cards Grid */}
        <div className="grid-3">
          {testimonials.map((item, idx) => (
            <div
              key={idx}
              className="vibranium-card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                gridColumn: idx === 3 ? 'span 1' : 'auto'
              }}
            >
              <div>
                {/* Stars */}
                <div style={{ display: 'flex', gap: '0.2rem', marginBottom: '1.25rem' }}>
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} style={{ width: '1.1rem', height: '1.1rem', fill: '#F59E0B', color: '#F59E0B' }} />
                  ))}
                </div>

                <Quote style={{ width: '2rem', height: '2rem', color: 'rgba(155,93,229,0.2)', marginBottom: '0.75rem' }} />

                <p className="font-sans" style={{ fontSize: '0.925rem', color: '#E5E5E5', lineHeight: 1.6, fontStyle: 'italic', marginBottom: '1.5rem' }}>
                  “{item.quote}”
                </p>
              </div>

              <div style={{ paddingTop: '1rem', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
                <div className="font-heading" style={{ fontSize: '1rem', fontWeight: 700, color: '#ffffff' }}>
                  {item.author}
                </div>
                <div className="font-mono text-purple" style={{ fontSize: '0.75rem', marginTop: '0.15rem' }}>
                  {item.role}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
