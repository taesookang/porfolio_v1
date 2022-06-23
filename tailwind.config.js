/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "#E2CFC1",
          darken: "#896A67",
          secondary: "#2b7faf",
          black: "#262626",
        },
      },
    },
  },
  plugins: [],
};
