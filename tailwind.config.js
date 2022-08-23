module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily:{
        sans: ["Open Sans"]
      },
      gridTemplateColumns: {
        "1/5": "1fr 4fr",
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms'), require('tailwindcss/colors')],
}
const colors = require('tailwindcss/colors')