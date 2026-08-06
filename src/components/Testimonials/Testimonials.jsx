import React from 'react';
import { motion } from 'framer-motion';
import SectionBadge from '../ui/SectionBadge';

const TESTIMONIALS = [
  {
    id: 1,
    name: 'Aryan Mehta',
    role: 'Full-Stack Developer',
    avatar: 'AM',
    avatarColor: '#9B5DE5',
    stars: 5,
    text: 'TechSquarers completely changed how I learn. The structured roadmap kept me focused and the community accountability pushed me further than I ever went alone. Landed my first dev role in 4 months.',
  },
  {
    id: 2,
    name: 'Priya Sharma',
    role: 'Data Science Intern',
    avatar: 'PS',
    avatarColor: '#7B2CBF',
    stars: 5,
    text: "I was completely lost before joining. The mentors here don't just give answers — they teach you how to think. The Discord channels are so well-organized. Best investment I've made in my learning.",
  },
  {
    id: 3,
    name: 'Karan Patel',
    role: 'CS Student, IIT Bombay',
    avatar: 'KP',
    avatarColor: '#5E3A9E',
    stars: 5,
    text: "Real talk: I joined 3 coding communities before this one and none of them had this level of seriousness. People here actually do the work. The peer reviews are brutally honest — in the best way.",
  },
  {
    id: 4,
    name: 'Sneha Verma',
    role: 'UI/UX Designer → Developer',
    avatar: 'SV',
    avatarColor: '#9B5DE5',
    stars: 5,
    text: "Coming from a design background I was intimidated by code. TechSquarers had a track specifically for me. Six months later I'm building full React apps. The community never let me feel behind.",
  },
  {
    id: 5,
    name: 'Rohan Das',
    role: 'Backend Engineer',
    avatar: 'RD',
    avatarColor: '#6A3FA3',
    stars: 5,
    text: 'The weekly challenges and code reviews are next level. My code quality jumped dramatically just from the feedback I got here. TechSquarers is the real-world practice environment every dev needs.',
  },
];

const StarRating = ({ count = 5 }) => (
  <div style={{ display: 'flex', gap: '3px', marginBottom: '1rem' }}>
    {Array.from({ length: count }).map((_, i) => (
      <svg key={i} width="15" height="15" viewBox="0 0 24 24" fill="#F59E0B" aria-hidden="true">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ))}
  </div>
);

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.05 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      aria-label="Testimonials"
      style={{
        position: 'relative',
        padding: '6rem 0 7rem',
        overflow: 'hidden',
        background: 'linear-gradient(180deg, #0A0A0A 0%, #0E0A14 50%, #0A0A0A 100%)',
      }}
    >
      {/* Subtle center glow */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: '20%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '800px',
          height: '400px',
          background: 'radial-gradient(ellipse 70% 60% at 50% 50%, rgba(155,93,229,0.06) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          style={{ textAlign: 'center', marginBottom: '3.5rem' }}
        >
          <SectionBadge style={{ marginBottom: '1.25rem', display: 'inline-flex' }}>
            Community Stories
          </SectionBadge>

          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 800,
              fontSize: 'clamp(2rem, 4.5vw, 3rem)',
              lineHeight: 1.1,
              letterSpacing: '-0.03em',
              color: '#FFFFFF',
              maxWidth: '600px',
              margin: '1.25rem auto 1rem',
            }}
          >
            Real People.{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #9B5DE5 0%, #B77EF0 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Real Growth.
            </span>
          </h2>

          <p
            style={{
              color: '#A3A3A3',
              fontSize: '1.0625rem',
              lineHeight: 1.65,
              maxWidth: '520px',
              margin: '0 auto',
            }}
          >
            Don't take our word for it. Here's what members from our community have to say after joining TechSquarers.
          </p>
        </motion.div>

        {/* Testimonials grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '1.25rem',
          }}
        >
          {TESTIMONIALS.map((t) => (
            <TestimonialCard key={t.id} testimonial={t} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function TestimonialCard({ testimonial }) {
  const [hovered, setHovered] = React.useState(false);

  return (
    <motion.article
      variants={cardVariants}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered
          ? 'linear-gradient(135deg, rgba(155,93,229,0.07) 0%, rgba(22,22,22,1) 100%)'
          : '#161616',
        border: hovered
          ? '1px solid rgba(155,93,229,0.3)'
          : '1px solid rgba(255,255,255,0.06)',
        borderRadius: '16px',
        padding: '1.75rem',
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        boxShadow: hovered
          ? '0 4px 32px rgba(155,93,229,0.12)'
          : '0 1px 0 rgba(255,255,255,0.04)',
        cursor: 'default',
      }}
    >
      <StarRating count={testimonial.stars} />

      <p
        style={{
          color: '#C0C0C0',
          fontSize: '0.9375rem',
          lineHeight: 1.7,
          marginBottom: '1.5rem',
          fontStyle: 'italic',
        }}
      >
        "{testimonial.text}"
      </p>

      {/* Author */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.875rem' }}>
        <div
          aria-hidden="true"
          style={{
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            background: `linear-gradient(135deg, ${testimonial.avatarColor} 0%, rgba(123,44,191,0.6) 100%)`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '0.75rem',
            fontWeight: 700,
            color: '#fff',
            flexShrink: 0,
            border: '1px solid rgba(155,93,229,0.3)',
          }}
        >
          {testimonial.avatar}
        </div>
        <div>
          <p
            style={{
              color: '#FFFFFF',
              fontWeight: 600,
              fontSize: '0.9rem',
              fontFamily: 'var(--font-display)',
            }}
          >
            {testimonial.name}
          </p>
          <p style={{ color: '#6B6B6B', fontSize: '0.8125rem' }}>{testimonial.role}</p>
        </div>
      </div>
    </motion.article>
  );
}
