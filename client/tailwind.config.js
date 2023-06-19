/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    minHeight: {
      "6.875": "6.875rem",
    },
    borderRadius: {
      'm': '3px',
    },
    colors: {
      'blue-text': "var(--blue-text)",
      'blue': "var(--blue)",
      'black-nav-active': "var(--black-nav-active)",
      'green': "var(--green)",
    },
    extend: {},
  },
  plugins: [],
}

