/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./index.html",
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        fontFamily: {
            display: ["Poppins","sans-serif"],
        },
      extend: {
        colors: {
            primary:"#05B603",
            secondary: "#EF863E",
        }
      },
    },
    plugins: [],
  }
  