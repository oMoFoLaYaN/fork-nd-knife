/** @type {import('tailwindcss').Config} **/
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        'display': ['Fira Mono, monospace'],
        'body': ['Raleway, sanserif'],
      },
      colors: {
        'fola': {
            0: 'hsl(var(--hue-color), 100%, 96%)',
           50: 'hsl(var(--hue-color), 100%, 92%)',
          100: 'hsl(var(--hue-color), 100%, 87%)',
          150: 'hsl(var(--hue-color), 98%, 82%)',
          200: 'hsl(var(--hue-color), 95%, 78%)',
          300: 'hsl(var(--hue-color), 93%, 70%)',
          400: 'hsl(var(--hue-color), 91%, 64%)',
          500: 'hsl(var(--hue-color), 88%, 57%)',
          600: 'hsl(var(--hue-color), 81%, 52%)',
          700: 'hsl(var(--hue-color), 85%, 45%)',
          800: 'hsl(var(--hue-color), 92%, 35%)',
          900: 'hsl(var(--hue-color), 98%, 25%)',
          950: 'hsl(var(--hue-color), 100%, 6%)',
          990: 'hsl(var(--hue-color), 100%, 3%)',
        },
      },
    },
},
  plugins: [],
  darkMode: 'class',
}
