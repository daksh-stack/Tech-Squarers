/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'loro-coral': {
          DEFAULT: '#F92C53',
          hover: '#E01E43',
          dark: '#C81538',
          light: '#FFE4E8',
          glow: 'rgba(249, 44, 83, 0.25)',
        },
        'loro-teal': {
          DEFAULT: '#0D9488',
          soft: '#E6FFFA',
          border: 'rgba(13, 148, 136, 0.2)',
        },
        'loro-gold': {
          DEFAULT: '#F59E0B',
          soft: '#FEF3C7',
        },
        'loro-dark': {
          DEFAULT: '#0F172A',
          card: '#1E293B',
          nav: '#111827',
          surface: '#1A2332',
        },
        'loro-slate': {
          50: '#F8FAFC',
          100: '#F1F5F9',
          200: '#E2E8F0',
          300: '#CBD5E1',
          400: '#94A3B8',
          500: '#64748B',
          600: '#475569',
          700: '#334155',
          800: '#1E293B',
          900: '#0F172A',
        }
      },
      fontFamily: {
        'heading': ['Comfortaa', 'sans-serif'],
        'sans': ['DM Sans', 'Inter', 'sans-serif'],
        'mono': ['Space Grotesk', 'monospace'],
      },
      animation: {
        'marquee': 'marquee 30s linear infinite',
        'float': 'float 5s ease-in-out infinite',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
      boxShadow: {
        'loro-card': '0 10px 30px -10px rgba(0, 0, 0, 0.05), 0 4px 6px -2px rgba(0, 0, 0, 0.02)',
        'loro-glow': '0 10px 30px -5px rgba(249, 44, 83, 0.3)',
        'loro-glass': '0 8px 32px 0 rgba(15, 23, 42, 0.08)',
      },
    },
  },
  plugins: [],
}
