/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
      fontFamily: {
          primary: "Orbitron",
          secondary: "JetBrains Mono",
      },
      extend: {
          colors: {
              primary: "#B809C3",
              secondary: "#ff014f",
              third: "#FEF6C7",
              fourth: "#011eff",
          },
      },
  },
  plugins: [],
}
