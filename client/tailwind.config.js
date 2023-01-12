/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      height:{
        '15': '15vh',
        '10': '10vh',
      }
    },
  },
  plugins: [],
}
