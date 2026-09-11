/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#FFFFFF',
        'primary-blue': '#1E3A8A',
        'accent-blue': '#2563EB',
        'accent-blue-hover': '#1D4ED8',
        'accent-cyan': '#0284C7',
        'main-text': '#0F172A',
        'muted-text': '#64748B',
        'surface-dark': '#020617',
        'surface-card': '#FFFFFF',
        'surface-subtle': '#F8FAFC',
        'border-subtle': '#E2E8F0',
      },
      fontFamily: {
        sora: ['Sora', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'blue-glow': '0 0 25px -5px rgba(59, 130, 246, 0.45)',
        'blue-glow-lg': '0 0 45px -5px rgba(59, 130, 246, 0.55)',
        'sapphire-glow': '0 0 60px 10px rgba(30, 58, 138, 0.5)',
        'subtle-card': '0 4px 20px -2px rgba(0, 0, 0, 0.6)',
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
