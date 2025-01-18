
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      spacing: {
        '45vw': '45vw',
        18: '4.5rem', // Adds 'mt-18', 'pt-18', etc.
      },
      transformOrigin: {
        'left-center': 'left center',
        'bottom-center': 'bottom center',
      },
    },
  },
  plugins: [],
};
