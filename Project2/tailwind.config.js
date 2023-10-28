/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'brand-mix': 'conic-gradient(from 180deg at 50% 50%, #B52BBA 4.666563235223293deg, #A12CBC 23.647727966308594deg, #8C2EBE 44.85525995492935deg, #792FBF 72.45651304721832deg, #6C30C0 82.50000178813934deg, #4B32C3 127.99007892608643deg, #5831C2 160.968976020813deg, #6330C1 178.45529437065125deg, #742FC0 189.47770357131958deg, #8D2DBE 202.95226335525513deg, #A62CBC 230.65982580184937deg, #B92ABA 251.35178089141846deg, #D029B8 276.4414644241333deg, #EC27B6 306.45145654678345deg, #C729B9 331.67617321014404deg)',
        'brand-mix-2': 'linear-gradient(180deg, #2B243C 0%, #0B031E 100%)',
      },
      colors: {
        'brand-off-white': '#EEEEF0',
        'brand-pink-1': '#FFD0F2',
        'brand-pink-7': '#EC27B6',
        'brand-green': '#2BCD94',
        'brand-light-purple': '#7B71E2',
        'brand-purple-6': '#0B031E'

      },
    },
  },
  plugins: [],
}