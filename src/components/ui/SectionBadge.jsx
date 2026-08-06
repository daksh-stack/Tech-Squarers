import React from 'react';

/**
 * SectionBadge — small pill label used above section headings.
 * Example: <SectionBadge>How It Works</SectionBadge>
 */
export default function SectionBadge({ children, className = '' }) {
  return (
    <span
      className={className}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '0.375rem',
        padding: '0.3rem 0.85rem',
        background: 'rgba(155, 93, 229, 0.1)',
        border: '1px solid rgba(155, 93, 229, 0.25)',
        borderRadius: '999px',
        color: '#B77EF0',
        fontSize: '0.8125rem',
        fontWeight: 600,
        fontFamily: 'var(--font-sans)',
        letterSpacing: '0.04em',
        textTransform: 'uppercase',
      }}
    >
      {children}
    </span>
  );
}
