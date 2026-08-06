import React, { useState } from 'react';
import { X, CheckCircle2, Send, Sparkles, ShieldCheck } from 'lucide-react';

export default function QuoteModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const [selectedService, setSelectedService] = useState('Website Development');
  const [budget, setBudget] = useState('$3,000 – $5,000');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const services = [
    'Website Development',
    'App Development',
    'Systems & Dashboards',
    'IT Consulting',
    'AI Media & Animation',
    'Brand Identity'
  ];

  const budgets = [
    '$3,000 – $5,000',
    '$5,000 – $10,000',
    '$10,000 – $30,000',
    '$30,000 – $60,000+'
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        
        <button onClick={onClose} className="modal-close-btn" aria-label="Close Modal">
          <X style={{ width: '1.2rem', height: '1.2rem' }} />
        </button>

        {!submitted ? (
          <div>
            <div className="badge-pill" style={{ background: 'rgba(249,44,83,0.1)', color: '#F92C53', borderColor: 'transparent', marginBottom: '1rem' }}>
              <Sparkles style={{ width: '0.85rem', height: '0.85rem' }} />
              <span>Project Estimator &amp; Consultation</span>
            </div>

            <h3 className="font-heading" style={{ fontSize: '1.75rem', fontWeight: 800, color: '#ffffff', marginBottom: '0.5rem' }}>
              Talk to the Studio
            </h3>
            <p className="font-sans text-muted" style={{ fontSize: '0.875rem', marginBottom: '1.5rem' }}>
              Tell us about your project vision. No pressure, just an honest discussion about scope, pricing, and timing.
            </p>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {/* Service Selection */}
              <div>
                <label className="font-mono" style={{ fontSize: '0.75rem', color: '#CBD5E1', display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>
                  What service are you looking for?
                </label>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '0.5rem' }}>
                  {services.map((svc) => (
                    <button
                      type="button"
                      key={svc}
                      onClick={() => setSelectedService(svc)}
                      style={{
                        padding: '0.6rem 0.85rem',
                        borderRadius: '0.75rem',
                        fontSize: '0.75rem',
                        fontWeight: 600,
                        textAlign: 'left',
                        transition: 'all 0.2s ease',
                        background: selectedService === svc ? '#F92C53' : '#1E293B',
                        color: selectedService === svc ? '#ffffff' : '#CBD5E1',
                        border: selectedService === svc ? '1px solid #F92C53' : '1px solid #334155'
                      }}
                    >
                      {svc}
                    </button>
                  ))}
                </div>
              </div>

              {/* Budget Range */}
              <div>
                <label className="font-mono" style={{ fontSize: '0.75rem', color: '#CBD5E1', display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>
                  Estimated Project Budget (USD)
                </label>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))', gap: '0.5rem' }}>
                  {budgets.map((b) => (
                    <button
                      type="button"
                      key={b}
                      onClick={() => setBudget(b)}
                      style={{
                        padding: '0.5rem',
                        borderRadius: '0.65rem',
                        fontSize: '0.7rem',
                        textAlign: 'center',
                        fontFamily: 'var(--font-mono)',
                        transition: 'all 0.2s ease',
                        background: budget === b ? '#0D9488' : '#1E293B',
                        color: budget === b ? '#ffffff' : '#CBD5E1',
                        border: budget === b ? '1px solid #0D9488' : '1px solid #334155'
                      }}
                    >
                      {b}
                    </button>
                  ))}
                </div>
              </div>

              {/* Inputs */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
                <div>
                  <label className="font-mono" style={{ fontSize: '0.75rem', color: '#CBD5E1', display: 'block', marginBottom: '0.35rem' }}>
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Alex Rivera"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="input-field"
                  />
                </div>

                <div>
                  <label className="font-mono" style={{ fontSize: '0.75rem', color: '#CBD5E1', display: 'block', marginBottom: '0.35rem' }}>
                    Work Email *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="alex@company.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="input-field"
                  />
                </div>
              </div>

              <div>
                <label className="font-mono" style={{ fontSize: '0.75rem', color: '#CBD5E1', display: 'block', marginBottom: '0.35rem' }}>
                  Project Notes &amp; Scope Details
                </label>
                <textarea
                  rows={3}
                  placeholder="Share timeline expectations or reference sites..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="input-field"
                />
              </div>

              {/* Action */}
              <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '1rem', marginTop: '0.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.75rem', color: '#94A3B8' }} className="font-mono">
                  <ShieldCheck style={{ width: '1rem', height: '1rem', color: '#0D9488' }} />
                  <span>Fixed Quotes · 24h Response</span>
                </div>

                <button type="submit" className="btn btn-coral" style={{ fontSize: '0.875rem' }}>
                  <span>Submit Inquiry</span>
                  <Send style={{ width: '1rem', height: '1rem' }} />
                </button>
              </div>

            </form>
          </div>
        ) : (
          <div style={{ textAlign: 'center', padding: '2rem 0' }}>
            <div style={{ width: '4rem', height: '4rem', borderRadius: '50%', background: 'rgba(16,185,129,0.2)', color: '#10B981', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem auto' }}>
              <CheckCircle2 style={{ width: '2rem', height: '2rem' }} />
            </div>

            <h3 className="font-heading" style={{ fontSize: '1.75rem', fontWeight: 800, color: '#ffffff', marginBottom: '0.75rem' }}>
              Inquiry Received!
            </h3>

            <p className="font-sans text-muted" style={{ fontSize: '0.9rem', maxWidth: '24rem', margin: '0 auto 1.5rem auto', lineHeight: 1.6 }}>
              Thank you, <strong style={{ color: '#ffffff' }}>{name || 'Partner'}</strong>. 
              Our lead team is reviewing your inquiry for <span className="text-coral" style={{ fontWeight: 600 }}>{selectedService}</span>. 
              We will reach out to <span className="text-teal font-mono">{email}</span> shortly.
            </p>

            <button onClick={() => { setSubmitted(false); onClose(); }} className="btn btn-dark">
              Back to Studio Homepage
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
