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
        'primary': '#3B6FF',
        'secondary1': '#3B6FF', // If Secondary #1 is intended to be the same as Primary
        'secondary2': '#F9A332',
        'secondary3': '#F6F6F6',
        'text': '#2B251F',
        navyblue: '#004064',
        orange: '#F9A332',
       
      }
    }
  },
  plugins: [],
}

