/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx,css}"
  ],
  theme: {
    extend: {
      colors: {
        "neon-green": "#39FF14",
        "grey": "#CDCCCC"
      },
      fontFamily: {
        epilogue: ['Epilogue', 'sans-serif'],
        mono: ['Space Mono', 'monospace'],
        grotesk: ['Space Grotesk', 'sans-serif'],
        capriola: ['Capriola', 'sans-serif'],
        metrophobic: ['Metrophobic', 'sans-serif'],
      },
      // keyframes: {
      //   imageOverlay: {
      //     '0%, 100%': { height: '0%' },
      //     '50%': { height: '100%' }
      //   },
      // },
      // animation: {
      //   'image-anim': 'imageOverlay 8s linear 5s'
      // }
    },
  },
  plugins: [],
}
