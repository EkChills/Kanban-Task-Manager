/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        darkPurple:'#635FC7',
        lightPurple:'#A8A4FF',
        deepBlack:'#000112',
        darkBlack:'#20212C',
        lightBlack: "#3E3F4E",
        grey: '#828FA3',
        lightGrey: '#E4EBFA',
        lighterGrey: '#F4F7FD',
        pureWhite: '#FFFFFF',
        deepRed: '#EA5555',
        lightRed: '#FF9898'
      }
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: false,
  },
}
