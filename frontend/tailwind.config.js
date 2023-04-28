/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#fff4e2",
        secondary: "#FFD075",
        darkmode: "#363F45",
        dark: "#282E32",
        light: "#F5F5F5",
      },

      fontFamily: {
        sans: ['"Poppins"', "sans-serif"],
        serif: ['"AnimalesFantastic"', "serif"],
      },

      fontSize: {
        "2xl": [
          "2rem",
          {
            lineHeight: "1.5",
            letterSpacing: ".05em",
            fontWeight: "700",
          },
        ],
        xl: [
          "1.414rem",
          {
            lineHeight: "1.5",
            letterSpacing: ".05em",
            fontWeight: "600",
          },
        ],
        lg: [
          "1.25rem",
          {
            lineHeight: "1.5",
            fontWeight: "600",
          },
        ],
        base: [
          "1rem",
          {
            lineHeight: "1.5",
            fontWeight: "500",
          },
        ],
        sm: [
          "0.875rem",
          {
            lineHeight: "1.5",
            fontWeight: "500",
          },
        ],
        xs: [
          "0.75rem",
          {
            lineHeight: "1.5",
            fontWeight: "400",
          },
        ],
      },
    },
    plugins: [],
  },
};
