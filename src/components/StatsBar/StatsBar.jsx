import React, { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';

const STATS = [
  { value: 200, suffix: '+', label: 'Members in community' },
  { value: 500, suffix: '+', label: 'Learning sessions completed' },
  { value: 96, suffix: '%', label: 'Average satisfaction' },
  { value: 12, suffix: '+', label: 'Active mentors' },
];

function CountUp({ target, suffix, isVisible }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;
    let start = 0;
    const duration = 1800;
    const step = Math.ceil(target / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);
    return () => clearInterval(timer);
  }, [isVisible, target]);

  return (
    <span>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};

export default function StatsBar() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      ref={ref}
      aria-label="Key statistics"
      style={{
        padding: '1rem 0 4.5rem',
        position: 'relative',
      }}
    >
      <div className="container">
        {/* Divider line */}
        <div
          style={{
            height: '1px',
            background: 'linear-gradient(90deg, transparent, rgba(155,93,229,0.25) 30%, rgba(155,93,229,0.25) 70%, transparent)',
            marginBottom: '3.5rem',
          }}
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '2rem 1.5rem',
          }}
          className="md:grid-cols-4"
        >
          {STATS.map((stat) => (
            <motion.div
              key={stat.label}
              variants={itemVariants}
              style={{
                textAlign: 'center',
                padding: '1.5rem 1rem',
                borderRadius: '12px',
                background: 'rgba(255,255,255,0.02)',
                border: '1px solid rgba(255,255,255,0.06)',
              }}
            >
              {/* Number */}
              <div
                style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 800,
                  fontSize: 'clamp(2rem, 5vw, 3rem)',
                  lineHeight: 1,
                  letterSpacing: '-0.04em',
                  background: 'linear-gradient(135deg, #FFFFFF 30%, #B77EF0 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  marginBottom: '0.625rem',
                }}
              >
                <CountUp target={stat.value} suffix={stat.suffix} isVisible={isInView} />
              </div>

              {/* Label */}
              <p
                style={{
                  fontSize: '0.875rem',
                  color: '#6B6B6B',
                  fontWeight: 500,
                  lineHeight: 1.4,
                  margin: 0,
                }}
              >
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
