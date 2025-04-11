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
        },
        backgroundImage: {
          'login-bg-img': "url('./src/assets/images/bg-image.png')",
          'signup-bg-img': "url('./src/assets/images/signup-bg-img.png')",
        },      
      },
    },
    plugins: [],
  }
  