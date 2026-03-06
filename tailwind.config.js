/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/pages/**/*.{js,ts,jsx,tsx}", "./src/components/**/*.{js,ts,jsx,tsx}", "./src/lib/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        page: "#fafafa",
      },
      fontFamily: {
        sans: ["var(--font-bitter)", "serif"],
      },
      boxShadow: {
        card: "rgba(0, 0, 0, 0.9) 0 1px 4px, rgba(0, 0, 0, 0.05) 0 0 60px inset",
      },
    },
  },
  plugins: [],
};
