/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom': 'linear-gradient(90deg, #FFC947 8.35%, #FC6739 91.76%)',
        'custom2': 'linear-gradient(90deg, #2B59FF 0%, #BB2BFF 100%)',
        'Ellipse1': "url('/assets/Ellipse1.png')",  // Check if this path is correct
        'Ellipse2': "url('/assets/Ellipse2.png')",   // Check if this path is correct
        'Ellipse3': "url('/assets/Ellipse3.png')",   // Check if this path is correct
      },
    },
  },
  plugins: [],
}
