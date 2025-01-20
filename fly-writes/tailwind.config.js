// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mono: ['"Overpass Mono"', 'monospace'],
      },
        colors: {
          grey: '#808080',
          bright: '#D9E2FF',
        },
        screens: {
          'lg': '1370px',
        },
    },
  },
  plugins: [],
}

