/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: { 50:'#f0f9ff', 100:'#e0f2fe', 500:'#0284c7', 600:'#0369a1', 900:'#0c1a2e' },
        accent: { 400:'#fb923c', 500:'#f97316' }
      },
      fontFamily: {
        sans: ['var(--font-sans)'],
        display: ['var(--font-display)'],
      }
    }
  },
  plugins: []
}
