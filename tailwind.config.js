/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'reveal-bg': '#191919',
        'reveal-text': '#fff'
      }
    },
  },
  plugins: [],
};
