/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      Montserrat: "Montserrat, sans-serif",
      Playfair: "Playfair Display, serif",
    },
    gridTemplateColumns: {
      main: "300px auto",
      art: "1fr 1fr",
      artsm: "1fr",
    },
    gridTemplateRows: {
      small: "100px auto",
    },
    screens: {
      sm: "768px",
      md: "1280px",
      xl: "1920px",
      xxl: "2560px",
    },
    extend: {},
  },
  plugins: [],
};
