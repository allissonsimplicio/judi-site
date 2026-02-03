/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#6d8a99',
          light: '#b0c4de',
          dark: '#5a7280',
          50: '#f4f7f9',
          100: '#e8eff3',
          200: '#d1dfe7',
          300: '#b0c4de',
          400: '#8aa5b5',
          500: '#6d8a99',
          600: '#5a7280',
          700: '#4a5d69',
          800: '#3d4d57',
          900: '#354249',
        },
        secondary: {
          DEFAULT: '#dc004e',
          light: '#ff4081',
          dark: '#9a0036',
        },
        background: {
          DEFAULT: '#e7e2df',
          paper: '#ffffff',
          dark: '#121212',
          'dark-paper': '#1e1e1e',
        },
      },
      fontFamily: {
        sans: ['Montserrat', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'fade-in-up': 'fadeInUp 0.6s ease-out',
        'slide-in-right': 'slideInRight 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(-20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [],
};
