/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        "header-image": "url('../public/images/bgimg.jpg')",
      },
      fontFamily: {},

      screens: {
        mobile: "400px",
      },

      colors: {
        "nav-list": "#404040",
      },

      margin: {
        "20p": "22%",
      },

      borderWidth: {
        half: "0.3px",
      },

      fontSize: {
        1: "38px",
        2: "23px",
      },

      width: {
        custom: "28%",
        custom1: "72%",
        "20p": "20%",
        "60p": "60%",
      },
      maxWidth: {
        largescreen: "80%",
      },
    },
  },
  plugins: [],
};
