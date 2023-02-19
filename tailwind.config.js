const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-oswald)", ...fontFamily.sans],
      },
      colors: {
        primary: "#3500d3",
        secondary: "#0c0032",
        tertiary: "#282828",
      },
    },
  },
  plugins: [],
};
