/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens:{
      sm: '300px',
      md: '786px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      colors:{
        lightgray: '#ccc',
        lightergray: 'rgb(240, 236, 236)',
        lightblue: '#00baf2',
        darkblue: '#0f4a8a',
        btndrkblue: '#002970',
        cardslgBlue: '#66d6ff'
      },
      fontFamily:{
        fontInter: 'Inter'
      }
    },
  },
  plugins: [],
}
