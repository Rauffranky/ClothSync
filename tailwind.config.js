/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // Global default font (Switzer)
        switzer: ["Switzer", "system-ui", "sans-serif"],

        // Special font (Cabinet Grotesk)
        cabinet: ["CabinetGrotesk", "sans-serif"],
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
};