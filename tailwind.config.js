/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },

      colors: {
        customWhite: "#EFFFFB",
        customBlue: "#4F98CA",
        customBlack: "#272727",
      },

      boxShadow: {
        custom: "0 0 10px 0 rgb(0 0 0 / 0.1)",
      },
    },
  },
  plugins: [],
};
