const plugin = require('tailwindcss/plugin')
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      'xs': '475px',
      ...defaultTheme.screens,
    },
    extend: {
      fontSize: {
        xxs: [
          ".625rem",
          {
            lineHeight: "12px",
          },
        ],
      },
      fontFamily: {
        sans: ['Nunito', 'sans-serif'],
      },
      colors: {
        primary: "#2191FB",
        secondary: "#E1F5FE",
        textPrimary: "#333333",
        textSecondary: "#9C9C9C",
      },
      boxShadow: {
        'md': '0 0 15px rgba(0, 0, 0, 0.1)',
        'sm': '0 0 4px rgba(0, 0, 0, 0.1)',
      }
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
    plugin(function ({
      addBase,
      theme
    }) {
      addBase({
        'h1': {
          fontSize: theme('fontSize.2xl'),
          fontWeight: 900
        },
        'h2': {
          fontSize: theme('fontSize.xl'),
          fontWeight: 700
        },
        'h3': {
          fontSize: theme('fontSize.md'),
          fontWeight: 700
        },
        'h4': {
          fontSize: theme('fontSize.base'),
          fontWeight: 600
        },
        'h5': {
          fontSize: theme('fontSize.sm'),
          fontWeight: 600
        },
        'h6': {
          fontSize: theme('fontSize.xs'),
          fontWeight: 500
        },

      })
    })
  ]
};