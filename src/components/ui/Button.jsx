import React from 'react';

/**
 * Reusable Button component with two variants:
 *   - "primary"  → vibranium purple fill with glow effect
 *   - "outline"  → silver/white border, transparent background
 *   - "ghost"    → no border, subtle hover
 *
 * Props:
 *   variant: 'primary' | 'outline' | 'ghost'
 *   size: 'sm' | 'md' | 'lg'
 *   href: string (renders as <a> tag)
 *   target: string
 *   className: string
 *   children: React.ReactNode
 *   ...rest: any additional props passed to element
 */

const baseStyles = {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '0.5rem',
  fontFamily: 'var(--font-sans)',
  fontWeight: 600,
  letterSpacing: '-0.01em',
  borderRadius: '10px',
  cursor: 'pointer',
  transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
  textDecoration: 'none',
  whiteSpace: 'nowrap',
  userSelect: 'none',
  border: '1px solid transparent',
};

const variantStyles = {
  primary: {
    background: 'linear-gradient(135deg, #9B5DE5 0%, #7B2CBF 100%)',
    color: '#FFFFFF',
    border: '1px solid rgba(155, 93, 229, 0.5)',
    boxShadow: '0 0 0 0 rgba(155, 93, 229, 0)',
  },
  outline: {
    background: 'transparent',
    color: '#E5E5E5',
    border: '1px solid rgba(255, 255, 255, 0.18)',
  },
  ghost: {
    background: 'transparent',
    color: '#A3A3A3',
    border: '1px solid transparent',
  },
};

const sizeStyles = {
  sm: { padding: '0.5rem 1rem', fontSize: '0.875rem' },
  md: { padding: '0.65rem 1.4rem', fontSize: '0.9375rem' },
  lg: { padding: '0.85rem 2rem', fontSize: '1rem' },
};

export default function Button({
  variant = 'primary',
  size = 'md',
  href,
  target,
  rel,
  className = '',
  children,
  style = {},
  ...rest
}) {
  const combinedStyle = {
    ...baseStyles,
    ...variantStyles[variant],
    ...sizeStyles[size],
    ...style,
  };

  const handleMouseEnter = (e) => {
    if (variant === 'primary') {
      e.currentTarget.style.transform = 'translateY(-1px)';
      e.currentTarget.style.boxShadow = '0 0 28px rgba(155, 93, 229, 0.45)';
    } else if (variant === 'outline') {
      e.currentTarget.style.background = 'rgba(255,255,255,0.06)';
      e.currentTarget.style.borderColor = 'rgba(255,255,255,0.35)';
      e.currentTarget.style.transform = 'translateY(-1px)';
    } else {
      e.currentTarget.style.color = '#E5E5E5';
    }
  };

  const handleMouseLeave = (e) => {
    e.currentTarget.style.transform = 'translateY(0)';
    if (variant === 'primary') {
      e.currentTarget.style.boxShadow = '0 0 0 0 rgba(155, 93, 229, 0)';
    } else if (variant === 'outline') {
      e.currentTarget.style.background = 'transparent';
      e.currentTarget.style.borderColor = 'rgba(255,255,255,0.18)';
    } else {
      e.currentTarget.style.color = '#A3A3A3';
    }
  };

  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={rel || (target === '_blank' ? 'noopener noreferrer' : undefined)}
        style={combinedStyle}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className={className}
        {...rest}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      style={combinedStyle}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={className}
      {...rest}
    >
      {children}
    </button>
  );
}
