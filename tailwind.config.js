/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    // "./src/renderer/index.html",
    // "./src/renderer/index.html",
    "./src/**/*.{html,js,ts,jsx,tsx}",
    // "./src/renderer/src/pages/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        "dark-purple": "#081A51",
        "light-white": "rgba(255, 255, 255, 0.17)"
      },
    },
  },
  plugins: [],
}

