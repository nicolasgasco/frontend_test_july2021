const { colors: defaultColors } = require("tailwindcss/defaultTheme");

const colors = {
  ...defaultColors,
  ...{
    primary: {
      darkest: "#333",
      DEFAULT: "#333",
      text: "#9B9B9C",
      light: "#E9E9E9",
      lightest: "#F1F1F1",
    },
    secondary: {
      DEFAULT: "#5596DF",
      light: "#96C7FF",
    },
    product: {
      pink: "#F5E5DA",
      gray: "#E1E1D7",
    },
  },
};

module.exports = {
  purge: {
    content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
    options: {
      safelist: [
        "product",
        "product-gray",
        "product-pink",
        "bg-product-gray",
        "bg-product-pink",
      ],
    },
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: colors,
    extend: {
      screens: {
        lim: "1240px",
      },
    },
  },
  variants: {
    extend: {
      ringWidth: ["hover", "active"],
      ringColor: ["hover", "active"],
    },
  },
  plugins: [],
};
