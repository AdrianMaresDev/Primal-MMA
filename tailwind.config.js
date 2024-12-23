/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/*.{html,js}'],
  theme: {
    extend: {
      fontFamily: {
        spartan: ['League Spartan', 'sans-serif'],
      },
      colors: {
        'bg-gray': '#1F1F1F',
        'primary-red': '#C4322F',
        'accent-red': '#612726',
      },
    },
  },
  plugins: [],
}

