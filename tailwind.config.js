/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        
        offwhite_50:"#474D57",
        offwhite_100:"#707A8A",
        yallow_70:"#FEF6D8",
        yallow_150:"#C99400",
        yallow_300:"#fcd53b",
        yallow_400:"#F0B90B",
        yallow_500:"#FCD535" ,

        dark_300:"#181A20"
        
      },
      backgroundImage: {
        'gradient-text': 'linear-gradient(180deg, #F0B90B 33.33%, #FBDA3C 100%)',
      },
    },
   
  },
  plugins: [],
}

