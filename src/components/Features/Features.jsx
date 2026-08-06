import React from 'react';
import { Route, Award, Code2, Users, Sparkles, CheckCircle2 } from 'lucide-react';

export default function Features() {
  const featureList = [
    {
      title: 'Structured Learning Paths',
      description: 'Clear, step-by-step roadmaps for full-stack development, systems engineering, and modern tech stacks — no random guessing.',
      icon: Route,
      tag: 'Curated Curriculums'
    },
    {
      title: 'Active Mentors',
      description: 'Get direct code reviews, career guidance, and live answers from experienced developers who care about your growth.',
      icon: Award,
      tag: '1-on-1 Guidance'
    },
    {
      title: 'Real Practice Problems',
      description: 'Tackle industry-grade coding challenges, build production applications, and submit your work for technical feedback.',
      icon: Code2,
      tag: 'Hands-On Projects'
    },
    {
      title: 'Accountable Community',
      description: 'Daily check-ins, study sprints, and peer encouragement that keep you consistent when motivation dips.',
      icon: Users,
      tag: 'Peer Accountability'
    }
  ];

  return (
    <section id="features" className="section-padding" style={{ background: '#050505', position: 'relative' }}>
      <div className="container">
        
        {/* Header */}
        <div style={{ maxWidth: '48rem', margin: '0 auto 4rem auto', textAlign: 'center' }}>
          <div className="vibranium-badge" style={{ marginBottom: '1.25rem' }}>
            <Sparkles style={{ width: '0.85rem', height: '0.85rem', color: '#9B5DE5' }} />
            <span>Community Advantage</span>
          </div>

          <h2 className="font-heading" style={{ fontSize: 'clamp(2rem, 4vw, 3.25rem)', fontWeight: 800, color: '#ffffff', lineHeight: 1.2, marginBottom: '1.25rem' }}>
            What You’ll Experience <span className="text-purple">Inside</span>
          </h2>

          <p className="font-sans" style={{ fontSize: '1.1rem', color: '#A3A3A3', lineHeight: 1.6 }}>
            Designed to replace generic video tutorials with real practice, active mentorship, and structured progress.
          </p>
        </div>

        {/* Grid */}
        <div className="grid-2">
          {featureList.map((feat, idx) => {
            const IconComp = feat.icon;
            return (
              <div key={idx} className="vibranium-card" style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                <div style={{
                  width: '3.25rem',
                  height: '3.25rem',
                  borderRadius: '1rem',
                  background: 'linear-gradient(135deg, rgba(155,93,229,0.2) 0%, rgba(123,44,191,0.2) 100%)',
                  border: '1px solid rgba(155,93,229,0.3)',
                  color: '#9B5DE5',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  <IconComp style={{ width: '1.5rem', height: '1.5rem' }} />
                </div>

                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.5rem' }}>
                    <span className="font-mono text-purple" style={{ fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 600 }}>
                      {feat.tag}
                    </span>
                  </div>

                  <h3 className="font-heading" style={{ fontSize: '1.35rem', fontWeight: 700, color: '#ffffff', marginBottom: '0.5rem' }}>
                    {feat.title}
                  </h3>

                  <p className="font-sans" style={{ fontSize: '0.9rem', color: '#A3A3A3', lineHeight: 1.6 }}>
                    {feat.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
