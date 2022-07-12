module.exports = {
  mode: "jit",
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      sm: "640px",
      md: "868px",
      lg: "1200px",
      xl: "1480px",
      "2xl": "1636px",
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
  plugins: [require("@tailwindcss/typography")],
};
