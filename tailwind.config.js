/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'custom-image': "url('/src/assets/spices-7925125_640.jpg')", // Replace with the path to your image
      },
    },
  },
  plugins: [],
}
