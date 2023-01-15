/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html","./src/**/*.{jsx,js}"],
  darkMode: 'class', 
  theme: {
    extend: {
      fontFamily: {
        inter: ['inter', 'serif'],
      },
      colors: {
        'werid': "#A0B0B2"
      },
      animation: {
        blob: "blob 7s infinite"
      },
      keyframes: {
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)"
          },
          "33%": {
            transform: "translate(40px, -60px) scale(1.3)"
          },
          "66%": {
            transform: "translate(-30px, 30px) scale(0.6)"
          },
          "100%": {
            transform: "translate(0px, 0px) scale(1)"
          }
        }
      }
    },
  },
  plugins: [],
}
