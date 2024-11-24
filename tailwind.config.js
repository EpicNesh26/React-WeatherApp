/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter"], // Use an object with an array for font-family
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(45deg, #2f4680, #500ae4)', // Custom gradient
      },
    },
  },
  plugins: [],
};
