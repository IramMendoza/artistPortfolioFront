/** @type {import('tailwindcss').Config} */
export default {
  content: ["index.html" , "./src/**/*.jsx"],
  theme: {
    extend: {
      fontFamily : {
        custom : ['driusstraight', 'sans']
      },
      screens : { miniPh : "375px", maxPh : "425px" }
    },
  },
  plugins: [],
}

