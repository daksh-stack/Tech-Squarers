/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto'],
      },
      colors: {
        accent: {
          400: '#a78bfa',
          500: '#7c3aed',
          600: '#6d28d9'
        }
      ,
      neon: {
        400: '#06b6d4',
        500: '#00f0ff',
        600: '#00d9e6'
      }
      }
    },
  },
  plugins: [],
}
