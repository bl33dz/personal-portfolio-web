/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "index.html",
    "./src/*.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      blur: {
        'xs': '2px',
      }
    },
  },
  plugins: [],
}

