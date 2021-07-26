module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      height: {
        custom: "0.1rem",
        lessNavbar: "calc(100% - 4rem)"
      },
      textColor: {
        snow: "#fffafa",
      },
      gridTemplateColumns: {
        responsive: "repeat(auto-fit, minmax(min(100%, 300px), 1fr));",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
  mode: "jit",
};
