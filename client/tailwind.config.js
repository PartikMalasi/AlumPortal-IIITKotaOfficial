/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'max-w-1464': {'max': '1464px'},
        'max-w-980' : {'max' : '980px'},
        'max-w-492' : {'max' : '492px'},
      }
    },
  },
  plugins: [],
}