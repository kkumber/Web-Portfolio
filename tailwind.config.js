/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        backgroundLinearDarkGray: '#1C1C1C',
        backgroundLinearLightGray: '#262626',
        layerBlur: '#4D4D4D',
        borderColor: '#292929',
        ContainerLinearDark: '#181818',
        ContainerLinearGray: '#7E7E7E',
        TextLinearOrange: '#F29831',
        TextLinearPurple: '#97257E'
      },
      fontFamily: {
        monaSans: 'Mona Sans, serif',
      },
      keyframes: {
        fadeLeft: {
          '0%': { opacity: '0', transform: 'translateX(50px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        fadeRight: {
          '0%': { opacity: '0', transform: 'translateX(-50px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(50px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeDown: {
          '0%': { opacity: '0', transform: 'translateY(-50px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeStay: {
          '0%': {opacity: 0, transform: 'translateY(0)'},
          '100%': {opacity: 1, transform: 'translateY(0)'},

        }
      },
      animation: {
        fadeLeft: 'fadeLeft 0.5s ease-in-out',
        fadeRight: 'fadeRight 0.5s ease-in-out',
        fadeUp: 'fadeUp 0.5s ease-in-out',
        fadeDown: 'fadeDown 0.5s ease-in-out',
        fadeStay: 'fadeStay 0.7s ease-in-out',
      },
    },
  },
  plugins: [],
}

