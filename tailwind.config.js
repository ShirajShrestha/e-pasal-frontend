/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      primary: "#43c3d1",
      secondary: "#2884ff",
      tertiary: "061123",
      accent: "#39EEfg",
    },
    extend: {
      fontFamily: {
        primary: ["Questrial", "sans"],
      },
    },
  },
  plugins: [],
};
