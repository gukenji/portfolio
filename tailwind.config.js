/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    fontFamily: {
      h1: ['Cormorant Garamond'],
      area: ['Quicksand']
    },
    extend: {
      colors: {
        'background-color': 'var(--background-color)'
      },
      inset: {
        pad: 'var(--pad)',
        pad_canvas: 'var(--pad_canvas)'
      }
    }
  },
  plugins: []
}
