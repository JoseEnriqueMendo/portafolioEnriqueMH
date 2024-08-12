/* global module */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        main: '#030712',
        secundary: '#374161',
        textDark: '#000929',
        ligth: '#374151',
        dark: '#100A55',
        secundaryDark: '#5c4fe9',
        textLigth: '#807DA8',
      },
    },
    fontFamily: {
      Inter: ['Inter', 'sans-serif'],
    },
    keyframes: {
      scaleUp: {
        '0%': { transform: 'scale(1)' },
        '100%': { transform: 'scale(1.2)' },
      },
      scaleDown: {
        '0%': { transform: 'scale(1.2) ' },
        '100%': { transform: 'scale(1)' },
      },
      slideInFromLeft: {
        '0%': { transform: 'translateX(100%)' },
        '100%': { transform: 'translateX(0)' },
      },
      slideOutToLeft: {
        '0%': { transform: 'translateX(0)' },
        '100%': { transform: 'translateX(-100%)' },
      },
    },
    animation: {
      scaleUp: 'scaleUp 0.5s ease-in-out forwards',
      scaleDown: 'scaleDown 0.5s ease-in-out forwards',
      slideInFromLeft: 'slideInFromLeft 0.5s ease-out',
      slideOutToLeft: 'slideOutToLeft 0.5s ease-out',
    },
  },
  plugins: [],
};
