/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#fff4e2",
        hover: "#F96140",
        gryPrimary: "#AE0001",
        grySecondary: "#740001",
        gryLight: "#EEBA30",
        gryDark: "#D3A625",
        slyPrimary: "#2A623D",
        slySecondary: "#1A472A",
        slyLight: "#AAAAAA",
        slyDark: "#5D5D5D",
        ravPrimary: "#222F5B",
        ravSecondary: "#0E1A40",
        ravLight: "#BEBEBE",
        ravDark: "#946B2D",
        hufPrimary: "#F0E75E",
        hufSecondary: "#EEB939",
        hufLight: "#726255",
        hufDark: "#372E29",
        darkmode: "#363F45",
        dark: "282E32",
        light: "#F5F5F5",
      },

      fontFamily: {
        sans: ['"Poppins"', "sans-serif"],
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
