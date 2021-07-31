module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      height: {
        custom: "0.1rem",
        lessNavbar: "calc(100vh - 4rem)",
      },
      outline: {
        checked: "2px solid rgba(55, 65, 81, 1)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
  mode: "jit",
};
