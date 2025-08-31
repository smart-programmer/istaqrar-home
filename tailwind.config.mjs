/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1E3A8A',
          50: '#EFF6FF',
          100: '#DBEAFE',
          200: '#BFDBFE',
          300: '#93C5FD',
          400: '#60A5FA',
          500: '#3B82F6',
          600: '#2563EB',
          700: '#1D4ED8',
          800: '#1E3A8A',
          900: '#1E40AF'
        },
        teal: { DEFAULT: '#0D9488' },
        gray: { DEFAULT: '#6B7280' },
      },
      fontFamily: {
        tajawal: ['Tajawal', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
    },
    container: { center: true, padding: '1rem' },
  },
  plugins: [],
};
