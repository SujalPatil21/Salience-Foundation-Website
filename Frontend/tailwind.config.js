/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      colors: {
        brand: {
          yellow: '#F3EA00',
          olive: '#B6B137',
          dark: '#575757',
          black: '#111111',
        }
      }
    },
  },
  plugins: [],
}

