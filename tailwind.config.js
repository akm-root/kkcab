/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./searchResults.html"],
  theme: {
    extend: {
      colors: {
        kkgreen: {
          50: "##c0ffb9",
          100: "#afffa6",
          200: "#9cff92",
          300: "#87ff7c",
          400: "#70ff63",
          500: "#21fc00",
          600: "#16bb00",
          700: "#109c00",
          800: "#0b7e00",
          900: "#066200",
          950: "#034700",
        },
      },
    },
  },
  plugins: [],
};
