module.exports = {
  mode : 'jit',
  darkMode :'class',
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        primary: "#0B0A1B",
        "i-border":"#E9ECF0",
        'i-border-2':"#122239",
        muted: '#8C98AD',
        secondary: '#91A2CB'
      }
    },
  },
  plugins: [],
}

//npx tailwindcss -i ./src/input.css -o ./dist/output.css --watch
