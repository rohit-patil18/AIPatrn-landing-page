/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "poppins": ["Poppins", "sans-serific"],
      },
      width: {
        "400": "400px",
      },
      flex: {
        "2": "2.25 1 0%",
      }
    },
  },
  plugins: [],
}