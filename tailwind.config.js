/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#162C42",
        secondary: "#F7770F",
        black: {
          1: "#000810",
          2: "#001122"
        },
        gray: {
          1: "#637180",
          2: "#B9B9B9",
          3: "#EBEBEB",
          4: "#F9F9F9"
        },
      }
    },
  },
  plugins: [],
}