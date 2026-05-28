/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        zinc: {
          950: '#f8fafc', // Slate-50 (Light background)
          900: '#f1f5f9', // Slate-100
          800: '#e2e8f0', // Slate-200
          700: '#cbd5e1',
          400: '#64748b', // Slate-500 (Text secondary)
          300: '#475569', // Slate-600 (Text primary)
        },
        brand: {
          primary: '#0f172a', // Deep Slate text
          secondary: '#64748b',
          accent: '#4f46e5', // Indigo-600
          indigo: '#4f46e5',
          sky: '#0ea5e9',
          glow: 'rgba(79, 70, 229, 0.05)',
        }
      },
      fontFamily: {
        sans: ['Outfit', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'aurora': 'aurora 20s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'fadeUp': 'fadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'pulse-slow': 'pulse-slow 8s ease-in-out infinite',
        'blob': 'blob 10s infinite',
        'block-drop': 'block-drop 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) backwards',
        'fadeIn': 'fadeIn 0.5s ease-out forwards',
        'slideInLeft': 'slideInLeft 0.8s cubic-bezier(0.16, 1, 0.3, 1) backwards',
        'slideInRight': 'slideInRight 0.8s cubic-bezier(0.16, 1, 0.3, 1) backwards',
        'slideInTop': 'slideInTop 0.8s cubic-bezier(0.16, 1, 0.3, 1) backwards',
        'slideInBottom': 'slideInBottom 0.8s cubic-bezier(0.16, 1, 0.3, 1) backwards',
      },
      keyframes: {
        'slideInLeft': {
          '0%': { transform: 'translateX(-100px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        'slideInRight': {
          '0%': { transform: 'translateX(100px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        'slideInTop': {
          '0%': { transform: 'translateY(-100px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        'slideInBottom': {
          '0%': { transform: 'translateY(100px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        'fadeIn': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'block-drop': {
          '0%': { transform: 'translateY(-100px) scale(0.9)', opacity: '0' },
          '100%': { transform: 'translateY(0) scale(1)', opacity: '1' },
        },
        aurora: {
          'from': { backgroundPosition: '50% 50%, 50% 50%' },
          'to': { backgroundPosition: '350% 50%, 350% 50%' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'pulse-slow': {
          '0%, 100%': { opacity: '0.3', transform: 'scale(1)' },
          '50%': { opacity: '0.6', transform: 'scale(1.1)' },
        },
        blob: {
          '0%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
          '100%': { transform: 'translate(0px, 0px) scale(1)' },
        },
      }
    },
  },
  plugins: [
    function({ addUtilities }) {
      const newUtilities = {
        '.animation-delay-2000': {
          'animation-delay': '2s',
        },
        '.animation-delay-4000': {
          'animation-delay': '4s',
        },
      }
      addUtilities(newUtilities)
    }
  ],
}
