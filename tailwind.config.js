/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'header-image': "url('../src/images/bgimg.jpg')",
      },
      fontFamily: {
        'heading-font': ["Arial Narrow", 'Arial', 'sans-serif'],
      },

      screens: {
        'mobile' : '400px',
      },

      colors: {
        'nav-list' : '#404040',
      },

      margin: {
        '20p': '22%',
      },

      borderWidth: {
        'half': '0.3px'
      }
    },
  },
  plugins: [],
};
