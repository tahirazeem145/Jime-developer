/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#080C0A',
        'primary-green': '#162E1F',
        'accent-lime': '#66FF88',
        'accent-lime-hover': '#4ADE80',
        'main-text': '#FFFFFF',
        'muted-text': '#9EA8A3',
        'surface-dark': '#0A0E0C',
        'surface-card': '#0D110F',
        'border-subtle': '#1A221E',
      },
      fontFamily: {
        sora: ['Sora', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'lime-glow': '0 0 25px -5px rgba(167, 243, 160, 0.35)',
        'lime-glow-lg': '0 0 40px -5px rgba(167, 243, 160, 0.45)',
        'emerald-glow': '0 0 60px 10px rgba(26, 46, 31, 0.6)',
        'subtle-card': '0 4px 20px -2px rgba(0, 0, 0, 0.5)',
      },
      animation: {
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float-slow': 'float 8s ease-in-out infinite',
        'float-delayed': 'float 9s ease-in-out 3s infinite',
        'fadeIn': 'fadeIn 0.5s ease-out forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-12px) rotate(2deg)' },
        },
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(6px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
