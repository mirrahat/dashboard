 // tailwind.config.js
 module.exports = {
  purge: [],
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
   darkMode: false, // or 'media' or 'class'
   theme: {
     extend: {},
     colors: {
      primary:"#ffffff",
      secondary: '#20fc03',
      border1: '#969996',
      border2: '#404240',
       iconcolor:"#00C614",
       sidemenubgcolor:"#F2F2F3",
       rrr:"#ffffff",
       fgreen:"#32a852",
       headerbgc:"#FDF4ED",
       bggraycolor:"#F2F2F3",
       borderclr:"#E5E5E6"
     },
   },
   variants: {
     extend: {},
   },
   plugins: [],
 }