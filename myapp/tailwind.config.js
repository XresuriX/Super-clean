/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#4b4237',
        'secondary': '#d5a021',
        'light-gray': '#ede7d9',
        'dark-gray': '#a49694',
        'dim-gray': '#736b60'
      },
      backgroundImage: {
        'header-image': "linear-gradient(rgba(0,0,0,.8), rgba(0,0,0, .8)), url('../public/header.png')",
      },
    },
  },
  plugins: [],
}
