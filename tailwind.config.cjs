/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        source: ["Source Code Pro", "monospace"],
      },
      container: {
        screens: {
          "2xl": "1440px",
        },
      },
      colors: {
        primary: "#DDF247",
        icon: "#A3A3A3",
      },
      borderColor: {
        main: "#E4E4E4",
        icon: "#A3A3A3",
      },
      backgroundColor: {
        main: "#F4F4F4",
        "primary-button": "#010101",
        "primary-card": "#DDF247",
      },
      lineHeight: {
        title: "41px",
      },
      letterSpacing: {
        hero: "0.11rem",
      },
      dropShadow: {
        footer: "-5px 25px 25px rgba(222, 242, 71, 0.4)",
      },
      height: {
        hero: "479px",
        person: "398px",
        code: "186px",
        "lg-yellow": "473px",
        "lg-code": "350px",
        "lg-person": "500px",
        slider: "650px",
        "lg-slider": "518px",
        card: "343px",
        slide: "400px",
        initial: "initial",
      },
      width: {
        person: "274px",
        hero: "50vw",
        "lg-yellow": "678px",
        "lg-code": "520px",
        "lg-person": "300px",
        card: "300px",
      },
      minWidth: {
        card: "300px",
      },
      inset: {
        73: "73px",
      },
      margin: {
        "70px": "70px",
      },
      rotate: {
        "120deg": "120deg",
      },
    },
  },
  plugins: [],
};
