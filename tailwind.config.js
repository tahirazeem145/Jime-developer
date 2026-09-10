/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#080B10',
        'primary-blue': '#1E3A8A',
        'accent-blue': '#3B82F6',
        'accent-blue-hover': '#2563EB',
        'accent-cyan': '#38BDF8',
        'main-text': '#FFFFFF',
        'muted-text': '#94A3B8',
        'surface-dark': '#06080D',
        'surface-card': '#0B101D',
        'border-subtle': '#1E293B',
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
