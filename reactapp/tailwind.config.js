/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        karla: ["Karla", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        raleway: ["Raleway", "sans-serif"],
      },
      colors: {
        richblack: {
          5: "#F1F2FF",
          25: "#DBDDEA",
          50: "#C5C7D4",
          100: "#AFB2BF",
          200: "#999DAA",
          300: "#838894",
          400: "#6E727F",
          500: "#585D69",
          600: "#424854",
          700: "#2C333F",
          800: "#161D29",
          900: "#000814",
        },
      },
    },
  },
  plugins: [],
};
