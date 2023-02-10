/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [    "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors: {
        nav:'#CCCCCC',
        back:'#2F2B2B',
      },

      fontFamily:
      {roboto: ['Roboto','sans-serif'],
      'verdana': ['Verdana', 'sans-serif'],
      body:['"Dancing Script"','cursive'],},
     

    },
  },
  plugins: [],
}
