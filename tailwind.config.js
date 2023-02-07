/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');

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
      sans: ['Proxima Nova', 'system-ui', 'sans-serif'],
    },
    opacity: {
      0: '0',
      20: '0.2',
      40: '0.4',
      60: '0.6',
      80: '0.8',
      100: '1',
    },
    transitionDuration: {
      0: '0ms',
      50: '50ms',
      100: '100ms',
      200: '200ms',
      250: '250ms',
      300: '300ms',
      400: '400ms',
      500: '500ms',
      600: '600ms',
      700: '700ms',
      800: '800ms',
      900: '900ms',
      1000: '1000ms',
    },
    boxShadow: {
      1: 'inset 0 -1px 0 rgba(0, 0, 0, 0.06)',
      2: '0 2px 4px rgba(0, 0, 0, 0.18)',
      3: '0 0 0 1px transparent, 0 0 0 4px transparent, 0 2px 4px rgba(0, 0, 0, 0.18)',
    },
    extend: {},
  },
  plugins: [
    plugin(function ({ addVariant }) {
      addVariant('not-first', '&:not(:first-child)');
      addVariant('not-last', '&:not(:last-child)');
    }),
  ],
};

