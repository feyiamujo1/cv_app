/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow:{
        // 'custom': '0px 0px 5px 5px #e4e4e4',
        'nav-shadow':'0px 3px 5px 0px rgba(0, 0, 0, 0.49)'
      },
      colors: {
        'custom-dark-blue': '#3e4095',
        'custom-brown': '#333333',
        'custom-blue': '#3d3a8b'
      },
      backgroundImage:{
        'hero-image':'linear-gradient(rgba(0,0,0, 0.7),rgba(0,0,0, 0.7)), url("../src/assets/images/markus-winkler-XKKuY4ottJ0-unsplash.jpg")',
        'intro-image' : 'url("../src/assets/images/intro-pexels-rodnae-productions-5915208.jpg")'
      }
    },
    fontFamily: {
      'poppins': ['Poppins', 'sans-serif'],
    }
  },
  plugins: [],
}
