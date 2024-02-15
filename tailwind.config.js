/** @type {import('tailwindcss').Config} */
module.exports = {
  corePlugins: {
    preflight: false
  },
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
  importat: '#root',
  theme: {
    fontFamily: {
      h1: ['Cormorant Garamond'],
      area: ['Quicksand'],
      mono: ['monospace']
    },
    extend: {
      colors: {
        'background-color': 'var(--background-color)'
      },
      inset: {
        pad: 'var(--pad)',
        pad_canvas: 'var(--pad_canvas)',
        pad_form: 'var(--pad_form)',
        pad_form_md: 'var(--pad_form_md)'
      }
    }
  },
  plugins: []
}
