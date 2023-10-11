const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./layouts/**/*.html", "./content/**/*.html"],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Valkyrie B"', ...defaultTheme.fontFamily.serif],
        sans: ["Concourse", ...defaultTheme.fontFamily.sans],
      },
      listStyleType: {
        circle: "circle",
      },
    },
  },
  plugins: [],
};
