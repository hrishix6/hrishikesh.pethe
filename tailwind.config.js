/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts}'],
  theme: {
    extend: {
      colors: {
        customBackground: '#0a0a0a',
      },
    },
  },
  plugins: [],
};
