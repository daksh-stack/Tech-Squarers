import React from 'react';
import { ShieldCheck, MessageSquare, Scale, FileText } from 'lucide-react';

export default function LoroDifference() {
  const points = [
    {
      title: 'We Learn Your Business First',
      description: 'Before we write a line of code, we sit with you. We ask the questions most agencies skip. We figure out what actually matters to your operations, not just what looks good on a homepage.',
      icon: FileText
    },
    {
      title: 'One Team. One Conversation.',
      description: 'No account managers relaying messages. No ticket systems. No waiting three days for a reply. You talk directly to the people building your project. Every time.',
      icon: MessageSquare
    },
    {
      title: 'Honest Scoping. Not Upselling.',
      description: 'Sometimes the answer is a simple website. Sometimes it is a full platform. We will be honest about which one, even when the simple answer means a smaller invoice for us.',
      icon: Scale
    },
    {
      title: 'It Works After We Leave',
      description: 'We do not build things that fall apart when the contract ends. You own everything. You understand everything. And if you need us later, we are here.',
      icon: ShieldCheck
    }
  ];

  return (
    <section style={{ padding: '6rem 0', background: '#0F172A', color: '#ffffff' }}>
      <div className="container">
        
        {/* Banner Pill */}
        <div style={{
          background: 'linear-gradient(135deg, #F92C53 0%, #E01E43 100%)',
          borderRadius: '1.5rem',
          padding: '2rem',
          marginBottom: '4rem',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '1.5rem',
          boxShadow: 'var(--shadow-glow)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div style={{ width: '3rem', height: '3rem', borderRadius: '1rem', background: 'rgba(255,255,255,0.2)', display: 'flex', alignItems: 'center', justifyCenter: 'center', justifyContent: 'center' }}>
              <ShieldCheck style={{ width: '1.5rem', height: '1.5rem', color: '#ffffff' }} />
            </div>
            <div>
              <div className="font-mono" style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', opacity: 0.9 }}>Studio Guarantee</div>
              <div className="font-heading" style={{ fontSize: '1.35rem', fontWeight: 800 }}>
                EVERY LORO SITE IS DOCUMENTED, AUDITED, AND HANDED OFF YOURS TO KEEP.
              </div>
            </div>
          </div>

          <div className="font-mono" style={{ padding: '0.5rem 1.25rem', borderRadius: '9999px', background: '#ffffff', color: '#F92C53', fontWeight: 700, fontSize: '0.85rem' }}>
            100% IP Transfer
          </div>
        </div>

        {/* Header */}
        <div style={{ maxWidth: '42rem', marginBottom: '3.5rem' }}>
          <div className="font-mono text-teal" style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>The Loro Difference</div>
          <h2 className="font-heading" style={{ fontSize: '2.5rem', fontWeight: 800, lineHeight: 1.2 }}>
            Why It Matters <br />
            <span className="text-coral">for Your Business</span>
          </h2>
          <p className="font-sans" style={{ color: '#94A3B8', marginTop: '1rem', fontSize: '1.05rem' }}>
            The technology behind your product isn’t just a detail. It’s the difference between a site that works and one that wins.
          </p>
        </div>

        {/* 4 Cards */}
        <div className="grid-2">
          {points.map((pt, idx) => {
            const IconC = pt.icon;
            return (
              <div key={idx} className="card-dark" style={{ display: 'flex', alignItems: 'flex-start', gap: '1.25rem' }}>
                <div style={{
                  width: '3rem',
                  height: '3rem',
                  borderRadius: '1rem',
                  background: '#1E293B',
                  border: '1px solid #334155',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#F92C53',
                  flexShrink: 0
                }}>
                  <IconC style={{ width: '1.4rem', height: '1.4rem' }} />
                </div>
                <div>
                  <h3 className="font-heading" style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.5rem', color: '#ffffff' }}>
                    {pt.title}
                  </h3>
                  <p className="font-sans" style={{ color: '#94A3B8', fontSize: '0.875rem', lineHeight: 1.6 }}>
                    {pt.description}
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
