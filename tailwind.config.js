/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        'pulse-scale' : {
          '0%, 100%' : { transform: 'scale(1)' },
          '50%' : { transform: 'scale(1.2)' }
        }
      },
      animation: {
        'pulse-scale' : 'pulse-scale 1s ease-in-out infinite'
      },
    },

    fontFamily: {
      'hind': 'Hind',
      'halyard': 'Halyard Display'
    },

    screens: {
      'phone': '420px',
      'otherPhones': '460px',
      'md': '768px',
      'lg': '1024px',
      'laptop': '1180px',
      'xl': '1580px',
      'big': '2000px',
    }
  },
  plugins: [],
}