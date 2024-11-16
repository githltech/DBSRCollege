/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    "hover:before:h-[400%]",
    "before:h-0",
    "before:transition-all",
  ],
  theme: {
    extend: {
      wordSpacing: {
        'wider': '0.25em',
        'widest': '0.5em',
      }
    },
  },
  plugins: [ require('flowbite/plugin'),
  require('tailwind-scrollbar-hide'),
],
  
}

