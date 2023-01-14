/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html","./src/**/*.{jsx,js}"],
  darkMode: 'class', 
  theme: {
    extend: {
      fontFamily: {
        inter: ['inter', 'serif'],
      },
      animation: {
        blob: "blob 7s infinite"
      },
      keyframes: {
        blob: {
          "0%": {
            transform: "scale(1)"
          },
          "33%": {
            transform: "scale(1.4)"
          },
          "66%": {
            transform: "scale(0.8)"
          },
          "100%": {
            transform: "scale(1)"
          }
        }
      }
    },
  },
  plugins: [],
}
