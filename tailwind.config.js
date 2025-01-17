/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
   './src/**/*.{html,js,jsx,ts,tsx}', // Adjust based on your project structure
    './public/index.html',
    './public/login.html',
  ],
  theme: {
    extend: {
      colors:{
        primary: '#ff6363',
        secondary:{
          100:'#E2E2D5',
          200:'#888883',
        }
      },
      fontSize:{
        mimi:'8rem',
      },
      fontFamily:{
        body:['Nunito'],
        body2:['Ga Maamli'],
      }
    },
  },
  plugins: [],
}

