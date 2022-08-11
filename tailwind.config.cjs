/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'main': '#F4F4F4'
      },
      lineHeight: {
        'title': '41px'
      },
      letterSpacing: {
        'hero': '0.11rem'
      },
      height: {
        'hero': '479px',
        'person': '398px',
        'code': '186px',
        'lg-yellow': '473px',
        'lg-code': '350px',
        'lg-person': '500px'
      },
      width: {
        'person': '274px',
        'hero': '50vw',
        'lg-yellow': '678px',
        'lg-code': '520px',
        'lg-person': '300px'
      },
      inset: {
        '73': '73px'
      }
    },
  },
  plugins: [],
}
