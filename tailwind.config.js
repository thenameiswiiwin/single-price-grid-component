/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    container: {
      center: true,
      padding: '1.5rem',
    },
    extend: {
      colors: {
        primary: {
          cyan: 'hsl(var(--clr-primary-cyan) / <alpha-value>)',
          green: 'hsl(var(--clr-primary-green) / <alpha-value>)',
        },
        neutral: {
          grayLight: 'hsl(var(--clr-neutral-gray-light) / <alpha-value>)',
          grayBlue: 'hsl(var(--clr-neutral-gray-blue) / <alpha-value>)',
        },
      },
      karla: ['Karla', 'sans-serif'],
    },
  },
  plugins: [],
};
