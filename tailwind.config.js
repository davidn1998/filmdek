const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-oswald)", ...fontFamily.sans],
      },
      colors: {
        primary: "#3500d3",
        glitchCol1: "#E91E63",
        glitchCol2: "#03A9F4",
      },
    },
  },
  plugins: [],
};
