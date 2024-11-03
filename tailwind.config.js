/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '320px',
      'msm2':'375px',
      'msm1':'425px',
      'sm1':'547px',
      'sm2':'610px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1400px',
      '2xl': '2400px',
    },
    extend: { 
      animation: {
        'slow-ping': 'ping 2s cubic-bezier(0, 0, 0.2, 1) infinite',
      },
      fontFamily: {
      Roboto: ['Poppins', 'sans-serif'],
    },
    backgroundImage: {
      'dot-grid': 'radial-gradient(circle, gray 1px, transparent 1px)',
    },
    backgroundSize: {
      'dot-grid': '30px 30px',
    },
     backgroundColor:{
      'bgmain-color':'#131312',
      'bgsecondary-color':'#2D756C',
   
      'buttonbg-color':'#182F2C',
      'buttoncta-color':'#151618',
      'textpaddedfirst-color':'#308D85',
      'textpaddedsecond-color':'#2B6C67',
      'textpaddedline-color':'#151618',
    'buttonmaincta':'#00ffff5e'
     },
     borderColor:{
      'buttonborder-color':'#65A8A0',
      'componentborder':'#222929',
     },
    colors:{
      'bgmain-color':'#131312',
      'textmain-color':'#EAE7DC',
      'bgsecondary-color':'#2D756C',

    },
  textColor:{
    'textmain-color':'#EAE7DC',
    'textsecondary-color':'#acacb691',
  }},
  },
  plugins: [],
}