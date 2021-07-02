const { colors: defaultColors } = require("tailwindcss/defaultTheme");

const colors = {
  ...defaultColors,
  ...{
    primary: {
      DEFAULT: "#333",
      light: "#E9E9E9",
    },
    secondary: {
      DEFAULT: "#5596DF",
      alt: "96C7FF",
    },
    product: {
      pink: "#F5E5DA",
      gray: "E1E1D7",
    },
  },
};

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: colors,
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
