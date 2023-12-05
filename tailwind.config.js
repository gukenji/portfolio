/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
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