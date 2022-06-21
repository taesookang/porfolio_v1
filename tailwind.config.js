/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "#E2CFC1",
          black: "#262626",
        },
      },
    },
  },
  plugins: [],
};
