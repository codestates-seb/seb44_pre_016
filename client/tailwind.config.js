/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'login-text-color' : "#668AAB",
        'login-btn-color' : "#E3ECF3",
        'signup-btn-color' : "#0A95FF",
      }
    },
  },
  plugins: [],
}

