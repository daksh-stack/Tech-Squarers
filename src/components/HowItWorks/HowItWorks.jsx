import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { ClipboardList, Users, Compass, Rocket } from 'lucide-react';
import SectionBadge from '../ui/SectionBadge';

const STEPS = [
  {
    number: '01',
    icon: ClipboardList,
    title: 'Fill the enquiry form',
    description:
      'A short, simple form to help us understand your background, goals, and what you\'re looking to learn. Takes two minutes.',
  },
  {
    number: '02',
    icon: Users,
    title: 'Join the Discord community',
    description:
      'Once approved, you\'ll receive a personal invite link to our private Discord server — the home of TechSquarers.',
  },
  {
    number: '03',
    icon: Compass,
    title: 'Get onboarded by the team',
    description:
      'A team member will walk you through the channels, learning paths, and community norms. You won\'t be dropped in the cold.',
  },
  {
    number: '04',
    icon: Rocket,
    title: 'Start learning with guided paths',
    description:
      'Follow structured learning paths, join live sessions, tackle real practice problems, and grow alongside your peers.',
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

function StepCard({ step, index }) {
  const [hovered, setHovered] = useState(false);
  const Icon = step.icon;

  return (
    <motion.div
      variants={cardVariants}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered ? '#161616' : '#111111',
        border: `1px solid ${hovered ? 'rgba(155,93,229,0.35)' : 'rgba(255,255,255,0.07)'}`,
        borderRadius: '16px',
        padding: '1.75rem',
        position: 'relative',
        transition: 'all 0.28s cubic-bezier(0.4,0,0.2,1)',
        boxShadow: hovered ? '0 0 30px rgba(155,93,229,0.1)' : '0 2px 12px rgba(0,0,0,0.25)',
        cursor: 'default',
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
      }}
    >
      {/* Step number — top right corner */}
      <span
        style={{
          position: 'absolute',
          top: '1.25rem',
          right: '1.25rem',
          fontFamily: 'var(--font-display)',
          fontWeight: 800,
          fontSize: '0.75rem',
          color: hovered ? 'rgba(155,93,229,0.7)' : 'rgba(255,255,255,0.1)',
          letterSpacing: '0.06em',
          transition: 'color 0.28s',
        }}
      >
        {step.number}
      </span>

      {/* Icon */}
      <div
        style={{
          width: '44px',
          height: '44px',
          borderRadius: '10px',
          background: hovered
            ? 'linear-gradient(135deg, rgba(155,93,229,0.25) 0%, rgba(123,44,191,0.15) 100%)'
            : 'rgba(155,93,229,0.1)',
          border: `1px solid ${hovered ? 'rgba(155,93,229,0.4)' : 'rgba(155,93,229,0.15)'}`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'all 0.28s',
          flexShrink: 0,
        }}
      >
        <Icon
          size={20}
          strokeWidth={1.75}
          color={hovered ? '#9B5DE5' : '#7B6B9E'}
          style={{ transition: 'color 0.28s' }}
        />
      </div>

      {/* Title */}
      <h3
        style={{
          fontFamily: 'var(--font-display)',
          fontWeight: 700,
          fontSize: '1.0625rem',
          color: '#FFFFFF',
          letterSpacing: '-0.02em',
          lineHeight: 1.3,
        }}
      >
        {step.title}
      </h3>

      {/* Description */}
      <p
        style={{
          fontSize: '0.9rem',
          lineHeight: 1.65,
          color: '#6B6B6B',
          margin: 0,
        }}
      >
        {step.description}
      </p>

      {/* Bottom connector line (decorative) — skip on last card */}
      {index < STEPS.length - 1 && (
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            bottom: '-1px',
            right: '-1px',
            width: '40px',
            height: '40px',
            borderRight: '1px solid rgba(155,93,229,0.2)',
            borderBottom: '1px solid rgba(155,93,229,0.2)',
            borderRadius: '0 0 16px 0',
            pointerEvents: 'none',
          }}
        />
      )}
    </motion.div>
  );
}

export default function HowItWorks() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      id="how-it-works"
      ref={ref}
      aria-label="How It Works"
      className="section"
      style={{
        background: '#0D0D0D',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Subtle center glow */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(ellipse 60% 50% at 50% 100%, rgba(155,93,229,0.07) 0%, transparent 70%)',
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
            <SectionBadge>Process</SectionBadge>
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
            How It Works
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.2 }}
            style={{
              fontSize: '1.0625rem',
              color: '#6B6B6B',
              maxWidth: '500px',
              margin: '0 auto',
              lineHeight: 1.65,
            }}
          >
            Four clear steps from curious visitor to confident community member.
          </motion.p>
        </div>

        {/* Steps grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(1, 1fr)',
            gap: '1rem',
          }}
          className="sm:grid-cols-2 lg:grid-cols-4"
        >
          {STEPS.map((step, i) => (
            <StepCard key={step.number} step={step} index={i} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
