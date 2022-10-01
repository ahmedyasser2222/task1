/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [ "./src/**/*.{js,jsx,ts,tsx}",    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        prim: "#977aba",
        sec: "#cbb186",
      },
    },
  },
  daisyui: {
    themes: [
      {
        spf: {
          primary: "#3b5b3e",

          secondary: "#F9D72F",

          accent: "#18182F",

          neutral: "#18182F",

          "base-100": "#FFFFFF",

          info: "#3ABFF8",

          success: "#36D399",

          warning: "#FBBD23",

          error: "#F87272",
        },
      },
    ],
  },
  plugins: [ require("flowbite/plugin") ],
};
