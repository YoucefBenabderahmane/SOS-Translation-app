/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#ffffff",

        secondary: {
          DEFAULT: "#CC6633",
        },
        black: {
          DEFAULT: "#000",
          100: "#1E1E2D",
          200: "#232533",
        },
        gray: {
          100: "#CDCDE0",
        },
      },
      fontFamily: {
        bbrita: ["Britanica Condensed Bold", "sans-serif"],
        ibbrita: ["Britanica Expanded Black Italic", "sans-serif"],
        rbrita: ["Britanica Expanded Regular", "sans-serif"],
      },
    },
  },
  plugins: [],
};