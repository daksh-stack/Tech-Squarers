import React from 'react';
import { FileText, MessageSquare, UserCheck, Rocket, Sparkles, ArrowRight } from 'lucide-react';

/* Google Form Placeholder Link */
const GOOGLE_FORM_URL = "https://forms.gle/YOUR_FORM_LINK";
const DISCORD_INVITE_URL = "https://discord.gg/techsquarers";

export default function HowItWorks() {
  const steps = [
    {
      num: '01',
      title: 'Fill Enquiry Form',
      description: 'Submit your goals, current skill level, and topics you want to master in 60 seconds.',
      icon: FileText,
      link: GOOGLE_FORM_URL,
      linkText: 'Open Form'
    },
    {
      num: '02',
      title: 'Join Discord Hub',
      description: 'Hop into our private Discord server and instantly connect with serious peers and mentors.',
      icon: MessageSquare,
      link: DISCORD_INVITE_URL,
      linkText: 'Join Discord'
    },
    {
      num: '03',
      title: 'Personalized Onboarding',
      description: 'Our team assigns you to dedicated learning tracks and introduces you to your mentor cohort.',
      icon: UserCheck,
      link: null,
      linkText: null
    },
    {
      num: '04',
      title: 'Guided Learning & Practice',
      description: 'Tackle real projects, get your code audited, and build genuine confidence every week.',
      icon: Rocket,
      link: null,
      linkText: null
    }
  ];

  return (
    <section id="how-it-works" className="section-padding" style={{ background: '#0A0A0A', position: 'relative' }}>
      <div className="container">
        
        {/* Section Header */}
        <div style={{ maxWidth: '48rem', margin: '0 auto 4rem auto', textAlign: 'center' }}>
          <div className="vibranium-badge" style={{ marginBottom: '1.25rem' }}>
            <Sparkles style={{ width: '0.85rem', height: '0.85rem', color: '#9B5DE5' }} />
            <span>Frictionless Journey</span>
          </div>

          <h2 className="font-heading" style={{ fontSize: 'clamp(2rem, 4vw, 3.25rem)', fontWeight: 800, color: '#ffffff', lineHeight: 1.2, marginBottom: '1.25rem' }}>
            How It <span className="text-purple">Works</span>
          </h2>

          <p className="font-sans" style={{ fontSize: '1.1rem', color: '#A3A3A3', lineHeight: 1.6 }}>
            Getting started takes less than two minutes. Follow these four simple steps to enter our structured Discord learning hub.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid-4">
          {steps.map((step, idx) => {
            const IconComp = step.icon;
            return (
              <div key={idx} className="vibranium-card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                    <span className="font-mono" style={{ fontSize: '0.75rem', fontWeight: 800, color: '#9B5DE5' }}>
                      STEP {step.num}
                    </span>
                    
                    <div style={{
                      width: '2.75rem',
                      height: '2.75rem',
                      borderRadius: '0.85rem',
                      background: 'rgba(155, 93, 229, 0.12)',
                      color: '#9B5DE5',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      <IconComp style={{ width: '1.25rem', height: '1.25rem' }} />
                    </div>
                  </div>

                  <h3 className="font-heading" style={{ fontSize: '1.25rem', fontWeight: 700, color: '#ffffff', marginBottom: '0.65rem' }}>
                    {step.title}
                  </h3>

                  <p className="font-sans" style={{ fontSize: '0.875rem', color: '#A3A3A3', lineHeight: 1.6 }}>
                    {step.description}
                  </p>
                </div>

                {step.link && (
                  <div style={{ marginTop: '1.5rem', paddingTop: '1rem', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
                    <a
                      href={step.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono text-purple"
                      style={{ fontSize: '0.8rem', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.4rem' }}
                    >
                      <span>{step.linkText}</span>
                      <ArrowRight style={{ width: '0.85rem', height: '0.85rem' }} />
                    </a>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
