/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      content: {
        arrowDownIcon: 'url("/src/images/arrow.svg")',
      },
      colors: {
        'menu-hover': '#F0F2F5',
        'coral': '#F57575',
        'primary': '#7BBA4B',
        'menu-separator': '#BABABA'
      }
    },
  },
  variants: {},
  plugins: [],
};
