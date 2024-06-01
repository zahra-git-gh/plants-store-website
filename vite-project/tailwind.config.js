/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "./src/assets/hero-bg.jpg",
      }
    },
    
      borderRadius: {
        'none': '0',
        'sm': '0.125rem',
        DEFAULT: '0.25rem',
        'md': '0.375rem',
        'lg': '0.5rem',
        '3xl': '3.5rem',
        'full': '9999px',
        'large': '12px',
      },
      screens: {
        'x-sm': '320px',
        'sm': '500px',
        'md': '700px',
        'lg': '760px'
      },
  },
  plugins: [],
}

