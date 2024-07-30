/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      content: {
        arrowDownIcon: 'url("/src/images/arrow.svg")',
      },
    },
  },
  variants: {},
  plugins: [],
};
