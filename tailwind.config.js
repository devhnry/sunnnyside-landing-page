/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');

export default {
  content: ["./*.html"],

  theme: {
    screens: {},

    colors: {
      "light-100": "hsl(7, 99%, 70%)",
      "light-200": "hsl(51, 100%, 49%)",

      "dark-400": "hsl(167, 40%, 24%)",
      "dark-300": "hsl(198, 62%, 26%)",
      "dark-100": "hsl(168, 34%, 41%)",

      "neutral-700": "hsl(212, 27%, 19%)",
      "neutral-600": "hsl(213, 9%, 39%)",
      "neutral-400": "hsl(232, 10%, 55%)",
      "neutral-300": "hsl(210, 4%, 67%)",
      "white" : "hsl(0, 0%, 100%)"
    },

    fontFamily: {
      sans: ["Barlow", "sans-serif"],
      serif: ["Fraunces", "serif"],
    },

    extend: {},
  },
  plugins: [
    plugin(function ({ addBase }) {
      addBase({
        html: { fontSize: "18px" },
      });
    }),
  ],
}; 

