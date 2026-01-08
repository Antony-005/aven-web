/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1f2a33",
        accent: "#d4af37",
        cardDark: "#2f3e49",
        cardLight: "#455a64",
      },
    },
  },
  plugins: [],
};
