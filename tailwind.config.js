/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      boxShadow: {
        '3xl' : 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
      },
      screens:{
        'phone': '400px'
      }
    },
  },
  plugins: [],
}

