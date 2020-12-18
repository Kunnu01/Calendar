module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        'light-green': '#00d96f',
        'greyish-blue': '#2b2b38',
      },
      outline: [],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
