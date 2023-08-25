/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        image: "url('/assets/bg.jpg')",
      },
    },
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
    },
    colors: {
      dark: "#2d4256",
      darkSecondary: "#040c18",
      darkBlue: "#204ecf",
      aqua: "#009ab6",
      white: "#fff",
      black: "#000",
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
