import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Map, UserCheck, Dumbbell, Shield } from 'lucide-react';
import SectionBadge from '../ui/SectionBadge';

const FEATURES = [
  {
    icon: Map,
    title: 'Structured Learning Paths',
    description:
      'No more random resources. Follow curated, progressive learning sequences built around real skills — from fundamentals to applied projects.',
    accent: 'linear-gradient(135deg, #9B5DE5, #7B2CBF)',
  },
  {
    icon: UserCheck,
    title: 'Active Mentors',
    description:
      'Real humans who\'ve been where you are. Mentors are present in the Discord daily — answering questions, reviewing your work, and pushing you forward.',
    accent: 'linear-gradient(135deg, #7B2CBF, #5A189A)',
  },
  {
    icon: Dumbbell,
    title: 'Real Practice Problems',
    description:
      'Theory without practice builds false confidence. We give you real problems, code challenges, and project briefs to sharpen your skills under pressure.',
    accent: 'linear-gradient(135deg, #B77EF0, #9B5DE5)',
  },
  {
    icon: Shield,
    title: 'Accountable Community',
    description:
      'A small, signal-rich community where everyone is here to grow. No spam, no noise — just focused peers who hold each other to a higher standard.',
    accent: 'linear-gradient(135deg, #9B5DE5, #B77EF0)',
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.13, delayChildren: 0.05 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
};

function FeatureCard({ feature }) {
  const [hovered, setHovered] = useState(false);
  const Icon = feature.icon;

  return (
    <motion.div
      variants={cardVariants}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: 'relative',
        borderRadius: '18px',
        padding: '1px', // holds gradient border
        background: hovered
          ? 'linear-gradient(135deg, rgba(155,93,229,0.5) 0%, rgba(123,44,191,0.3) 50%, rgba(255,255,255,0.06) 100%)'
          : 'linear-gradient(135deg, rgba(255,255,255,0.07) 0%, rgba(255,255,255,0.03) 100%)',
        transition: 'background 0.3s ease',
        cursor: 'default',
      }}
    >
      {/* Inner card */}
      <div
        style={{
          background: hovered ? '#151515' : '#111111',
          borderRadius: '17px',
          padding: '2rem',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          gap: '1.125rem',
          transition: 'background 0.3s ease',
        }}
      >
        {/* Icon container with gradient bg */}
        <div
          style={{
            width: '48px',
            height: '48px',
            borderRadius: '12px',
            background: hovered ? feature.accent : 'rgba(155,93,229,0.12)',
            border: `1px solid ${hovered ? 'transparent' : 'rgba(155,93,229,0.18)'}`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
            transition: 'all 0.3s',
            boxShadow: hovered ? '0 0 20px rgba(155,93,229,0.3)' : 'none',
          }}
        >
          <Icon size={22} strokeWidth={1.75} color={hovered ? '#ffffff' : '#9B5DE5'} style={{ transition: 'color 0.3s' }} />
        </div>

        {/* Title */}
        <h3
          style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 700,
            fontSize: '1.125rem',
            color: '#FFFFFF',
            letterSpacing: '-0.02em',
            lineHeight: 1.25,
          }}
        >
          {feature.title}
        </h3>

        {/* Description */}
        <p
          style={{
            fontSize: '0.9375rem',
            lineHeight: 1.7,
            color: '#6B6B6B',
            margin: 0,
          }}
        >
          {feature.description}
        </p>
      </div>
    </motion.div>
  );
}

export default function Features() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      id="features"
      ref={ref}
      aria-label="What You'll Experience Inside"
      className="section"
      style={{ position: 'relative', overflow: 'hidden' }}
    >
      {/* Background glow */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          right: '-20%',
          top: '50%',
          transform: 'translateY(-50%)',
          width: '700px',
          height: '700px',
          background: 'radial-gradient(circle, rgba(155,93,229,0.06) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <div className="container" style={{ position: 'relative' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            style={{ marginBottom: '1rem' }}
          >
            <SectionBadge>Features</SectionBadge>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.1 }}
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 800,
              fontSize: 'clamp(1.875rem, 4vw, 2.75rem)',
              color: '#FFFFFF',
              letterSpacing: '-0.03em',
              marginBottom: '1rem',
            }}
          >
            What You'll{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #9B5DE5, #B77EF0)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Experience Inside
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.2 }}
            style={{
              fontSize: '1.0625rem',
              color: '#6B6B6B',
              maxWidth: '520px',
              margin: '0 auto',
              lineHeight: 1.65,
            }}
          >
            Not a course marketplace. Not a YouTube channel. A real, focused
            community built for growth.
          </motion.p>
        </div>

        {/* Feature cards grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(1, 1fr)',
            gap: '1.25rem',
          }}
          className="sm:grid-cols-2 lg:grid-cols-4"
        >
          {FEATURES.map((feature) => (
            <FeatureCard key={feature.title} feature={feature} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
