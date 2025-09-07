/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#060807',
          50: '#0f1214',
          100: '#0c0f11',
          200: '#0b0d0f',
          300: '#0a0c0e',
          400: '#090a0b',
          500: '#08090a',
          600: '#070809',
          700: '#070708',
          800: '#060807',
          900: '#060807'
        },
        accent: { DEFAULT: '#F05957' },
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
