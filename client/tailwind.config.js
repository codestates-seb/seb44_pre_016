/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      minHeight: {
        6.875: '6.875rem',
      },
      borderRadius: {
        m: '3px',
      },
      colors: {
        'blue-text': "var(--blue-text)",
        'blue': "var(--blue)",
        'black-nav-active': "var(--black-nav-active)",
        'green': "var(--green)",
        'orange-point': "var(--orange-point)",
        'gray-text': "var(--gray-text)",
        'gray-nav-active': "var(--gray-nav-active)"
      },
      boxShadow: {
        'logout-Shadow': "0 10px 24px hsla(0,0%,0%,0.05), 0 20px 48px hsla(0, 0%, 0%, 0.05), 0 1px 4px hsla(0, 0%, 0%, 0.1)"
      },
      backgroundImage: {
        'icons': "url('./common/images/faviconLink.png')"
      }
    },
  },
  plugins: [],
};
