/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      spacing: {
        custom: "-4rem",
      },
      colors: {
        "green-underline": "#2a8282",
        "grey-bg": "#f7f4f2",
        "life-stages-bg": "#f7f4f2",
      },
    },
  },
  plugins: [],
};
