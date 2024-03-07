/** @type {import('tailwindcss').Config} */
export default {
  content: [
    //Added:
    "./index.html",
    "./src/**/*.{html,js,ts,tsx}"
  ],
  theme: {
    fontFamily: {
      alata: ["Alata", "sans-serif"],
    },
    extend: {
      colors: {
        navyblue: '#004064',
       
      }
    },
  },
  plugins: [],
}

