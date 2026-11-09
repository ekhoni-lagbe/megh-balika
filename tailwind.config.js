/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        bengali: ['"Hind Siliguri"', '"Noto Sans Bengali"', 'sans-serif'],
        display: ['"Hind Siliguri"', '"Noto Sans Bengali"', 'serif'],
      },
      colors: {
        cream: {
          50: '#FDFBF7',
          100: '#FAF5EC',
          200: '#F2E9D8',
        },
        rose: {
          soft: '#E8C5C5',
          DEFAULT: '#DDA0A0',
          deep: '#B8657A',
        },
        burgundy: {
          DEFAULT: '#5C1A2B',
          light: '#7A2A3D',
        },
        lavender: {
          soft: '#E6DFF0',
          DEFAULT: '#C4B5D9',
        },
        ink: {
          DEFAULT: '#2B1A1F',
          soft: '#5A4A50',
          muted: '#8A7A80',
        },
      },
      boxShadow: {
        soft: '0 4px 20px -4px rgba(92, 26, 43, 0.08)',
        card: '0 8px 30px -8px rgba(92, 26, 43, 0.12)',
        float: '0 12px 40px -10px rgba(92, 26, 43, 0.18)',
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'slide-in': {
          '0%': { opacity: '0', transform: 'scale(0.96)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
      animation: {
        'fade-in': 'fade-in 0.4s ease-out both',
        'slide-in': 'slide-in 0.25s ease-out both',
      },
    },
  },
  plugins: [],
};
