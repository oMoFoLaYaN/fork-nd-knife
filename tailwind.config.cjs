/** @type {import('tailwindcss').Config} **/
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    screens: {
      'xs': '340px',
      
      'sm': '640px',

      'md': '768px',

      'lg': '1024px',

      'xl': '1280px',

      '2xl': '1536px',
    },
    extend: {
      fontFamily: {
        'display': ['Fira Mono, monospace'],
        'body': ['Raleway, sanserif'],
      },
      colors: {
        'fola': {
            0: 'hsl(var(--hue), 100%, 96%)',
           50: 'hsl(var(--hue), 100%, 92%)',
          100: 'hsl(var(--hue), 100%, 87%)',
          150: 'hsl(var(--hue), 98%, 82%)',
          200: 'hsl(var(--hue), 95%, 78%)',
          300: 'hsl(var(--hue), 93%, 70%)',
          400: 'hsl(var(--hue), 91%, 64%)',
          500: 'hsl(var(--hue), 88%, 57%)',
          600: 'hsl(var(--hue), 81%, 52%)',
          700: 'hsl(var(--hue), 85%, 45%)',
          800: 'hsl(var(--hue), 92%, 35%)',
          900: 'hsl(var(--hue), 98%, 25%)',
          950: 'hsl(var(--hue), 100%, 6%)',
          990: 'hsl(var(--hue), 100%, 3%)',
        },
      },
    },
},
  plugins: [],
  darkMode: 'class',
}
