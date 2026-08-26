/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkBg: '#1C1D20',
        darkCard: '#141517',
        darkHover: '#292A2D',
        accentBlue: '#455CE9',
        lightGray: '#E9E9E9',
        mutedGray: '#999999',
      },
      fontFamily: {
        sans: ['Neue Montreal', 'Inter', 'Helvetica Neue', 'sans-serif'],
        display: ['Syne', 'Neue Montreal', 'Inter', 'sans-serif'],
      },
      animation: {
        'marquee': 'marquee 25s linear infinite',
        'marquee-reverse': 'marquee-reverse 25s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-reverse': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' },
        },
      },
    },
  },
  plugins: [],
};
