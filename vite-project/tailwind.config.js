/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./src/**/*.{js,jsx,ts,tsx}", 
    "./public/index.html"  ],
  theme: {
    extend: {
      colors:{
        'primary':"#ffffff",
        'secondary':"#82B9F0"
      },
      gridTemplateColumns:{
        'auto':'repeat(auto-fill,minmax(200px,1fr))'
      }
    },
  },
  plugins: [],
}

