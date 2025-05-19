/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{html,js}",
    "./components/**/*.{html,js}",
    "./../dist/**/*.{html,js}",
    "./*.{html,js}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {},
    fontFamily: {
      sans: "Inter, sans-serif",
      serif: "Libre Baskerville, serif",
    },
  },
  plugins: [require("flowbite/plugin"), require("@tailwindcss/forms")],
};
