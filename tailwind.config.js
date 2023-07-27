/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "primary-0": "#E6A452",
        "primary-1": "#FFD8A9",
        "primary-2": "#FFC57E",
        "primary-3": "#D1872C",
        "primary-4": "#A46314",
        "secondary-1-0": "#474E9F",
        "secondary-1-1": "#979BD5",
        "secondary-1-2": "#676DB7",
        "secondary-1-3": "#2E3690",
        "secondary-1-4": "#1C2272",
        "secondary-2-0": "#3AA16D",
        "secondary-2-1": "#8ED6B1",
        "secondary-2-2": "#5BB989",
        "secondary-2-3": "#1F9258",
        "secondary-2-4": "#0E7340",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
