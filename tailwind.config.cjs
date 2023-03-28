/** @type {import('tailwindcss').Config} **/
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        'display': ['Fira Mono'],
        'body': ['Raleway'],
      }
    },
},
  plugins: [],
  darkMode: 'class',
}
