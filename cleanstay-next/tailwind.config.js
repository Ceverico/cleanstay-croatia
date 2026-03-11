/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        sea: {
          50: '#e8f6fb',
          100: '#c5e8f5',
          400: '#2faed6',
          500: '#0E6E91',
          600: '#0a5a78',
        },
        sun: {
          400: '#FFD080',
          500: '#F5A623',
          600: '#d48a0f',
        },
      },
    },
  },
  plugins: [],
}
