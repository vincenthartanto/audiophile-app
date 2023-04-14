/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        lg: "1440px",
      },
      boxShadow: {
        bottom: "box-shadow: 0 5px 5px rgba(182, 182, 182, 0.75);",
      },
      letterSpacing: {
        widestTitle: ".90rem",
      },
      colors: {
        orangeColor: "#D87D4A",
        greyColor: "#F1F1F1",
      },
    },
  },
  plugins: [],
};
