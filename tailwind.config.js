/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
    },
    colors: {
      dark: "#333",
      themeBlue: "#1883E6",
      white: "#fff",
      black: "#000"
    },
    screens: {
      ss: "340px",
      sm: "550px",
      md: "768px",
      lg: "1050px",
      xl: "1280px",
      xl2: "1500px",
    },
  },
  plugins: [],
};