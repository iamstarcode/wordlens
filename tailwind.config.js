module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        primary: "#0B0A1B"
      }
    },
  },
  plugins: [],
}

//npx tailwindcss -i ./src/input.css -o ./dist/output.css --watch
