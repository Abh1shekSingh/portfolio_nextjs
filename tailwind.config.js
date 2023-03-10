/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sacramento: ['Sacramento', "cursive"],
        merriweather: ['Merriweather', "sans-serif"],
        montserrat: ['Montserrat', "sans-serif"],
      },
    },
  },
  plugins: [],
}