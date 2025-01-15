
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      spacing: {
        '45vw': '45vw',
      },
      transformOrigin: {
        'left-center': 'left center',
        'bottom-center': 'bottom center',
      },
    },
  },
  plugins: [],
};
