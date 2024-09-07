/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-bg': "url('/src/assets/images/hero-area/banner-img.png')", 
      },
      fontFamily: {
        ubuntu: ["Ubuntu", "sans-serif"],
        museomoderno: ["MuseoModerno", "sans-serif"],
      },
    },
  },

  plugins: [],
}