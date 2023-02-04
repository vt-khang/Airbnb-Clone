/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      sm: '550px',
      md: '744px',
      lg: '950px',
      xl: '1128px',
    },
    colors: {
      transparent: 'transparent',
      primary: {
        red: '#ff5a5f',
        purple: '#914669',
        green: '#008489',
      },
      secondary: {
        dark: '#484848',
        grey: '#767676',
        white: '#ffffff',
      },
      red: {
        100: '#ff385c',
        200: '#e00b41',
        300: '#92174d',
      },
      neutral: {
        100: '#ffffff',
        200: '#f7f7f7',
        300: '#ebebeb',
        400: '#dddddd',
        500: '#b0b0b0',
        600: '#717171',
        700: '#222222',
        800: '#000000',
      },
    },
    fontFamily: {
      sans: ['Roboto', 'sans-serif'],
    },
    opacity: {
      0: '0',
      20: '0.2',
      40: '0.4',
      60: '0.6',
      80: '0.8',
      100: '1',
    },
    boxShadow: {
      1: 'inset 0 -1px 0 rgb(0 0 0 / 6%)',
    },
    extend: {},
  },
  plugins: [],
};

