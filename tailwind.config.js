/** @type {import('tailwindcss').Config} */
export default {
  content: ["index.html" , "./src/**/*.jsx"],
  theme: {
    extend: {
      fontFamily : {
        custom : ['driusstraight', 'sans'],
        google : ['Teko', 'sans-serif']
      },
      screens : { miniPh : "375px", maxPh : "425px" }
    },
  },
  plugins: [],
}

