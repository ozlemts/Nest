const { fontFamily } = require('tailwindcss/defaultTheme')

module.exports = {
  mode: 'jit',
  purge: ['./pages/*.{js,ts,jsx,tsx}', './pages/programs/*.{js,ts,jsx,tsx}','./components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat', ...fontFamily.sans]
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        black: '#000',
        white: '#fff',
        blue: {
          DEFAULT: '#222147',
          '50': '#FFFFFF',
          '100': '#E5E5F3',
          '200': '#A7A6D6',
          '300': '#6967B8',
          '400': '#403E86',
          '500': '#222147',
          '600': '#1A1936',
          '700': '#111124',
          '800': '#090913',
          '900': '#010101'
        },
        red: {
          DEFAULT: '#F53838',
          '50': '#FEE7E7',
          '100': '#FDD3D3',
          '200': '#FBADAD',
          '300': '#F98686',
          '400': '#F75F5F',
          '500': '#F53838',
          '600': '#E90C0C',
          '700': '#B40909',
          '800': '#7E0606',
          '900': '#490404'
        }
      },
    }
  },
  variants: {
  },
  plugins: [],
}
