/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#f7ead9",
        secondary: "#f4c1c1",
        accent: "#6b4a2a",
        text: "#3a3a3a",
        gold: "#a67c52",
      },
      fontFamily: {
        heading: ['"Playfair Display"', "serif"],
        body: ['"Montserrat"', "sans-serif"],
      },
    },
  },
};
