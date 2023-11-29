/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}', // <-- Add this line
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      visibility: ['group-hover'],
    },
  },
  plugins: [],
  darkMode: 'class',
}
// "--btn-text-case": "capitalize",
