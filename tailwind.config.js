/** @type {import('tailwindcss').Config} */

const flowbite = require("flowbite-react/tailwind");
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
    flowbite.content(),
  ],
  theme: {
    extend: {
      colors:{
        'neutralBlue': '#1E12ED',
        'skyblue': '#55BDCA',
        'tourquise':'#49c5b6',
        'orange': '#DF6C4F',
        'DarkBlue': '#2779a7',

      }
    },
  },
  plugins: [require('flowbite/plugin')],
}

