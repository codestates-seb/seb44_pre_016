/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'login-text-color' : "#668AAB",
        'login-btn-color' : "#E3ECF3",
        'login-hover-color' : '#B9D2E8',
        'signup-btn-color' : "#0A95FF",
        'signup-hover-color' : '#3272C6',
      }
    },
  },
  plugins: [],
}

