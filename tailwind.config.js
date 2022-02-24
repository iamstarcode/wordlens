module.exports = {
  mode: 'jit',
  darkMode: 'class',
  content: ['./dist/**/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        primary: '#0B0A1B',
        'i-border': '#E9ECF0',
        'i-border-2': '#122239',
        muted: '#8C98AD',
        secondary: '#91A2CB',
        darkgray: '#0D1726',
        skeleton: '#DBE2F4',
        'skeleton-1': '#F6F7FA',
        skeletonbg : '#FBFCFF'
      },
    },
  },
  plugins: [],
}

//npx tailwindcss -i ./src/input.css -o ./dist/output.css --watch
