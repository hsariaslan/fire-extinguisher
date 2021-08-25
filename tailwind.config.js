module.exports = {
  content: [
    'node_modules/tv-*/dist/tv-*.umd.min.js',
  ],
  mode: 'jit',
  purge: [
    './components/**/*.{vue,js}',
    './pages/**/*.vue',
    './nuxt.config.{js,ts}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        trueGray: {
          900: '#1A1A1A',
          850: '#222222',
          800: '#333333',
          700: '#4D4D4D',
          600: '#666666',
          500: '#808080',
          400: '#999999',
          300: '#B3B3B3',
          200: '#CCCCCC',
          100: '#E6E6E6',
        },
        trueRed: {
          1000: '#FF0000'
        },
        trueOrange: {
          1000: '#FF4400'
        },
        reddyOrange: {
          700: '#db4712',
          400: '#ff652e'
        }
      },
      fontFamily: {
        inter: 'Inter'
      },
      spacing: {
        44: "11rem",
        72: "18rem",
        73: "18.25rem",
        74: "18.5rem",
        78: "19.5rem",
        79: "19.75rem",
        100: "25rem",
        128: "32rem",
        180: "45rem",
        320: "80rem"
      }
    },
  },
  variants: {
    textColor: ['group-hover','hover'],
    backgroundColor: ['group-hover','hover'],
    extend: {},
  },
  plugins: [],
}
