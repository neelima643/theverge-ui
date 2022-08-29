/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'header-image': "url('../src/images/bw.png')",
      },
      fontFamily: {
        'heading-font': ["Arial Narrow", 'Arial', 'sans-serif'],
      }
    },
  },
  plugins: [],
};
