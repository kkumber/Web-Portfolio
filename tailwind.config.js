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
      }
    },
  },
  plugins: [],
}

