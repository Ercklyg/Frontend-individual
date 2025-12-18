/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        filipino: {
          red: '#C8102E',
          gold: '#FDB913',
          cream: '#FFF8E7',
          brown: '#8B4513',
          orange: '#FF6B35',
          'dark-red': '#8B0000',
          'light-gold': '#FFE5B4',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
